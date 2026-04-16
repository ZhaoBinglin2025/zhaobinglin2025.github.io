---
layout: single
title: Projects
permalink: /projects/
author_profile: true
breadcrumbs: true
---

<style>
/* ===== Hide Sidebar on this page entirely ===== */
.sidebar { 
  display: none !important; 
}

/* ===== Center the page to 75% width ===== */
.page {
  width: 75% !important;
  max-width: 960px !important;
  margin: 0 auto !important;
  float: none !important;
  padding-right: 0 !important;
}

.page__inner-wrap {
  width: 100% !important;
}

/* ===== Publications Container ===== */
.pub-wrap {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.pub-wrap > h2 { 
  margin: 0 0 12px; 
  font-weight: 800; 
  font-size: 2em;
  color: #1a1a1a;
}
.pub-wrap > p { margin: 0 0 24px; font-size: 1.1em; }
.pub-wrap > p a { 
  color: #2a59ff; 
  text-decoration: none; 
  border-bottom: 2px dashed rgba(42,89,255,.3); 
  font-weight: 600;
  transition: all 0.2s;
}
.pub-wrap > p a:hover { opacity: 0.8; border-bottom: 2px solid rgba(42,89,255,.8); }

/* ===== 卡片UI ===== */
.pub {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  margin: 0 auto 40px;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pub .thumb,
.pub .thumbs {
  flex-shrink: 0;
  width: 440px;
}
.pub .thumbs {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.pub .thumbs .thumb {
  width: 100%;
}

.pub .thumb img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  transition: transform 0.5s ease;
}

.pub .body {
  flex: 1;
  min-width: 0;
  line-height: 1.6;
}

.pub .body .title { 
  margin: 0 0 0.5rem; 
  font-size: 1.25rem;
  font-weight: 700; 
  color: #2c3e50;
  line-height: 1.4;
}

.pub .badge-advisor {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  padding: 4px 12px;
  background: #f0fdfa;
  color: #0f766e;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid #ccfbf1;
}

.pub .meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0.6rem 0 1.2rem;
  padding-bottom: 14px;
  border-bottom: 1px solid #f1f5f9;
}

.pub .badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 20px;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.pub .badge-type {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #dbeafe;
}

.pub .badge-venue {
  background: #f5f3ff;
  color: #6d28d9;
  border: 1px solid #ede9fe;
}

.pub .badge-date {
  background: #fffbeb;
  color: #b45309;
  border: 1px solid #fef3c7;
}

.pub .badge-if {
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #d1fae5;
}

.pub .body a { 
  color: #2a59ff; 
  text-decoration: none; 
  border-bottom: 2px solid transparent; 
  transition: border-color 0.2s ease, opacity 0.2s ease; 
}

.pub .body a:hover { 
  border-bottom-color: rgba(42,89,255,1); 
  opacity: 0.9; 
}

.pub .body p {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
  color: #4a5568;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.pub .body p:last-child {
  margin-bottom: 0;
}

/* 手机端响应式堆叠 */
@media (max-width: 768px) {
  .page { width: 95% !important; max-width: 100% !important; }
  .pub { flex-direction: column; padding: 20px; gap: 20px; }
  .pub .thumb { flex: auto; width: 100%; margin-bottom: 8px; }
  .pub .body .title { font-size: 1.15rem; }
}



</style>

<div class="pub-wrap">
  <h2>Projects</h2>
  <p><a href="/">← Back to Home</a></p>

  <div class="pub">
    <div class="thumbs">
      <div class="thumb">
        <a href="/images/haibao_true.png" class="image-popup" title="Running & Choosing Demo">
          <img src="/images/haibao_true.png" alt="Running&Choosing1" loading="lazy">
        </a>
      </div>
      <div class="thumb">
        <a href="/images/game_1.jpg" class="image-popup" title="Running & Choosing Demo2">
          <img src="/images/game_1.jpg" alt="Running&Choosing2" loading="lazy">
        </a>
      </div>
    </div>
    <div class="body">
      <p class="title">
        <a href="https://play.unity.com/en/games/18f5213f-d543-4c63-a6df-090885327825/goonline">
          Game-Based Psychological Experiment Variants for Epileptic Patients
        </a><br>
        <span class="badge-advisor"><i class="fas fa-user-tie"></i> Advisor: Qianqian Yu, Hongxiao Li</span>
      </p>
      <div class="meta">
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 2026.03–2026.04</span>
        <span class="badge badge-if"><i class="fas fa-chart-line"></i> Unity, C#, Blender</span>
  </div>
      <p>
        This project addresses a common limitation in traditional neuropsychological experiments: low participant engagement and high attrition rates due to repetitive task structures, particularly in clinical populations.
        I designed and developed a <strong>3D game-based experimental paradigm</strong> to improve engagement while preserving experimental validity. The system is grounded in the theory of <strong>episodic memory bias</strong>, modeling the interaction between <strong>pattern separation and pattern completion</strong> in memory processing.
        Participants are required to rapidly classify stimuli as novel, repeated, or similar variants through interactive gameplay, enabling the collection of behavioral responses under more naturalistic and engaging conditions.
        This work demonstrates how <strong>interactive system design can enhance experimental paradigms</strong>, bridging cognitive theory and real-world applicability in clinical research contexts.
      </p>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">
      <a href="/images/interface_sample.png" class="image-popup" title="Spine robot interface prototype">
        <img src="/images/interface_sample.png" alt="Hybrid BTMS" loading="lazy">
      </a>
    </div>
    <div class="body">
      <p class="title">
        <a href="https://zhaobinglin2025.github.io/pdf/writing_sample.pdf">
          Spine Robot Interface Research for Cognitive Load Reduction
        </a><br>
        <span class="badge-advisor"><i class="fas fa-user-tie"></i> Advisor: Lei Zhu</span>
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 2024.09–2025.04</span>
      </p>
      <div class="meta">
        <span class="badge badge-type"><i class="fas fa-file-alt"></i> Master's Thesis</span>
        <span class="badge badge-venue"><i class="fas fa-book"></i> HCI, Surgical User Interface</span>
      </div>
      <p> This research investigates how interface design influences cognitive load in complex, high-stakes environments, focusing on robot-assisted spinal surgery.I applied <strong>Cognitive Load Theory (CLT)</strong> to analyze surgical workflows and derive design strategies for optimizing user interfaces. A series of controlled experiments were conducted, integrating <strong>eye-tracking, behavioral measures, and NASA-TLX</strong> to systematically evaluate the impact of visual design factors.The results show that the optimized interface significantly reduced cognitive load by <strong>39.9% (p = 0.025)</strong> and improved task performance by <strong>16.9% (p = 0.048)</strong>.This work provides a <strong>validated, theory-driven framework</strong> for designing human-centered interfaces in complex medical systems.</p>
    </div>
  </div>

</div>

<!-- ===== 自建全功能灯箱（不依赖任何第三方库） ===== -->
<div id="pub-lightbox" style="display:none; position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,.88); justify-content:center; align-items:center; opacity:0; transition:opacity .3s ease;">
  <!-- 关闭按钮 ✕ -->
  <button id="pub-lb-close" style="position:absolute; top:18px; right:24px; z-index:100001; background:none; border:none; color:#fff; font-size:36px; cursor:pointer; line-height:1; padding:8px; opacity:.85; transition:opacity .2s;" title="Close (Esc)">✕</button>
  <!-- 左箭头 -->
  <button id="pub-lb-prev" style="position:absolute; left:16px; top:50%; transform:translateY(-50%); z-index:100001; background:rgba(255,255,255,.15); border:none; color:#fff; font-size:32px; width:52px; height:52px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background .2s;" title="Previous">❮</button>
  <!-- 右箭头 -->
  <button id="pub-lb-next" style="position:absolute; right:16px; top:50%; transform:translateY(-50%); z-index:100001; background:rgba(255,255,255,.15); border:none; color:#fff; font-size:32px; width:52px; height:52px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background .2s;" title="Next">❯</button>
  <!-- 图片 -->
  <img id="pub-lb-img" src="" alt="" style="max-width:88vw; max-height:88vh; border-radius:8px; box-shadow:0 8px 40px rgba(0,0,0,.5); object-fit:contain; transition:opacity .25s ease;">
  <!-- 标题 -->
  <div id="pub-lb-caption" style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); color:#ddd; font-size:14px; text-align:center; max-width:80vw; pointer-events:none;"></div>
  <!-- 计数器 -->
  <div id="pub-lb-counter" style="position:absolute; top:22px; left:24px; color:#aaa; font-size:14px; pointer-events:none;"></div>
</div>

<style>
  #pub-lb-close:hover { opacity:1; }
  #pub-lb-prev:hover, #pub-lb-next:hover { background:rgba(255,255,255,.3); }
</style>

<script>
(function() {
  // 收集所有 .pub-wrap 里的灯箱图片
  var images = [];
  var currentIndex = 0;

  function collectImages() {
    images = [];
    var links = document.querySelectorAll('.pub-wrap .image-popup');
    links.forEach(function(a) {
      images.push({
        src: a.getAttribute('href'),
        title: a.getAttribute('title') || a.querySelector('img').getAttribute('alt') || ''
      });
    });
  }

  var overlay  = document.getElementById('pub-lightbox');
  var img      = document.getElementById('pub-lb-img');
  var caption  = document.getElementById('pub-lb-caption');
  var counter  = document.getElementById('pub-lb-counter');
  var btnClose = document.getElementById('pub-lb-close');
  var btnPrev  = document.getElementById('pub-lb-prev');
  var btnNext  = document.getElementById('pub-lb-next');

  function showImage(idx) {
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    currentIndex = idx;
    img.style.opacity = '0';
    setTimeout(function() {
      img.src = images[idx].src;
      caption.textContent = images[idx].title;
      counter.textContent = (idx + 1) + ' / ' + images.length;
      img.style.opacity = '1';
    }, 150);
  }

  function openLightbox(idx) {
    collectImages();
    overlay.style.display = 'flex';
    // 强制 reflow 让 transition 生效
    void overlay.offsetWidth;
    overlay.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    showImage(idx);
  }

  function closeLightbox() {
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }

  // 绑定所有图片链接的点击事件
  document.addEventListener('click', function(e) {
    var link = e.target.closest('.pub-wrap .image-popup');
    if (link) {
      e.preventDefault();
      e.stopPropagation();
      // 找到它在列表中的索引
      collectImages();
      var href = link.getAttribute('href');
      var idx = 0;
      for (var i = 0; i < images.length; i++) {
        if (images[i].src === href) { idx = i; break; }
      }
      openLightbox(idx);
    }
  }, true); // useCapture = true 来抢先拦截

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', function() { showImage(currentIndex - 1); });
  btnNext.addEventListener('click', function() { showImage(currentIndex + 1); });

  // 点击背景关闭
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeLightbox();
  });

  // 键盘导航
  document.addEventListener('keydown', function(e) {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape' || e.key === 'Esc') closeLightbox();
    if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
})();
</script>
