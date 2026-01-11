# ⚔️ WarLogs Web — *"The Strategium"*

> The web frontend for WarLogs – A self-hosted platform for tabletop campaign management.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-red)]()

---

## 📖 Overview

**WarLogs Web** (codename: *"The Strategium"*) is the responsive web frontend of the WarLogs platform. It serves as the primary interface for desktop users, providing access to the global archive, user profiles, campaign management, and administrative features.

This repository is part of the larger **WarLogs Project** ecosystem:

| Component | Repository | Purpose |
|-----------|------------|---------|
| **Web Frontend** | `WarLogs-Web` *(this repo)* | Desktop & tablet interface |
| **Mobile App** | `WarLogs-App` | Tabletop companion (React Native/Expo) |
| **Backend API** | `WarLogs-API` | REST API & business logic (Python/Flask) |
| **Database** | PostgreSQL | Data persistence |

---

## 🎯 Purpose & Scope

The Strategium handles:

- **📊 The Archives** — Full battle history, statistics, and campaign chronicles
- **👤 Player Profiles** — Faction management, army lists, win/loss records
- **🏆 Leaderboards** — Global and campaign-specific rankings
- **⚙️ Administration** — Campaign setup, user management, settings
- **📸 Gallery** — Battle photos and memorable moments
- **📈 Analytics** — Detailed statistics and performance insights

> **Note:** Live scoring during games is primarily handled by the mobile app (*"The Auspex"*). The web frontend provides a spectator view and post-game analysis.

---

## 📱 Responsive Design Philosophy

**Mobile First → Tablet → Desktop**

The application is designed with a mobile-first approach, progressively enhancing the experience for larger screens:

| Breakpoint | Target | Primary Use Case |
|------------|--------|------------------|
| `< 768px` | 📱 Mobile | Quick lookups, profile checks |
| `768px - 1024px` | 📱 Tablet | Spectating live games, casual browsing |
| `> 1024px` | 💻 Desktop | Full archive access, administration, deep analytics |

### Design Principles

1. **Touch-Friendly** — All interactive elements are sized for finger input
2. **Progressive Enhancement** — Core features work everywhere, advanced features enhance larger screens
3. **Performance First** — Fast initial load, lazy loading for non-critical content
4. **Offline Capable** — Service worker caching for frequently accessed data

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.x | React framework with App Router |
| [React](https://react.dev/) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| CSS Modules / Vanilla CSS | — | Styling (no Tailwind) |
| [SWR](https://swr.vercel.app/) | — | Data fetching & caching |

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

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.warlogs.de
NEXT_PUBLIC_WS_URL=wss://api.warlogs.de/ws
NEXT_PUBLIC_APP_ENV=development
```

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

# Run type checking
npm run type-check
```

---

## 📁 Project Structure

*Documentation pending — will be updated as the project structure is finalized.*

---

## 🌐 Domain & Routing

*Documentation pending — routing structure will be documented once implemented.*

---

## 🔌 API Integration

*Documentation pending — API integration details will be added once the backend is connected.*

---

## 🎨 Design System

*Documentation pending — design tokens and component styles will be documented here.*

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

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
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