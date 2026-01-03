# Portfolio with AI FAQ Agent

This project is a React + Vite portfolio with an AI chat assistant that answers FAQs about Subash Kannan R's projects and skills.

## Setup

1) Install dependencies:
```bash
npm install
```

2) Environment variables:
- Copy `env.example` to `.env` and fill in `OPENAI_API_KEY`.
- Optional: set `ALLOWED_ORIGINS` (comma-separated) and `PORT` for the server.

## Run locally

In two terminals:
```bash
# start AI proxy
npm run server

# start the Vite app
npm run dev
```

The chat widget calls the proxy at `/api/chat`. Set `VITE_API_BASE_URL` if the proxy runs on a different origin.

## Build

```bash
npm run build
```

## Notes

- The chat uses project facts in `src/data/projects.json` and a brief system prompt in `src/data/agentPrompt.js`.
- Contact section includes a CTA to open the AI chat; you can also trigger it by dispatching `new Event('open-chat')`.
