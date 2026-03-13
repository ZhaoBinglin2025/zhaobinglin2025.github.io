# 🚀 Antigravity Guide: Zero-Code Web Mastery

Welcome! This document is not just a configuration guide—it's a tutorial on the **modern web development workflow**. 

This template was meticulously crafted and refined using **Antigravity**, an agentic AI coding assistant. Because the underlying CSS variables are centralized and the layouts are modular, it is incredibly easy for an AI to understand and modify this site for you.

You **do not** need to learn HTML, CSS, or Ruby to use this template. You only need to learn how to talk to your AI.

---

## 💡 The Core Principle: "Describe the Goal, Not the Code"

When asking an AI like Antigravity to modify your site, focus on the **visual outcome** and provide **references**. Let the AI handle the specific class names and CSS properties.

**❌ Bad Prompt:** 
> *"Go to `main.css` line 3400 and change the `max-width` to 80% and add `float: none`."*

**✅ Good Prompt:** 
> *"My Publications page feels too wide on my large monitor. I want it to be a single, focused column in the center of the screen, taking up about 75% of the width. Please remove any sidebars and ensure it is perfectly centered."*

---

## 🛠️ Practical Antigravity Prompts

Here are real-world examples of how to maintain and upgrade your portfolio using Antigravity:

### Scenario 1: Adding a New Publication
Instead of copying and pasting Markdown blocks and manually tweaking formatting, just give the AI the raw text.

> **Prompt:** 
> *"I have a new paper accepted! Here is the abstract and info: [Paste Raw Info]. Please add this to the top of my `publications.md`. Format it as a card like the others. Use an 'Emerald Green' chip to highlight its Impact Factor of 12.5, and add a link to this PDF: [URL]."*

### Scenario 2: Changing the Theme Accent Color
This template uses SCSS variables. The AI knows exactly where to find them.

> **Prompt:** 
> *"I want to change the primary accent color of the entire website from its current blue to a sophisticated 'Stanford Red' (or #8C1515). Please update the CSS variables, ensuring that hover states and Dark Mode variants look harmonious and accessible."*

### Scenario 3: Creating a "Teaching" Section
You can ask the AI to steal layouts from your own site to create new pages.

> **Prompt:** 
> *"I need a new 'Teaching' page. Please create `teaching.md` and add it to the top navigation bar. For the layout, I want it to look exactly like the 'Hobbies' grid layout, but instead of photos, it will feature cards for the 3 courses I've TA'd. Here are the course names and descriptions: [Paste courses]."*

### Scenario 4: Writing a Blog Post with Automated Lightbox
Our template automatically makes images in blog posts zoomable. 

> **Prompt:** 
> *"I want to write a new blog post titled 'Reflections on CVPR 2026'. Here are my raw thoughts: [Paste thoughts]. Please format this into a professional Markdown blog post in the `blog` directory. I have three photos I want to include (pic1.jpg, pic2.jpg, pic3.jpg). Just insert them normally; I know the template's Lightbox script will automatically make them zoomable."*

---

## ⚙️ The "Quick Config" Settings

If you prefer to make minor manual tweaks without AI, almost all of your personal data lives in one file: `_config.yml`.

1. Open `_config.yml`.
2. Find the `owner:` block.
3. Update `name`, `bio`, `university`, and social links.
4. The changes will automatically propagate to the navigation bar, footer, and sidebars across the entire site.

---

## 🎓 Conclusion

By treating Antigravity as your senior frontend engineer, you can spend less time wrestling with CSS grids and more time focusing on your actual research. Have fun building your digital presence!
