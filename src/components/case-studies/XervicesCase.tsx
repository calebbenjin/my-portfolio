import React from "react";
import CaseStudyWrapper, {
  CaseSection,
  FeatureBlock,
  ArchBox,
  MetricRow,
  ImpactList,
  StackTags,
} from "../CaseStudyWrapper";

const XervicesCase = () => {
  return (
    <CaseStudyWrapper
      category="Marketplace · Services"
      title="Xervices"
      subtitle="On-Demand Services Marketplace"
      role="Lead Senior Frontend Engineer — Sole Frontend Architect"
    >
      {/* Pre-launch typographic hero */}
      <div className="w-full aspect-video rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-end justify-between p-5 mt-6 mb-2 overflow-hidden relative">
        <p className="absolute inset-0 flex items-center justify-center text-[72px] font-bold text-zinc-100 dark:text-zinc-900 select-none pointer-events-none leading-none">
          Xervices
        </p>
        <span className="relative text-xs text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-2.5 py-1">
          Live · Nigeria
        </span>
        <span className="relative text-xs text-zinc-400">
          Screenshots coming soon
        </span>
      </div>

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Xervices is Nigeria&apos;s on-demand service marketplace — connecting
          customers with verified tradespeople across 10+ categories (plumbing,
          electrical, cleaning, mechanics, carpentry, and more) in Lagos,
          Abuja, Port Harcourt, and expanding cities. The platform handles the
          full service lifecycle: discovery, booking, in-app payments via
          Paystack, escrow-held funds, dispute resolution, and artisan payout
          withdrawals. It ships as two consumer mobile apps, a NestJS API, and
          three web surfaces. I architected and built all three web surfaces as
          the sole frontend engineer.
        </p>
      </CaseSection>

      <CaseSection label="The Core Challenge">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic mb-4">
          Building one admin shell that serves radically different operational
          domains simultaneously — live monitoring, financial oversight, content
          management, and security controls — without it becoming a bloated,
          unmaintainable mess. Each module had deep domain logic that had to be
          surfaced cleanly inside a shared authenticated shell.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          The solution: a{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
            domain-isolated Zustand store per module
          </span>{" "}
          (finance, disputes, security, settings) with no cross-module state
          leakage. Each module is independently lazy-loaded behind the
          ProtectedRoute shell — the shell owns auth and session lifecycle,
          each module owns its own data layer. This kept individual modules
          testable and maintainable as the feature surface grew to 12
          settings sub-tabs and 6 major operational domains.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The marketing challenge was equally hard: a 22-section Framer Motion
          animated funnel that had to feel polished while loading fast on
          low-bandwidth Nigerian mobile connections. Solved with react-snap
          pre-rendering — serving static HTML on first load and hydrating
          after, targeting sub-1s FCP on 3G.
        </p>
        <ArchBox note="Modular admin shell · Domain-isolated Zustand stores · JWT ProtectedRoute + MFA dialog + session-expiry event listener · Mapbox GL live tracking · TanStack Query v5 · react-snap pre-rendering · JSON-LD structured data (Organization, LocalBusiness, FAQPage)" />
      </CaseSection>

      <CaseSection label="Marketing Website — xervices.ng">
        <FeatureBlock
          number="01"
          title="22-Section Customer Conversion Funnel"
          items={[
            "Hero → Intro Video → 14-category service grid → Before/After reveal → How It Works → App Showcase → Comparison Table → Customer Stories → Features → Differentiators → Testimonials → FAQ → Download CTA.",
            "Persistent sticky CTA banner throughout scroll — always one tap from conversion.",
            "BeforeAfterSection with an interactive reveal slider showing real job transformations.",
            "Framer Motion whileInView animations with staggered delays across every section, wrapped in a PageTransition component.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Separate /pros Artisan Acquisition Funnel"
          items={[
            "10-section dedicated funnel targeting artisan sign-up independently from customer acquisition — same domain, different audience routing.",
            "Sections: ProHero, ProEarnings, ProTools, ProBenefits, ProComparison, ProHowItWorks, ProTestimonials, ProFAQ, ProCTA.",
            "Handles both sides of the marketplace from one domain — reduces CAC without paid media dependency at launch.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="SEO Infrastructure & Pre-rendering"
          items={[
            "Custom SEO component with full Open Graph and Twitter Card support injected per page via react-helmet-async.",
            "JSON-LD structured data injected per route: Organization, LocalBusiness, and FAQPage schemas for rich search results.",
            "react-snap pre-rendering: crawls and serialises every route to static HTML at build time — sub-1s FCP on first load.",
            "Canonical URLs, sitemap, and robots.txt configured for multi-page SEO coverage.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Supporting Pages & Compliance"
          items={[
            "About, Contact, Privacy Policy, Terms of Service, Cookie Policy, and Delete Account pages — all with consistent layout and SEO treatment.",
            "GDPR-style CookieConsentBanner with persistent localStorage preference storage.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Admin Control Panel — xervices-admin">
        <FeatureBlock
          number="05"
          title="Auth Shell — JWT, MFA & Session Management"
          items={[
            "Zustand auth store with JWT persistence, ProtectedRoute wrapper, and automatic redirect on auth:session-expired events.",
            "MFA verification dialog on login — code must be confirmed before the admin shell renders.",
            "Session management table: view all active admin sessions, revoke individually or bulk.",
          ]}
        />
        <FeatureBlock
          number="06"
          title="Dashboard Analytics"
          items={[
            "Tabbed overview with real-time stat cards: Active Users, Ongoing Jobs, Open Disputes, Escrow Balance.",
            "App download tracker, daily/monthly registration trend charts (Recharts), and a recent activity feed.",
            "Cancellation reason breakdown, state-level geographic analytics, best-performing service categories, and top artisan performers.",
          ]}
        />
        <FeatureBlock
          number="07"
          title="Users & Jobs Modules"
          items={[
            "Separate paginated tables for Customers and Artisans with inline CustomerDetailsSheet and ArtisanWalletSheet side panels.",
            "Suspend, approve, and ban actions with audit trail on each user action.",
            "JobMapView component powered by Mapbox GL — live job locations plotted across Nigeria with status filtering.",
            "JobDetailsSheet for reviewing job metadata, status transitions, and payment records.",
          ]}
        />
        <FeatureBlock
          number="08"
          title="Disputes & Finance Modules"
          items={[
            "Dispute queue with DisputeDetailsSheet for reviewing evidence submitted by both parties.",
            "PaystackChargebackSheet — initiates Paystack chargeback flows directly from the admin without external tooling.",
            "Artisan wallet management: payout/withdrawal stats, RevenueGrowthCharts, and TransactionInsights breakdown.",
          ]}
        />
        <FeatureBlock
          number="09"
          title="Settings CMS — 12 Sub-tabs"
          items={[
            "Promotion slides CMS, Featured profiles picker, Artisan level tier management.",
            "Escrow fee configuration, Referral bonus settings, First-time discount rules, Discount codes.",
            "OTP bypass controls for support workflows, User of the Week selector.",
            "TipTap rich text editors for live Legal and Privacy Policy updates — changes publish instantly to the consumer apps.",
          ]}
        />
        <FeatureBlock
          number="10"
          title="Security Dashboard & Role Management"
          items={[
            "Audit log viewer — full history of admin actions with actor, timestamp, and payload.",
            "MFA enforcement settings, IP allowlist management, and rate limiting controls.",
            "User impersonation tool: support agents can view the platform as a specific user for debugging without sharing credentials.",
            "Admin team CRUD with granular role and permission assignment per operator.",
          ]}
        />
        <FeatureBlock
          number="11"
          title="Broadcast Center & Referrals"
          items={[
            "Push notification composer for targeted broadcasts to customers, artisans, or both.",
            "Referral program stats and promo code creation/management via PromoCodeFormSheet.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "22", label: "section conversion funnel" },
            { value: "12", label: "admin settings modules" },
            { value: "6", label: "Nigerian states served" },
          ]}
        />
        <ImpactList
          items={[
            "Admin panel manages the full operational backend for a live, commercially active platform — zero manual DB access needed for day-to-day ops.",
            "react-snap pre-rendering delivers sub-1s first contentful paint on cold loads — critical for conversion on mobile-first Nigerian connections.",
            "22-section funnel and dedicated /pros artisan page handle both sides of the marketplace from one domain, reducing launch CAC.",
            "TipTap-powered settings CMS lets the ops team publish legal and policy updates instantly without engineering involvement.",
            "Mapbox GL job tracking and Paystack chargeback integration brought dispute resolution fully in-house.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Tech Stack">
        <StackTags
          tags={[
            "React 18",
            "TypeScript 5",
            "Vite",
            "Tailwind CSS",
            "Shadcn UI (Radix)",
            "Framer Motion",
            "TanStack Query v5",
            "Zustand",
            "React Router DOM v6",
            "Mapbox GL",
            "TipTap",
            "Recharts",
            "React Hook Form",
            "Zod",
            "react-snap",
            "react-helmet-async",
            "Paystack",
            "Sonner",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default XervicesCase;
