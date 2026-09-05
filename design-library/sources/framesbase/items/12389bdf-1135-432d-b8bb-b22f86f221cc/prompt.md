<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Food Tracker</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { min-height: 100%; font-family: "DM Sans", system-ui, -apple-system, sans-serif; background: #3c3c3c; }

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #CFC5BD;
  padding: 48px 20px;
}

@media (min-width: 1024px) {
  .page {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 48px 32px;
  }
}

.phone-wrapper {
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .phone-wrapper { flex-shrink: 1; align-self: auto !important; }
}

.phone-inner {
  width: 395px;
  height: 832px;
  transform-origin: top left;
}

.iphone-frame {
  position: relative;
  width: 395px;
  height: 832px;
  border-radius: 56px;
  background: #111111;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.4), 0 12px 24px -8px rgba(0,0,0,0.3);
}

.iphone-viewport {
  width: 375px;
  height: 812px;
  border-radius: 46px;
  overflow: hidden;
  position: relative;
}

.btn-right { position: absolute; right: -2px; top: 180px; width: 3px; height: 80px; border-radius: 0 2px 2px 0; background: #222; }
.btn-left-1 { position: absolute; left: -2px; top: 130px; width: 3px; height: 28px; border-radius: 2px 0 0 2px; background: #222; }
.btn-left-2 { position: absolute; left: -2px; top: 185px; width: 3px; height: 52px; border-radius: 2px 0 0 2px; background: #222; }
.btn-left-3 { position: absolute; left: -2px; top: 245px; width: 3px; height: 52px; border-radius: 2px 0 0 2px; background: #222; }

.status-bar {
  position: absolute; left: 0; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  width: 375px; height: 54px; padding: 0 29px;
}
.status-time { width: 54px; text-align: center; font-size: 16px; font-weight: 600; line-height: 21px; letter-spacing: -0.32px; color: black; padding-top: 14px; }
.status-spacer { width: 125px; }
.status-icons { display: flex; align-items: center; gap: 6px; padding-top: 14px; }

.dynamic-island {
  position: absolute; left: 50%; top: 11px; z-index: 50;
  width: 125px; height: 37px; border-radius: 9999px; background: black;
  transform: translateX(-50%);
}

/* Screen backgrounds */
.screen { position: relative; width: 375px; height: 812px; overflow: hidden; }
.screen-onboarding { background: #F4F1EB; }
.screen-dashboard { background: #282828; }
.screen-recipes { background: #282828; }

.content-area {
  position: absolute; left: 0; top: 0;
  width: 375px; height: 716px;
  overflow: hidden; border-radius: 0 0 32px 32px;
  background: #F4F1EB;
}
.content-area::after {
  content: ''; position: absolute; left: 50%; top: 65%;
  width: 500px; height: 500px; transform: translateX(-50%);
  background: radial-gradient(circle, #FFA371 0%, transparent 70%);
  opacity: 0.6; pointer-events: none;
}

/* Bottom nav */
.bottom-nav {
  position: absolute; bottom: 0; left: 0; z-index: 40;
  display: flex; align-items: center; justify-content: center;
  width: 375px; height: 96px; padding: 0 16px;
}
.bottom-nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  width: 343px; height: 56px; gap: 8px;
}
.nav-icon { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 9999px; }
.nav-icon-group { display: flex; align-items: center; gap: 12px; }
.nav-center { background: #FE9B66; }

/* Onboarding specific */
.onboarding-image { position: absolute; left: 0; top: 0; width: 375px; height: 573px; object-fit: cover; }
.blur-overlay {
  position: absolute; left: 0; bottom: 196px; width: 375px; height: 245px;
  background: rgba(244,241,235,0.6);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  mask-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 62.5%);
  -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 62.5%);
}
.onboarding-text {
  position: absolute; left: 0; top: 518px;
  display: flex; flex-direction: column; align-items: center; gap: 24px;
  width: 375px; padding: 0 16px 24px;
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.onboarding-text.visible { opacity: 1; transform: translateY(0); }
.onboarding-title {
  width: 343px; text-align: center; font-size: 48px; font-weight: 600;
  line-height: 50px; letter-spacing: -0.05em; color: #282828; text-transform: capitalize;
}
.onboarding-subtitle {
  width: 343px; text-align: center; font-size: 18px; font-weight: 500;
  line-height: 24px; letter-spacing: -0.02em; color: #908D86;
}
.dots { display: flex; gap: 4px; }
.dot { width: 6px; height: 6px; border-radius: 9px; background: #D7D1C5; }
.dot.active { background: #424141; }
.cta-button {
  display: flex; align-items: center; justify-content: center;
  width: 343px; height: 56px; border-radius: 20px; background: #282828;
  color: white; font-size: 16px; font-weight: 500; text-transform: capitalize;
  border: none; cursor: pointer; font-family: inherit;
}

/* Calorie labels */
.calorie-label {
  position: absolute; display: flex; flex-direction: column; align-items: center;
  opacity: 0; transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.calorie-label.visible { opacity: 1; transform: translateY(0); }
.calorie-pill {
  display: flex; align-items: center; justify-content: center;
  height: 40px; border-radius: 32px; background: rgba(255,255,255,0.8);
  font-size: 18px; font-weight: 600; line-height: 20px; letter-spacing: -0.03em; color: #282828;
  position: relative;
}
.calorie-pill::after {
  content: ''; position: absolute; left: 50%; bottom: -6px; transform: translateX(-50%);
  width: 12px; height: 12px; border-radius: 50%; background: #FFA270;
}
.calorie-line {
  display: flex; flex-direction: column; align-items: center; overflow: hidden;
}
.calorie-line-bar {
  width: 3px; flex: 1;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  transform: scaleY(0); transform-origin: top;
  transition: transform 1s cubic-bezier(0.16,1,0.3,1);
}
.calorie-label.visible .calorie-line-bar { transform: scaleY(1); }
.calorie-line-dot {
  width: 12px; height: 12px; border-radius: 50%; background: white; flex-shrink: 0;
  opacity: 0; transition: opacity 0.4s ease;
}
.calorie-label.visible .calorie-line-dot { opacity: 1; }

/* Dashboard */
.dashboard-header {
  margin-top: 56px; display: flex; align-items: center; justify-content: space-between;
  width: 343px; height: 56px;
}
.header-circle { width: 44px; height: 44px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; }
.header-title { font-size: 14px; font-weight: 500; line-height: 20px; color: #282828; }

.progress-ring { position: relative; width: 343px; height: 231px; overflow: hidden; margin-top: 16px; }
.progress-ring svg { position: absolute; left: 0; top: 0; width: 343px; height: 343px; }
.ring-center {
  position: absolute; left: 50%; top: 100px; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 4px; z-index: 10;
}
.ring-date { font-size: 14px; font-weight: 500; line-height: 18px; color: #FE9B66; }
.ring-kcal { margin-top: 4px; font-size: 28px; font-weight: 600; line-height: 32px; letter-spacing: -0.02em; color: #282828; text-align: center; }
.ring-goal { font-size: 14px; font-weight: 600; line-height: 16px; color: #FFA270; text-align: center; }

.add-btn {
  display: flex; align-items: center; justify-content: center;
  width: 343px; height: 48px; border-radius: 20px; background: #E8E3D8;
}

.meal-card {
  display: flex; flex-direction: column; justify-content: space-between;
  width: 343px; height: 138px; border-radius: 24px; padding: 12px 20px 12px 12px;
  background: linear-gradient(178deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 100%);
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.meal-card.visible { opacity: 1; transform: translateY(0); }
.meal-top { display: flex; align-items: flex-start; justify-content: space-between; }
.meal-left { display: flex; align-items: center; gap: 12px; }
.meal-img { height: 64px; object-fit: contain; }
.meal-info { display: flex; flex-direction: column; justify-content: center; }
.meal-title { font-size: 18px; font-weight: 600; line-height: 25px; letter-spacing: -0.03em; color: #282828; text-transform: capitalize; }
.meal-time { font-size: 14px; font-weight: 500; line-height: 18px; color: #908D86; }
.meal-right { display: flex; flex-direction: column; align-items: flex-end; }
.meal-kcal { font-size: 28px; font-weight: 600; line-height: 32px; letter-spacing: -0.02em; color: #282828; }
.meal-percent { font-size: 14px; font-weight: 600; line-height: 18px; color: #FFA270; }
.meal-bottom { display: flex; align-items: center; justify-content: space-between; padding-left: 8px; height: 42px; }
.meal-macros { display: flex; width: 180px; align-items: center; justify-content: space-between; }
.macro-item { display: flex; flex-direction: column; align-items: flex-start; }
.macro-label { font-size: 14px; font-weight: 500; line-height: 18px; color: #908D86; }
.macro-value { font-size: 14px; font-weight: 600; line-height: 20px; color: #282828; }

/* Recipes */
.recipes-header {
  display: flex; align-items: center; gap: 12px;
  width: 343px; height: 56px; padding-top: 56px;
}
.search-bar {
  display: flex; align-items: center; gap: 10px;
  width: 279px; height: 56px; border-radius: 20px; background: white;
  padding: 15px 16px;
}
.search-text { font-size: 18px; font-weight: 500; line-height: 20px; letter-spacing: -0.03em; color: #908D86; }
.bell-circle { width: 56px; height: 56px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; }

.categories {
  display: flex; gap: 4px; overflow: hidden; padding-left: 16px; width: 375px; margin-top: 20px;
}
.category-item {
  display: flex; flex-direction: column; align-items: center; gap: 8px; width: 80px;
  opacity: 0; transform: translateY(20px) scale(0.8);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.category-item.visible { opacity: 1; transform: translateY(0) scale(1); }
.category-img-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 80px; height: 78px; border-radius: 20px; background: white; overflow: hidden;
}
.category-img { width: 56px; height: 56px; object-fit: contain; }
.category-label { width: 80px; text-align: center; font-size: 14px; font-weight: 500; line-height: 1.2em; color: #282828; }

.trending-header {
  display: flex; align-items: center; justify-content: space-between; width: 343px;
}
.trending-title { font-size: 20px; font-weight: 500; line-height: 25px; letter-spacing: -0.03em; color: #282828; text-transform: capitalize; }
.trending-link { display: flex; align-items: center; gap: 2px; font-size: 14px; font-weight: 500; line-height: 1.2em; color: #908D86; }

.carousel { position: relative; width: 375px; height: 400px; overflow: hidden; }
.carousel-card {
  position: absolute; left: 50%; top: 50%;
  width: 325px; border-radius: 24px; overflow: hidden;
  transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), height 0.8s cubic-bezier(0.16,1,0.3,1);
}
.carousel-card img {
  position: absolute; left: 50%; transform: translateX(-50%); object-fit: contain;
  transition: all 0.8s cubic-bezier(0.16,1,0.3,1);
}
.carousel-card-top { position: absolute; left: 0; top: 0; width: 100%; padding: 20px; display: flex; align-items: center; justify-content: space-between; }
.time-badge { display: flex; align-items: center; gap: 8px; }
.time-badge-circle { width: 24px; height: 24px; border-radius: 50%; background: #FFA270; display: flex; align-items: center; justify-content: center; }
.time-badge-text { font-size: 13px; font-weight: 600; line-height: 16px; color: #282828; }
.time-pill { display: flex; align-items: center; gap: 4px; border-radius: 9999px; background: #FFA270; padding: 3px 8px; }
.time-pill-text { font-size: 10px; font-weight: 600; line-height: 12px; color: #282828; }
.card-bottom-center {
  position: absolute; bottom: 16px; left: 0; width: 100%; padding: 0 20px;
  display: flex; align-items: center; justify-content: space-between;
}
.difficulty { font-size: 22px; font-weight: 500; line-height: 28px; letter-spacing: -0.02em; color: #908D86; }
.difficulty-dots { display: flex; align-items: center; gap: 5px; }
.difficulty-dot { width: 9px; height: 26px; border-radius: 9999px; }
.card-kcal { font-size: 28px; font-weight: 600; line-height: 34px; letter-spacing: -0.02em; color: #282828; }
.card-bottom-side {
  position: absolute; left: 50%; top: 308px; width: 264px; transform: translateX(-50%);
  display: flex; align-items: center; justify-content: space-between;
}
.side-difficulty { font-size: 17px; font-weight: 500; line-height: 22px; letter-spacing: -0.02em; color: #908D86; }
.side-kcal { font-size: 27px; font-weight: 600; line-height: 30px; letter-spacing: -0.02em; color: #282828; text-align: right; }
</style>
</head>
<body>
<div class="page" id="page">
  <!-- Phone 1: Dashboard -->
  <div class="phone-wrapper" id="pw1" style="align-self: flex-start;">
    <div class="phone-inner" id="pi1">
      <div class="iphone-frame">
        <div class="iphone-viewport">
          <div class="screen screen-dashboard" id="dashboard-screen">
            <div class="content-area"></div>
            <!-- Status Bar -->
            <div class="status-bar">
              <span class="status-time">9:41</span>
              <div class="status-spacer"></div>
              <div class="status-icons">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="black"/><rect x="4.5" y="5" width="3" height="7" rx="1" fill="black"/><rect x="9" y="3" width="3" height="9" rx="1" fill="black"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="black"/></svg>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1.5 4.5C4 2 6 1 8 1s4 1 6.5 3.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 6.5C5 5 6.5 4 8 4s3 1 4.5 2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M5.5 8.5C6.5 7.5 7 7 8 7s1.5.5 2.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>
                <svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="black" stroke-opacity="0.35"/><rect x="2" y="2" width="20" height="9" rx="2" fill="black"/><path d="M25 4.5v4a2 2 0 000-4z" fill="black" fill-opacity="0.4"/></svg>
              </div>
            </div>
            <div class="dynamic-island"></div>
            <!-- Dashboard Content -->
            <div style="position:absolute;left:0;top:0;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:375px;height:716px;padding-bottom:16px;">
              <div style="display:flex;flex-direction:column;align-items:center;width:375px;">
                <div class="dashboard-header">
                  <div style="display:flex;align-items:center;justify-content:center;width:56px;height:56px;">
                    <div class="header-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#282828"><path d="M8 2a1 1 0 0 1 1 1v1h6V3a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h1V3a1 1 0 0 1 1-1z"/><path d="M2 10h20v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8z" fill="#282828"/><circle cx="8" cy="15" r="1.5" fill="white"/><circle cx="12" cy="15" r="1.5" fill="white"/><circle cx="16" cy="15" r="1.5" fill="white"/></svg>
                    </div>
                  </div>
                  <span class="header-title">Dashboard</span>
                  <div style="position:relative;display:flex;align-items:center;justify-content:center;width:56px;height:56px;">
                    <div class="header-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#282828"><path d="M12 2a6 6 0 0 0-6 6c0 3.09-.78 5.4-1.65 6.95-.42.75-.64 1.13-.62 1.22.02.1.05.16.13.22.07.05.46.05 1.24.05h13.8c.78 0 1.17 0 1.24-.05.08-.06.11-.12.13-.22.02-.09-.2-.47-.62-1.22C18.78 13.4 18 11.09 18 8a6 6 0 0 0-6-6z"/><path d="M9.35 21a3.02 3.02 0 0 0 5.3 0H9.35z" fill="#282828"/><circle cx="16" cy="6" r="4" fill="#FFA270" stroke="white" stroke-width="2"/></svg>
                    </div>
                  </div>
                </div>
                <div class="progress-ring" id="progress-ring">
                  <svg viewBox="0 0 343 343" id="ring-svg"></svg>
                  <div class="ring-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FE9B66" stroke="#FE9B66" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#FE9B66"/></svg>
                    <span class="ring-date">20 Aug</span>
                    <span class="ring-kcal" id="ring-kcal">0 kcal</span>
                    <span class="ring-goal">Goal 2000 kcal</span>
                  </div>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:center;width:343px;gap:12px;">
                <div class="add-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282828" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
                <div style="display:flex;flex-direction:column;gap:4px;">
                  <div class="meal-card visible" id="meal1">
                    <div class="meal-top">
                      <div class="meal-left">
                        <img src="https://framerusercontent.com/images/BqzJnhxC4oTmZS4LXssyLAmGuKQ.png" alt="" class="meal-img" style="width:61px;">
                        <div class="meal-info"><span class="meal-title">Lunch</span><span class="meal-time">02:30 PM</span></div>
                      </div>
                      <div class="meal-right"><span class="meal-kcal" id="meal1-kcal">0 kcal</span><span class="meal-percent">35% of goal</span></div>
                    </div>
                    <div class="meal-bottom">
                      <div class="meal-macros">
                        <div class="macro-item"><span class="macro-label">Protein</span><span class="macro-value" id="meal1-protein">0g</span></div>
                        <div class="macro-item"><span class="macro-label">Carbs</span><span class="macro-value" id="meal1-carbs">0g</span></div>
                        <div class="macro-item"><span class="macro-label">Fat</span><span class="macro-value" id="meal1-fat">0g</span></div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#282828"><path d="M13.26 3.6l-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.4 1.39-.72l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.37-5.29.13z"/><path d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15" stroke="#282828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 22h18" stroke="#282828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                  </div>
                  <div class="meal-card visible" id="meal2" style="transition-delay:200ms;">
                    <div class="meal-top">
                      <div class="meal-left">
                        <img src="https://framerusercontent.com/images/lvh2dnFe15JCcyQRI1L0nukdQCU.png" alt="" class="meal-img" style="width:63px;">
                        <div class="meal-info"><span class="meal-title">Breakfast</span><span class="meal-time">11:30 AM</span></div>
                      </div>
                      <div class="meal-right"><span class="meal-kcal" id="meal2-kcal">0 kcal</span><span class="meal-percent">25% of goal</span></div>
                    </div>
                    <div class="meal-bottom">
                      <div class="meal-macros">
                        <div class="macro-item"><span class="macro-label">Protein</span><span class="macro-value" id="meal2-protein">0g</span></div>
                        <div class="macro-item"><span class="macro-label">Carbs</span><span class="macro-value" id="meal2-carbs">0g</span></div>
                        <div class="macro-item"><span class="macro-label">Fat</span><span class="macro-value" id="meal2-fat">0g</span></div>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#282828"><path d="M13.26 3.6l-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.4 1.39-.72l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.37-5.29.13z"/><path d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15" stroke="#282828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 22h18" stroke="#282828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dashboard Bottom Nav -->
            <div class="bottom-nav">
              <div class="bottom-nav-inner">
                <div class="nav-icon-group">
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FE9B66"><path d="M3 10.5L12 3l9 7.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z"/><path d="M9 23V13h6v10" fill="#282828"/></svg></div>
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M6.5 2C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22H20V2H6.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20v7H6.5A2.5 2.5 0 0 1 4 19.5v-2z"/><rect x="8" y="6" width="2" height="8" rx="1" fill="#282828"/></svg></div>
                </div>
                <div class="nav-icon nav-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282828" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M20 16v2a2 2 0 0 1-2 2h-2"/><path d="M8 20H6a2 2 0 0 1-2-2v-2"/><line x1="4" y1="12" x2="20" y2="12"/></svg></div>
                <div class="nav-icon-group">
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg></div>
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M19.14 12.94a7.2 7.2 0 0 0 .05-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.25.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58z"/><circle cx="12" cy="12" r="2.2" fill="#282828"/></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-right"></div>
        <div class="btn-left-1"></div>
        <div class="btn-left-2"></div>
        <div class="btn-left-3"></div>
      </div>
    </div>
  </div>

  <!-- Phone 2: Onboarding -->
  <div class="phone-wrapper" id="pw2" style="align-self: center;">
    <div class="phone-inner" id="pi2">
      <div class="iphone-frame">
        <div class="iphone-viewport">
          <div class="screen screen-onboarding">
            <div class="status-bar">
              <span class="status-time">9:41</span>
              <div class="status-spacer"></div>
              <div class="status-icons">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="black"/><rect x="4.5" y="5" width="3" height="7" rx="1" fill="black"/><rect x="9" y="3" width="3" height="9" rx="1" fill="black"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="black"/></svg>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1.5 4.5C4 2 6 1 8 1s4 1 6.5 3.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 6.5C5 5 6.5 4 8 4s3 1 4.5 2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M5.5 8.5C6.5 7.5 7 7 8 7s1.5.5 2.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>
                <svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="black" stroke-opacity="0.35"/><rect x="2" y="2" width="20" height="9" rx="2" fill="black"/><path d="M25 4.5v4a2 2 0 000-4z" fill="black" fill-opacity="0.4"/></svg>
              </div>
            </div>
            <div class="dynamic-island"></div>
            <div style="position:absolute;left:0;top:0;width:375px;height:573px;overflow:hidden;">
              <img src="https://framerusercontent.com/images/vzFRLyDH4mObF0PMM1sV4zN10k.png" alt="" class="onboarding-image">
              <!-- Calorie labels -->
              <div class="calorie-label" id="cal1" style="left:17px;top:93px;width:95px;">
                <div class="calorie-pill" style="width:95px;">170 kkal</div>
                <div class="calorie-line" style="height:110px;"><div class="calorie-line-bar" style="transition-delay:600ms;"></div><div class="calorie-line-dot" style="transition-delay:1100ms;"></div></div>
              </div>
              <div class="calorie-label" id="cal2" style="left:141px;top:174px;width:86px;">
                <div class="calorie-pill" style="width:86px;">90 kkal</div>
                <div class="calorie-line" style="height:150px;"><div class="calorie-line-bar" style="transition-delay:900ms;"></div><div class="calorie-line-dot" style="transition-delay:1400ms;"></div></div>
              </div>
              <div class="calorie-label" id="cal3" style="left:262px;top:99px;width:86px;">
                <div class="calorie-pill" style="width:86px;">110 kkal</div>
                <div class="calorie-line" style="height:90px;"><div class="calorie-line-bar" style="transition-delay:1200ms;"></div><div class="calorie-line-dot" style="transition-delay:1700ms;"></div></div>
              </div>
            </div>
            <div class="blur-overlay"></div>
            <div class="onboarding-text" id="onboarding-text">
              <div style="display:flex;flex-direction:column;align-items:center;gap:12px;width:343px;">
                <h1 class="onboarding-title">Your food, decoded by AI</h1>
                <p class="onboarding-subtitle">From scanning to tracking - everything happens automatically.</p>
              </div>
              <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot active"></div></div>
              <button class="cta-button">Get Started</button>
            </div>
          </div>
        </div>
        <div class="btn-right"></div>
        <div class="btn-left-1"></div>
        <div class="btn-left-2"></div>
        <div class="btn-left-3"></div>
      </div>
    </div>
  </div>

  <!-- Phone 3: Recipes -->
  <div class="phone-wrapper" id="pw3" style="align-self: center;">
    <div class="phone-inner" id="pi3">
      <div class="iphone-frame">
        <div class="iphone-viewport">
          <div class="screen screen-recipes">
            <div class="content-area"></div>
            <div class="status-bar">
              <span class="status-time">9:41</span>
              <div class="status-spacer"></div>
              <div class="status-icons">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="black"/><rect x="4.5" y="5" width="3" height="7" rx="1" fill="black"/><rect x="9" y="3" width="3" height="9" rx="1" fill="black"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="black"/></svg>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1.5 4.5C4 2 6 1 8 1s4 1 6.5 3.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 6.5C5 5 6.5 4 8 4s3 1 4.5 2.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path d="M5.5 8.5C6.5 7.5 7 7 8 7s1.5.5 2.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>
                <svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="black" stroke-opacity="0.35"/><rect x="2" y="2" width="20" height="9" rx="2" fill="black"/><path d="M25 4.5v4a2 2 0 000-4z" fill="black" fill-opacity="0.4"/></svg>
              </div>
            </div>
            <div class="dynamic-island"></div>
            <!-- Recipes content -->
            <div style="position:absolute;left:0;top:0;z-index:10;display:flex;flex-direction:column;justify-content:space-between;width:375px;height:716px;padding-bottom:16px;">
              <div style="display:flex;flex-direction:column;align-items:center;width:375px;gap:20px;">
                <div style="display:flex;align-items:center;padding:56px 16px 0;width:375px;">
                  <div class="recipes-header">
                    <div class="search-bar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#908D86" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                      <span class="search-text">Search</span>
                    </div>
                    <div class="bell-circle">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#282828"><path d="M12 2a6 6 0 0 0-6 6c0 3.09-.78 5.4-1.65 6.95-.42.75-.64 1.13-.62 1.22.02.1.05.16.13.22.07.05.46.05 1.24.05h13.8c.78 0 1.17 0 1.24-.05.08-.06.11-.12.13-.22.02-.09-.2-.47-.62-1.22C18.78 13.4 18 11.09 18 8a6 6 0 0 0-6-6z"/><path d="M9.35 21a3.02 3.02 0 0 0 5.3 0H9.35z" fill="#282828"/><circle cx="16" cy="6" r="4" fill="#FFA270" stroke="white" stroke-width="2"/></svg>
                    </div>
                  </div>
                </div>
                <div class="categories" id="categories">
                  <div class="category-item" style="transition-delay:0ms;"><div class="category-img-wrap"><img src="https://framerusercontent.com/images/cSUYlXEgijN1waXIccAabRGBTKs.png" alt="" class="category-img"></div><span class="category-label">All</span></div>
                  <div class="category-item" style="transition-delay:100ms;"><div class="category-img-wrap"><img src="https://framerusercontent.com/images/dvL0ds50sM1lbWt50gA2MeCoN7k.png" alt="" class="category-img" style="transform:rotate(6deg);"></div><span class="category-label">Vegan</span></div>
                  <div class="category-item" style="transition-delay:200ms;"><div class="category-img-wrap"><img src="https://framerusercontent.com/images/WslNoldhHMK5kUkfZvSQ0tjDjy8.png" alt="" class="category-img"></div><span class="category-label">Protein</span></div>
                  <div class="category-item" style="transition-delay:300ms;"><div class="category-img-wrap"><img src="https://framerusercontent.com/images/eGKYnKG12y3dNxuDXID4rF7pNXU.png" alt="" class="category-img"></div><span class="category-label">Snacks</span></div>
                  <div class="category-item" style="transition-delay:400ms;"><div class="category-img-wrap"><img src="https://framerusercontent.com/images/eGKYnKG12y3dNxuDXID4rF7pNXU.png" alt="" class="category-img"></div><span class="category-label">Drinks</span></div>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:center;width:375px;gap:20px;">
                <div class="trending-header">
                  <span class="trending-title">Trending recipes</span>
                  <div class="trending-link"><span>See All</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#908D86" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="carousel" id="carousel"></div>
              </div>
            </div>
            <!-- Recipes Bottom Nav -->
            <div class="bottom-nav" style="background:#282828;">
              <div class="bottom-nav-inner">
                <div class="nav-icon-group">
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M3 10.5L12 3l9 7.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z"/><path d="M9 23V13h6v10" fill="#282828"/></svg></div>
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FE9B66"><path d="M6.5 2C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22H20V2H6.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20v7H6.5A2.5 2.5 0 0 1 4 19.5v-2z"/><rect x="8" y="6" width="2" height="8" rx="1" fill="#282828"/></svg></div>
                </div>
                <div class="nav-icon nav-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282828" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V6a2 2 0 0 1 2-2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M20 16v2a2 2 0 0 1-2 2h-2"/><path d="M8 20H6a2 2 0 0 1-2-2v-2"/><line x1="4" y1="12" x2="20" y2="12"/></svg></div>
                <div class="nav-icon-group">
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg></div>
                  <div class="nav-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M19.14 12.94a7.2 7.2 0 0 0 .05-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.25.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58z"/><circle cx="12" cy="12" r="2.2" fill="#282828"/></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-right"></div>
        <div class="btn-left-1"></div>
        <div class="btn-left-2"></div>
        <div class="btn-left-3"></div>
      </div>
    </div>
  </div>
</div>

<script>
// --- Responsive scaling ---
function setupScaling() {
  const wrappers = [
    { wrapper: document.getElementById('pw1'), inner: document.getElementById('pi1') },
    { wrapper: document.getElementById('pw2'), inner: document.getElementById('pi2') },
    { wrapper: document.getElementById('pw3'), inner: document.getElementById('pi3') },
  ];
  const page = document.getElementById('page');

  function update() {
    const style = getComputedStyle(page);
    const isColumn = style.flexDirection === 'column';
    const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const gap = isColumn ? 50 : 48;
    const count = wrappers.length;

    wrappers.forEach(({ wrapper, inner }) => {
      let availableWidth;
      if (isColumn) {
        availableWidth = page.clientWidth - padding;
      } else {
        availableWidth = (page.clientWidth - padding - gap * (count - 1)) / count;
      }
      const s = Math.min(availableWidth / 395, 1);
      const w = 395 * s;
      const h = 832 * s;
      wrapper.style.width = w + 'px';
      wrapper.style.height = h + 'px';
      wrapper.style.maxWidth = '100%';
      inner.style.transform = `scale(${s})`;
    });
  }

  const obs = new ResizeObserver(update);
  obs.observe(page);
  update();
}

// --- Count up animation ---
function countUp(el, end, duration, delay, suffix) {
  setTimeout(() => {
    const start = performance.now();
    function tick() {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * end) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, delay);
}

// --- Progress Ring ---
function buildProgressRing() {
  const svg = document.getElementById('ring-svg');
  const totalSegments = 10;
  const filledSegments = 7;
  const cx = 171.5, cy = 180;
  const innerRadius = 90, outerRadius = 145;
  const startAngle = -180, endAngle = 0;
  const totalArc = endAngle - startAngle;
  const gapAngle = 4;
  const segmentAngle = (totalArc - gapAngle * (totalSegments - 1)) / totalSegments;
  const cornerOffset = 2.2;

  function polar(angle, r) {
    const rad = angle * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function segPath(i) {
    const a1 = startAngle + i * (segmentAngle + gapAngle);
    const a2 = a1 + segmentAngle;
    const oS = polar(a1 + cornerOffset, outerRadius);
    const oE = polar(a2 - cornerOffset, outerRadius);
    const iS = polar(a1 + cornerOffset, innerRadius);
    const iE = polar(a2 - cornerOffset, innerRadius);
    const oSc = polar(a1, outerRadius);
    const oEc = polar(a2, outerRadius);
    const iSc = polar(a1, innerRadius);
    const iEc = polar(a2, innerRadius);
    const ocS = polar(a1, outerRadius - 8);
    const ocE = polar(a2, outerRadius - 8);
    const icS = polar(a1, innerRadius + 8);
    const icE = polar(a2, innerRadius + 8);
    return [
      `M ${ocS.x} ${ocS.y}`,
      `Q ${oSc.x} ${oSc.y} ${oS.x} ${oS.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${oE.x} ${oE.y}`,
      `Q ${oEc.x} ${oEc.y} ${ocE.x} ${ocE.y}`,
      `L ${icE.x} ${icE.y}`,
      `Q ${iEc.x} ${iEc.y} ${iE.x} ${iE.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${iS.x} ${iS.y}`,
      `Q ${iSc.x} ${iSc.y} ${icS.x} ${icS.y}`,
      `Z`
    ].join(' ');
  }

  const paths = [];
  for (let i = 0; i < totalSegments; i++) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', segPath(i));
    path.setAttribute('fill', '#E8E3D8');
    path.style.opacity = '0.4';
    path.style.transition = 'opacity 0.3s ease';
    svg.appendChild(path);
    paths.push(path);
  }

  // Animate
  setTimeout(() => {
    const start = performance.now();
    const duration = 1800;
    function tick() {
      const elapsed = performance.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const visible = Math.round(eased * filledSegments);
      paths.forEach((path, i) => {
        if (i < visible) { path.setAttribute('fill', '#FE9B66'); path.style.opacity = '1'; }
        else if (i < filledSegments) { path.setAttribute('fill', '#E8E3D8'); path.style.opacity = (0.4 + 0.6 * eased).toString(); }
        else { path.setAttribute('fill', '#E8E3D8'); path.style.opacity = '1'; }
      });
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, 400);
}

// --- Recipe Carousel ---
function buildCarousel() {
  const container = document.getElementById('carousel');
  const cards = [
    { img: 'https://framerusercontent.com/images/vwY8y1o6djQqxCPbNAHzOMM5vG4.png', time: '48 min', difficulty: 'Easy', kcal: '750 kcal', dots: 2 },
    { img: 'https://framerusercontent.com/images/aGIOC9rOY7Vpwd5aA6qsaRDDE.png', time: '35 min', difficulty: 'Medium', kcal: '620 kcal', dots: 3 },
    { img: 'https://framerusercontent.com/images/vwY8y1o6djQqxCPbNAHzOMM5vG4.png', time: '22 min', difficulty: 'Easy', kcal: '580 kcal', dots: 1 },
  ];

  let activeIndex = 0;
  const cardEls = [];

  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'carousel-card';
    el.innerHTML = `
      <img src="${card.img}" alt="">
      <div class="carousel-card-top">
        <div class="time-badge"><div class="time-badge-circle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 6v6l4 4" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span class="time-badge-text">${card.time}</span></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#282828"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
      </div>
      <div class="card-bottom-center">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="difficulty">${card.difficulty}</span>
          <div class="difficulty-dots">${Array.from({length:5}, (_,j) => `<div class="difficulty-dot" style="background:${j < card.dots ? '#FE9B66' : '#E0DDD7'}"></div>`).join('')}</div>
        </div>
        <span class="card-kcal">${card.kcal}</span>
      </div>
    `;
    container.appendChild(el);
    cardEls.push(el);
  });

  function updatePositions() {
    cardEls.forEach((el, i) => {
      const diff = (i - activeIndex + cards.length) % cards.length;
      const img = el.querySelector('img');
      const bottomCenter = el.querySelector('.card-bottom-center');
      if (diff === 0) {
        el.style.transform = 'translate(calc(-50%), -50%) scale(1)';
        el.style.height = '388px';
        el.style.zIndex = '10';
        el.style.background = 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 100%)';
        img.style.top = '40px'; img.style.width = '250px'; img.style.height = '250px';
        bottomCenter.style.display = 'flex';
      } else if (diff === 1) {
        el.style.transform = 'translate(calc(-50% + 300px), -50%) scale(0.94)';
        el.style.height = '364px';
        el.style.zIndex = '5';
        el.style.background = 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 100%)';
        img.style.top = '45px'; img.style.width = '264px'; img.style.height = '278px';
        bottomCenter.style.display = 'flex';
      } else {
        el.style.transform = 'translate(calc(-50% - 300px), -50%) scale(0.94)';
        el.style.height = '364px';
        el.style.zIndex = '5';
        el.style.background = 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 100%)';
        img.style.top = '45px'; img.style.width = '264px'; img.style.height = '278px';
        bottomCenter.style.display = 'flex';
      }
    });
  }

  updatePositions();
  setInterval(() => { activeIndex = (activeIndex + 1) % cards.length; updatePositions(); }, 5000);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  setupScaling();
  buildProgressRing();
  buildCarousel();

  // Onboarding animations
  setTimeout(() => { document.getElementById('cal1').classList.add('visible'); }, 300);
  setTimeout(() => { document.getElementById('cal2').classList.add('visible'); }, 600);
  setTimeout(() => { document.getElementById('cal3').classList.add('visible'); }, 900);
  setTimeout(() => { document.getElementById('onboarding-text').classList.add('visible'); }, 600);

  // Categories animation
  setTimeout(() => {
    document.querySelectorAll('.category-item').forEach(el => el.classList.add('visible'));
  }, 200);

  // Count up animations
  countUp(document.getElementById('ring-kcal'), 1250, 2000, 400, ' kcal');
  countUp(document.getElementById('meal1-kcal'), 693, 1500, 0, ' kcal');
  countUp(document.getElementById('meal1-protein'), 48, 1500, 200, 'g');
  countUp(document.getElementById('meal1-carbs'), 83, 1500, 200, 'g');
  countUp(document.getElementById('meal1-fat'), 25, 1500, 200, 'g');
  countUp(document.getElementById('meal2-kcal'), 500, 1500, 200, ' kcal');
  countUp(document.getElementById('meal2-protein'), 36, 1500, 400, 'g');
  countUp(document.getElementById('meal2-carbs'), 57, 1500, 400, 'g');
  countUp(document.getElementById('meal2-fat'), 14, 1500, 400, 'g');
});
</script>
</body>
</html>