import React from "react";
import CaseStudyWrapper, {
  CaseSection,
  FeatureBlock,
  ArchBox,
  MetricRow,
  ImpactList,
  StackTags,
} from "../CaseStudyWrapper";

const PredictHubCase = () => {
  return (
    <CaseStudyWrapper
      category="Sports Tech · Social"
      title="PredictHub"
      subtitle="Sports Prediction Marketplace"
      role="Lead Full-Stack Engineer — Sole Engineer"
    >
      {/* Pre-launch typographic hero */}
      <div className="w-full aspect-video rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-end justify-between p-5 mt-6 mb-2 overflow-hidden relative">
        <p className="absolute inset-0 flex items-center justify-center text-[72px] font-bold text-zinc-100 dark:text-zinc-900 select-none pointer-events-none leading-none">
          PredictHub
        </p>
        <span className="relative text-xs text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-2.5 py-1">
          Pre-launch
        </span>
        <span className="relative text-xs text-zinc-400">
          Screenshots coming soon
        </span>
      </div>

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          PredictHub is a sports prediction marketplace where football fans
          publish match picks (win/draw/BTTS/over-under), build a public
          reputation, and earn from being right. Predictions are tied to live
          matches sourced from The Odds API and auto-resolved by a cron job
          every 30 minutes. Users follow top predictors, compete on a global
          leaderboard, and interact through a social feed — the feel of
          Twitter-for-tipsters. A wallet system handles subscription payments
          and withdrawals. An AI scoring module (Claude API) evaluates
          prediction quality. I was the sole engineer — responsible for
          architecture, all three apps, database schema, auth flow, and
          deployment.
        </p>
      </CaseSection>

      <CaseSection label="The Hard Architectural Problem">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic mb-4">
          Supabase RLS assumes{" "}
          <code className="font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
            auth.uid()
          </code>{" "}
          comes from a Supabase session token — but the app issues its own JWTs
          via NestJS Passport, making{" "}
          <code className="font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
            auth.uid()
          </code>{" "}
          always{" "}
          <code className="font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-1 rounded">
            null
          </code>{" "}
          and silently blocking every write and owner-scoped read.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          The fix was a deliberate architectural rule enforced at the service
          layer: all DB calls go through the{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
            service-role admin client
          </span>{" "}
          (bypassing RLS entirely), while RLS remains active only at the edge
          for any direct client access. This eliminates the auth.uid() null
          problem without disabling RLS globally — a clean boundary that keeps
          the security model intact.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A second class of bug: PostgREST ambiguous foreign key paths across
          junction tables (predictions ↔ users) required explicit FK hints on
          every embed query. These fail silently at query time with opaque 406
          errors — found and fixed by reading PostgREST source behaviour, not
          the docs.
        </p>
        <ArchBox note="NestJS Passport JWT · Supabase RLS bypass via service-role admin client · PostgREST explicit FK hints · 30-min cron result polling · OTP-gated auth via Resend API" />
      </CaseSection>

      <CaseSection label="What I Built">
        <FeatureBlock
          number="01"
          title="OTP-Gated Authentication"
          items={[
            "Register and login both require email OTP verification before a JWT is issued — no password stored.",
            "Welcome email sent on first verify via Resend transactional API (6-digit OTP, 10-min expiry).",
            "NestJS Passport strategy validates the custom JWT on every protected route.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Prediction Engine & Cron Resolution"
          items={[
            "Users create picks tied to live matches fetched from The Odds API (match existence validated on creation).",
            "A 30-minute cron job polls match results and auto-resolves open predictions — win, loss, or void.",
            "Prediction history, win rates, and streaks update in real time after each resolution cycle.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="Social Feed, Likes & Comments"
          items={[
            "Paginated activity feed showing predictions from followed users and trending picks.",
            "Likes, comments, and nested replies with optimistic UI updates on the frontend.",
            "Follow/unfollow system with follower counts and mutual-follow detection.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Wallet & Transaction System"
          items={[
            "Wallet auto-created on user signup with zero balance.",
            "Deposit, withdraw, and subscription payment flows with full transaction history.",
            "Admin approval gate on withdrawal requests before funds are released.",
          ]}
        />
        <FeatureBlock
          number="05"
          title="Leaderboard & Referral Program"
          items={[
            "Global leaderboard ranked by win rate and prediction volume, filterable by sport.",
            "Invite-only referral system — links tracked to referrer with conversion metrics surfaced in admin.",
          ]}
        />
        <FeatureBlock
          number="06"
          title="Admin Dashboard"
          items={[
            "Separate authenticated Vite app (port 5174) with its own auth boundary.",
            "User moderation: verify, ban, flag accounts; view full prediction and transaction history per user.",
            "Withdrawal approval workflow, transaction oversight, and overview charts (Recharts).",
            "Referral conversion metrics and invite analytics.",
          ]}
        />
        <FeatureBlock
          number="07"
          title="AI Prediction Scoring Module"
          items={[
            "Scaffolded Claude API integration to evaluate prediction quality against historical odds and outcomes.",
            "Pluggable architecture — the scoring module runs as an independent service, callable by the cron pipeline.",
            "Designed to surface a quality score per predictor, surfaced on the leaderboard.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Database Architecture">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
          13 migration files across a normalised PostgreSQL schema. Key
          design decisions:
        </p>
        <ImpactList
          items={[
            "Junction tables for predictions ↔ matches and users ↔ followers — explicit FK hints on all PostgREST embeds.",
            "Row-level security policies defined per table, enforced only at the edge (direct client access).",
            "Service-role admin client used exclusively at the NestJS service layer — no RLS friction on writes.",
            "Wallet and transaction tables fully separated from user auth — allows independent balance reconciliation.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "0→prod", label: "in one build sprint" },
            { value: "<2s", label: "OTP email delivery" },
            { value: "13", label: "DB migration files" },
          ]}
        />
        <ImpactList
          items={[
            "All core flows verified end-to-end — zero TypeScript errors, zero RLS leakage on clean Render deploy.",
            "OTP email delivered via Resend in under 2s average — no auth friction at onboarding.",
            "Cron match resolution runs 8 result checks per day, within The Odds API free tier with headroom.",
            "Full admin moderation and payment workflow in place — no manual DB access needed for operations.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Tech Stack">
        <StackTags
          tags={[
            "React 18",
            "TypeScript",
            "Vite",
            "React Router v6",
            "TanStack Query v5",
            "NestJS v11",
            "Supabase (PostgreSQL)",
            "Passport JWT",
            "Shadcn UI",
            "Tailwind CSS",
            "Recharts",
            "The Odds API",
            "Resend API",
            "Claude API",
            "Render",
            "Vercel",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default PredictHubCase;
