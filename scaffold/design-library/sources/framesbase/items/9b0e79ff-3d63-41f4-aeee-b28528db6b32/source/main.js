import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';

// ---------------------------------------------------------------- constants
const FIELD = 56;            // world size covered by the fluid sim
const SIM = 128;             // fluid grid resolution
const GRASS_COUNT = 15000;
const FLOWER_COUNT = 950;
const PARTICLES_W = 32, PARTICLES_H = 16;   // 512 GPU particles
const FIREFLY_COUNT = 110;

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.setClearColor(0x000000, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 3.2, 13.2);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 3.4, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enablePan = false;
controls.minDistance = 6;
controls.maxDistance = 22;
controls.minPolarAngle = 1.05;
controls.maxPolarAngle = 1.62;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.35;

// uniforms shared by every vegetation shader
const shared = {
  uTime:   { value: 0 },
  uWind:   { value: null },
  uCamPos: { value: new THREE.Vector3() },
};

const WIND_GLSL = /* glsl */`
  uniform sampler2D uWind;
  uniform float uTime;
  vec2 fluidAt(vec2 xz){
    vec2 fuv = xz / ${FIELD}.0 + 0.5;
    return texture2D(uWind, fuv).xy;
  }
  vec2 windAt(vec2 xz){
    float t = uTime;
    vec2 amb = vec2(
      sin(t*0.66 + xz.y*0.13) + 0.55*sin(t*1.31 + xz.x*0.21) + 0.35*sin(t*2.07 + xz.y*0.37),
      cos(t*0.58 + xz.x*0.16) + 0.55*sin(t*1.13 + xz.y*0.19) + 0.35*cos(t*1.87 + xz.x*0.31)
    );
    float gust = 0.55 + 0.45*sin(t*0.23 + (xz.x + xz.y)*0.045);
    return fluidAt(xz)*0.65 + amb*0.16*gust;
  }
`;

const FOG_GLSL = /* glsl */`
  uniform vec3 uCamPos;
  float fogFactor(vec3 wp){
    float d = distance(wp, uCamPos);
    return exp(-max(0.0, d - 7.0) * 0.05);
  }
`;

// ---------------------------------------------------------------- GPU fluid sim
// classic velocity advection + pressure projection, ping-ponged on half-float RTs
const fluid = (() => {
  const opts = {
    type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: false,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping,
  };
  const rt = () => new THREE.WebGLRenderTarget(SIM, SIM, opts);
  let velA = rt(), velB = rt();
  let prsA = rt(), prsB = rt();
  const div = rt();
  const texel = 1 / SIM;

  const VS = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
  const mat = (fs, uniforms) => new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: fs, uniforms, depthTest: false, depthWrite: false });

  const advectMat = mat(`
    varying vec2 vUv;
    uniform sampler2D uVel; uniform float uDt;
    void main(){
      vec2 v = texture2D(uVel, vUv).xy;
      vec2 prev = vUv - v * uDt * (1.0/${FIELD}.0);
      vec2 nv = texture2D(uVel, prev).xy * 0.986;
      gl_FragColor = vec4(nv, 0.0, 1.0);
    }`, { uVel: { value: null }, uDt: { value: 0.016 } });

  const splatMat = mat(`
    varying vec2 vUv;
    uniform sampler2D uVel; uniform vec2 uPoint; uniform vec2 uForce;
    uniform float uRadius; uniform float uRadial;
    void main(){
      vec2 v = texture2D(uVel, vUv).xy;
      vec2 d = vUv - uPoint;
      float g = exp(-dot(d,d)/uRadius);
      vec2 dir = normalize(d + vec2(1e-4));
      v += g * (uForce + uRadial * dir);
      gl_FragColor = vec4(v, 0.0, 1.0);
    }`, { uVel: { value: null }, uPoint: { value: new THREE.Vector2() }, uForce: { value: new THREE.Vector2() }, uRadius: { value: 0.0016 }, uRadial: { value: 0 } });

  const divMat = mat(`
    varying vec2 vUv;
    uniform sampler2D uVel;
    void main(){
      float l = texture2D(uVel, vUv - vec2(${texel},0.)).x;
      float r = texture2D(uVel, vUv + vec2(${texel},0.)).x;
      float b = texture2D(uVel, vUv - vec2(0.,${texel})).y;
      float t = texture2D(uVel, vUv + vec2(0.,${texel})).y;
      gl_FragColor = vec4(0.5*(r - l + t - b), 0., 0., 1.);
    }`, { uVel: { value: null } });

  const prsMat = mat(`
    varying vec2 vUv;
    uniform sampler2D uPrs; uniform sampler2D uDiv;
    void main(){
      float l = texture2D(uPrs, vUv - vec2(${texel},0.)).x;
      float r = texture2D(uPrs, vUv + vec2(${texel},0.)).x;
      float b = texture2D(uPrs, vUv - vec2(0.,${texel})).x;
      float t = texture2D(uPrs, vUv + vec2(0.,${texel})).x;
      float d = texture2D(uDiv, vUv).x;
      gl_FragColor = vec4((l + r + b + t - d) * 0.25, 0., 0., 1.);
    }`, { uPrs: { value: null }, uDiv: { value: null } });

  const gradMat = mat(`
    varying vec2 vUv;
    uniform sampler2D uPrs; uniform sampler2D uVel;
    void main(){
      float l = texture2D(uPrs, vUv - vec2(${texel},0.)).x;
      float r = texture2D(uPrs, vUv + vec2(${texel},0.)).x;
      float b = texture2D(uPrs, vUv - vec2(0.,${texel})).x;
      float t = texture2D(uPrs, vUv + vec2(0.,${texel})).x;
      vec2 v = texture2D(uVel, vUv).xy;
      v -= 0.5 * vec2(r - l, t - b);
      gl_FragColor = vec4(v, 0., 1.);
    }`, { uPrs: { value: null }, uVel: { value: null } });

  const quad = new FullScreenQuad(advectMat);
  const run = (m, target) => { quad.material = m; renderer.setRenderTarget(target); quad.render(renderer); };

  const pending = [];  // splats queued this frame {x, z, fx, fz, radius, radial}

  return {
    get texture() { return velA.texture; },
    splat(x, z, fx, fz, radius = 0.0016, radial = 0) { pending.push({ x, z, fx, fz, radius, radial }); },
    step(dt) {
      advectMat.uniforms.uDt.value = dt;
      advectMat.uniforms.uVel.value = velA.texture;
      run(advectMat, velB); [velA, velB] = [velB, velA];

      for (const s of pending) {
        splatMat.uniforms.uVel.value = velA.texture;
        splatMat.uniforms.uPoint.value.set(s.x / FIELD + 0.5, s.z / FIELD + 0.5);
        splatMat.uniforms.uForce.value.set(s.fx, s.fz);
        splatMat.uniforms.uRadius.value = s.radius;
        splatMat.uniforms.uRadial.value = s.radial;
        run(splatMat, velB); [velA, velB] = [velB, velA];
      }
      pending.length = 0;

      divMat.uniforms.uVel.value = velA.texture;
      run(divMat, div);
      for (let i = 0; i < 8; i++) {
        prsMat.uniforms.uPrs.value = prsA.texture;
        prsMat.uniforms.uDiv.value = div.texture;
        run(prsMat, prsB); [prsA, prsB] = [prsB, prsA];
      }
      gradMat.uniforms.uPrs.value = prsA.texture;
      gradMat.uniforms.uVel.value = velA.texture;
      run(gradMat, velB); [velA, velB] = [velB, velA];

      renderer.setRenderTarget(null);
      shared.uWind.value = velA.texture;
    },
  };
})();

// ---------------------------------------------------------------- ground
{
  const g = new THREE.CircleGeometry(80, 48);
  g.rotateX(-Math.PI / 2);
  const m = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `varying vec3 vW; void main(){ vW = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
      varying vec3 vW;
      void main(){
        float r = length(vW.xz);
        vec3 col = mix(vec3(0.012,0.02,0.012), vec3(0.0), smoothstep(4.0, 40.0, r));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  scene.add(new THREE.Mesh(g, m));
}

// ---------------------------------------------------------------- grass (15k instanced blades)
{
  const SEG = 4;
  const pos = [], tArr = [], idx = [];
  for (let j = 0; j < SEG; j++) {
    const t = j / SEG;
    const w = 0.055 * Math.pow(1 - t, 0.85) + 0.006;
    pos.push(-w, t, 0, w, t, 0);
    tArr.push(t, t);
  }
  pos.push(0, 1, 0); tArr.push(1);
  for (let j = 0; j < SEG - 1; j++) {
    const a = j * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  idx.push((SEG - 1) * 2, (SEG - 1) * 2 + 1, SEG * 2);

  const geo = new THREE.InstancedBufferGeometry();
  geo.setIndex(idx);
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aT', new THREE.Float32BufferAttribute(tArr, 1));

  const iA = new Float32Array(GRASS_COUNT * 4);  // x, z, rot, height
  const iB = new Float32Array(GRASS_COUNT * 4);  // lean, shade, phase, -
  for (let i = 0; i < GRASS_COUNT; i++) {
    const r = Math.sqrt(Math.random()) * 26;
    const a = Math.random() * Math.PI * 2;
    iA[i * 4 + 0] = Math.cos(a) * r;
    iA[i * 4 + 1] = Math.sin(a) * r;
    iA[i * 4 + 2] = Math.random() * Math.PI * 2;
    iA[i * 4 + 3] = 0.7 + Math.random() * 1.4;
    iB[i * 4 + 0] = Math.random() * 0.5;
    iB[i * 4 + 1] = 0.55 + Math.random() * 0.6;
    iB[i * 4 + 2] = Math.random() * Math.PI * 2;
  }
  geo.setAttribute('iA', new THREE.InstancedBufferAttribute(iA, 4));
  geo.setAttribute('iB', new THREE.InstancedBufferAttribute(iB, 4));
  geo.instanceCount = GRASS_COUNT;

  const mat = new THREE.ShaderMaterial({
    uniforms: shared,
    side: THREE.DoubleSide,
    vertexShader: `
      attribute float aT;
      attribute vec4 iA;
      attribute vec4 iB;
      varying float vT; varying float vShade; varying vec3 vWorld;
      ${WIND_GLSL}
      void main(){
        vT = aT; vShade = iB.y;
        float c = cos(iA.z), s = sin(iA.z);
        vec3 rp = vec3(position.x * c, position.y * iA.w, -position.x * s);
        float t2 = aT * aT;
        vec2 dir = vec2(c, -s);
        vec2 wnd = windAt(iA.xy);
        vec2 disp = dir * (iB.x * t2 * iA.w) + wnd * (t2 * iA.w * 0.2);
        disp += dir * (sin(uTime*2.3 + iB.z + aT*3.0) * 0.015 * aT);
        vec3 world = vec3(iA.x + rp.x + disp.x, rp.y, iA.y + rp.z + disp.y);
        vWorld = world;
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,
    fragmentShader: `
      varying float vT; varying float vShade; varying vec3 vWorld;
      ${FOG_GLSL}
      void main(){
        vec3 col = mix(vec3(0.003, 0.011, 0.006), vec3(0.02, 0.06, 0.032), pow(vT, 1.5));
        col *= vShade;
        col *= fogFactor(vWorld);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);
}

// ---------------------------------------------------------------- procedural flowers
const flowerInstanceAttrs = (() => {
  const iA = new Float32Array(FLOWER_COUNT * 4); // x, z, height, scale
  const iB = new Float32Array(FLOWER_COUNT * 4); // leanX, leanZ, yaw, tilt
  const iC = new Float32Array(FLOWER_COUNT * 4); // r, g, b, phase

  const pick = (arr) => {
    let sum = 0; for (const [, w] of arr) sum += w;
    let x = Math.random() * sum;
    for (const [c, w] of arr) { x -= w; if (x <= 0) return c; }
    return arr[0][0];
  };
  const warm = [
    ['#ff7a26', 3], ['#ff9738', 2], ['#ff4f63', 3], ['#ff2f8e', 3],
    ['#ff5ba8', 2], ['#d84dff', 1.5], ['#a86bff', 1],
  ];
  const cool = [
    ['#5b8dff', 2], ['#46b0ff', 2], ['#7fc9ff', 1.2], ['#9b7bff', 1], ['#52ccff', 1],
  ];

  const col = new THREE.Color();
  for (let i = 0; i < FLOWER_COUNT; i++) {
    const r = 2 + Math.sqrt(Math.random()) * 23;
    const a = Math.random() * Math.PI * 2;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    iA[i * 4 + 0] = x;
    iA[i * 4 + 1] = z;
    iA[i * 4 + 2] = 2.3 + Math.random() * 2.9;
    iA[i * 4 + 3] = 0.34 + Math.random() * 0.3;
    const la = Math.random() * Math.PI * 2, lm = Math.random() * 0.3;
    iB[i * 4 + 0] = Math.cos(la) * lm;
    iB[i * 4 + 1] = Math.sin(la) * lm;
    iB[i * 4 + 2] = Math.random() * Math.PI * 2;
    iB[i * 4 + 3] = 0.45 + Math.random() * 0.75;
    const patch = Math.sin(x * 0.19) + Math.cos(z * 0.16) + Math.sin((x + z) * 0.07);
    col.set(pick(patch > 1.55 ? cool : warm)).convertSRGBToLinear();
    iC[i * 4 + 0] = col.r; iC[i * 4 + 1] = col.g; iC[i * 4 + 2] = col.b;
    iC[i * 4 + 3] = Math.random() * Math.PI * 2;
  }
  return {
    iA: new THREE.InstancedBufferAttribute(iA, 4),
    iB: new THREE.InstancedBufferAttribute(iB, 4),
    iC: new THREE.InstancedBufferAttribute(iC, 4),
  };
})();

// shared vertex chunk: stem tip position + wind sway for one flower instance
const STEM_TIP_GLSL = /* glsl */`
  vec3 stemBase(vec4 A){ return vec3(A.x, 0.0, A.y); }
  vec3 stemTip(vec4 A, vec4 B, out vec2 wnd){
    vec3 P0 = stemBase(A);
    float h = A.z;
    vec3 tipS = P0 + vec3(B.x * h, h, B.y * h);
    wnd = windAt(tipS.xz);
    vec3 sway = vec3(wnd.x, -dot(wnd, wnd) * 0.06, wnd.y) * 0.32;
    return tipS + sway;
  }
`;

// ---- flower head geometry (8 petals + center dome), built by hand
function buildFlowerHead() {
  const pos = [], uv = [], part = [], idx = [];
  const PET = 8, ROWS = 7, COLS = 4;
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

  for (let p = 0; p < PET; p++) {
    const yaw = (p / PET) * Math.PI * 2 + 0.15;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const tilt = 0.30;
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const vbase = pos.length / 3;
    for (let j = 0; j <= ROWS; j++) {
      const t = j / ROWS;
      for (let i = 0; i <= COLS; i++) {
        const s = i / COLS - 0.5;
        // length along petal, with a notched tip (center column slightly shorter)
        let L = 0.13 + t * 0.92;
        L -= smooth(0.8, 1.0, t) * 0.07 * (0.5 + 0.5 * Math.cos(s * Math.PI * 3));
        const w = 0.25 * (0.15 + smooth(0, 0.7, t)) * (1 - smooth(0.85, 1.0, t) * 0.55);
        let x = L;
        let y = 0.13 * (4 * s * s) * t + 0.10 * Math.sin(t * Math.PI) * 0.35 - 0.06 * t * t;
        let zz = s * 2 * w;
        // tilt tip upward (rotate about Z)
        const x2 = x * ct - y * st, y2 = x * st + y * ct;
        // yaw about Y
        const x3 = x2 * cy + zz * sy, z3 = -x2 * sy + zz * cy;
        pos.push(x3, y2, z3);
        uv.push(i / COLS, t);
        part.push(0);
      }
    }
    for (let j = 0; j < ROWS; j++) for (let i = 0; i < COLS; i++) {
      const a = vbase + j * (COLS + 1) + i;
      const b = a + COLS + 1;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  // center dome
  const RINGS = 4, SEGS = 12, R = 0.16;
  const cbase = pos.length / 3;
  for (let j = 0; j <= RINGS; j++) {
    const phi = (j / RINGS) * Math.PI * 0.5;
    const rr = Math.sin(phi) * R, y = Math.cos(phi) * R * 0.55 + 0.02;
    for (let i = 0; i <= SEGS; i++) {
      const a = (i / SEGS) * Math.PI * 2;
      pos.push(Math.cos(a) * rr, y, Math.sin(a) * rr);
      uv.push(j / RINGS, 0);
      part.push(1);
    }
  }
  for (let j = 0; j < RINGS; j++) for (let i = 0; i < SEGS; i++) {
    const a = cbase + j * (SEGS + 1) + i;
    const b = a + SEGS + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }

  const g = new THREE.InstancedBufferGeometry();
  g.setIndex(idx);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('aPart', new THREE.Float32BufferAttribute(part, 1));
  return g;
}

{
  const geo = buildFlowerHead();
  geo.setAttribute('iA', flowerInstanceAttrs.iA);
  geo.setAttribute('iB', flowerInstanceAttrs.iB);
  geo.setAttribute('iC', flowerInstanceAttrs.iC);
  geo.instanceCount = FLOWER_COUNT;

  const mat = new THREE.ShaderMaterial({
    uniforms: shared,
    side: THREE.DoubleSide,
    vertexShader: `
      attribute float aPart;
      attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
      varying vec2 vUvP; varying float vPart; varying vec3 vColor; varying float vPhase; varying vec3 vWorld;
      ${WIND_GLSL}
      ${STEM_TIP_GLSL}
      void main(){
        vUvP = uv; vPart = aPart; vColor = iC.rgb; vPhase = iC.w;
        vec2 wnd;
        vec3 tip = stemTip(iA, iB, wnd);
        tip.y += sin(uTime * 1.7 + iC.w) * 0.05;

        vec3 v = position;
        // petal flutter
        v.y += sin(uTime * 2.4 + iC.w * 3.0 + position.x * 4.0) * 0.035 * uv.y * (1.0 - aPart);
        v *= iA.w;
        // head tilt (about X) then yaw (about Y)
        float ct = cos(iB.w), st = sin(iB.w);
        v = vec3(v.x, v.y * ct - v.z * st, v.y * st + v.z * ct);
        float cy = cos(iB.z), sy = sin(iB.z);
        v = vec3(v.x * cy + v.z * sy, v.y, -v.x * sy + v.z * cy);

        vec3 world = tip + v;
        vWorld = world;
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,
    fragmentShader: `
      varying vec2 vUvP; varying float vPart; varying vec3 vColor; varying float vPhase; varying vec3 vWorld;
      uniform float uTime;
      ${FOG_GLSL}
      void main(){
        float pulse = 0.82 + 0.28 * sin(uTime * 0.9 + vPhase * 9.0);
        vec3 col;
        if (vPart > 0.5) {
          col = mix(vec3(1.0, 0.75, 0.25), vec3(0.9, 0.42, 0.08), vUvP.x) * 1.65;
        } else {
          float t = vUvP.y;
          vec3 base = mix(vec3(1.0, 0.70, 0.24) * 1.1, vColor * 1.45, smoothstep(0.05, 0.42, t));
          float stripes = 0.94 + 0.06 * sin(vUvP.x * 25.13);
          float tipGlow = 1.0 + 0.25 * smoothstep(0.6, 1.0, t);
          float facing = gl_FrontFacing ? 1.0 : 0.6;
          col = base * stripes * tipGlow * facing;
        }
        col *= pulse;
        col *= fogFactor(vWorld);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);
}

// ---- stems (instanced, bend along a bezier to the swaying tip)
{
  const RAD = 5, HSEG = 7;
  const pos = [], tArr = [], idx = [];
  for (let j = 0; j <= HSEG; j++) {
    const t = j / HSEG;
    const r = 0.022 * (1 - t) + 0.009;
    for (let i = 0; i <= RAD; i++) {
      const a = (i / RAD) * Math.PI * 2;
      pos.push(Math.cos(a) * r, t, Math.sin(a) * r);
      tArr.push(t);
    }
  }
  for (let j = 0; j < HSEG; j++) for (let i = 0; i < RAD; i++) {
    const a = j * (RAD + 1) + i;
    const b = a + RAD + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const geo = new THREE.InstancedBufferGeometry();
  geo.setIndex(idx);
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aT', new THREE.Float32BufferAttribute(tArr, 1));
  geo.setAttribute('iA', flowerInstanceAttrs.iA);
  geo.setAttribute('iB', flowerInstanceAttrs.iB);
  geo.setAttribute('iC', flowerInstanceAttrs.iC);
  geo.instanceCount = FLOWER_COUNT;

  const mat = new THREE.ShaderMaterial({
    uniforms: shared,
    vertexShader: `
      attribute float aT;
      attribute vec4 iA; attribute vec4 iB; attribute vec4 iC;
      varying float vT; varying vec3 vColor; varying vec3 vWorld;
      ${WIND_GLSL}
      ${STEM_TIP_GLSL}
      void main(){
        vT = aT; vColor = iC.rgb;
        vec2 wnd;
        vec3 P0 = stemBase(iA);
        vec3 P2 = stemTip(iA, iB, wnd);
        P2.y += sin(uTime * 1.7 + iC.w) * 0.05;
        float h = iA.z;
        vec3 P1 = P0 + vec3(iB.x * h * 0.3, h * 0.55, iB.y * h * 0.3);
        float t = aT;
        vec3 B = mix(mix(P0, P1, t), mix(P1, P2, t), t);
        vec3 world = B + vec3(position.x, 0.0, position.z);
        vWorld = world;
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,
    fragmentShader: `
      varying float vT; varying vec3 vColor; varying vec3 vWorld;
      ${FOG_GLSL}
      void main(){
        vec3 col = vec3(0.07, 0.05, 0.025) * (0.35 + 0.75 * vT);
        col = mix(col, vColor * 0.4, pow(vT, 2.0) * 0.6);
        col *= fogFactor(vWorld);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);
}

// ---------------------------------------------------------------- fireflies
{
  const g = new THREE.BufferGeometry();
  const base = new Float32Array(FIREFLY_COUNT * 3);
  const data = new Float32Array(FIREFLY_COUNT * 4);  // speed, phase, size, warm
  for (let i = 0; i < FIREFLY_COUNT; i++) {
    const r = 2 + Math.sqrt(Math.random()) * 24;
    const a = Math.random() * Math.PI * 2;
    base[i * 3 + 0] = Math.cos(a) * r;
    base[i * 3 + 1] = 0.4 + Math.random() * 3.2;
    base[i * 3 + 2] = Math.sin(a) * r;
    data[i * 4 + 0] = 0.2 + Math.random() * 0.5;
    data[i * 4 + 1] = Math.random() * Math.PI * 2;
    data[i * 4 + 2] = 0.5 + Math.random() * 1.1;
    data[i * 4 + 3] = Math.random() < 0.22 ? 1 : 0;
  }
  g.setAttribute('position', new THREE.BufferAttribute(base, 3));
  g.setAttribute('aData', new THREE.BufferAttribute(data, 4));

  const mat = new THREE.ShaderMaterial({
    uniforms: { ...shared, uDpr: { value: Math.min(window.devicePixelRatio, 2) } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec4 aData;
      varying float vPulse; varying float vWarm;
      uniform float uTime; uniform float uDpr;
      void main(){
        float sp = aData.x, ph = aData.y;
        vec3 p = position + vec3(
          sin(uTime * sp + ph) * 1.4 + sin(uTime * sp * 2.3 + ph * 2.0) * 0.4,
          sin(uTime * sp * 0.7 + ph * 3.0) * 0.7,
          cos(uTime * sp * 0.9 + ph) * 1.4 + cos(uTime * sp * 2.1 + ph * 3.0) * 0.4
        );
        vPulse = pow(0.5 + 0.5 * sin(uTime * (0.6 + sp) + ph * 5.0), 3.0);
        vWarm = aData.w;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        gl_PointSize = min(aData.z * uDpr * 130.0 / -mv.z, 42.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vPulse; varying float vWarm;
      void main(){
        vec2 q = gl_PointCoord - 0.5;
        float d = length(q) * 2.0;
        float core = smoothstep(0.45, 0.0, d);
        float halo = exp(-d * 3.5) * 0.6;
        vec3 col = mix(vec3(0.55, 0.75, 1.0), vec3(1.0, 0.85, 0.55), vWarm);
        float a = (core * 1.6 + halo) * (0.15 + 0.85 * vPulse);
        gl_FragColor = vec4(col * a * 2.2, a);
      }`,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 40;
  scene.add(pts);
}

// ---------------------------------------------------------------- 512 GPU-computed particles
const gpu = new GPUComputationRenderer(PARTICLES_W, PARTICLES_H, renderer);
const HASH_GLSL = /* glsl */`
  vec3 hash3(vec2 p){
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)), dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }
`;
let posVar, velVar;
{
  const pos0 = gpu.createTexture();
  const vel0 = gpu.createTexture();
  const pa = pos0.image.data, va = vel0.image.data;
  for (let i = 0; i < PARTICLES_W * PARTICLES_H; i++) {
    const r = Math.sqrt(Math.random()) * 24;
    const a = Math.random() * Math.PI * 2;
    pa[i * 4 + 0] = Math.cos(a) * r;
    pa[i * 4 + 1] = 0.3 + Math.random() * 5;
    pa[i * 4 + 2] = Math.sin(a) * r;
    pa[i * 4 + 3] = Math.random() * 12;      // life
    va[i * 4 + 0] = 0; va[i * 4 + 1] = 0; va[i * 4 + 2] = 0; va[i * 4 + 3] = 1;
  }
  velVar = gpu.addVariable('textureVelocity', `
    uniform float uTime; uniform float uDelta; uniform sampler2D uWind;
    void main(){
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec4 pos = texture2D(texturePosition, uv);
      vec3 vel = texture2D(textureVelocity, uv).xyz;
      vec2 w = texture2D(uWind, pos.xz / ${FIELD}.0 + 0.5).xy;
      vec3 acc = vec3(w.x, 0.0, w.y) * 1.1;
      acc += vec3(
        sin(pos.z * 0.35 + uTime * 0.7),
        0.35 * sin(pos.x * 0.3 + uTime * 0.5) + 0.3,
        cos(pos.x * 0.32 + uTime * 0.6)
      ) * 0.4;
      vel *= exp(-uDelta * 1.4);
      vel += acc * uDelta;
      if (pos.w > 11.0) vel = vec3(0.0);
      gl_FragColor = vec4(vel, 1.0);
    }`, vel0);
  posVar = gpu.addVariable('texturePosition', `
    uniform float uTime; uniform float uDelta;
    ${HASH_GLSL}
    void main(){
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec4 pos = texture2D(texturePosition, uv);
      vec3 vel = texture2D(textureVelocity, uv).xyz;
      float life = pos.w - uDelta;
      vec3 p = pos.xyz + vel * uDelta;
      if (life <= 0.0 || p.y > 14.0) {
        vec3 h = hash3(uv * 91.7 + fract(uTime) * 13.1);
        float rr = sqrt(h.x) * 23.0;
        float aa = h.y * 6.28318;
        p = vec3(cos(aa) * rr, 0.3 + h.z * 2.5, sin(aa) * rr);
        life = 4.0 + h.x * 8.0;
      }
      gl_FragColor = vec4(p, life);
    }`, pos0);
  gpu.setVariableDependencies(posVar, [posVar, velVar]);
  gpu.setVariableDependencies(velVar, [posVar, velVar]);
  for (const v of [posVar, velVar]) {
    v.material.uniforms.uTime = shared.uTime;
    v.material.uniforms.uDelta = { value: 0.016 };
    v.material.uniforms.uWind = shared.uWind;
    v.wrapS = v.wrapT = THREE.ClampToEdgeWrapping;
  }
  const err = gpu.init();
  if (err) console.error('GPUComputationRenderer:', err);
}

let particlePoints;
{
  const N = PARTICLES_W * PARTICLES_H;
  const g = new THREE.BufferGeometry();
  const refs = new Float32Array(N * 2);
  const seeds = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    refs[i * 2 + 0] = ((i % PARTICLES_W) + 0.5) / PARTICLES_W;
    refs[i * 2 + 1] = (Math.floor(i / PARTICLES_W) + 0.5) / PARTICLES_H;
    seeds[i] = Math.random();
  }
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  g.setAttribute('aRef', new THREE.BufferAttribute(refs, 2));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uPosTex: { value: null },
      uTime: shared.uTime,
      uDpr: { value: Math.min(window.devicePixelRatio, 2) },
    },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec2 aRef; attribute float aSeed;
      uniform sampler2D uPosTex; uniform float uDpr;
      varying float vFade; varying float vSeed;
      void main(){
        vec4 p = texture2D(uPosTex, aRef);
        vFade = smoothstep(0.0, 1.2, p.w) * smoothstep(12.0, 9.0, p.w);
        vSeed = aSeed;
        vec4 mv = viewMatrix * vec4(p.xyz, 1.0);
        gl_PointSize = min((1.2 + aSeed * 2.4) * uDpr * 60.0 / -mv.z, 20.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vFade; varying float vSeed;
      void main(){
        vec2 q = gl_PointCoord - 0.5;
        float d = length(q) * 2.0;
        float a = exp(-d * 3.0) * vFade * 0.45;
        vec3 col = mix(vec3(1.0, 0.85, 0.6), vec3(0.7, 0.85, 1.0), step(0.75, vSeed));
        gl_FragColor = vec4(col * a * 1.6, a);
      }`,
  });
  particlePoints = new THREE.Points(g, mat);
  particlePoints.frustumCulled = false;
  particlePoints.renderOrder = 41;
  scene.add(particlePoints);
}

// ---------------------------------------------------------------- stars
{
  const N = 260;
  const g = new THREE.BufferGeometry();
  const p = new Float32Array(N * 3);
  const s = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2;
    const el = 0.12 + Math.random() * 1.3;
    const r = 180;
    p[i * 3 + 0] = Math.cos(a) * Math.cos(el) * r;
    p[i * 3 + 1] = Math.sin(el) * r;
    p[i * 3 + 2] = Math.sin(a) * Math.cos(el) * r;
    s[i] = Math.random();
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(s, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute float aSeed; varying float vA; uniform float uTime;
      void main(){
        vA = (0.25 + 0.75 * fract(aSeed * 7.31)) * (0.6 + 0.4 * sin(uTime * (0.3 + aSeed) + aSeed * 40.0));
        vec4 mv = viewMatrix * vec4(position, 1.0);
        gl_PointSize = 1.0 + aSeed * 2.2;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vA;
      void main(){
        vec2 q = gl_PointCoord - 0.5;
        float d = length(q) * 2.0;
        float a = smoothstep(1.0, 0.0, d) * vA * 0.35;
        gl_FragColor = vec4(vec3(0.75, 0.82, 1.0) * a, a);
      }`,
  });
  const pts = new THREE.Points(g, mat);
  pts.frustumCulled = false;
  scene.add(pts);
}

// ---------------------------------------------------------------- volumetric ray-marched spotlights
const beams = [];
{
  const defs = [
    { apex: [-16, 30, -9], target: [-2, 0, 2], angle: 0.20, len: 36, color: [1.0, 0.52, 0.22], gain: 0.11, phase: 0.0 },
    { apex: [15, 28, -12], target: [4, 0, -1], angle: 0.17, len: 34, color: [0.34, 0.52, 1.0], gain: 0.14, phase: 2.1 },
    { apex: [1, 27, 17], target: [-1, 0, 3], angle: 0.18, len: 33, color: [1.0, 0.32, 0.72], gain: 0.09, phase: 4.2 },
  ];
  for (const d of defs) {
    const apex = new THREE.Vector3(...d.apex);
    const baseTarget = new THREE.Vector3(...d.target);
    const len = d.len;
    const uniforms = {
      uTime: shared.uTime,
      uApex: { value: apex },
      uDir: { value: new THREE.Vector3(0, -1, 0) },
      uCosA: { value: Math.cos(d.angle) },
      uTanA: { value: Math.tan(d.angle) },
      uLen: { value: len },
      uColor: { value: new THREE.Vector3(...d.color) },
      uGain: { value: d.gain },
      uCamPos: shared.uCamPos,
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.AdditiveBlending, side: THREE.BackSide,
      vertexShader: `
        varying vec3 vW;
        void main(){
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,
      fragmentShader: `
        varying vec3 vW;
        uniform vec3 uApex; uniform vec3 uDir; uniform float uCosA; uniform float uTanA;
        uniform float uLen; uniform vec3 uColor; uniform float uGain; uniform float uTime;
        uniform vec3 uCamPos;
        void main(){
          vec3 ro = uCamPos;
          vec3 rd = normalize(vW - uCamPos);
          float c2 = uCosA * uCosA;
          vec3 co = ro - uApex;
          float m = dot(rd, uDir);
          float n = dot(co, uDir);
          float a = m * m - c2;
          float b = 2.0 * (m * n - c2 * dot(rd, co));
          float c = n * n - c2 * dot(co, co);
          if (abs(a) < 1e-4) discard;
          float disc = b * b - 4.0 * a * c;
          if (disc < 0.0) discard;
          float sq = sqrt(disc);
          float t0 = (-b - sq) / (2.0 * a);
          float t1 = (-b + sq) / (2.0 * a);
          if (t0 > t1) { float tmp = t0; t0 = t1; t1 = tmp; }
          t0 = max(t0, 0.0);
          t1 = min(t1, 90.0);
          if (t1 <= t0) discard;

          const int STEPS = 22;
          float dith = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          float stepT = (t1 - t0) / float(STEPS);
          float acc = 0.0;
          for (int i = 0; i < STEPS; i++) {
            float ts = t0 + (float(i) + dith) * stepT;
            vec3 p = ro + rd * ts;
            vec3 q = p - uApex;
            float h = dot(q, uDir);
            if (h < 0.0 || h > uLen) continue;
            float rad = h * uTanA;
            float r = length(q - uDir * h);
            float radial = smoothstep(1.0, 0.1, r / max(rad, 1e-3));
            float axial = smoothstep(0.0, 0.12, h / uLen) * (1.0 - smoothstep(0.5, 1.0, h / uLen));
            float nz = 0.65 + 0.35 * sin(h * 1.1 - uTime * 1.4 + p.x * 0.6) * sin(p.z * 0.8 + uTime * 0.9);
            float ground = smoothstep(0.0, 3.0, p.y);
            acc += radial * axial * nz * ground;
          }
          float pathGain = clamp((t1 - t0) * 0.12, 0.0, 1.2);
          vec3 col = uColor * (acc / float(STEPS)) * uGain * pathGain;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const rEnd = Math.tan(d.angle) * len * 1.5;
    const geo = new THREE.CylinderGeometry(0.05, rEnd, len, 20, 1, true);
    geo.translate(0, -len / 2, 0);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(apex);
    mesh.renderOrder = 50;
    mesh.frustumCulled = false;
    scene.add(mesh);
    beams.push({ mesh, uniforms, apex, baseTarget, phase: d.phase });
  }
}

// ---------------------------------------------------------------- post-processing
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const afterimage = new AfterimagePass(0.45);
composer.addPass(afterimage);
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.75, 0.6, 0.25);
composer.addPass(bloom);
const vignette = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D tDiffuse; uniform float uTime;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - 0.5;
      float d = length(q) * 2.0;
      c.rgb *= 1.0 - 0.42 * smoothstep(0.65, 1.45, d);
      float grain = fract(sin(dot(vUv * 917.0, vec2(12.9898, 78.233)) + uTime * 61.0) * 43758.5453);
      c.rgb += (grain - 0.5) * 0.006;
      gl_FragColor = c;
    }`,
});
composer.addPass(vignette);
composer.addPass(new OutputPass());

// ---------------------------------------------------------------- interaction
const raycaster = new THREE.Raycaster();
const windPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -2.2);   // y = 2.2
const ndc = new THREE.Vector2();
const hitNow = new THREE.Vector3();
const pointer = {
  tracking: false,
  dragging: false,
  raw: new THREE.Vector3(),
  smooth: new THREE.Vector3(),
  prev: new THREE.Vector3(),
  ready: false,
};

function pointerToField(e) {
  ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  if (Math.abs(raycaster.ray.direction.dot(windPlane.normal)) < 0.16) return null;
  if (!raycaster.ray.intersectPlane(windPlane, hitNow)) return null;
  if (Math.hypot(hitNow.x, hitNow.z) > FIELD * 0.48) return null;
  if (camera.position.distanceTo(hitNow) > 36) return null;
  return hitNow;
}

window.addEventListener('pointermove', (e) => {
  if (e.buttons || e.target.closest('button, a, nav, #overlay')) {
    pointer.tracking = false;
    pointer.ready = false;
    return;
  }
  const hit = pointerToField(e);
  if (!hit) {
    pointer.tracking = false;
    pointer.ready = false;
    return;
  }
  pointer.raw.copy(hit);
  pointer.tracking = true;
});
window.addEventListener('pointerleave', () => {
  pointer.tracking = false;
  pointer.ready = false;
});
window.addEventListener('pointerdown', (e) => {
  pointer.dragging = true;
  pointer.tracking = false;
  pointer.ready = false;
  const hit = pointerToField(e);
  if (hit) fluid.splat(hit.x, hit.z, 0, 0, 0.005, 1.8);
  document.getElementById('hint').classList.add('hide');
});
window.addEventListener('pointerup', () => { pointer.dragging = false; });
setTimeout(() => document.getElementById('hint').classList.add('hide'), 9000);

function stirFromPointer() {
  if (!pointer.tracking || pointer.dragging) {
    pointer.ready = false;
    return;
  }
  if (!pointer.ready) {
    pointer.smooth.copy(pointer.raw);
    pointer.prev.copy(pointer.raw);
    pointer.ready = true;
    return;
  }
  const tx = pointer.raw.x - pointer.smooth.x;
  const tz = pointer.raw.z - pointer.smooth.z;
  const dist = Math.hypot(tx, tz);
  const maxCatch = 0.22;
  if (dist > maxCatch) {
    pointer.smooth.x += tx / dist * maxCatch;
    pointer.smooth.z += tz / dist * maxCatch;
  } else {
    pointer.smooth.x += tx * 0.14;
    pointer.smooth.z += tz * 0.14;
  }
  let fx = (pointer.smooth.x - pointer.prev.x) * 0.45;
  let fz = (pointer.smooth.z - pointer.prev.z) * 0.45;
  const mag = Math.hypot(fx, fz);
  if (mag > 0.09) { fx *= 0.09 / mag; fz *= 0.09 / mag; }
  if (mag > 0.004) fluid.splat(pointer.smooth.x, pointer.smooth.z, fx, fz, 0.0055, 0.02);
  pointer.prev.copy(pointer.smooth);
}

// ambient roaming gusts so the field lives on its own
let nextGust = 2;

// Shift the garden down so the top of the frame stays black for the hero
function layoutView() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const extra = Math.round(h * 0.52);
  camera.setViewOffset(w, h + extra, 0, 0, w, h);
  renderer.setSize(w, h);
  composer.setSize(w, h);
}
layoutView();

// ---------------------------------------------------------------- resize
window.addEventListener('resize', layoutView);

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
let firstFrame = true;
const tmpDir = new THREE.Vector3();

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.033);
  const t = clock.elapsedTime;
  shared.uTime.value = t;
  shared.uCamPos.value.copy(camera.position);
  vignette.uniforms.uTime.value = t;

  stirFromPointer();

  // breeze lane: a slow-moving directional splat wandering the field
  const bx = Math.sin(t * 0.13) * 16, bz = Math.cos(t * 0.09) * 16;
  fluid.splat(bx, bz, Math.cos(t * 0.11) * 0.9, Math.sin(t * 0.17) * 0.9, 0.004, 0);
  if (t > nextGust) {
    nextGust = t + 3 + Math.random() * 4;
    const gx = (Math.random() - 0.5) * 40, gz = (Math.random() - 0.5) * 40;
    const ga = Math.random() * Math.PI * 2;
    fluid.splat(gx, gz, Math.cos(ga) * 3, Math.sin(ga) * 3, 0.006, 0.3);
  }

  fluid.step(dt);

  // GPU particles
  posVar.material.uniforms.uDelta.value = dt;
  velVar.material.uniforms.uDelta.value = dt;
  gpu.compute();
  particlePoints.material.uniforms.uPosTex.value = gpu.getCurrentRenderTarget(posVar).texture;

  // beam sway
  for (const b of beams) {
    tmpDir.copy(b.baseTarget);
    tmpDir.x += Math.sin(t * 0.1 + b.phase) * 5;
    tmpDir.z += Math.cos(t * 0.13 + b.phase) * 5;
    tmpDir.sub(b.apex).normalize();
    b.uniforms.uDir.value.copy(tmpDir);
    b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), tmpDir);
  }

  controls.update();
  composer.render();

  if (firstFrame) {
    firstFrame = false;
    const load = document.getElementById('load');
    if (load) load.remove();
  }
});
