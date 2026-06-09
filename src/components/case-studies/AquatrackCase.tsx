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

const AquatrackCase = () => {
  return (
    <CaseStudyWrapper
      category="AgriTech SaaS"
      title="Aquatrack"
      subtitle="Fish Farm Management Platform"
      role="Senior Frontend Engineer"
      siteUrl="https://www.aquatrackinc.com"
      siteLabel="Visit Aquatrack"
    >
      <ImageGrid
        images={[
          { url: "/Aquatrack-apps.png", alt: "Aquatrack mobile app" },
          { url: "/Aquatrack-app-dashboard.png", alt: "Aquatrack dashboard" },
        ]}
      />

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Aquatrack is a fish farm management SaaS that replaces paper-based
          records with a real-time digital system. Farmers can track fish
          batches, monitor pond conditions, manage inventory, record harvest
          sales, and perform cost calculations similar to an Excel sheet — all
          from a single platform. I served as the lead frontend engineer,
          building both the farm manager and admin dashboards end to end.
        </p>
      </CaseSection>

      <CaseSection label="The Challenge">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
          Replacing paper-based farm records with a real-time digital system —
          requiring Excel-grade computation in the browser, multi-role access
          control, and reliable data sync across low-connectivity environments.
        </p>
        <ArchBox note="Multi-role RBAC · Firebase real-time listeners · Client-side computation engine · SSR/SSG hybrid rendering · Role-based billing" />
      </CaseSection>

      <CaseSection label="What I Built">
        <FeatureBlock
          number="01"
          title="Batch & Pond Management Dashboard"
          items={[
            "Built a dashboard to manage fish batches and monitor pond conditions across multiple farm locations.",
            "Integrated real-time data tracking for fish growth cycles, feeding schedules, and water quality.",
            "Designed table views that mirror Excel workflows — sortable rows, inline editing, calculated totals.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Inventory & Harvest Sales Tracking"
          items={[
            "Developed an inventory management system tracking fish feed, equipment, and stock levels.",
            "Integrated sales tracking during harvest with automated profit/loss calculations.",
            "Built cost-per-kg and revenue summaries that update live as data is entered.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="Role-Based Billing & Payment Integration"
          items={[
            "Integrated Startbutton payment gateway supporting local currencies (NGN, ZAR, KES).",
            "Implemented role-based billing management — different plans and limits for farm owners vs managers.",
            "Built subscription state machine to gate features behind active billing status.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Admin & Farm Manager Dashboards"
          items={[
            "Built a custom admin dashboard for managing fish ponds, inventory, and sales performance.",
            "Implemented RBAC controlling which users see financial data, can edit records, or invite staff.",
            "Created separate dashboard surfaces for farm owners, managers, and technicians.",
          ]}
        />
        <FeatureBlock
          number="05"
          title="Geo-Analytics & Reporting"
          items={[
            "Integrated Leaflet.js to visualise farm performance across different geographic locations.",
            "Built data charts and performance reports using Recharts and Chart.js.",
            "Implemented server-side pagination for large dataset handling.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Performance Optimisation">
        <ImpactList
          items={[
            "Leveraged Next.js SSR and SSG to reduce time-to-interactive and improve SEO rankings.",
            "Optimised large table renders with windowed lists — 10,000+ rows with no jank.",
            "Implemented Firebase offline persistence to handle unreliable rural connectivity gracefully.",
            "Used Redux Toolkit query caching to prevent redundant Firestore reads.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "300+", label: "active farms" },
            { value: "40%", label: "efficiency gain" },
            { value: "6", label: "user roles supported" },
          ]}
        />
        <ImpactList
          items={[
            "Helped 300+ fish farmers across Nigeria digitise operations and reduce manual bookkeeping.",
            "Improved farm management efficiency by 40% through streamlined data tracking and reporting.",
            "Reduced fish mortality rate by 40% via real-time water quality monitoring.",
            "Improved billing accuracy by 80% with automated payment integration.",
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
            "Firebase Auth",
            "Tailwind CSS",
            "Shadcn UI",
            "Recharts",
            "Chart.js",
            "Leaflet.js",
            "Startbutton API",
            "SSR / SSG",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default AquatrackCase;
