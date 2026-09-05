import * as THREE from 'three';

export function initScene() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 1.0, 14);
  camera.lookAt(0, 1.0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const sun = new THREE.DirectionalLight(0xfff4d6, 1.2);
  sun.position.set(-6, 10, 8);
  scene.add(sun);

  // Swooping curve
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-16.0, 2.6, 0.0),
    new THREE.Vector3(-8.0, -0.6, 0.3),
    new THREE.Vector3(-1.0, -2.0, 0.6),
    new THREE.Vector3(6.0, -0.6, 0.3),
    new THREE.Vector3(11.0, 3.0, -0.6),
    new THREE.Vector3(14.5, 9.5, -1.5),
  ]);

  const rV = 0.78, rH = 1.15;
  const _up = new THREE.Vector3(0, 1, 0);

  function frameAt(t) {
    const P = curve.getPointAt(t);
    const T = curve.getTangentAt(t).normalize();
    const B = new THREE.Vector3().crossVectors(T, _up).normalize();
    const N = new THREE.Vector3().crossVectors(B, T).normalize();
    return { P, T, B, N };
  }

  // Base tube (dark grass body)
  const tube = buildTube(scene, curve, rV, rH, frameAt);

  // Instanced grass blades
  const { uniforms } = buildGrass(scene, curve, rV, rH, frameAt, _up);

  // Wildflowers
  buildFlowers(scene, camera, curve, rV, rH, frameAt, _up);

  // Mouse interaction
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2(10, 10);
  const targetMouse = new THREE.Vector3(9999, 9999, 9999);
  const lastValidMouse = new THREE.Vector3(9999, 9999, 9999);
  let pushStrength = 0;

  addEventListener('pointermove', (e) => {
    ndc.x = (e.clientX / innerWidth) * 2 - 1;
    ndc.y = -(e.clientY / innerHeight) * 2 + 1;
  });
  addEventListener('pointerleave', () => { ndc.set(10, 10); });

  function updateMouseWorld() {
    if (ndc.x > 2) { targetMouse.set(9999, 9999, 9999); return; }
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(tube);
    if (hits.length) {
      targetMouse.copy(hits[0].point);
      lastValidMouse.copy(hits[0].point);
    } else {
      targetMouse.set(9999, 9999, 9999);
    }
  }

  // Animation loop
  const clock = new THREE.Clock();
  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    uniforms.uTime.value += dt;

    updateMouseWorld();

    const onSurface = targetMouse.x < 999;
    const targetStrength = onSurface ? 1.0 : 0.0;
    pushStrength += (targetStrength - pushStrength) * (1 - Math.pow(0.005, dt));
    if (pushStrength < 0.001) pushStrength = 0;
    uniforms.uPush.value = pushStrength;

    const m = uniforms.uMouse.value;
    if (onSurface) {
      if (m.x > 999) m.copy(targetMouse);
      else m.lerp(targetMouse, 1 - Math.pow(0.0001, dt));
    } else if (lastValidMouse.x < 999) {
      m.copy(lastValidMouse);
    }

    renderer.render(scene, camera);
  }
  tick();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

function buildTube(scene, curve, rV, rH, frameAt) {
  const S = 220, R = 28;
  const pos = [], nor = [], idx = [];
  for (let i = 0; i <= S; i++) {
    const { P, B, N } = frameAt(i / S);
    for (let j = 0; j <= R; j++) {
      const th = (j / R) * Math.PI * 2;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(
        P.x + N.x * rV * c + B.x * rH * s,
        P.y + N.y * rV * c + B.y * rH * s,
        P.z + N.z * rV * c + B.z * rH * s
      );
      const nx = N.x * c / rV + B.x * s / rH;
      const ny = N.y * c / rV + B.y * s / rH;
      const nz = N.z * c / rV + B.z * s / rH;
      const l = Math.hypot(nx, ny, nz);
      nor.push(nx / l, ny / l, nz / l);
    }
  }
  for (let i = 0; i < S; i++) for (let j = 0; j < R; j++) {
    const a = i * (R + 1) + j, b = a + R + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setIndex(idx);
  const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x2e6b12, side: THREE.DoubleSide }));
  scene.add(mesh);
  return mesh;
}

function buildGrass(scene, curve, rV, rH, frameAt, _up) {
  const BLADES = 140000;
  const SEGS = 3;

  const bladeGeo = new THREE.InstancedBufferGeometry();
  const verts = [], uvs = [], idx = [];
  for (let i = 0; i <= SEGS; i++) {
    const t = i / SEGS;
    const w = 0.5 * (1 - t * t);
    verts.push(-w, t, 0, w, t, 0);
    uvs.push(0, t, 1, t);
  }
  verts[verts.length - 6] = 0;
  verts[verts.length - 3] = 0;
  for (let i = 0; i < SEGS; i++) {
    const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
    idx.push(a, b, c, b, d, c);
  }
  bladeGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  bladeGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  bladeGeo.setIndex(idx);

  const offsets = new Float32Array(BLADES * 3);
  const normals = new Float32Array(BLADES * 3);
  const rand = new Float32Array(BLADES * 4);
  let i = 0;
  while (i < BLADES) {
    const t = Math.random();
    const th = Math.random() * Math.PI * 2;
    const c = Math.cos(th), s = Math.sin(th);
    const topness = Math.max(c, 0);
    if (Math.random() > 0.3 + 0.7 * topness) continue;

    const { P, B, N } = frameAt(t);
    offsets[i * 3] = P.x + N.x * rV * c + B.x * rH * s;
    offsets[i * 3 + 1] = P.y + N.y * rV * c + B.y * rH * s;
    offsets[i * 3 + 2] = P.z + N.z * rV * c + B.z * rH * s;
    let nx = N.x * c / rV + B.x * s / rH;
    let ny = N.y * c / rV + B.y * s / rH;
    let nz = N.z * c / rV + B.z * s / rH;
    const l = Math.hypot(nx, ny, nz);
    normals[i * 3] = nx / l;
    normals[i * 3 + 1] = ny / l;
    normals[i * 3 + 2] = nz / l;

    rand[i * 4] = Math.random() * Math.PI * 2;
    rand[i * 4 + 1] = (0.18 + 0.5 * topness * topness) * (0.6 + 0.8 * Math.random());
    rand[i * 4 + 2] = (Math.random() - 0.5) * 0.7;
    rand[i * 4 + 3] = Math.random();
    i++;
  }
  bladeGeo.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3));
  bladeGeo.setAttribute('nrm', new THREE.InstancedBufferAttribute(normals, 3));
  bladeGeo.setAttribute('rand', new THREE.InstancedBufferAttribute(rand, 4));
  bladeGeo.instanceCount = BLADES;

  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector3(9999, 9999, 9999) },
    uMouseR: { value: 2.0 },
    uPush: { value: 1.0 },
  };

  const grassMat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    vertexShader: `
      attribute vec3 offset;
      attribute vec3 nrm;
      attribute vec4 rand;
      uniform float uTime;
      uniform vec3 uMouse;
      uniform float uMouseR;
      uniform float uPush;
      varying float vT;
      varying float vShade;
      varying float vDark;

      void main() {
        float t = uv.y;
        vT = t;
        float len = rand.y;

        vec3 ref = abs(nrm.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
        vec3 T0 = normalize(cross(nrm, ref));
        vec3 B0 = cross(nrm, T0);
        float ca = cos(rand.x), sa = sin(rand.x);
        vec3 widthDir = T0 * ca + B0 * sa;
        vec3 leanDir  = T0 * -sa + B0 * ca;

        float bend = t * t;
        float wind = sin(uTime * 1.7 + offset.x * 0.9 + offset.y * 0.6 + rand.x) * 0.10
                   + sin(uTime * 0.8 + offset.x * 0.3) * 0.06;

        vec3 world = offset
                   + nrm * (t * len)
                   + widthDir * (position.x * 0.028)
                   + leanDir * (rand.z * 0.35 * len) * bend
                   + (T0 * wind + B0 * wind * 0.6) * bend * len * 2.0;

        vec3 toB = offset - uMouse;
        float d = length(toB);
        float infl = smoothstep(uMouseR, 0.0, d);
        infl *= infl;
        vec3 pushDir = toB - nrm * dot(toB, nrm);
        float pl = length(pushDir);
        pushDir = pl > 0.0001 ? pushDir / pl : T0;
        world += pushDir * infl * uPush * bend * (0.35 + len * 2.5);
        world -= nrm * infl * bend * len * 0.75;
        vDark = infl;

        vShade = (0.7 + 0.3 * rand.w) * (0.8 + 0.2 * sin(rand.x * 2.0));
        vShade *= 0.55 + 0.45 * clamp(nrm.y * 0.5 + 0.6, 0.0, 1.0);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      varying float vT;
      varying float vShade;
      varying float vDark;

      void main() {
        vec3 base = vec3(0.018, 0.095, 0.008);
        vec3 tip  = vec3(0.16, 0.50, 0.035);
        vec3 col = mix(base, tip, vT * vT) * vShade;
        col *= 1.0 - vDark * 0.5;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });

  const grass = new THREE.Mesh(bladeGeo, grassMat);
  grass.frustumCulled = false;
  scene.add(grass);

  return { uniforms };
}

function buildFlowers(scene, camera, curve, rV, rH, frameAt, _up) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.translate(32, 32);
  for (let p = 0; p < 6; p++) {
    g.save();
    g.rotate((p / 6) * Math.PI * 2);
    g.fillStyle = 'rgba(255,250,252,0.98)';
    g.beginPath();
    g.ellipse(0, -14, 7, 14, 0, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
  g.fillStyle = '#f4c542';
  g.beginPath();
  g.arc(0, 0, 7, 0, Math.PI * 2);
  g.fill();
  const flowerTex = new THREE.CanvasTexture(c);
  flowerTex.colorSpace = THREE.SRGBColorSpace;

  const N_FLOWERS = 70;
  const headGeo = new THREE.PlaneGeometry(0.16, 0.16);
  const headMat = new THREE.MeshBasicMaterial({
    map: flowerTex, transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  const heads = new THREE.InstancedMesh(headGeo, headMat, N_FLOWERS);

  const stemMat = new THREE.MeshBasicMaterial({ color: 0x3a6b1a });
  const stemGeo = new THREE.CylinderGeometry(0.008, 0.012, 1, 4);
  stemGeo.translate(0, 0.5, 0);
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, N_FLOWERS);

  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  const sc = new THREE.Vector3(1, 1, 1);
  const patches = [0.22, 0.38, 0.52, 0.68, 0.8];

  for (let i = 0; i < N_FLOWERS; i++) {
    const t = patches[i % patches.length] + (Math.random() - 0.5) * 0.06;
    const th = (Math.random() - 0.5) * 1.0;
    const cth = Math.cos(th), sth = Math.sin(th);
    const { P, B, N } = frameAt(Math.min(Math.max(t, 0.02), 0.98));
    const sp = new THREE.Vector3(
      P.x + N.x * rV * cth + B.x * rH * sth,
      P.y + N.y * rV * cth + B.y * rH * sth,
      P.z + N.z * rV * cth + B.z * rH * sth
    );
    let nv = new THREE.Vector3(
      N.x * cth / rV + B.x * sth / rH,
      N.y * cth / rV + B.y * sth / rH,
      N.z * cth / rV + B.z * sth / rH
    ).normalize();
    const h = 0.45 + Math.random() * 0.85;

    q.setFromUnitVectors(_up, nv);
    sc.setScalar(1);
    sc.y = h;
    m.compose(sp, q, sc);
    stems.setMatrixAt(i, m);

    const hp = sp.clone().addScaledVector(nv, h);
    const s = 0.7 + Math.random() * 0.9;
    sc.set(s, s, s);
    m.compose(hp, camera.quaternion, sc);
    heads.setMatrixAt(i, m);
  }
  scene.add(stems, heads);
}
