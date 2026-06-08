# Caleb Benjamin
**Senior Frontend Engineer · 6+ Years**

calebbenjin@gmail.com | +234 (906) 6322 383 | Remote
Portfolio: calebbenjamin.vercel.app | LinkedIn: linkedin.com/in/calebbenjin

---

Senior Frontend Engineer specialising in React, TypeScript, and Next.js. 6+ years shipping
production-grade applications across fintech, marketplaces, agritech, and SaaS.
Founder of EachBlock — a development studio that has delivered 10+ products for startups
across Nigeria, Canada, the US, and Europe. Known for fast architectural decisions,
scalable component systems, and taking products from zero to production.

---

## WORK EXPERIENCE

---

### Lead Senior Frontend Engineer
**Xervices** | 2024 – Present | Remote, Lagos, Nigeria

Nigeria's on-demand service marketplace connecting customers with verified tradespeople
(plumbers, electricians, mechanics, and 10+ categories) across Lagos, Abuja, and Port Harcourt.
Sole frontend architect across all three web surfaces: marketing website, artisan web app,
and internal admin control panel.

**Tech Stack:** React 18, TypeScript 5, Vite, Tailwind CSS, Shadcn UI, Framer Motion,
TanStack Query v5, Zustand, React Router v6, Mapbox GL, TipTap, Recharts,
React Hook Form + Zod, react-snap, react-helmet-async, Paystack, Sonner

- Architected a modular admin control panel with **domain-isolated Zustand stores per module**
  (finance, disputes, security, CMS) — 6 operational domains, 12 settings sub-tabs,
  zero cross-module state leakage in a single authenticated shell
- Built a **22-section customer conversion funnel** and a separate **/pros artisan acquisition
  funnel** — handling both sides of the marketplace from one domain, reducing launch CAC
  without paid media dependency
- Implemented **react-snap pre-rendering** with JSON-LD structured data (Organization,
  LocalBusiness, FAQPage schemas) — delivering sub-1s first contentful paint on
  mobile-first Nigerian connections
- Built **live Mapbox GL job tracking**, Paystack chargeback flows, MFA enforcement,
  IP allowlist, audit log viewer, and user impersonation tool directly within the admin panel
- Delivered a **TipTap-powered rich text CMS** for legal and policy updates — eliminating
  engineering involvement in routine content changes
- Implemented JWT ProtectedRoute shell with session-expiry event listener that
  auto-redirects on token expiry, keeping the auth boundary clean across all admin routes

---

### Lead Full-Stack Engineer
**PredictHub** | 2024 | Remote

Sports prediction marketplace where football fans publish match picks, build a public
reputation, and earn from being right. Sole engineer — architected and shipped all three
surfaces: user frontend, admin dashboard, and NestJS backend API.

**Tech Stack:** React 18, TypeScript, Vite, TanStack Query v5, NestJS v11, Supabase
(PostgreSQL), Passport JWT, Shadcn UI, Tailwind CSS, Recharts, The Odds API, Resend API,
Claude API, Render, Vercel

- Solved a critical **multi-tenancy auth conflict**: Supabase RLS assumes `auth.uid()` from
  Supabase session tokens, but the app issues custom JWTs via NestJS Passport — making
  `auth.uid()` silently null. Fixed by routing all service-layer DB calls through the
  **service-role admin client**, preserving RLS at the edge without disabling it globally
- Resolved **PostgREST ambiguous FK path errors** (opaque 406s across junction tables)
  by applying explicit foreign key hints on every embed query
- Built OTP-gated auth (Resend API, <2s delivery), prediction engine with
  **30-min cron auto-resolution** against The Odds API, social feed with nested comments,
  wallet + transaction system, and global leaderboard — from zero to production in one sprint
- Designed 13-table PostgreSQL schema with clean migration history; zero RLS leakage
  on Render deploy, zero TypeScript errors at build
- Scaffolded **Claude API integration** for AI-powered prediction quality scoring

---

### Senior Frontend Engineer (Founder)
**EachBlock** | 2023 – Present | Remote, Lagos, Nigeria

Founded and lead EachBlock, a frontend development studio delivering full-scale products
for startups across Nigeria, Canada, the US, and Europe.

---

**Yoga Experience Africa (YEA) — Wellness & Event Platform**
*Tech Stack: Next.js, TypeScript, Framer Motion, Tailwind CSS, Startbutton API, IP Geolocation API*

- Increased pre-event ticket sales by **65%** via mobile-first UX and scroll-driven
  Framer Motion animations across the full event site
- Integrated **IP geolocation-driven multi-currency payment** (NGN, ZAR, KES) via
  Startbutton API — currency displayed automatically based on user location
- Achieved **sub-1.5s page load** and 96% mobile engagement; platform supported
  1,000+ registered attendees and 20+ vendors

---

**AquaTrack — Fish Farm Management SaaS**
*Tech Stack: Next.js, TypeScript, Redux Toolkit, Firebase, Tailwind CSS, Recharts*

- Built an **Excel-grade client-side computation engine** for real-time cost tracking,
  profit/loss calculations, and harvest sales projections in the browser
- Implemented **multi-role RBAC** (farm owners, managers, technicians) with Firebase
  Auth and Firestore real-time listeners — including role-based billing and feature gating
- Adopted by **300+ farms** across Nigeria; improved farm management efficiency by **40%**

---

**TruBooker — Multi-Role Transport Booking Platform**
*Tech Stack: Next.js, TypeScript, Redux Toolkit, Google Maps API, Paystack, Tailwind CSS*

- Architected **four separate app surfaces** (passenger, driver, agent, admin) under a
  single shared component system and unified design token set
- Integrated real-time GPS tracking, a referral earnings engine, and Paystack gateway
- Reduced booking time from **15 minutes (manual) to under 1 minute**;
  platform reached **5,000+ monthly active users** at launch

---

### Co-founder / Frontend Lead
**Easeplan** | 2023 | Remote, Port Harcourt, Nigeria

Event vendor finder platform with real-time negotiation chat, vendor business pages,
and Paystack payment integration.

- Built vendor-customer real-time chat and custom vendor business page creation with
  portfolio, pricing, and social sharing
- Implemented flexible pricing system with custom quotes, discount options, and
  direct wallet-to-vendor Paystack payments

---

### Frontend Engineer
**FiatPlug** | 2022 | Remote, Lagos, Nigeria

Built the Admin Dashboard and Landing Page for a dual-asset fintech platform
handling gift card trading and cryptocurrency transactions.

- Built gift card management, crypto transaction interface, live customer support chat,
  and analytics dashboard within a single RBAC-controlled admin shell
- Used Redux Toolkit and Next.js SSR/SSG; supported **1,000+ user onboarding**
  in the first month post-launch

---

### Frontend Engineer & Mentor
**Stutern** | 2020 – 2021 | Remote, Lagos, Nigeria

- Trained and mentored **20+ junior frontend engineers** in React, TypeScript,
  performance optimisation, and state management
- Led weekly code reviews, API integration workshops, and Git collaboration sessions

---

## TECHNICAL SKILLS

**Languages:** JavaScript, TypeScript

**Frameworks & Libraries:** React 18, Next.js 15, Vite, NestJS, React Native

**State Management:** Redux Toolkit, TanStack Query v5, Zustand, Context API

**Styling & Animation:** Tailwind CSS, Shadcn UI (Radix), Framer Motion, Styled Components

**Backend & Database:** NestJS v11, Supabase (PostgreSQL + Auth), Firebase (Firestore, Auth)

**APIs & Integrations:** Paystack, Startbutton, Google Maps API, Mapbox GL,
The Odds API, Resend, Claude API, IP Geolocation

**Forms & Validation:** React Hook Form, Zod

**Rich Text & Charts:** TipTap, Recharts, Chart.js

**SEO & Performance:** react-snap, react-helmet-async, JSON-LD structured data,
Next.js SSR/SSG, Core Web Vitals, code splitting, lazy loading

**Testing & Quality:** Integration Testing, TypeScript strict mode, ESLint

**DevOps:** Git, GitHub, CI/CD, Render, Vercel

**AI Tools:** Claude (Anthropic), Cursor, v0.dev, Vercel AI SDK, ChatGPT/GPT-4

---

## EDUCATION & CERTIFICATIONS

- **Senior Frontend Developer** — ZTM Academy
- **Advanced React For Enterprise: React for Senior Engineers** — Udemy
