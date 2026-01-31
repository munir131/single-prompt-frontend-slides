# Plan: Add Prompt Framework Slide

## TL;DR
Insert a new slide titled "Mastering the Prompt" into the presentation. This slide will detail the **PROMPT framework** and **RCEO strategy**, providing a structured approach to prompt engineering for frontend development.

## Work Objectives
- [ ] Modify `slides.md` to insert the new slide before "Concepts: The New Workflow".
- [ ] Ensure the new slide includes the manual global logo injection.

## Execution Strategy

### Task 1: Insert Slide into `slides.md`
- **File**: `slides.md`
- **Location**: Insert after "The Frontend Stack (Part 2)" and before "Concepts: The New Workflow".
- **Content**:
    - **Header**: Global logo HTML block.
    - **Title**: "Mastering the Prompt".
    - **Left Column**: PROMPT Framework (Persona, Request, Output, Modifiers, Purpose, Tech Stack).
    - **Right Column**: RCEO Strategy example (Role, Context, Explicit, Output).

## TODOs

- [x] 1. Add "Mastering the Prompt" slide

  **What to do**:
  - Use `edit` tool to insert the new slide content.
  - Ensure the HTML logo block is included at the top of the slide.

  **Content to Insert**:
  ```markdown
  ---

  <div style="position: fixed; top: 10px; left: 10px; z-index: 9999; pointer-events: none;">
    <img src="/img/gdg-rajkot.png" style="height: 60px; width: auto;" alt="GDG Rajkot" />
  </div>
  <div style="position: fixed; top: 10px; right: 10px; z-index: 9999; pointer-events: none;">
    <img src="/img/js-guj.png" style="height: 60px; width: auto;" alt="JS Guj" />
  </div>

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
          <span class="font-bold">Explicit:</span> Create a responsive Sidebar component
        </div>
        <div>
          <span class="font-bold">Output:</span> Clean React code with TypeScript interfaces
        </div>
      </div>
    </div>
  </div>
  ```

  **Acceptance Criteria**:
  - [ ] New slide appears in the correct order.
  - [ ] Logos are visible on the new slide.
