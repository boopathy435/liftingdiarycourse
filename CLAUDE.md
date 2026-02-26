# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- No test framework is configured yet

## Architecture

- **Next.js 16** app using the App Router (`src/app/`)
- **React 19**, **TypeScript 5**, **Tailwind CSS 4** (via PostCSS)
- Path alias: `@/*` maps to `./src/*`
- Fonts: Geist Sans and Geist Mono loaded via `next/font/google`
