<div align="center">

# itsjust.tools

[![CI](https://github.com/ItsJust-tools/itsjust/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/itsjust/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Organization](https://img.shields.io/badge/GitHub-ItsJust--tools-181717?logo=github)](https://github.com/ItsJust-tools)

**A collection of tiny, focused, single-purpose web tools.** Each tool does exactly one thing — and does it well. No signups, no bloat, no confusing menus. Just tools.

</div>

## ✨ Features

- **🔒 Privacy-first** — Everything runs client-side. Your data never leaves your browser.
- **⚡ Instant loading** — Zero unnecessary JavaScript, no frameworks beyond the minimal build setup.
- **♿ Accessible** — Keyboard navigation, screen-reader support, and WCAG-compliant contrast.
- **🌙 Dark mode** — Every tool supports light and dark themes with system preference detection.
- **📱 Responsive** — Works on every screen size, from phone to desktop.
- **🔗 Shareable state** — Tools can encode their full state in URLs for easy sharing.
- **📦 No signup** — No accounts, no logins, no paywalls. Just open and use.

## 🚀 Quick Start

```bash
# Clone a tool repo (using template as base)
git clone https://github.com/ItsJust-tools/template.git my-tool
cd my-tool

# Install dependencies
npm install

# Start developing
npm run dev
# → opens http://localhost:3000

# Run tests
npm test

# Build for production
npm run build
```

See the [template repo](https://github.com/ItsJust-tools/template) for full setup instructions.

## 📋 Tools

All tools live under `*.itsjust.tools`:

| Tool | Description | Live |
| ---- | ----------- | ---- |
| **Blob Generator** | Generate organic SVG blob shapes | [blob.itsjust.tools](https://blob.itsjust.tools) |
| **Calculator** | Scientific calculator for the web | [calculator.itsjust.tools](https://calculator.itsjust.tools) |
| **Calendar** | Clean monthly calendar view and event tracking | [calendar.itsjust.tools](https://calendar.itsjust.tools) |
| **Color Picker** | Pick, save, and export colors | [color-picker.itsjust.tools](https://color-picker.itsjust.tools) |
| **Config Converter** | Convert between YAML, JSON, and TOML formats | [config-converter.itsjust.tools](https://config-converter.itsjust.tools) |
| **Contrast Checker** | WCAG contrast ratio checker for accessible design | [contrast-checker.itsjust.tools](https://contrast-checker.itsjust.tools) |
| **Countdown** | Countdown timers for events and deadlines | [countdown.itsjust.tools](https://countdown.itsjust.tools) |
| **Cron Expression Builder** | Build and validate cron expressions visually | [cron.itsjust.tools](https://cron.itsjust.tools) |
| **CSS Filter Visualizer** | Visualize and chain CSS filters in real time | [css-filter-visualizer.itsjust.tools](https://css-filter-visualizer.itsjust.tools) |
| **Data URI Builder** | Build and encode data URIs from files or text | [data-uri-builder.itsjust.tools](https://data-uri-builder.itsjust.tools) |
| **Diff Viewer** | Compare text differences side-by-side | [diff-viewer.itsjust.tools](https://diff-viewer.itsjust.tools) |
| **Equation Editor** | Write and render mathematical equations | [equation.itsjust.tools](https://equation.itsjust.tools) |
| **Gitignore Generator** | Generate `.gitignore` files for your project | [gitignore-generator.itsjust.tools](https://gitignore-generator.itsjust.tools) |
| **JSON Formatter** | Format, validate, and explore JSON | [json-formatter.itsjust.tools](https://json-formatter.itsjust.tools) |
| **Landing** | This site's landing page | [itsjust.tools](https://itsjust.tools) |
| **Notepad** | Distraction-free plain text editor | [notepad.itsjust.tools](https://notepad.itsjust.tools) |
| **Password Generator** | Generate strong, customizable passwords | [password-generator.itsjust.tools](https://password-generator.itsjust.tools) |
| **QR Code Generator** | Client-side QR codes, no data ever leaves your browser | [qr-code.itsjust.tools](https://qr-code.itsjust.tools) |
| **SQL Formatter** | Format, beautify, and lint SQL queries | [sql-formatter.itsjust.tools](https://sql-formatter.itsjust.tools) |
| **SVG Editor** | Edit SVGs with a live preview | [svg-editor.itsjust.tools](https://svg-editor.itsjust.tools) |
| **System Config Builder** | Build Docker Compose, NGINX, WireGuard configs visually | [system-config-builder.itsjust.tools](https://system-config-builder.itsjust.tools) |
| **Systemd Unit Builder** | Visual tool for building systemd unit files | [systemd-builder.itsjust.tools](https://systemd-builder.itsjust.tools) |
| **Vision Deficiency Simulator** | See your UI through different vision types | [vision-deficiency-simulator.itsjust.tools](https://vision-deficiency-simulator.itsjust.tools) |

### 🏗️ Internal / Template

| Repository | Description |
| ---------- | ----------- |
| **[Template](https://github.com/ItsJust-tools/template)** | Starter repo for building new tools |
| **[itsjust](https://github.com/ItsJust-tools/itsjust)** | This meta-repo — documentation and org coordination |
| **[.github](https://github.com/ItsJust-tools/.github)** | Organization profile and community health files |

> **Note:** The `timezone-converter.itsjust.tools` domain points to a planned tool that hasn't been built yet. If you'd like to build it, see [Contributing](#-contributing).

## 🧠 Philosophy

Each tool should be:
- **Single-purpose** — does one thing, does it well
- **Client-side first** — your data stays on your machine
- **No signup** — no accounts, no logins, no paywalls
- **Fast** — loads instantly, zero unnecessary JavaScript
- **Accessible** — works for everyone

No frameworks. No bloat. Just tools.

The full list of tools is maintained in this README. Each tool is a standalone Next.js application deployed on Vercel via a `*.itsjust.tools` wildcard domain.

## 🗺️ Usage

### For End Users

Each tool is a standalone web app at `*.itsjust.tools`. Just visit the URL and start using it:

1. **Open** the tool's URL (e.g., [password-generator.itsjust.tools](https://password-generator.itsjust.tools))
2. **Use it** — no signup, no accounts, no data collection
3. **Export/Share** — many tools let you download results or share via URL

All processing happens in your browser. Nothing is sent to a server.

### For Developers

Each tool can be run locally from its repository:

```bash
git clone https://github.com/ItsJust-tools/<tool-name>.git
cd <tool-name>
npm install
npm run dev
```

## 🏗️ Stack

Each tool uses the [template](https://github.com/ItsJust-tools/template) as a starting point:
- **[Next.js](https://nextjs.org)** — routing and static export
- **[TypeScript](https://www.typescriptlang.org)** — type safety
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling
- **[Vitest](https://vitest.dev)** — unit tests
- **[Playwright](https://playwright.dev)** — E2E tests
- **[Vercel](https://vercel.com)** — deployment via `*.itsjust.tools` wildcard domain

### Shared Packages

Tools that need shared components use the **`@itsjust/core`** workspace package (built with [tsup](https://tsup.egoist.dev/)) for shared UI components and utilities. See any tool with a `packages/` directory for the workspace setup.

## 🚦 CI/CD Status

Each repository has its own CI pipeline running on GitHub Actions:

| Tool | CI Status |
| ---- | --------- |
| Blob Generator | [![CI](https://github.com/ItsJust-tools/blob-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/blob-generator/actions/workflows/ci.yml) |
| Calculator | [![CI](https://github.com/ItsJust-tools/calculator/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/calculator/actions/workflows/ci.yml) |
| Calendar | [![CI](https://github.com/ItsJust-tools/calendar/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/calendar/actions/workflows/ci.yml) |
| Color Picker | [![CI](https://github.com/ItsJust-tools/color-picker/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/color-picker/actions/workflows/ci.yml) |
| Config Converter | [![CI](https://github.com/ItsJust-tools/config-converter/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/config-converter/actions/workflows/ci.yml) |
| Contrast Checker | [![CI](https://github.com/ItsJust-tools/contrast-checker/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/contrast-checker/actions/workflows/ci.yml) |
| Countdown | [![CI](https://github.com/ItsJust-tools/countdown/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/countdown/actions/workflows/ci.yml) |
| Cron | [![CI](https://github.com/ItsJust-tools/cron/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/cron/actions/workflows/ci.yml) |
| CSS Filter Visualizer | [![CI](https://github.com/ItsJust-tools/css-filter-visualizer/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/css-filter-visualizer/actions/workflows/ci.yml) |
| Data URI Builder | [![CI](https://github.com/ItsJust-tools/data-uri-builder/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/data-uri-builder/actions/workflows/ci.yml) |
| Diff Viewer | [![CI](https://github.com/ItsJust-tools/diff-viewer/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/diff-viewer/actions/workflows/ci.yml) |
| Equation | [![CI](https://github.com/ItsJust-tools/Equation/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/Equation/actions/workflows/ci.yml) |
| Gitignore Generator | [![CI](https://github.com/ItsJust-tools/gitignore-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/gitignore-generator/actions/workflows/ci.yml) |
| JSON Formatter | [![CI](https://github.com/ItsJust-tools/json-formatter/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/json-formatter/actions/workflows/ci.yml) |
| Notepad | [![CI](https://github.com/ItsJust-tools/Notepad/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/Notepad/actions/workflows/ci.yml) |
| Password Generator | [![CI](https://github.com/ItsJust-tools/password-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/password-generator/actions/workflows/ci.yml) |
| QR Code | [![CI](https://github.com/ItsJust-tools/qr-code/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/qr-code/actions/workflows/ci.yml) |
| SQL Formatter | [![CI](https://github.com/ItsJust-tools/sql-formatter/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/sql-formatter/actions/workflows/ci.yml) |
| SVG Editor | [![CI](https://github.com/ItsJust-tools/svg-editor/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/svg-editor/actions/workflows/ci.yml) |
| System Config Builder | [![CI](https://github.com/ItsJust-tools/system-config-builder/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/system-config-builder/actions/workflows/ci.yml) |
| Systemd Builder | [![CI](https://github.com/ItsJust-tools/systemd-builder/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/systemd-builder/actions/workflows/ci.yml) |
| Template | [![CI](https://github.com/ItsJust-tools/template/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/template/actions/workflows/ci.yml) |
| Vision Deficiency Simulator | [![CI](https://github.com/ItsJust-tools/vision-deficiency-simulator/actions/workflows/ci.yml/badge.svg)](https://github.com/ItsJust-tools/vision-deficiency-simulator/actions/workflows/ci.yml) |

## 🛠️ Development

### Prerequisites

- **Node.js** >= 22.0.0
- **npm** >= 10.0.0

### Setting Up a New Tool

1. Click **"Use this template"** on the [template repo](https://github.com/ItsJust-tools/template)
2. Clone your new repo:
   ```bash
   git clone https://github.com/ItsJust-tools/your-tool.git
   cd your-tool
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Customize the tool config in `src/tool/tool.config.ts`
5. Start the dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Code Style

- **TypeScript** strict mode is enabled throughout
- **ESLint** for linting — run `npm run lint`
- **Prettier** for formatting — run `npm run format`

### Testing

- **Unit tests:** [Vitest](https://vitest.dev) — `npm test`
- **E2E tests:** [Playwright](https://playwright.dev) — `npm run test:e2e`
- Tests live in `__tests__/` at the repo root

### Preflight Checklist

Before opening a PR, run:

```bash
node scripts/preflight.mjs   # Validate template setup
npm run lint                  # TypeScript + ESLint
npm test                      # Unit tests
npm run build                 # Production build
```

### Continuous Integration

Every push to `main` and every PR triggers the CI pipeline with four stages:

1. **Lint & Type Check** — ESLint + TypeScript compilation
2. **Test** — Vitest unit tests
3. **Documentation** — validates markdown links and code fence language tags
4. **Tool Audit** — ensures all tools are referenced in the README

### Deployment

Tools are deployed to [Vercel](https://vercel.com) using a `*.itsjust.tools` wildcard domain:

```bash
npx vercel --prod
```

Set `NEXT_PUBLIC_URL` in your Vercel project settings.

## 🤝 Contributing

### 🛠️ Building a New Tool

1. Clone the [template repo](https://github.com/ItsJust-tools/template)
2. Customize `package.json`, `next.config.js`, and content
3. Open a PR or push to a new repo under `ItsJust-tools`
4. Deploy to `your-tool.itsjust.tools` on Vercel

### 🐛 Bug Fixes & Improvements

Check the [Ops Board](https://github.com/orgs/ItsJust-tools/projects/3) for known issues. PRs welcome.

### 💡 New Tool Ideas

Check the [Roadmap Board](https://github.com/orgs/ItsJust-tools/projects/2) for planned tools. Add issues for new ideas.

### 📝 Just Open an Issue

If you have a feature request, bug report, or tool idea, just create an issue in the relevant repo (or in this meta-repo if you're not sure where).

## 📜 License

MIT — do what you want with it.

---

<sub>Created by [EntchenEric](https://github.com/EntchenEric). Maintained by [Boot](https://github.com/ItsJust-Openclaw) 🦆 — an [OpenClaw](https://openclaw.ai) bot that handles issue triage, automated fixes, and new tool development.</sub>
