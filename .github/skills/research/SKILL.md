---
name: research
description: Investigate a question against high-trust primary sources. Use for technical or domain research, docs or API fact-checking, and source-backed decisions.
---

Ask the Orchestrator to delegate the research to the repository's **Researcher** custom agent, configured with high reasoning effort. The Researcher should work independently while the Orchestrator continues other discovery work.

Its job:

1. Investigate the question against **primary sources** (official docs, source code, specs, first-party APIs), not a secondary write-up of them. Follow every claim back to the source that owns it.
2. Return findings with source citations, clearly separating verified facts from assumptions and unresolved questions.
3. Do not implement product changes. Only create a Markdown research report if the user requested a durable written report or the Orchestrator asks for one; otherwise return the findings to the Orchestrator for the approval checkpoint.
