import React from "react";
import CaseStudyWrapper, {
  CaseSection,
  FeatureBlock,
  ArchBox,
  MetricRow,
  ImpactList,
  StackTags,
  ImageGrid,
} from "../CaseStudyWrapper";

const TrubookerCase = () => {
  return (
    <CaseStudyWrapper
      category="Transport & Mobility"
      title="TruBooker"
      subtitle="Multi-Role Transport Booking Platform"
      role="Frontend Engineer"
      siteUrl="https://www.trubooker.com"
      siteLabel="Visit TruBooker"
    >
      <ImageGrid
        images={[
          { url: "/trubooker1.png", alt: "TruBooker passenger app" },
          { url: "/trubooker2.png", alt: "TruBooker driver dashboard" },
        ]}
      />
      <ImageGrid
        images={[
          { url: "/trubooker4.png", alt: "TruBooker admin panel" },
          { url: "/trubooker3.png", alt: "TruBooker agent portal" },
        ]}
      />

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          TruBooker is Nigeria&apos;s first multi-role transport management
          platform — allowing bus corporations and independent drivers to list
          vehicles, sell tickets, and manage schedules, while agents earn
          through referrals and passengers book journeys in under a minute. I
          architected and built four separate application surfaces under a
          single unified design system.
        </p>
      </CaseSection>

      <CaseSection label="The Challenge">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
          Architecting a multi-role transport platform serving four distinct
          user types — passengers, drivers, agents, and admins — each with
          separate application surfaces, GPS-integrated workflows, and
          real-time scheduling under a unified design system.
        </p>
        <ArchBox note="Multi-app role architecture · GPS real-time tracking · Shared component system · Optimistic state updates · Referral earnings engine · API error boundary handling" />
      </CaseSection>

      <CaseSection label="What I Built">
        <FeatureBlock
          number="01"
          title="Admin Dashboard"
          items={[
            "Built real-time driver and trip management with live GPS tracking via Google Maps API.",
            "Developed revenue tracking across ticket sales, agent commissions, and corporate accounts.",
            "Implemented driver performance management — trip history, ratings, and incident logging.",
            "Created user management tools to handle passengers, agents, drivers, and corporate accounts.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Agent Web App"
          items={[
            "Built a referral system allowing agents to invite passengers and earn commissions per booking.",
            "Integrated agent wallet management — earnings accumulation and bank withdrawal requests.",
            "Created an earnings dashboard tracking revenue, referral history, and commission breakdowns.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="Passenger Booking App"
          items={[
            "Built a mobile-first ticket booking flow — route search, seat selection, and payment in under 60 seconds.",
            "Integrated Paystack for local currency (NGN) payments with a smooth checkout experience.",
            "Implemented trip history, e-ticket generation, and boarding pass display.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Shared Component System"
          items={[
            "Designed a reusable UI component library shared across all four app surfaces.",
            "Implemented form validation, state caching, and API error boundary handling globally.",
            "Built a consistent design token system — spacing, typography, and colour — applied across apps.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Performance Optimisation">
        <ImpactList
          items={[
            "Leveraged Next.js SSR and SSG for landing pages and marketing surfaces.",
            "Used Redux Toolkit with RTK Query for efficient server-state management and cache invalidation.",
            "Implemented optimistic UI updates on booking actions to eliminate perceived latency.",
            "Lazy-loaded Google Maps and GPS-dependent modules to keep initial bundle lean.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "5,000+", label: "monthly active users" },
            { value: "<1 min", label: "avg booking time" },
            { value: "4", label: "distinct app surfaces" },
          ]}
        />
        <ImpactList
          items={[
            "Enabled launch of Nigeria's first multi-role bus booking platform.",
            "Reduced booking time from 15 minutes (manual ticketing) to under 1 minute.",
            "Boosted passenger satisfaction with a seamless, local-currency booking experience.",
            "Increased agent engagement through the referral and earnings tracking system.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Tech Stack">
        <StackTags
          tags={[
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Google Maps API",
            "Paystack API",
            "Shadcn UI",
            "Tailwind CSS",
            "Framer Motion",
            "SSR / SSG",
            "CI/CD",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default TrubookerCase;
