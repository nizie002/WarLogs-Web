# ⚔️ WarLogs Web — *"The Strategium"*

> The web frontend for WarLogs – A self-hosted platform for tabletop campaign management.

---

## 📖 Overview

**WarLogs Web** (codename: *"The Strategium"*) is the responsive web frontend of the WarLogs platform. It serves as the primary interface for desktop users, providing access to the global archive, user profiles, campaign management, and administrative features.

This repository is part of the larger **WarLogs Project** ecosystem:

| Component | Repository | Purpose |
|-----------|------------|---------|
| **Web Frontend** | `WarLogs-Web` *(this repo)* | Mobile & tablet & desktop interface |
| **Mobile App** | `WarLogs-App` | Tabletop android app companion |
| **Backend API** | `WarLogs-API` | REST API & business logic (Python/Flask) |
| **Database** | PostgreSQL | Data persistence |

---

## 🎯 Purpose & Scope

The Strategium handles:

- **👤 Player Profiles** — Names, army lists sorted by game mode
- **👥 Army List Importer** — Import army lists from NewRecruits JSON export
- **🎮 Game Session Guidance** — Host creates a lobby (mode, points, players), then guides all participants through setup and gameplay phases

---

## 🔐 Authentication

**Private group only** — no public registration. Users are pre-configured in a backend JSON file:

```json
{ "id": "tim", "name": "Tim", "pin": "7734", "avatar": "/avatars/tim.png" }
```

**Login:** Select name → Enter PIN → Done.

**Session:** On successful login, an HTTP-only cookie (`userId`) is set. Protected routes check this cookie to identify the user.

---

## 📱 Responsive Design Philosophy

**Mobile First → Tablet → Desktop**

The application is designed with a mobile-first approach, progressively enhancing the experience for larger screens:

| Breakpoint | Target | Primary Use Case |
|------------|--------|------------------|
| `< 768px` | 📱 Mobile | Quick lookups, participating in games at the table |
| `768px - 1024px` | 📱 Tablet | Hosting the game, casual browsing |
| `> 1024px` | 💻 Desktop | Spectating at home, full archive access, administration, deep analytics |

### Design Principles

1. **Touch-Friendly** — All interactive elements are sized for finger input
2. **Progressive Enhancement** — Core features work everywhere, advanced features enhance larger screens
3. **Performance First** — Fast initial load, lazy loading for non-critical content
4. **Offline Capable** — Service worker caching for frequently accessed data

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.x | React framework with App Router |
| [React](https://react.dev/) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| Vanilla CSS | — | Styling (no Tailwind) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher (or pnpm/yarn)
- Access to the WarLogs API (`api.warlogs.de` or local instance)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/WarLogs-Web.git
cd WarLogs-Web

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
```

### Environment Variables

Environment variables store configuration that changes between environments (local, staging, production).

#### Env File Strategy

| File | Purpose | Commit to Git? |
|------|---------|----------------|
| `.env.example` | Template for the team | ✅ Yes |
| `.env.local` | Your local machine only | ❌ Never |
| `.env.production` | Production overrides | ❌ Never |

#### Setup

1. Copy the template: `cp .env.example .env.local`
2. Fill in your local values

```env
# .env.example (committed — template)
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_WS_URL=
NEXT_PUBLIC_APP_ENV=
```

```env
# .env.local (gitignored — your values)
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WS_URL=ws://localhost:5000/ws
NEXT_PUBLIC_APP_ENV=development
```

#### The `NEXT_PUBLIC_` Prefix

| Prefix | Accessible in... | Use for... |
|--------|------------------|------------|
| `NEXT_PUBLIC_` | Browser + Server | API URLs, public config |
| *(no prefix)* | Server only | Secrets, API keys |

> ⚠️ **Never expose secrets with `NEXT_PUBLIC_`** — these values are bundled into the client-side JavaScript.

#### Production (Coolify)

In production, environment variables are set directly in the **Coolify dashboard**, not via files. This is more secure and allows changes without redeployment.

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build & Production

```bash
# Create production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 📁 Project Structure

```
src/
├── app/
│   │
│   ├── (public)/               # 🌐 UNAUTHENTICATED
│   │   ├── page.tsx            # Landing → login
│   │   └── legal/
│   │
│   ├── (app)/                  # 🔐 AUTHENTICATED
│   │   ├── layout.tsx          # Minimal header: avatar+name (top-right)
│   │   ├── page.tsx            # Dashboard: [Manage Lists] [Host] [Join]
│   │   │
│   │   ├── join/               # Join a game
│   │   │   └── page.tsx        # QR scan, code input, open lobbies list
│   │   │
│   │   ├── host/               # Host a game
│   │   │   └── page.tsx        # Mode selection, points → create lobby
│   │   │
│   │   ├── lists/              # Army list management
│   │   │   ├── page.tsx        # All lists overview
│   │   │   ├── import/         # Upload JSON (NewRecruits/Battlescribe)
│   │   │   └── [listId]/       # View/edit single list
│   │   │
│   │   └── account/            # Profile settings (via avatar click)
│   │       └── page.tsx        # Edit name, avatar
│   │
│   ├── (game)/                 # 🎮 ACTIVE GAME SESSION
│   │   └── [sessionId]/
│   │       ├── lobby/          # Waiting room (QR/code, player list)
│   │       ├── matched/        # → modes/matched-play-*
│   │       ├── crusade/        # → modes/crusade-*
│   │       └── open/           # → modes/open-play
│   │
│   ├── api/                    # 🔌 API ROUTES (proxy to backend)
│   │   ├── auth/               # Login, logout, session check
│   │   ├── lists/              # CRUD for army lists
│   │   └── sessions/           # Game session management
│   │
│   └── globals.css
│
├── modes/                      # 🔒 ISOLATED GAME MODE MODULES
│   ├── matched-play-*/         # Competitive (Chapter Approved rules)
│   ├── crusade-*/              # Campaign narrative (e.g. Forsarrwar)
│   └── open-play/              # Casual games
│
├── components/                 # Global UI only (Button, Card, etc.)
├── hooks/                      # Global hooks only (useToast, etc.)
├── lib/
│   └── parsers/                # JSON parsers for list import
├── types/
│
└── public/                     # 📦 STATIC ASSETS
    ├── avatars/                # Player avatar images
    └── icons/                  # UI icons
```

### 🚀 User Flow

After login, the **Dashboard** presents three prominent mobile-friendly actions (no sidebar):

```
┌────────────────────────────────┐
│           [👤 Name]            │
├────────────────────────────────┤
│                                │
│  ┌──────────────────────────┐  │
│  │      MANAGE LISTS        │  │
│  └──────────────────────────┘  │
│                                │
│  ┌──────────────────────────┐  │
│  │      HOST A GAME         │  │
│  └──────────────────────────┘  │
│                                │
│  ┌──────────────────────────┐  │
│  │      JOIN A GAME         │  │
│  └──────────────────────────┘  │
│                                │
└────────────────────────────────┘
```

#### Flow 1: Join a Game (`/join`)
- Scan **QR Code** (quickest)
- Enter **Session Code** manually
- Browse **Open Lobbies** (mode, points, player count)
- → Joins `/game/[sessionId]/lobby`

#### Flow 2: Host a Game (`/host`)
- Select **Game Mode** (Crusade / Matched Play / Open)
- Set **Max Points** per team
- → Creates session → redirects to `/game/[sessionId]/lobby`

#### Flow 3: Manage Lists (`/lists`)
- View all saved army lists (name, faction, points)
- **Import**: Upload JSON from NewRecruits/Battlescribe → parse → preview → save
- **Edit/Delete**: Manage individual lists
- Lists tagged with: `name`, `faction`, `army`, `points`, `source`

### 🎮 Game Mode Module Architecture

Each game mode is **100% self-contained**:

```
modes/matched-play-chapter-approved-2025/
├── assets/           # Mode-specific images, icons
├── components/       # Mode-specific UI components
├── hooks/            # Mode-specific logic & state
├── utils/            # Mode-specific helpers
├── types.ts          # Mode-specific types
└── index.ts          # Public exports
```

**Key principles:**
- **Isolation:** Modes never import from each other
- **Global shared code:** Only generic components live in `src/components/` and `src/hooks/`
- **Route delegation:** App Router pages simply import and render the appropriate mode module

---

## 🎨 Grimdark Design Codex

The UI follows the **"Grimdark Modern"** aesthetic: high-contrast, tactical, and atmospheric. It simulates a futuristic military interface ("The Strategium") with neon accents against a deep void.

All styles are defined in a single authoritative stylesheet: `src/app/globals.css`.

### 💎 Design Tokens

#### Colors

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-bg-void` | `#0a0a0a` | Deepest background layer |
| `--color-bg-surface` | `#1a1c1e` | Component surfaces / cards |
| `--color-border-dim` | `#2d3032` | Subtle borders |
| `--color-text-primary` | `#e3dac9` | Parchment White / Primary text |
| `--color-text-muted` | `#9CA3AF` | Secondary / muted text |
| `--color-primary-action` | `#39ff14` | Neon Green / Success / CTA |
| `--color-primary-alert` | `#ef4444` | Red / Danger / Errors |

#### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `Cinzel` | Headings, ritualistic titles |
| `--font-interface` | `Rajdhani` | Data, UI labels, body text |

#### Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | `8px` |
| `--space-sm` | `12px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |

#### Motion & Effects

| Token | Value | Purpose |
|-------|-------|---------|
| `--duration-snap` | `150ms` | Quick interactions |
| `--duration-modal` | `300ms` | Modal transitions |
| `--easing-mechanical` | `linear` | Machine-like precision |
| `--shadow-glow-primary` | `0 0 10px #39ff14` | Neon glow effect |

### 🔒 Component Locking Policy

> [!IMPORTANT]
> **COMPONENTS ARE LOCKED.** The core design system components in `src/components` are considered stable and feature-complete. To maintain visual consistency and "The Strategium" brand identity, these files **SHOULD NOT** be modified for feature-specific logic.

- **Modification Rule:** Only structural bugs or accessibility fixes are permitted.
- **Extension Rule:** If you need a new variant, create a wrapper or a new component based on these primitives.
- **Style Rule:** Do not bypass global tokens. All colors and spacings must use CSS variables.

### 📦 Component Library

| Category | Components | Path |
|----------|------------|------|
| **UI Primitives** | Button, Card, Input, Label, Value, StatusBadge, StatusLight | `src/components/ui/` |
| **Interactive Controls** | HexCheckbox, MachineToggle, CogitatorSelect | `src/components/ui/` |
| **Feedback** | LoadingRitual, Modal, Toast | `src/components/feedback/` |
| **Data Display** | Table, LogEntry | `src/components/data/` |

---

## 🚢 Deployment

The application is deployed on **Hetzner Cloud** via **Coolify** (self-hosted PaaS).

### Infrastructure

- **Server:** Hetzner CX23 VPS (Ubuntu 24.04)
- **Orchestration:** Coolify with Traefik reverse proxy
- **SSL:** Automatic via Let's Encrypt

### Deployment Flow

```
Push to main → Coolify webhook → Docker build → Deploy
```

### Manual Deployment

```bash
# SSH into server
ssh deploy@your-server.hetzner.com

# Pull latest changes
cd /opt/warlogs-web
git pull origin main

# Rebuild and restart
docker compose up --build -d
```

---

## 📚 Related Documentation

- [WarLogs Project](../README.md) — Master repository & architecture overview
- [WarLogs Design Codex](../_docs/WarLogs_DesignCodex.md) — Design system documentation
- [API Documentation](https://api.warlogs.de/docs) — Backend API reference

---

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes following the coding standards
3. Write/update tests as needed
4. Submit a pull request with a clear description

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<div align="center">

**"Write history, not lists."**

*For the Emperor. For the Archives.*

</div>
