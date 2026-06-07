---
layout: page
lang: zh
---

<style>
  .hero-section, .hero-section * {
    font-family: 'PT Serif', serif !important;
    color: #333332;
    font-style: normal !important;
  }
  .hero-section {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
    margin-bottom: 30px;
  }
  .hero-section h1 {
    color: #2c3e50;
  }
  .styled-list {
    list-style: disc !important;
    padding-left: 20px !important;
  }
  .styled-list li {
    padding-left: 0 !important;
    color: #333332 !important;
  }
  .styled-list li::before {
    display: none !important;
  }
  .about-me-photo {
    float: right;
    width: 300px;
    margin: 0 0 20px 30px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    opacity: 0.95;
    filter: brightness(0.98);
  }
  @media (max-width: 600px) {
    .about-me-photo {
      width: 30% !important;
      margin: 0 0 10px 15px !important;
    }
  }

  h2.section-title {
    font-size: 1.5em !important;
    font-weight: 600 !important;
    margin-top: 1.2em !important;
    margin-bottom: 0.6em !important;
  }
</style>

<h2 class="section-title">你好，我是赵冰琳（Binglin Zhao）。</h2>
{:.section-title}
我的研究位于认知科学、交互系统设计与空间智能的交叉领域。我的研究兴趣聚焦于空间交互元素的定量化设计与人的认知之间的相互作用。
我擅长以设计探索为目的的认知神经实验系统搭建，精通python、C#编程、机器学习。

---
## 学术经历
{:.section-title}
<style>
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
  }
  .edu-place-pro {
    font-weight: 600;
    font-size: 16pt;
  }
  .edu-place {
    font-weight: 600;
  }
  .edu-gpa {
    white-space: nowrap;
  }
  .edu-section {
    margin-bottom: 28px;
  }
  .edu-links {
    margin-top: 2px;
  }
  .edu-thesis {
    font-size: 14pt;
  }
</style>

<div class="edu-section">
  <div class="edu-row">
    <span class="edu-place-pro">认知神经科学研究助理</span>
    <span class="edu-place">北京脑科学与类脑研究中心 & 山东省戴庄医院</span>
  </div>

  <ul>
    <li>运用python 对大规模（100+ 被试）眼动数据做预处理、前后对比差异检验以及结论分析</li>
    <li>调试psychopy 代码，解决了其无法正常向眼动仪实时发送标签的问题</li>
    <li>在山东省戴庄医院物理治疗科负责核磁MRI扫描、经颅超声治疗及认知实验的主试</li>
  </ul>
</div>
---

<div class="edu-row">
  <span class="edu-place">哈尔滨工业大学</span><span class="edu-place">设计学</span><span class="edu-place">工学硕士</span>
  <span class="edu-gpa"><strong>GPA:</strong> 3.61 / 4.0</span>
</div>
<div class="edu-row">
 <span class="edu-thesis"><strong>基于认知负荷理论的脊柱手术机器人界面设计研究</strong></span>
</div>
  <div class="edu-links">
🔗 <a href="https://zhaobinglin2025.github.io/pdf/writing_sample.pdf">写作样本</a>
  </div>

<ul>
  <li>基于认知负荷理论（CLT）开展了一项因子实验研究，系统探究关键界面设计因素（如颜色、布局与图标设计）对脊柱手术机器人界面认知负荷的影响。</li>
  <li>通过综合实验一的发现，将 CLT 转化为可操作的视觉设计策略，推导出一组基于证据的界面设计原则。</li>
  <li>设计并开展了一项对比评估研究（实验二），采用多方法途径（包括眼动指标、任务完成时间与 NASA-TLX）综合评估认知负荷与表现，以评估优化界面与基线系统的有效性。</li>
  <li>结果表明，优化界面显著降低了 39.9% 的认知负荷（p=0.025），并将任务表现提升了 16.9%（p=0.048）。</li>
</ul>

---
<div class="edu-section">
<span class="edu-place-pro">工业设计学士</span>
<div class="edu-row">
  <span class="edu-place">河北工业大学（天津，中国）</span>
  <span class="edu-gpa"><strong>GPA:</strong> 3.43 / 4.0</span>
</div>

</div>

---
## 研究兴趣

### 高风险情境下的人本 HCI
- 关注安全关键环境（如手术系统、航空、高风险操作）中的界面设计，其中微小的设计决策可能产生重大后果
- 聚焦人因工程与数据驱动设计，以降低认知负荷并支持压力下的可靠表现

### 认知驱动设计与跨学科研究
- 关注设计如何影响人类认知，特别是在认知负荷、注意力与决策方面
- 有兴趣将认知心理学与神经科学的见解整合到 HCI 中
- 旨在使用可测量的认知与行为数据来指导界面评估与开发

### 实验系统与数据驱动设计
- 热衷于设计实验并构建交互系统以研究人类行为
- 特别有兴趣开发基于 Unity 的实验范式
- 结合控制实验设计与系统开发，使用行为与眼动数据进行循证设计

### 用户体验与应用 HCI
- 关注从需求获取到实际使用的完整交互过程中的用户体验
- 有兴趣将实证发现转化为适用于不同用户群体和情境的实用且可用的设计解决方案

---

## 技能 / 研究工具箱
- **编程：** Python, C#  
- **数据分析：** SPSS, Python (NumPy, Pandas)  
- **实验工具：** PsychoPy, Tobii 眼动仪  
- **设计与开发：** Unity, Figma  
- **学术写作：** LaTeX  
- **语言：**  英文（雅思7.0）