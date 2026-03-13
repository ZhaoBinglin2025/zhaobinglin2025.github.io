---
layout: page
title: Publications
permalink: /publications/
---

<style>
/* ===== 仅控制本页 Publications 容器宽度 ===== */
.pub-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== 论文卡片样式 ===== */
.pub {
  display: flex;
  align-items: stretch;
  gap: 30px;
  margin: 40px 0;
  padding: 25px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
}

.pub:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(52, 152, 219, 0.2);
}

.pub .thumb {
  flex: 0 0 420px;
  display: flex;
  align-items: center;
}

.pub .thumb img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
}

.pub:hover .thumb img {
  transform: scale(1.02);
}

.pub .body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pub .title {
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  color: #2c3e50;
}

.pub .title a {
  color: inherit;
  background-image: linear-gradient(120deg, #3498db 0%, #3498db 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.1em;
  background-position: 0 95%;
  transition: background-size 0.25s ease-in;
}

.pub .title a:hover {
  background-size: 100% 100%;
  color: #fff;
}

/* Meta Data Chips */
.pub .meta-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.chip {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.chip-journal { background: #eef2f7; color: #5a6b82; }
.chip-year { background: #fff4e6; color: #d97706; }
.chip-if { background: #ecfdf5; color: #059669; font-weight: 700; }
.chip-advisor { background: #fdf2f8; color: #db2777; }

.pub p {
  margin: 0 0 10px;
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.65;
}

.pub .text-cn {
  font-size: 0.9rem;
  color: #718096;
  border-left: 3px solid #e2e8f0;
  padding-left: 12px;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .pub { flex-direction: column; align-items: center; text-align: left; }
  .pub .thumb { flex: 0 0 auto; width: 100%; }
}


</style>




<div class="pub-wrap">
  <h2>Publications / Projects</h2>
  <p><a href="/">← Back to Home</a></p>


<div class="pub">
  <div class="thumb">
    <a href="/images/thermal_runaway_ml.png" class="image-popup" title="Thermal runaway severity ML framework">
      <img src="/images/thermal_runaway_ml.png" alt="Thermal runaway severity ML framework" loading="lazy">
    </a>
  </div>
  <div class="body">
    <div class="title">
      <a href="https://github.com/HU-Qiqi/thermal-runaway-severity-prediction">
        Safety-Oriented Pre-Event Severity Prediction of Lithium-Ion Battery Thermal Runaway
      </a>
    </div>
    <div class="meta-container">
      <span class="chip chip-journal">Journal Article / PSEP</span>
      <span class="chip chip-if">IF=7.8</span>
      <span class="chip chip-year">2025.11-2026.02</span>
      <span class="chip chip-advisor">Advisor: Minqiang Wu, Hongda Du</span>
    </div>
    <p>
      Proposed an <strong>interpretable machine-learning framework</strong> for <strong>pre-event prediction</strong> of lithium-ion battery thermal runaway severity using only structural and engineering metadata. 
      Constructed a hazard-oriented <strong>Severity Index</strong> integrating heat release and material ejection indicators, and developed a <strong>CatBoost-based classifier</strong> achieving <strong>81% accuracy</strong> with <strong>100% recall for High-severity events</strong>.
    </p>
    <div class="text-cn">
      提出一种基于结构与工程元数据的锂离子电池<strong>热失控事前严重度预测框架</strong>，构建危险导向严重度指数，实现了 <strong>81%</strong> 的预测准确率与 <strong>100%</strong> 的高危事件识别率。
    </div>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <a href="/images/BTMS.png" class="image-popup" title="Hybrid BTMS">
      <img src="/images/BTMS.png" alt="Hybrid BTMS" loading="lazy">
    </a>
  </div>
  <div class="body">
    <div class="title">Design and Multi-Objective Optimization of Efficient UAV Battery Thermal Management System Using PCM–Air Synergistic Cooling Strategy</div>
    <div class="meta-container">
      <span class="chip chip-journal">Journal Article / ATE</span>
      <span class="chip chip-if">IF=6.9</span>
      <span class="chip chip-year">2025.09-2025.12</span>
      <span class="chip chip-advisor">Advisor: Minqiang Wu, Hongda Du</span>
    </div>
    <p>
      Developed a <strong>PCM–air hybrid battery thermal management system (BTMS)</strong> for UAV lithium-ion batteries, achieving <strong>43.3% lower peak temperature</strong> with only <strong>22.2 wt% mass increase</strong>. Multi-factor optimization ensures a balance between cooling performance and lightweight design.
    </p>
    <div class="text-cn">
      提出一种相变材料–风冷混合热管理系统（BTMS），使电池最高温度降低 <strong>43.3%</strong>，并通过 <strong>TOPSIS 优化</strong>平衡了散热性能与轻量化需求。
    </div>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <a href="/images/WM_encoder_decoder.png" class="image-popup" title="WM encoder-decoder schematic">
      <img src="/images/WM_encoder_decoder.png" alt="WM encoder-decoder schematic" loading="lazy">
    </a>
  </div>
  <div class="body">
    <div class="title">
      <a href="https://github.com/HU-Qiqi/WM_encoder_decoder">
        WM_encoder_decoder for Copyright Protection in Image-to-Image Tasks (Diffusion)
      </a> · <a href="https://huqiqi.net/file/WM_encoder_decoder.pptx">PPT</a>
    </div>
    <div class="meta-container">
      <span class="chip chip-journal">Project / Code</span>
      <span class="chip chip-year">2024.03-2024.12</span>
      <span class="chip chip-advisor">Advisor: Feng Zheng</span>
    </div>
    <p>Dual-protection scheme combining <strong>digital watermarking</strong> and <strong>adversarial perturbations</strong> in the latent space; precise embed/extract via a pre-trained encoder–decoder; robust, transferable, and high-quality without model fine-tuning.</p>
    <div class="text-cn">结合数字水印与对抗扰动的双重保护方案，在隐空间实现篡改抑制，具有良好的迁移性与鲁棒性。</div>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <a href="/images/SSNN.png" class="image-popup" title="SSNN framework">
      <img src="/images/SSNN.png" alt="SSNN framework" loading="lazy">
    </a>
  </div>
  <div class="body">
    <div class="title">
      <a href="https://www.researchgate.net/publication/385489004_Privacy-Preserving_Secure_Shared_Nearest_Neighbor_Clustering_Scheme_in_Internet_of_Things">
        Privacy-Preserving Secure Shared Nearest Neighbor Clustering Scheme in Internet of Things
      </a>
    </div>
    <div class="meta-container">
      <span class="chip chip-journal">Research Project</span>
      <span class="chip chip-advisor">Advisor: Hanlin Zhang</span>
    </div>
    <p>Cloud-assisted, privacy-preserving <strong>SNN clustering</strong> using <strong>orthogonal matrix transformation</strong> and lightweight verification; cuts calculation time from <strong>10.859 s → 1.183 s</strong> while preserving accuracy.</p>
    <div class="text-cn">云辅助的隐私保护 SNN 聚类，采用正交矩阵加密技术，显著降低了本地计算开销。</div>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <a href="/images/SNLM.png" class="image-popup" title="SNLM denoising outsourcing">
      <img src="/images/SNLM.png" alt="SNLM denoising outsourcing" loading="lazy">
    </a>
  </div>
  <div class="body">
    <div class="title">Secure and Efficient Image Denoising Algorithm in Internet of Things</div>
    <div class="meta-container">
      <span class="chip chip-journal">Degree Thesis</span>
      <span class="chip chip-advisor">Advisor: Hanlin Zhang</span>
    </div>
    <p>Secure outsourcing for image denoising using <strong>Householder transformation</strong> and optimal-probability verification; maintains accuracy (<strong>PSNR ≈ 20–21 dB</strong>) while greatly reducing client computation.</p>
    <div class="text-cn">面向物联网的图像去噪安全外包方案，利用豪斯霍尔德变换保护隐私，并实现高效可验证性。</div>
  </div>
</div>

</div>
