# Rsbuild Project

## Prerequisites

Bun needs to be installed on the system.

Bash script to install bun: 
```bash
curl -fsSL https://bun.com/install | bash
```

Install bun through npm:
```bash
npm install -g bun
```

## Setup

Install the dependencies:

```bash
bun install
```

## Local development

You need to configure the environment variables of this project be able to use it. Under `./env/.env.example` you'll find all the environment variables listed that you can configure,
with example values. Paste the content to a new file called `.env` or `.env.local`, which should be located at the root of the project. Update the values. 

Start the local dev server:

```bash
bun run dev
```

Build the app for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## NixOS

Start the app for local development:

```bash
nix-shell -p bun

bun add -D @rsbuild/core

bun run dev 
```
