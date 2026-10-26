---
name: project-workflow
description: "Use when carrying out a repeatable workflow specific to this repository; customize the steps and resources for the project."
---

# Project Workflow

Maintain a durable, concise record of substantial repository work so future agents can resume the reasoning and compare completed work with the product vision.

## When to Use

- Use for substantial feature, bug-fix, architecture, or research tasks.
- Skip routine edits and simple conversation.

## Procedure

1. Read `docs/agent-work/README.md` and `docs/agent-work/vision-tracker.md`.
2. Once the request and scope are clear, create a dated task note in `docs/agent-work/tasks/` before implementation. Record the request, accepted outcome, relevant `AGENTS.md` vision references, decisions, and an actionable checklist.
3. Set checklist items to `In Progress` when starting, and update them as work advances. Use only `Pending`, `In Progress`, `Completed`, or `Blocked`; explain blockers and do not mark an item `Completed` without verification.
4. Finish the note with the actual implementation/research outcome, files changed, checks and results, limitations, and a memory jog that lets another agent understand why decisions were made and where to continue.
5. Update the vision tracker only when the task provides evidence that changes a requirement's status. Link the evidence; a requirement in `AGENTS.md` alone is not proof of completion.
6. In the final response, summarize the record and any unresolved items.

## Project Resources

- Workflow and record format: `docs/agent-work/README.md`
- Vision-to-evidence checklist: `docs/agent-work/vision-tracker.md`
