# Hola Voicemail

**An AI voice assistant that answers, screens, and transcribes your calls in a natural voice.**

🔗 **Live MVP → [holavoicemail.com](https://holavoicemail.com)**

Built during my FullStack & AI Research internship at **Hola AI**. This repo is the product's **web front end** (React 19 + Vite) — the marketing site, onboarding, pricing, and an interactive assistant preview. It fronts a real-time voice pipeline I helped design and ship.

---

## The system behind it

The live product pairs LLM reasoning with low-latency speech so a caller has a natural back-and-forth with an AI that screens and transcribes the call:

```
Incoming call ──▶ Speech-to-text ──▶ GPT reasoning ──▶ ElevenLabs TTS ──▶ Caller
                        │                   ▲
                        └── per-caller contextual memory ──┘
              (streamed over WebSockets for sub-second turn-taking)
```

- **GPT reasoning** drives screening logic and responses
- **ElevenLabs** for natural, low-latency text-to-speech
- **WebSocket streaming** keeps turn-taking responsive
- **Per-caller contextual memory** so the assistant remembers the conversation

> The real-time pipeline itself runs in a private backend; this repo is the public web client. Architecture above reflects the system as shipped.

## This repo (web front end)

- **React 19 + Vite**, TypeScript
- Full marketing site: Hero, How It Works, Features, Comparison, Pricing, Testimonials, FAQ
- Product surfaces: dashboard preview, `SaiAssistant` interactive component
- Complete legal/compliance pages (Privacy, Terms, Data Deletion, Cancellation)

## Run locally

```bash
npm install
# set GEMINI_API_KEY in .env.local (never commit it)
npm run dev   # http://localhost:3000
```

## My role

Integrated GPT-based LLMs with ElevenLabs voice APIs, built the low-latency WebSocket voice pipeline with contextual memory, shipped the web front end, and drove SEO for organic growth.
