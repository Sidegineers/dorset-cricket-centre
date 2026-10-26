# Repository Instructions

Shared guidance for work in this repository.

## Project Context

- Describe the purpose and main technologies of this repository here.
- Add links to architecture, setup, and contribution documentation when available.

## Working Agreements

- Inspect existing code and follow established patterns before making changes.
- Keep changes focused on the requested work.
- Run the smallest relevant tests, lint, or build checks and report their results.
- Update related documentation when behavior or setup changes.

## Validation

- Use **pnpm** as the package manager for installing dependencies and running package scripts; do not use npm or yarn for project package management.
- Install dependencies with `pnpm install`.
- Run the repository's tests with `pnpm test` once a test script is configured.
- Run linting and builds with `pnpm lint` and `pnpm build` when those scripts are available.
