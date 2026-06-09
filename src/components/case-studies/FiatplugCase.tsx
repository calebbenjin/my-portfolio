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

const FiatplugCase = () => {
  return (
    <CaseStudyWrapper
      category="Fintech"
      title="Fiatplug"
      subtitle="Gift Card & Crypto Admin Platform"
      role="Frontend Engineer"
      siteUrl="https://www.fiatplug.com"
      siteLabel="Visit Fiatplug"
    >
      <ImageGrid
        images={[
          { url: "/fiatplug1.png", alt: "Fiatplug admin dashboard" },
          { url: "/fiatplug2.png", alt: "Fiatplug gift card management" },
        ]}
      />
      <ImageGrid
        images={[
          { url: "/fiatplug4.png", alt: "Fiatplug transaction view" },
          { url: "/fiatplug3.png", alt: "Fiatplug landing page" },
        ]}
      />

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Fiatplug is a dual-asset fintech platform where users can buy, sell,
          and trade gift cards alongside cryptocurrency. I was responsible for
          the Admin Dashboard and Landing Page — the internal tools that
          operators rely on daily to process trades, handle customer support,
          and monitor platform health.
        </p>
      </CaseSection>

      <CaseSection label="The Challenge">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
          Building a dual-asset fintech admin dashboard that unifies gift card
          trading and crypto transactions under a single interface — with
          real-time trade feeds, customer support tooling, and multi-role
          access control for operators.
        </p>
        <ArchBox note="Admin RBAC dashboard · Real-time transaction monitoring · Integrated support ticket system · Figma-to-code design pipeline · Automated reporting workflows" />
      </CaseSection>

      <CaseSection label="What I Built">
        <FeatureBlock
          number="01"
          title="Admin Dashboard"
          items={[
            "Built a gift card management system — admins can view listings, track trade status, and action customer requests.",
            "Developed a crypto transaction interface for monitoring wallet activity, trade volumes, and balances in real time.",
            "Integrated analytics charts showing user activity, sales performance, and daily trade volume trends.",
            "Implemented an RBAC system distinguishing super-admins, support agents, and compliance reviewers.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Customer Support & Live Chat"
          items={[
            "Integrated a live chat module allowing support agents to communicate with users directly from the dashboard.",
            "Built a support ticket system with status tracking, agent assignment, and resolution history.",
            "Created templated response tools to speed up agent handling of common gift card and crypto queries.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="Landing Page"
          items={[
            "Built a high-converting landing page from Figma designs — responsive, SEO-optimised, and fast-loading.",
            "Leveraged Next.js SSR and SSG for optimal page speed and search engine visibility.",
            "Implemented animations and scroll-triggered reveals to increase engagement and time-on-page.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Reporting & Analytics"
          items={[
            "Built automated reporting views for daily gift card processing totals and crypto settlement summaries.",
            "Integrated Recharts to visualise trade volume trends, user growth, and revenue breakdowns.",
            "Created exportable data tables for compliance and accounting workflows.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Performance Optimisation">
        <ImpactList
          items={[
            "Used Redux Toolkit with memoised selectors to prevent unnecessary re-renders on high-frequency trade feed updates.",
            "Integrated Firebase Firestore real-time listeners scoped per operator role — no over-fetching.",
            "Code-split the admin dashboard from the landing page to keep initial load lightweight.",
            "Applied debounced search and server-side filtering on transaction tables to handle large datasets.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "1,000+", label: "users in first month" },
            { value: "2", label: "asset classes managed" },
            { value: "80%", label: "admin workflow improvement" },
          ]}
        />
        <ImpactList
          items={[
            "Supported onboarding of 1,000+ users in the first month post-launch.",
            "Improved admin workflow efficiency by 80% through automation of previously manual tasks.",
            "Streamlined gift card processing and reporting for support agents.",
            "Increased user conversion through a high-performing, SEO-optimised landing page.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Tech Stack">
        <StackTags
          tags={[
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Firebase Firestore",
            "Shadcn UI",
            "Tailwind CSS",
            "Recharts",
            "SSR / SSG",
            "Figma",
            "CI/CD",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default FiatplugCase;
