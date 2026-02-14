---
layout: single
title: Publications
permalink: /publications/
author_profile: true
breadcrumbs: true
---

<style>
/* ===== 仅控制本页 Publications 容器宽度 ===== */
.pub-wrap{
  max-width: 960px;      /* 想更窄 880/900，想更宽 960/1000 */
  margin: 0 auto;
}

/* ===== 左图右文条目 ===== */
.pub{
  display: flex;
  align-items: flex-start;
  gap: 28px;
  margin: 28px 0 36px;
  padding-bottom: 18px;
  border-bottom: 1px dashed #e8e8e8;
}

.pub .thumb{
  flex: 0 0 440px;       /* 图片更大：可改 460；更小：420/400 */
}

.pub .thumb img{
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}

.pub .body{
  flex: 1;
  min-width: 0;
  line-height: 1.58;
}

.pub .title{ margin: 0 0 .25rem; font-weight: 800; }
.pub .meta{ margin: .1rem 0 .6rem; font-style: italic; color: #666; }

/* 链接视觉统一（取消已访问紫色） */
.pub .body a{ color:#2a59ff; text-decoration:none; border-bottom:1px dashed rgba(42,89,255,.5); }
.pub .body a:hover{ opacity:.85; }
.pub .body a:visited{ color:#2a59ff; }

/* 手机端：上下堆叠 */
@media (max-width: 768px){
  .pub{ flex-direction: column; }
  .pub .thumb{ flex: auto; }
}

.page__content h2:first-of-type,
.page__content p:first-of-type {
  margin-left: calc((100% - 960px) / 2);  /* 这里的 920 与 .pub-wrap 相同 */
  max-width: 920px;
}

/* 让标题和返回链接与正文节奏一致 */
.pub-wrap > h2 { margin: 0 0 8px; }
.pub-wrap > p { margin: 0 0 16px; }

/* 返回链接样式（可选） */
.pub-wrap > p a { color:#2a59ff; text-decoration:none; border-bottom:1px dashed rgba(42,89,255,.5); }
.pub-wrap > p a:hover{ opacity:.85; }

  .pub .body p {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
}


</style>




<div class="pub-wrap">
  <h2>Publications / Projects</h2>
  <p><a href="/">← Back to Home</a></p>


<div class="pub">
  <div class="thumb">
    <img src="/images/thermal_runaway_ml.png" alt="Thermal runaway severity ML framework" loading="lazy">
  </div>
  <div class="body">
    <p class="title">
      <a href="https://github.com/HU-Qiqi/thermal-runaway-severity-prediction">
        Safety-Oriented Pre-Event Severity Prediction of Lithium-Ion Battery Thermal Runaway
      </a>
      <em>(Advisor: Minqiang Wu, Hongda Du)</em>
    </p>
    <p class="meta">Journal Article · 2025.11-2026.01 · Submitted to Process Safety and Environmental Protection (IF=7.8)</p>
    <p>
      Proposed an <strong>interpretable machine-learning framework</strong> for <strong>pre-event prediction</strong> of lithium-ion battery thermal runaway severity using only structural and engineering metadata. 
      Constructed a hazard-oriented <strong>Severity Index</strong> integrating heat release and material ejection indicators, and developed a <strong>CatBoost-based classifier</strong> achieving <strong>81% accuracy</strong> with <strong>100% recall for High-severity events</strong>. 
      SHAP analysis provides physics-consistent interpretability to support safety-oriented decision-making.
    </p>
    <p>
      提出一种基于<strong>结构与工程元数据</strong>的锂离子电池<strong>热失控事前严重度预测框架</strong>，构建融合放热与喷射特征的<strong>危险导向严重度指数（Severity Index）</strong>，并基于 <strong>CatBoost</strong> 实现多分类预测，整体准确率达 <strong>81%</strong>，对高危事件识别率 <strong>100%</strong>。通过 SHAP 可解释分析揭示关键安全影响因素，支持风险导向电池安全评估。
    </p>
  </div>
</div>




  <div class="pub">
    <div class="thumb">
      <img src="/images/BTMS.png" alt="Hybrid BTMS" loading="lazy">
    </div>
    <div class="body">
      <p class="title">Design and Multi-Objective Optimization of Efficient UAV Battery Thermal Management System Using PCM–Air Synergistic Cooling Strategy <em>(Advisor: Minqiang Wu, Hongda Du)</em></p>
    <p class="meta">Journal Article · 2025.09-2025.12 · Submitted to Applied Thermal Engineering (IF=6.9)</p>
      <p>Developed a <strong>PCM–air hybrid battery thermal management system (BTMS)</strong> for UAV lithium-ion batteries, achieving <strong>43.3% lower peak temperature (below 46.8 °C)</strong> with only <strong>22.2 wt% mass increase</strong>. Multi-factor optimization using an <strong>entropy–TOPSIS</strong> framework ensures a balance between cooling performance and lightweight design.</p>
      <p>提出了一种用于无人机锂离子电池的<strong>相变材料–风冷混合热管理系统（BTMS）</strong>，在总质量仅增加约 22 wt% 的情况下，使电池最高温度降低 43.3% 且保持低于 46.8 °C；通过 TOPSIS 优化实现轻量化与散热性能的平衡。</p>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">
      <img src="/images/WM_encoder_decoder.png" alt="WM encoder-decoder schematic" loading="lazy">
    </div>
    <div class="body">
      <p class="title">
        <a href="https://github.com/HU-Qiqi/WM_encoder_decoder">
          WM_encoder_decoder for Copyright Protection in Image-to-Image Tasks (Diffusion)
        </a> · <a href="https://huqiqi.net/file/WM_encoder_decoder.pptx">PPT</a>
        <em>(Advisor: Feng Zheng)</em>
      </p>
      <p class="meta">Project / Code · 2024.03-2024.12 </p>
      <p>Dual-protection scheme combining <strong>digital watermarking</strong> and <strong>adversarial perturbations</strong> in the latent space; precise embed/extract via a pre-trained encoder–decoder; robust, transferable, and high-quality without model fine-tuning.</p>
      <p>提出<strong>数字水印 + 对抗扰动</strong>的双重保护方案，在隐空间抑制篡改与生成操控；无需微调、具有良好迁移性与鲁棒性。</p>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">
      <img src="/images/SSNN.png" alt="SSNN framework" loading="lazy">
    </div>
    <div class="body">
      <p class="title">
        <a href="https://www.researchgate.net/publication/385489004_Privacy-Preserving_Secure_Shared_Nearest_Neighbor_Clustering_Scheme_in_Internet_of_Things">
          Privacy-Preserving Secure Shared Nearest Neighbor Clustering Scheme in Internet of Things
        </a> <em>(Advisor: Hanlin Zhang)</em>
      </p>
      <p class="meta">Research Project</p>
      <p>Cloud-assisted, privacy-preserving <strong>SNN clustering</strong> using <strong>orthogonal matrix transformation</strong> and lightweight verification; cuts the most complex step from <strong>10.859 s → 1.183 s</strong> while preserving accuracy.</p>
      <p>云辅助的<strong>隐私保护 SNN 聚类</strong>，外包前以正交矩阵加密并可验证返回结果；在保持精度下显著降低本地计算开销。</p>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">
      <img src="/images/SNLM.png" alt="SNLM denoising outsourcing" loading="lazy">
    </div>
    <div class="body">
      <p class="title">Secure and Efficient Image Denoising Algorithm in Internet of Things <em>(Advisor: Hanlin Zhang)</em></p>
      <p class="meta">Degree Thesis</p>
      <p>Secure outsourcing for image denoising using <strong>Householder transformation</strong> and optimal-probability verification; maintains accuracy (<strong>PSNR ≈ 20–21 dB</strong>) while greatly reducing client computation.</p>
      <p>面向物联网图像去噪的<strong>安全外包方案</strong>，以豪斯霍尔德变换保护隐私并可验证结果；在 <strong>PSNR 约 20–21 dB</strong> 下显著降低端侧计算。</p>
    </div>
  </div>

</div>
