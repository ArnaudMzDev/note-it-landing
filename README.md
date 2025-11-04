# Note-It — Landing Page (Next.js + Tailwind)

Landing page moderne pour présenter l’app Note-It (style Spotify dark + violet).

## 🚀 Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- API route `/api/subscribe` (démo)

## ▶️ Démarrage local
```bash
pnpm i   # ou npm i / yarn
pnpm dev # http://localhost:3000
```

## 🔁 Formulaire d’inscription
- Le formulaire appelle `/api/subscribe` en POST et **log** simplement l’email côté serveur (démo).
- Remplacez la logique par votre provider (Mailchimp, ConvertKit, Brevo, etc.).

### Exemple (Mailchimp) : 
- Ajoutez vos clés dans `.env` (voir `.env.example`), puis dans `src/app/api/subscribe/route.ts`, effectuez un `fetch` vers l’API Mailchimp.

## 📦 Build & Production
```bash
pnpm build
pnpm start
```
Déployez sur **Vercel** (recommandé) : importez le repo → build auto.

## 🎨 Personnalisation
- Couleurs dans `tailwind.config.ts` et styles globaux dans `src/app/globals.css`
- Composants dans `src/components/*`
- SEO / Open Graph dans `src/app/layout.tsx`

## ✅ To‑do
- [ ] Connecter provider email réel
- [ ] Ajouter captures d’écran réelles de l’app
- [ ] Ajouter une section “FAQ” + “Roadmap”
