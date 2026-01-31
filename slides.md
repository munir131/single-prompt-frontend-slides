---
theme: seriph
title: Single Prompt for Frontend Development
info: |
  ## Single Prompt for Frontend Development
  Presented by: Munir Khakhi
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
---

<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; pointer-events: none;">
  <img src="/img/gdg-rajkot.png" style="height: 60px; width: auto;" alt="GDG Rajkot" />
</div>
<div style="position: fixed; top: 10px; right: 10px; z-index: 9999; pointer-events: none;">
  <img src="/img/js-guj.png" style="height: 60px; width: auto;" alt="JS Guj" />
</div>

# Single Prompt for Frontend Development

<div class="mt-12 text-2xl text-gray-500">
  How to build apps with one prompt using Agents
</div>

<div class="absolute bottom-10 left-0 right-0 text-center">
  <div class="font-bold text-xl">Munir Khakhi</div>
</div>

---
layout: image-right
image: /img/munir.jpg
class: text-center
---

# About me

**Munir Khakhi**  
Head of Engineering at [Improwised](https://improwised.com)

- Passionate about clean code, developer experience, and cloud technologies.
- Enjoys adding apps in homelab, attends events and contributes to open source.

---

# Agenda

<div class="grid grid-cols-2 gap-8 mt-10 text-xl">
  <div class="space-y-4">
    <div v-click>📝 <b>Prompt</b> - The art of asking</div>
    <div v-click>🤖 <b>Agents</b> - Your digital workforce</div>
    <div v-click>🛠️ <b>Skills</b> - Giving agents tools</div>
  </div>
  <div class="space-y-4">
    <div v-click>💻 <b>Commands</b> - Controlling the flow</div>
    <div v-click>🔧 <b>Tools</b> - Building the future</div>
    <div v-click>🚀 <b>Live Demo</b> - Seeing is believing</div>
  </div>
</div>

---
layout: default
---

# What makes a good Frontend Developer?

<div class="grid grid-cols-2 gap-8">
  <div class="prose text-gray-900 dark:text-gray-100 font-medium text-lg">
    <p>It's not just about knowing one framework. It's about navigating the chaos.</p>
    <ul>
      <li>Understanding the fundamentals</li>
      <li>Keeping up with the ecosystem</li>
      <li>Managing state, styles, and performance</li>
      <li>Shipping code that works</li>
    </ul>
  </div>
  <div class="flex items-center justify-center">
    <img src="/img/framework-apocalypse.jpg" class="h-64 rounded-lg shadow-lg" alt="Framework Chaos" />
  </div>
</div>

---

# The Frontend Stack (Part 1)
## The Fundamentals

<div class="grid grid-cols-3 gap-4 mt-8 text-center">
  <div class="p-4 border rounded-xl bg-orange-50 dark:bg-orange-900/20">
    <div class="text-4xl mb-2">📄</div>
    <h3 class="font-bold">HTML</h3>
    <p class="text-sm opacity-70">Semantic Structure</p>
  </div>
  <div class="p-4 border rounded-xl bg-blue-50 dark:bg-blue-900/20">
    <div class="text-4xl mb-2">🎨</div>
    <h3 class="font-bold">CSS</h3>
    <p class="text-sm opacity-70">Layout & Design</p>
  </div>
  <div class="p-4 border rounded-xl bg-yellow-50 dark:bg-yellow-900/20">
    <div class="text-4xl mb-2">⚡</div>
    <h3 class="font-bold">JavaScript</h3>
    <p class="text-sm opacity-70">Interactivity & Logic</p>
  </div>
</div>

<div class="mt-8 text-center text-gray-500 italic">
  "You can't skip the basics."
</div>

---

# The Frontend Stack (Part 2)
## The Frameworks & Tools

<div class="grid grid-cols-1 gap-6 mt-6">
  <div>
    <h3 class="font-bold mb-4">Frameworks & Styling</h3>
    <div class="flex gap-4 flex-wrap">
      <span class="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">React</span>
      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full">Vue</span>
      <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full">Angular</span>
      <span class="px-3 py-1 bg-sky-100 text-sky-800 rounded-full">Tailwind CSS</span>
      <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Sass</span>
    </div>
  </div>

  <div>
    <h3 class="font-bold mb-4">Ecosystem</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="p-2 border rounded">REST / GraphQL APIs</div>
      <div class="p-2 border rounded">LocalStorage / State</div>
      <div class="p-2 border rounded">Responsive Design</div>
      <div class="p-2 border rounded">SEO</div>
    </div>
  </div>
</div>

---

# Mastering the Prompt
## The Blueprint for Success

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <h3 class="text-xl font-bold mb-4 text-blue-600">The PROMPT Framework</h3>
    <ul class="space-y-3">
      <li><b>P</b>ersona <span class="opacity-60 text-sm">- Who is the AI?</span></li>
      <li><b>R</b>equest <span class="opacity-60 text-sm">- What do you want?</span></li>
      <li><b>O</b>utput <span class="opacity-60 text-sm">- How should it look?</span></li>
      <li><b>M</b>odifiers <span class="opacity-60 text-sm">- Constraints/Style</span></li>
      <li><b>P</b>urpose <span class="opacity-60 text-sm">- Why are we doing this?</span></li>
      <li><b>T</b>ech Stack <span class="opacity-60 text-sm">- Tools & Libraries</span></li>
    </ul>
  </div>

  <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <h3 class="text-xl font-bold mb-4 text-green-600">RCEO Strategy</h3>
    <div class="space-y-4">
      <div>
        <span class="font-bold">Role:</span> Senior Frontend Engineer
      </div>
      <div>
        <span class="font-bold">Context:</span> Building a dashboard with Next.js & Tailwind
      </div>
      <div>
        <span class="font-bold">Example:</span> Create a responsive Sidebar component
      </div>
      <div>
        <span class="font-bold">Output:</span> Clean React code with TypeScript interfaces
      </div>
    </div>
  </div>
</div>

---

# Concepts: The New Workflow

<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="card p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 class="text-xl font-bold text-blue-600 mb-2">🤖 Agent</h3>
    <p class="text-sm">An autonomous AI entity that plans and executes tasks to achieve a goal.</p>
  </div>
  
  <div class="card p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 class="text-xl font-bold text-green-600 mb-2">🛠️ Skill</h3>
    <p class="text-sm">Capabilities given to an agent (e.g., "browsing", "running commands", "editing files").</p>
  </div>
  
  <div class="card p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 class="text-xl font-bold text-purple-600 mb-2">💻 Command</h3>
    <p class="text-sm">The specific instruction that triggers an agent or tool (e.g., `/refactor`, `/test`).</p>
  </div>
</div>

---
layout: center
---

# Models Powering the Agents

<div class="flex justify-center items-center gap-16 mt-8">
  <div class="text-center">
    <div class="text-6xl mb-4">✨</div>
    <h2 class="text-2xl font-bold">Google Gemini</h2>
    <p class="opacity-70">Multimodal reasoning & code generation</p>
  </div>

  <div class="h-32 w-px bg-gray-300"></div>

  <div class="text-center">
    <div class="text-6xl mb-4">🚀</div>
    <h2 class="text-2xl font-bold">OpenCode</h2>
    <p class="opacity-70">Orchestration & Tool Usage</p>
  </div>
</div>

---
layout: image-right
image: /img/chatgpt-developer.jpg
backgroundSize: contain
---

# Live Demo

<div class="my-auto">
  <div class="text-3xl font-bold mb-8">
    Building a Frontend App<br>
    <span class="text-blue-600">With ONE Prompt</span>
  </div>

  <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-sm border-l-4 border-blue-500">
    "Create a responsive task management app with React, Tailwind, and LocalStorage. Include drag-and-drop, categories, and a dark mode toggle."
  </div>

  <div class="mt-8">
    <span class="animate-pulse">Waiting for Agent...</span>
  </div>
</div>

---
layout: center
class: text-center
---

# Thank You!

<div class="flex flex-col items-center mt-8">
  <img src="/img/linkedin-qr.png" class="w-48 h-48 rounded-lg shadow-lg mb-6" alt="LinkedIn QR">
  
  <div class="text-xl font-bold">Munir Khakhi</div>
  <a href="https://linkedin.com/in/munir-khakhi" class="text-blue-500 hover:underline">
    linkedin.com/in/munir-khakhi
  </a>
  
  <div class="mt-8 flex gap-8">
    <img src="/img/gdg-rajkot.png" class="h-8 opacity-50" />
    <img src="/img/js-guj.png" class="h-8 opacity-50" />
  </div>
</div>
