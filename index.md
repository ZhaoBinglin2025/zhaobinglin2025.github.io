---
layout: page
lang: zh
---
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  /* 全局与基本排版优化 */
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
  
  /* 列表样式修复 */
  .styled-list, ul {
    list-style: disc !important;
    padding-left: 20px !important;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .styled-list li, ul li {
    padding-left: 0 !important;
    color: #333332 !important;
    line-height: 1.6;
    margin-bottom: 6px;
  }
  .styled-list li::before {
    display: none !important;
  }
  
  /* 头像/照片 */
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

  /* 标题样式 */
  h2.section-title {
    font-family: "Noto Serif SC", serif !important;
    font-size: 1.4em !important;
    font-weight: 600 !important;
    letter-spacing: 0.03em;
    color: #000000;
    margin-top: 1.6em !important;
    margin-bottom: 0.6em !important;
  }

  /* 履历行基础 Flex 布局 */
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 15px;
    margin-top: 12px;
    margin-bottom: 6px;
  }
  .edu-place-pro {
    font-weight: 600;
    font-size: 1.1em;
    color: #111111;
  }
  .edu-place {
    font-weight: 600;
    color: #222222;
  }
  .edu-gpa {
    white-space: nowrap;
    color: #444444;
  }
  .edu-thesis {
    font-size: 1.05em;
    color: #111111;
  }
  .edu-links {
    margin-top: 2px;
    white-space: nowrap;
  }
  .edu-place a {
    color: #6050db;
    font-weight: 600;
    text-decoration: none;
  }
  .edu-place a:hover {
    color: #2c2c83;
    text-decoration: underline;
  }
  
  /* 辅助紧凑并排样式 */
  .edu-meta-inline {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
</style>

<h2 class="section-title">你好！我是赵冰琳。</h2>

---
我的研究位于空间智能、认知科学与交互系统设计的交叉领域。我的研究兴趣聚焦于空间交互元素的定量化设计与人的认知之间的相互作用。
我擅长以设计探索为目的的认知神经实验系统搭建，精通 Python、C# 编程、机器学习。


<h2 class="section-title">学术经历</h2>

---
<div class="edu-row">
  <span class="edu-place-pro">认知神经科学研究助理</span>
  <span class="edu-place">
    <a href="https://cibr.ac.cn/home" target="_blank">北京脑科学与类脑研究中心</a>
    &
    <a href="https://www.sdsdzyy.cn/" target="_blank">山东省戴庄医院</a>
  </span>
</div>

<ul>
  <li>运用 Python 对大规模（100+ 被试）眼动数据做预处理、前后对比差异检验以及结论分析</li>
  <li>调试 PsychoPy 代码，解决了其无法正常向眼动仪实时发送标签的问题</li>
  <li>在山东省戴庄医院物理治疗科负责核磁 MRI 扫描、经颅超声治疗及认知实验的主试</li>
</ul>


<h2 class="section-title">教育经历</h2>

---
<div class="edu-row">
  <span class="edu-place-pro">哈尔滨工业大学</span>
  <div class="edu-meta-inline">
    <span class="edu-place">设计学 · 工学硕士</span>
    <span class="edu-gpa"><strong>GPA:</strong> 3.61 / 4.0</span>
  </div>
  <span class="edu-gpa"><strong>2023.09 - 至今</strong></span>
</div>

<ul>
  <li>哈尔滨工业大学学业奖学金二等奖 <span style="color:#666; font-size:0.9em;">(2023.09 & 2024.09)</span></li>
  <li>Community Toollink——社区共享工具车设计 · 全国大学生工业设计大赛黑龙江赛区三等奖 <span style="color:#666; font-size:0.9em;">(2024)</span></li>
  <li>废墟搜救机器人的概念设计 · 全国大学生工业设计大赛黑龙江赛区三等奖 <span style="color:#666; font-size:0.9em;">(2024)</span></li>
</ul>

<div class="edu-row" style="margin-top: 15px;">
  <span class="edu-thesis">
    <strong>硕士研究：基于认知负荷理论的脊柱手术机器人界面设计研究</strong>
  </span>
  <span class="edu-links">
    🔗 <a href="https://zhaobinglin2025.github.io/pdf/writing_sample.pdf" target="_blank">写作样本</a>
  </span>
</div>

<ul>
  <li>基于认知负荷理论（CLT）开展了一项因子实验研究，系统探究关键界面设计因素（如颜色、布局与图标设计）对脊柱手术机器人界面认知负荷的影响。</li>
  <li>通过综合实验一的发现，将 CLT 转化为可操作的视觉设计策略，推导出一组基于证据的界面设计原则。</li>
  <li>设计并开展了一项对比评估研究（实验二），采用多方法途径（包括眼动指标、任务完成时间与 NASA-TLX）综合评估认知负荷与表现，以评估优化界面与基线系统的有效性。</li>
  <li>结果表明，优化界面显著降低了 39.9% 的认知负荷（p=0.025），并将任务表现提升了 16.9%（p=0.048）。</li>
</ul>

<div class="edu-row" style="margin-top: 20px;">
  <span class="edu-place-pro">河北工业大学</span>
  <div class="edu-meta-inline">
    <span class="edu-place">工业设计 · 工学学士</span>
    <span class="edu-gpa"><strong>GPA:</strong> 3.43 / 4.0</span>
  </div>
  <span class="edu-gpa"><strong>2019.09 - 2023.06</strong></span>
</div>

<ul>
  <li>全国大学生英语竞赛 C 类三等奖 <span style="color:#666; font-size:0.9em;">(2020.11)</span></li>
</ul>


<h2 class="section-title">技能 & 研究工具</h2>

---
<ul>
  <li><strong>编程：</strong> Python, C#</li>
  <li><strong>数据分析：</strong>SPSS, Python (NumPy, Pandas)</li>
  <li><strong>实验工具：</strong>PsychoPy, Tobii 眼动仪, EEG（脑电设备）</li>
  <li><strong>设计与开发：</strong>Unity, Figma, Rhino, Keyshot, Blender</li>
  <li><strong>学术写作: </strong>LaTeX</li>
  <li><strong>语言：</strong>英文（雅思 7.0）</li>
</ul>


<h2 class="section-title">新闻与动态</h2>

---
<ul>
<li><strong>2026年3月</strong> 雅思总分 7.0</li>
<li><strong>2026年3月</strong> 与于倩倩博士合作一项面向精神疾病患者的游戏化认知心理学实验系统的搭建</li>
<li><strong>2026年3月</strong> 加入北京脑科学与类脑研究中心担任研究助理</li>
<li><strong>2026年3月</strong> 获得设计学硕士学位</li>
<li><strong>2026年3月</strong> 获得工业设计学士学位</li>
</ul>