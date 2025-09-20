# Rsbuild Project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Start the App (Development, Nixos):

```bash
nix-shell -p bun

bun add -D @rsbuild/core

bunx rsbuild dev --open
```
