# Plan: Remove Logos from Slide 7

## TL;DR
Remove the manually injected global logos from the "Mastering the Prompt" slide (Slide 7) as requested.

## Work Objectives
- [x] Remove HTML logo block from Slide 7 in `slides.md`.

## Execution Strategy

### Task 1: Edit `slides.md`
- **File**: `slides.md`
- **Action**: Locate "Mastering the Prompt" slide and remove the `<div>` blocks containing the logos.

## TODOs

- [x] 1. Remove logos from Slide 7

  **What to do**:
  - Use `edit` tool to remove the logo HTML block.

  **Content to Remove**:
  ```html
  <div style="position: fixed; top: 10px; left: 10px; z-index: 9999; pointer-events: none;">
    <img src="/img/gdg-rajkot.png" style="height: 60px; width: auto;" alt="GDG Rajkot" />
  </div>
  <div style="position: fixed; top: 10px; right: 10px; z-index: 9999; pointer-events: none;">
    <img src="/img/js-guj.png" style="height: 60px; width: auto;" alt="JS Guj" />
  </div>
  ```

  **Acceptance Criteria**:
  - [x] Slide 7 no longer has the logo HTML block.
