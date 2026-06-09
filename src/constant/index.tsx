export const projects = [
  {
    slug: "aquatrack-case-study",
    category: "AgriTech SaaS",
    role: "Senior Frontend Engineer",
    title: "Aquatrack",
    subtitle: "Fish Farm Management Platform",
    siteurl: "https://www.aquatrackinc.com",
    proimg: [
      { url: "/Aquatrack-apps.png" },
      { url: "/Aquatrack-app-dashboard.png" },
    ],
    challenge:
      "Replacing paper-based farm records with a real-time digital system — requiring Excel-grade computation in the browser, multi-role access control, and reliable data sync across low-connectivity environments.",
    architectureNote:
      "Multi-role RBAC · Firebase real-time listeners · Client-side computation engine · SSR/SSG hybrid rendering · Role-based billing",
    metrics: [
      { value: "300+", label: "active farms" },
      { value: "40%", label: "efficiency gain" },
      { value: "6", label: "user roles supported" },
    ],
    achivement: "What I Did:",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Tailwind CSS",
      "Shadcn",
      "Recharts",
    ],
    summary:
      "Aquatrack is a fish farm management software that helps farmers track and manage fish farm batches, ponds, inventory, sales during harvest, and handle accurate calculations similar to an Excel sheet.",
    tasks: [
      {
        title:
          "Built responsive interfaces for pond tracking, batch management, harvest sales, and inventory.",
      },
      {
        title:
          "Created Excel-style data tables for cost tracking, profit/loss calculations, and sales reporting.",
      },
      {
        title:
          "Integrated Firebase Firestore and Auth for real-time data sync and secure access.",
      },
    ],
    impact: [
      {
        title:
          "Helped fish farmers track production and reduce manual bookkeeping.",
      },
      {
        title: "Used by 300+ farms in Nigeria to digitize operations.",
      },
      {
        title:
          "Improved farm management efficiency by 40% through streamlined data tracking and reporting.",
      },
    ],
  },

  {
    slug: "yogaexperience-africa-case-study",
    category: "Wellness & Events",
    role: "Senior Frontend Engineer",
    title: "Yoga Experience Africa",
    subtitle: "Wellness & Event Platform",
    siteurl: "https://www.yogaexperiences.africa",
    proimg: [{ url: "/yea-mockup.png" }, { url: "/Yea-web-admin.png" }],
    challenge:
      "Building a high-conversion event platform for Africa's largest yoga festival — demanding sub-1.5s load times, mobile-first UX for 1,000+ attendees, IP-geolocation-driven multi-currency ticketing, and scroll-based experiential storytelling.",
    architectureNote:
      "IP geolocation API · Multi-currency Startbutton integration · Framer Motion scroll choreography · Mobile-first progressive enhancement · Static generation for performance",
    metrics: [
      { value: "65%", label: "ticket sales increase" },
      { value: "1,000+", label: "registered attendees" },
      { value: "1.5s", label: "page load time" },
    ],
    achivement: "What I Did:",
    stack: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Startbutton API",
      "IP Geolocation API",
    ],
    summary:
      "Yoga Experience Africa (YEA) is a community-driven platform that connects users with top yoga instructors across Africa, offering live sessions, wellness programs, and event management.",
    tasks: [
      {
        title:
          "Designed and developed the official event website for YEA, enabling online ticket booking and vendor showcase.",
      },
      {
        title:
          "Created smooth scroll-based animations and responsive mobile-first layouts using Framer Motion and Tailwind CSS.",
      },
      {
        title:
          "Collaborated directly with event organizers to build an experience-focused interface matching the brand identity.",
      },
    ],
    impact: [
      {
        title:
          "Helped increase pre-event ticket sales by 65% via intuitive mobile UX and fast-loading landing pages.",
      },
      {
        title:
          "Platform supported 20+ vendors and 1,000+ registered attendees across Africa's top yoga event.",
      },
      {
        title: "Achieved 96% mobile engagement and sub-1.5s page load times.",
      },
    ],
  },

  {
    slug: "trubooker-case-study",
    category: "Transport & Mobility",
    role: "Frontend Engineer",
    title: "TruBooker",
    subtitle: "Multi-Role Transport Booking Platform",
    siteurl: "https://www.trubooker.com",
    proimg: [
      { url: "/trubooker1.png" },
      { url: "/trubooker2.png" },
      { url: "/trubooker4.png" },
      { url: "/trubooker3.png" },
    ],
    challenge:
      "Architecting a multi-role transport platform serving four distinct user types — passengers, drivers, agents, and admins — each with separate application surfaces, GPS-integrated workflows, and real-time scheduling under a unified design system.",
    architectureNote:
      "Multi-app role architecture · GPS real-time tracking · Shared component system · Optimistic state updates · Referral earnings engine · API error boundary handling",
    metrics: [
      { value: "5,000+", label: "monthly active users" },
      { value: "<1 min", label: "avg booking time" },
      { value: "4", label: "distinct app surfaces" },
    ],
    achivement: "What I Did:",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Google Maps API",
      "Shadcn",
      "Tailwind CSS",
    ],
    summary:
      "TruBooker is a transport management platform that allows drivers and public corporations to list vehicles, sell tickets, and manage schedules, while agents earn through referrals and passengers book with ease.",
    tasks: [
      {
        title:
          "Built mobile and web apps for passengers, drivers, agents, and admins.",
      },
      {
        title:
          "Integrated GPS tracking, real-time scheduling, referral earnings, and ticket sales.",
      },
      {
        title:
          "Created reusable UI component systems and implemented form validation, state caching, and API error handling.",
      },
      {
        title:
          "Developed the admin dashboard to manage drivers, trips, finances, and users.",
      },
    ],
    impact: [
      {
        title:
          "Enabled launch of Nigeria's first multi-role bus booking platform with 5,000+ monthly active users.",
      },
      {
        title: "Reduced booking time from 15 mins (manual) to under 1 minute.",
      },
    ],
  },

  {
    slug: "fiatplug-case-study",
    category: "Fintech",
    role: "Frontend Engineer",
    title: "Fiatplug",
    subtitle: "Gift Card & Crypto Admin Platform",
    siteurl: "https://www.fiatplug.com",
    proimg: [
      { url: "/fiatplug1.png" },
      { url: "/fiatplug2.png" },
      { url: "/fiatplug4.png" },
      { url: "/fiatplug3.png" },
    ],
    challenge:
      "Building a dual-asset fintech admin dashboard that unifies gift card trading and crypto transactions under a single interface — with real-time trade feeds, customer support tooling, and multi-role access control for operators.",
    architectureNote:
      "Admin RBAC dashboard · Real-time transaction monitoring · Integrated support ticket system · Figma-to-code design pipeline · Automated reporting workflows",
    metrics: [
      { value: "1,000+", label: "users in first month" },
      { value: "2", label: "asset classes managed" },
      { value: "80%", label: "admin workflow improvement" },
    ],
    achivement: "What I Did:",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Shadcn",
      "Tailwind CSS",
      "Recharts",
    ],
    summary:
      "Fiatplug is a platform that allows users to buy, sell, and manage gift cards while also handling cryptocurrency transactions. My role focused on building the Admin Dashboard and Landing Page.",
    tasks: [
      {
        title:
          "Designed and implemented interfaces for gift card sales, crypto transactions, and support ticket handling.",
      },
      {
        title:
          "Built and maintained the landing page and helped with design iterations using Figma files.",
      },
      {
        title: "Integrated user management and customer support chat features.",
      },
    ],
    impact: [
      {
        title: "Supported onboarding of 1,000+ users in the first month.",
      },
      {
        title: "Improved admin workflow by automating previously manual tasks.",
      },
      {
        title:
          "Helped streamline gift card processing and reporting for support agents.",
      },
    ],
  },

  {
    slug: "xervices-case-study",
    category: "Marketplace · Services",
    role: "Lead Senior Frontend Engineer",
    title: "Xervices",
    subtitle: "On-Demand Services Marketplace",
    siteurl: "",
    proimg: [],
    challenge:
      "Building one admin shell that serves radically different operational domains — live platform monitoring, financial oversight, dispute resolution, CMS, and security controls — without becoming unmaintainable. In parallel: a 22-section conversion funnel that runs rich Framer Motion animations while staying fast on low-bandwidth Nigerian mobile connections.",
    architectureNote:
      "Modular admin shell · Domain-isolated Zustand stores per module · JWT ProtectedRoute + MFA dialog + session-expiry event listener · Mapbox GL live job tracking · TanStack Query v5 server state · react-snap pre-rendering + JSON-LD structured data · TipTap rich text CMS",
    metrics: [
      { value: "22", label: "section conversion funnel" },
      { value: "12", label: "admin settings modules" },
      { value: "6", label: "Nigerian states served" },
    ],
    achivement: "What I Built:",
    stack: [
      "React 18",
      "TypeScript 5",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "TanStack Query v5",
      "Zustand",
      "React Router v6",
      "Mapbox GL",
      "TipTap",
      "Recharts",
      "React Hook Form + Zod",
      "react-snap",
      "react-helmet-async",
      "Paystack",
      "Sonner",
    ],
    summary:
      "Xervices is Nigeria's on-demand service marketplace — connecting customers with verified tradespeople (plumbers, electricians, mechanics, and 10+ other categories) across Lagos, Abuja, Port Harcourt, and beyond. As lead senior frontend engineer, I was the sole architect and implementer across all three web surfaces: the marketing website, the artisan web app, and the internal admin control panel.",
    tasks: [
      {
        title:
          "Built a 22-section marketing funnel and a separate /pros artisan acquisition page with dual-audience routing.",
      },
      {
        title:
          "Architected a modular admin control panel serving finance, disputes, security, CMS, and analytics under one shell.",
      },
      {
        title:
          "Implemented react-snap pre-rendering and JSON-LD structured data for sub-1s FCP on mobile-first connections.",
      },
      {
        title:
          "Built live job map (Mapbox GL), Paystack chargeback flows, audit logs, MFA, and IP allowlist in the admin.",
      },
    ],
    impact: [
      {
        title:
          "Admin panel manages the full operational backend for a live platform across six Nigerian states.",
      },
      {
        title:
          "react-snap pre-rendering delivers sub-1s first contentful paint on cold loads for mobile-first users.",
      },
      {
        title:
          "22-section funnel and /pros page handle both sides of the marketplace from one domain at launch.",
      },
    ],
  },

  {
    slug: "predicthub-case-study",
    category: "Sports Tech · Social",
    role: "Lead Full-Stack Engineer",
    title: "PredictHub",
    subtitle: "Sports Prediction Marketplace",
    siteurl: "",
    proimg: [],
    challenge:
      "The hardest problem was multi-tenancy auth with row-level security and custom JWTs. Supabase RLS assumes auth.uid() comes from a Supabase session token — but the app issues its own JWTs via NestJS Passport, making auth.uid() always null and silently blocking every write and owner-scoped read. The fix required a deliberate architectural rule enforced at the service layer.",
    architectureNote:
      "NestJS Passport JWT · Supabase RLS bypass via service-role admin client · PostgREST explicit FK hints · 30-min cron result polling · OTP-gated auth via Resend",
    metrics: [
      { value: "0→prod", label: "in one build sprint" },
      { value: "<2s", label: "OTP email delivery" },
      { value: "13", label: "DB migration files" },
    ],
    achivement: "What I Built:",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "TanStack Query v5",
      "NestJS v11",
      "Supabase (PostgreSQL)",
      "Passport JWT",
      "Shadcn UI",
      "Tailwind CSS",
      "Recharts",
      "The Odds API",
      "Resend API",
      "Render",
      "Vercel",
    ],
    summary:
      "PredictHub is a sports prediction marketplace where football fans publish match picks, build a public reputation, and earn from being right. An AI module scores prediction quality. Sole engineer — architected and shipped all three apps: user frontend, admin dashboard, and NestJS backend API.",
    tasks: [
      {
        title:
          "Architected and shipped user frontend, admin dashboard, and NestJS backend API as sole engineer.",
      },
      {
        title:
          "Built OTP-gated auth with custom NestJS JWTs and Supabase RLS service-role bypass.",
      },
      {
        title:
          "Implemented prediction engine with 30-min cron polling against The Odds API for auto-resolution.",
      },
      {
        title:
          "Built social feed with likes, comments, and nested replies, plus wallet system and leaderboard.",
      },
    ],
    impact: [
      {
        title:
          "All core flows verified end-to-end — zero TypeScript errors, zero RLS leakage on Render deploy.",
      },
      {
        title: "OTP email delivered via Resend in under 2s average.",
      },
      {
        title:
          "Cron match resolution runs 8 result checks per day within The Odds API free tier.",
      },
    ],
  },
];
