---
layout: page
permalink: /publications/index.html
title: Publications
---

<style>
.pub{display:flex; gap:16px; align-items:flex-start; margin:18px 0;}
.pub .thumb{flex:0 0 240px;}           /* 左侧图宽度，可改成 200/220 等 */
.pub .thumb img{width:100%; height:auto; border-radius:8px;}
.pub .body{flex:1; min-width:0;}
.pub .title{margin:0; font-weight:700;}
.pub .meta{margin:.2rem 0 .4rem; font-style:italic; color:#555;}
.pub .links a{margin-right:10px; border-bottom:1px dashed #888; text-decoration:none;}
@media (max-width:680px){ .pub{flex-direction:column;} .pub .thumb{flex:auto;} }
</style>

<style>
.page__content {
  max-width: 1100px !important;   /* 默认大约720px，这里放宽 */
}
.pub {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 2rem;
}
.pub .thumb { flex: 0 0 300px; }   /* 原来240，可改到260~320 */
.pub .thumb img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.pub .body { flex: 1; min-width: 0; }
.pub .title { margin: 0; font-weight: 700; }
.pub .meta { margin: .3rem 0 .5rem; font-style: italic; color: #555; }
@media (max-width: 768px){
  .pub { flex-direction: column; }
  .pub .thumb { flex: auto; }
}
</style>


## Publications / Projects

<div class="pub">
  <div class="thumb">
    <img src="/images/pcm_air_libs.png" alt="Hybrid BTMS">
  </div>
  <div class="body">
    <p class="title">Design and Multi-Objective Optimization of Efficient UAV Battery Thermal Management System Using PCM–Air Synergistic Cooling Strategy <em>(Advisor: Hongda Du)</em></p>
    <p class="meta">Project · 2024–present</p>
    <p>Developed a <strong>PCM–air hybrid battery thermal management system (BTMS)</strong> for UAV lithium-ion batteries, achieving <strong>43.3% lower peak temperature (below 46.8 °C)</strong> with only <strong>22.2 wt% mass increase</strong>. Multi-factor optimization using an <strong>entropy–TOPSIS</strong> framework ensures a balance between cooling performance and lightweight design.</p>
    <p>提出了一种用于无人机锂离子电池的<strong>相变材料–风冷混合热管理系统（BTMS）</strong>，在总质量仅增加约 22 wt% 的情况下，使电池最高温度降低 43.3% 且保持低于 46.8 °C；通过 TOPSIS 优化实现轻量化与散热性能的平衡。</p>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <img src="/images/WM_encoder_decoder.png" alt="WM encoder-decoder">
  </div>
  <div class="body">
    <p class="title"><a href="https://github.com/HU-Qiqi/WM_encoder_decoder">WM_encoder_decoder for Copyright Protection in Image-to-Image Tasks (Diffusion)</a> · <a href="https://huqiqi.net/file/WM_encoder_decoder.pptx">PPT</a> <em>(Advisor: Feng Zheng)</em></p>
    <p class="meta">Project / Code</p>
    <p>Dual-protection scheme combining <strong>digital watermarking</strong> and <strong>adversarial perturbations</strong> in the latent space; precise embed/extract via a pre-trained encoder–decoder; robust, transferable, and high-quality without model fine-tuning.</p>
    <p>提出<strong>数字水印 + 对抗扰动</strong>的双重保护方案，在隐空间抑制篡改与生成操控；无需微调、具有良好迁移性与鲁棒性。</p>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <img src="/images/SSNN.png" alt="SSNN">
  </div>
  <div class="body">
    <p class="title"><a href="https://www.researchgate.net/publication/385489004_Privacy-Preserving_Secure_Shared_Nearest_Neighbor_Clustering_Scheme_in_Internet_of_Things">Privacy-Preserving Secure Shared Nearest Neighbor Clustering Scheme in Internet of Things</a> <em>(Advisor: Hanlin Zhang)</em></p>
    <p class="meta">Research Project</p>
    <p>Cloud-assisted, privacy-preserving <strong>SNN clustering</strong> using <strong>orthogonal matrix transformation</strong> and lightweight verification; cuts the most complex step from <strong>10.859 s → 1.183 s</strong> while preserving accuracy.</p>
    <p>云辅助的<strong>隐私保护 SNN 聚类</strong>，外包前以正交矩阵加密并可验证返回结果；在保持精度下显著降低本地计算开销。</p>
  </div>
</div>

<div class="pub">
  <div class="thumb">
    <img src="/images/SNLM.png" alt="SNLM">
  </div>
  <div class="body">
    <p class="title">Secure and Efficient Image Denoising Algorithm in Internet of Things <em>(Advisor: Hanlin Zhang)</em></p>
    <p class="meta">Degree Thesis</p>
    <p>Secure outsourcing for image denoising using <strong>Householder transformation</strong> and optimal-probability verification; maintains accuracy (<strong>PSNR ≈ 20–21 dB</strong>) while greatly reducing client computation.</p>
    <p>面向物联网图像去噪的<strong>安全外包方案</strong>，以豪斯霍尔德变换保护隐私并可验证结果；在 <strong>PSNR 约 20–21 dB</strong> 下显著降低端侧计算。</p>
  </div>
</div>
