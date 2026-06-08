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

const YeaCaseStudy = () => {
  return (
    <CaseStudyWrapper
      category="Wellness & Events"
      title="Yoga Experience Africa"
      subtitle="Wellness & Event Platform"
      role="Senior Frontend Engineer"
      siteUrl="https://www.yogaexperiences.africa"
      siteLabel="Visit YEA"
    >
      <ImageGrid
        images={[
          { url: "/yea-mockup.png", alt: "YEA event website" },
          { url: "/Yea-web-admin.png", alt: "YEA admin dashboard" },
        ]}
      />

      <CaseSection label="Overview">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Yoga Experience Africa (YEA) is the continent&apos;s premier yoga
          event — a community-driven platform connecting attendees with top
          instructors and wellness vendors. I was brought in to design and build
          the official event website from scratch, including online ticket
          booking, vendor showcase, and a full admin dashboard for the
          organising team.
        </p>
      </CaseSection>

      <CaseSection label="The Challenge">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
          Building a high-conversion event platform for Africa&apos;s largest
          yoga festival — demanding sub-1.5s load times, mobile-first UX for
          1,000+ attendees, IP-geolocation-driven multi-currency ticketing, and
          scroll-based experiential storytelling.
        </p>
        <ArchBox note="IP geolocation API · Multi-currency Startbutton integration · Framer Motion scroll choreography · Mobile-first progressive enhancement · Static generation for performance" />
      </CaseSection>

      <CaseSection label="What I Built">
        <FeatureBlock
          number="01"
          title="Event Website & Ticket Booking"
          items={[
            "Designed and built the full event website with ticket purchasing, schedule browsing, and vendor showcase.",
            "Integrated Startbutton payment gateway supporting NGN, ZAR, and KES — selected automatically via IP geolocation.",
            "Built a smooth checkout flow that reduced drop-off at payment by presenting local currency pricing upfront.",
          ]}
        />
        <FeatureBlock
          number="02"
          title="Scroll-Based Storytelling & Animations"
          items={[
            "Choreographed scroll-driven reveal animations using Framer Motion to create an immersive brand experience.",
            "Implemented staggered section transitions, parallax hero effects, and kinetic typography.",
            "Ensured all animations respect prefers-reduced-motion for accessibility compliance.",
          ]}
        />
        <FeatureBlock
          number="03"
          title="Mobile-First Responsive UI"
          items={[
            "Designed every layout mobile-first — critical given 96% of attendees came from mobile devices.",
            "Achieved sub-1.5s load time on 4G networks through image optimisation and static generation.",
            "Implemented responsive navigation, sticky CTA bars, and touch-optimised booking flow.",
          ]}
        />
        <FeatureBlock
          number="04"
          title="Admin Dashboard for Organisers"
          items={[
            "Built a dashboard for the organising team to track ticket sales, manage vendors, and view attendee data.",
            "Integrated performance analytics to monitor user engagement and session popularity.",
            "Built instructor schedule management and earnings visibility for session hosts.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Performance Optimisation">
        <ImpactList
          items={[
            "Used Next.js static generation (SSG) for all marketing pages — served from CDN edge, zero server latency.",
            "Optimised all images with next/image WebP compression and lazy loading.",
            "Achieved Lighthouse performance score of 94+ on mobile.",
            "Implemented server-side pagination and caching for vendor and session listings.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Business Impact">
        <MetricRow
          metrics={[
            { value: "65%", label: "ticket sales increase" },
            { value: "1,000+", label: "registered attendees" },
            { value: "1.5s", label: "page load time" },
          ]}
        />
        <ImpactList
          items={[
            "Pre-event ticket sales increased by 65% compared to the previous year via intuitive mobile UX.",
            "Platform supported 20+ vendors and 1,000+ registered attendees across Africa's top yoga event.",
            "Achieved 96% mobile engagement with sub-1.5s average page load times.",
            "Increased session bookings by 70% through a streamlined booking flow.",
          ]}
        />
      </CaseSection>

      <CaseSection label="Tech Stack">
        <StackTags
          tags={[
            "Next.js",
            "TypeScript",
            "Framer Motion",
            "Tailwind CSS",
            "Redux Toolkit",
            "Startbutton API",
            "IP Geolocation API",
            "Firebase Auth",
            "SSR / SSG",
            "Web Accessibility",
          ]}
        />
      </CaseSection>
    </CaseStudyWrapper>
  );
};

export default YeaCaseStudy;
