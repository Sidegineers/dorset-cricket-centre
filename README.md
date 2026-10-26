# Dorset Cricket Centre

A responsive React + TypeScript website for Dorset Cricket Centre, with distinct Home, Facilities, Bookings, and Leagues pages. Use **pnpm** for package management and scripts.

## Requirements

- Node.js 20.19+ or 22.12+
- pnpm 10.12.4

## Run locally

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm typecheck
pnpm lint
pnpm build
```

The Home page uses original animated SVG/CSS cricket artwork; it is an illustration, not a photograph or depiction of the actual centre. The Facilities page uses the supplied static plan image with approximate interactive overlays; it is not a rotatable 3D model. The Bookings page shows DCC's published 2026/27 rates, a non-reserving enquiry selector, a link to DCC's availability page, and a phone-to-confirm action. It does not provide live availability or accept online reservations.

Content uses original wording based on DCC-published facts and links to official details. The source notes are in [docs/content/homepage-content.md](docs/content/homepage-content.md). Check the official DCC page and telephone the centre to confirm availability and booking details.
