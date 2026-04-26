# Pool Link Prototype

Next.js prototype for Pool Link with:
- Premium public landing page on `/`
- Navigable demo web app on `/app` and sub-routes
- Mocked data only (no backend, no real APIs, no auth)

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- TypeScript support enabled

## Routes

- `/` Landing page
- `/app` Overview
- `/app/owner` Owner Dashboard
- `/app/provider` Provider Dashboard
- `/app/pool-passport` Pool Passport
- `/app/eco-score` Eco-Score
- `/app/interventions` Interventions
- `/app/marketplace` Marketplace
- `/app/admin` Admin overview

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`.
5. No environment variables required for this prototype.
