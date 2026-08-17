# Portfolio — Oreana Andrade

Personal portfolio: about me, professional experience, live projects and a contact form.

Built with **React 18 + TypeScript + Vite**, styled with **styled-components** and **MUI**,
deployed on **Netlify** with a serverless function handling the contact form.

## Repository layout

```
.
├── netlify.toml            Build, redirects, headers and function config
├── package.json            Build orchestration + Netlify Function dependencies
├── netlify/functions/
│   └── sendEmail.js        Contact form handler (nodemailer over SMTP)
└── portfolio-master/       The Vite front end
    ├── public/             Static assets, CV, robots.txt, sitemap.xml, og-image
    └── src/
        ├── components/     Shared UI (burger button, spinner)
        ├── models/         Types and route definitions
        ├── pages/Portfolio/
        │   ├── wrapper/    Layout: navbar, theme toggle, <Outlet />
        │   └── components/ about-me · skills · projects · contact
        └── utilities/      Theme persistence, snackbar helpers
```

## Running locally

```bash
# from the repository root
npm run dev
```

That proxies to the front end in `portfolio-master/`. To work in that folder directly:

```bash
cd portfolio-master
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint     # ESLint
npm run format   # Prettier
```

### Contact form in development

`npm run dev` serves the front end only, so `POST /api/contact` has nothing behind it.
To exercise the real function, run the whole site through the Netlify CLI from the root:

```bash
npm i -g netlify-cli
netlify dev
```

Copy `.env.example` to `.env` first and fill in the SMTP values.

## Environment variables

Set these in **Netlify → Site settings → Environment variables** (and in a local
`.env` for `netlify dev`). See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP server, defaults to `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port, defaults to `465` |
| `SMTP_USER` | Mailbox that sends the message |
| `SMTP_PASS` | App password — **not** the account password |
| `MAIL_TO` | Where submissions are delivered; defaults to `SMTP_USER` |

`.env` is gitignored. Never commit real credentials.

## Deployment

Netlify builds from the repository root using `netlify.toml`:

- **Build command** `npm run build` — installs and builds `portfolio-master/`
- **Publish directory** `portfolio-master/dist`
- **Functions** `netlify/functions`
- `/api/contact` is rewritten to the `sendEmail` function
- Every other path falls back to `index.html` for the client-side router

## License

MIT
