# Rsbuild Project

## Setup

Install the dependencies:

```bash
bun install
```

## Local development

In case you wish to configure the ports that run this project in development, under `./env/.env.example` you'll find all the environment variables listed that you can configure,
with example values. Paste the content to a new file called `.env` or `.env.local`, which should be located under `/env` and update the values.
this is an optional step, you can run this project without configuring environment variables, as it will default to use port 3000 and 3001.

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

Start the App (Development, Nixos):

```bash
nix-shell -p bun

bun add -D @rsbuild/core

bun run dev 
```
