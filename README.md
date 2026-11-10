<p align="center">
  <img src="public/images/tangent-mark.svg" alt="Tangent logo" width="96" height="96" />
</p>

<h1 align="center">Tangent</h1>

<p align="center">
  Website of Tangent Consulting, an independent AI and engineering advisory based in Paris.
  <br />
  <a href="https://tangent-bice.vercel.app">tangent-bice.vercel.app</a>
</p>

## Stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript
- [Once UI](https://once-ui.com) for components and theming
- [Resend](https://resend.com) for the contact form
- English and French content, picked from the browser language and switchable in the header
- Deployed on [Vercel](https://vercel.com)

## Getting started

```sh
git clone git@github.com:lvndry/tangent.git
cd tangent
bun install
cp .env.example .env.local
bun run dev
```

The site runs on [localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | Sends contact form emails |
| `RESEND_FROM_EMAIL` | No | Sender address, defaults to the Resend sandbox sender |
| `CONTACT_EMAIL` | No | Inbox that receives contact form messages |
| `NEXT_PUBLIC_LOGO_DEV_TOKEN` | No | Loads company logos from [logo.dev](https://logo.dev) in the about section |

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Build for production |
| `bun run start` | Serve the production build |
| `bun run lint` | Run ESLint |
| `bun run biome-write` | Format with Biome |

## Project layout

- `src/app`: pages and API routes
- `src/components`: UI components, landing sections live in `landing/`
- `src/resources/content.tsx`: all site copy, in English and French
- `src/resources/once-ui.config.ts`: theme, routes and base URL
- `public/images`: logo, favicons and Open Graph image
