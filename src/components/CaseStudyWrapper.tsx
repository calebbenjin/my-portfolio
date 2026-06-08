import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "./Nav";

// ─── Sub-components ────────────────────────────────────────────────────────

export const CaseSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="mt-12 pt-10 border-t border-zinc-100 dark:border-zinc-800/60">
    <p className="text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-5">
      {label}
    </p>
    {children}
  </div>
);

export const FeatureBlock = ({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 flex-shrink-0">
        {number}
      </span>
      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h4>
    </div>
    <ul className="space-y-2 pl-9">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2"
        >
          <span className="mt-2 w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const ArchBox = ({ note }: { note: string }) => (
  <div className="px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 my-4">
    <p className="text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-1.5">
      Architecture Pattern
    </p>
    <p className="text-xs text-zinc-700 dark:text-zinc-300 font-mono leading-relaxed">
      {note}
    </p>
  </div>
);

export const MetricRow = ({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) => (
  <div className="grid grid-cols-3 gap-3 mt-5">
    {metrics.map((m, i) => (
      <div
        key={i}
        className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-center"
      >
        <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {m.value}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-0.5">
          {m.label}
        </p>
      </div>
    ))}
  </div>
);

export const ImpactList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

export const StackTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5 mt-4">
    {tags.map((tag, i) => (
      <span
        key={i}
        className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
      >
        {tag}
      </span>
    ))}
  </div>
);

export const ImageGrid = ({
  images,
}: {
  images: { url: string; alt?: string }[];
}) => (
  <div
    className={`grid gap-2 mt-6 mb-2 ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
  >
    {images.map((img, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/5 bg-zinc-100 dark:bg-zinc-900 aspect-video"
      >
        <Image
          src={img.url}
          alt={img.alt ?? "Project screenshot"}
          width={800}
          height={450}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

// ─── Main Wrapper ───────────────────────────────────────────────────────────

interface CaseStudyWrapperProps {
  children: React.ReactNode;
  category: string;
  title: string;
  subtitle: string;
  role: string;
  siteUrl?: string;
  siteLabel?: string;
}

const CaseStudyWrapper = ({
  children,
  category,
  title,
  subtitle,
  role,
  siteUrl,
  siteLabel,
}: CaseStudyWrapperProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Nav back />

      {/* Hero header */}
      <div className="pt-24 pb-8 mx-auto lg:w-[52%] w-11/12">
        <span className="text-xs px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500">
          {category}
        </span>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-4 leading-tight">
          {title}
          <span className="text-zinc-400 dark:text-zinc-600 font-normal text-2xl ml-2">
            — {subtitle}
          </span>
        </h1>
        <p className="text-sm text-zinc-500 mt-2">{role}</p>
      </div>

      {/* Content */}
      <div className="mx-auto lg:w-[52%] w-11/12 pb-24">
        {children}

        {/* Site CTA */}
        {siteUrl && (
          <div className="mt-12 pt-10 border-t border-zinc-100 dark:border-zinc-800/60">
            <Link
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              {siteLabel}
              <ArrowUpRight size={13} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyWrapper;
