---
layout: single
title: 项目
permalink: /projects/
lang: zh
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
  gap: 40px;
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
  <h2>项目</h2>
  <p><a href="/">← 返回首页</a></p>

  <div class="pub">
    <div class="thumbs">
      <div class="thumb">
        <a href="/images/haibao_true.jpg" class="image-popup" title="Running & Choosing 演示">
          <img src="/images/haibao_true.jpg" alt="Running&Choosing1" loading="lazy">
        </a>
      </div>
      <div class="thumb">
        <a href="/images/game_1.jpg" class="image-popup" title="Running & Choosing 演示2">
          <img src="/images/game_1.jpg" alt="Running&Choosing2" loading="lazy">
        </a>
      </div>
    </div>
    <div class="body">
      <p class="title">
        <a href="https://play.unity.com/en/games/18f5213f-d543-4c63-a6df-090885327825/run-choose">
          针对癫痫患者的心理实验游戏化变体
        </a><br>
        <span class="badge-advisor"><i class="fas fa-user-tie"></i> 指导：于倩倩博士</span>
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 参考文献：Memory’s penumbra: Episodic memory decisions induce
        lingering mnemonic biases</span>
      </p>
      <div class="meta">
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 2026.03–2026.06</span>
        <span class="badge badge-if"><i class="fas fa-chart-line"></i> Unity, C#, Blender</span>
  </div>
      <p>
        本项目旨在解决传统神经心理学实验中的一个常见局限：重复性任务结构导致的临床人群被试参与度低和流失率高。
        此项目源于我在山东省戴庄医院担任心理学实验主试的过程中的感悟，我们招收的被试包括抑郁症患者与精神分裂症患者，患者之间的病情程度以及特色症状各不相同，但是面对上千个试次均表现出了烦躁与抗拒的心理，尤其是本身有狂躁症状的患者，往往无法完成全部的试验任务。作为一个跨学科的研究人员，我观察到了这一痛点，自学了unity，在今年的3月份，于倩倩博士联系到我，邀请我合作一个新的实验系统搭建，能够引入游戏化的内容，让实验更加有趣，能够保证参与人员的参与度。
        我设计并开发了一个<strong>3D 游戏化实验系统</strong>，旨在保持实验效度的同时提高参与度。该系统基于<strong>情景记忆偏差</strong>理论，模拟记忆处理中<strong>模式分离与模式补全</strong>的交互。情景记忆偏差理论已有其本身的研究范式，被试需要通过交互快速将刺激分类为新颖、重复或相似。可点击上方蓝色主题文本试用demo。
      </p>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">
      <a href="/images/interface_sample.png" class="image-popup" title="脊柱机器人界面原型">
        <img src="/images/interface_sample.png" alt="脊柱机器人界面" loading="lazy">
      </a>
    </div>
    <div class="body">
      <p class="title">
        <a href="https://zhaobinglin2025.github.io/pdf/writing_sample.pdf">
          降低认知负荷的脊柱机器人界面研究
        </a><br>
        <span class="badge-advisor"><i class="fas fa-user-tie"></i> 导师：朱磊</span>
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 2024.09–2025.04</span>
      </p>
      <div class="meta">
        <span class="badge badge-type"><i class="fas fa-file-alt"></i> 硕士论文</span>
        <span class="badge badge-venue"><i class="fas fa-book"></i> HCI, 手术用户界面</span>
      </div>
      <p> 本研究探究界面设计如何影响复杂、高风险环境中的认知负荷，聚焦于机器人辅助脊柱手术。我应用<strong>认知负荷理论（CLT）</strong>分析手术工作流程，并推导优化用户界面的设计策略。开展了一系列控制实验，整合<strong>眼动追踪、行为测量与 NASA-TLX</strong>，系统评估视觉设计因素的影响。结果表明，优化界面显著降低了<strong>39.9% 的认知负荷（p = 0.025）</strong>，并将任务表现提升了<strong>16.9%（p = 0.048）</strong>。本工作为复杂医疗系统中的人本界面设计提供了一个<strong>经过验证的、理论驱动的框架</strong>。</p>
    </div>
  </div>

  <div class="pub">
    <div class="thumbs">
      <div class="thumb">
        <a href="/images/haibao_true.jpg" class="image-popup" title="Running & Choosing 演示">
          <img src="/images/haibao_true.jpg" alt="Running&Choosing1" loading="lazy">
        </a>
      </div>
      <div class="thumb">
        <a href="/images/game_1.jpg" class="image-popup" title="Running & Choosing 演示2">
          <img src="/images/game_1.jpg" alt="Running&Choosing2" loading="lazy">
        </a>
      </div>
    </div>
    <div class="body">
      <p class="title">
        <a href="https://zhaobinglin2026.github.io/CE/">
          大运河文化遗产时空分异归因与交互仿真研究
        </a><br>
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 参考文献：Research on the spatial distribution and influencing factors of hydronyms in cities along the Grand Canal</span>
      </p>
      <div class="meta">
        <span class="badge badge-date"><i class="fas fa-calendar"></i> 2026.04–2026.06</span>
        <span class="badge badge-if"><i class="fas fa-chart-line"></i> Unity, C#, Blender，python</span>
  </div>
      <p>
        本项目旨在展示机器学习与数字人文方面的学术能力。沿用Research on the spatial distribution and influencing factors of hydronyms in cities along the Grand Canal中的研究方法，选取大运河沿岸697个文化遗产进行了项目的微缩，融入了unity webgl进行数据分析的可视化，并且调用deepseek flash v4的api做了标签的批量处理。
        首先，我查找了网络上现有的大运河文化遗产的数据集，获得了697个文化遗产项目，包含省份、地级市、区县、遗产点名称、保护级别、类型、经度、纬度、建造年代、历史背景	相关事件、相关人物、损坏程度、修缮记录的信息。
        考虑到这些信息并不充分，历史背景的文本数量低于50字，无法做出精准的分类。我编写了代码（scrape_baidu_v4_excel.py）爬取697个文化遗产的百度百科官方文本，最终得到了500个文化遗产的富集文本数据，筛选掉了百度百科不存在官方词条的文化遗产以及百度百科的文本数目低于20字的文化遗产。
        下一步，我编写了语义均衡器（text_balancer.py）对富集后的文本做了等距切割，平均文本在每一个维度下的文本数量，使每一个维度的文本权重相同，防止主题涌现部分偏向出现频率更高的语义。接下来采用SentenceTransformer将所有文本转换成数字向量，然后用BERTopic先聚类遗产文本，再用关键词解释每个聚类。

        
      </p>
    </div>
  </div>

</div>

<!-- ===== 自建全功能灯箱（不依赖任何第三方库） ===== -->
<div id="pub-lightbox" style="display:none; position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,.88); justify-content:center; align-items:center; opacity:0; transition:opacity .3s ease;">
  <button id="pub-lb-close" style="position:absolute; top:18px; right:24px; z-index:100001; background:none; border:none; color:#fff; font-size:36px; cursor:pointer; line-height:1; padding:8px; opacity:.85; transition:opacity .2s;" title="关闭 (Esc)">✕</button>
  <button id="pub-lb-prev" style="position:absolute; left:16px; top:50%; transform:translateY(-50%); z-index:100001; background:rgba(255,255,255,.15); border:none; color:#fff; font-size:32px; width:52px; height:52px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background .2s;" title="上一张">❮</button>
  <button id="pub-lb-next" style="position:absolute; right:16px; top:50%; transform:translateY(-50%); z-index:100001; background:rgba(255,255,255,.15); border:none; color:#fff; font-size:32px; width:52px; height:52px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background .2s;" title="下一张">❯</button>
  <img id="pub-lb-img" src="" alt="" style="max-width:88vw; max-height:88vh; border-radius:8px; box-shadow:0 8px 40px rgba(0,0,0,.5); object-fit:contain; transition:opacity .25s ease;">
  <div id="pub-lb-caption" style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); color:#ddd; font-size:14px; text-align:center; max-width:80vw; pointer-events:none;"></div>
  <div id="pub-lb-counter" style="position:absolute; top:22px; left:24px; color:#aaa; font-size:14px; pointer-events:none;"></div>
</div>

<style>
  #pub-lb-close:hover { opacity:1; }
  #pub-lb-prev:hover, #pub-lb-next:hover { background:rgba(255,255,255,.3); }
</style>

<script>
(function() {
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

  document.addEventListener('click', function(e) {
    var link = e.target.closest('.pub-wrap .image-popup');
    if (link) {
      e.preventDefault();
      e.stopPropagation();
      collectImages();
      var href = link.getAttribute('href');
      var idx = 0;
      for (var i = 0; i < images.length; i++) {
        if (images[i].src === href) { idx = i; break; }
      }
      openLightbox(idx);
    }
  }, true);

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', function() { showImage(currentIndex - 1); });
  btnNext.addEventListener('click', function() { showImage(currentIndex + 1); });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape' || e.key === 'Esc') closeLightbox();
    if (e.key === 'ArrowLeft')  showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
})();
</script>
