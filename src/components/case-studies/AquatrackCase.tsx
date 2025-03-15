import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const covers = [
  { url: "/Aquatrack-apps.png" },
  { url: "/Aquatrack-app-dashboard.png" },
];

const techStack = [
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Redux Toolkit" },
  { name: "React Hooks" },
  { name: "Tailwind CSS" },
  { name: "Git & GitHub" },
  { name: "(CI/CD)" },
  { name: "Performance" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Web Accessibility" },
  { name: "Agile" },
  { name: "SSR" },
  { name: "Integration Testing" },
  { name: "React Chart" },
];

const AquatrackCase = () => {
  return (
    <div className="lg:pt-20 pt-10">
      <section className="mx-auto lg:w-10/12 w-11/12 ">
        <h2 className="font-bold lg:text-5xl text-2xl text-center">
          Frontend Case Study: <br /> AquaTrack - Fish Farm Management Software
        </h2>
        <div className="grid grid-cols-2 lg:gap-6 gap-2 mx-auto lg:w-6/12 w-12/12 space-x-3 mt-8">
          {covers?.map((image, i) => (
            <Image
              key={i}
              src={`${image.url}`}
              alt="project-image"
              width={350}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto lg:w-6/12 w-11/12 my-8">
        <h2 className="font-bold text-2xl">Project Overview</h2>
        <p className="mt-4 text-base">
          Aquatrack is a fish farm management software that helps farmers track
          and manage fish farm batches, ponds, inventory, sales during harvest,
          and handle accurate calculations similar to an Excel sheet. As the
          Frontend Developer, I played a key role in building a scalable web
          application that supports both farm manager and admin dashboards with
          seamless data visualization and payment integration.
        </p>
        <h2 className="font-bold text-2xl mt-8">My Contribution</h2>
        <h2 className="font-semibold text-xl mt-2">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((stack, i) => (
            <span className="text-sm border rounded-lg px-2 py-1" key={i}>
              {stack.name}
            </span>
          ))}
        </div>
        <h2 className="font-semibold text-2xl mt-8">🧑‍💻Key Features I Built</h2>
        <p className="text-xl mt-4">1. Fish Farm Batch and Pond Management</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Built a dashboard to manage fish batches and monitor pond
            conditions.
          </li>
          <li>
            ⚪ Integrated real-time data tracking for fish growth and water
            quality.
          </li>
        </ul>
        <p className="text-xl mt-4">2. Inventory and Sales Tracking</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Developed an inventory management system to track fish feed,
            equipment, and stock levels.
          </li>
          <li>
            ⚪ Integrated sales tracking during harvest with automated
            calculations for accurate profit analysis.
          </li>
        </ul>
        <p className="text-xl mt-4">3. Automated Billing and Payment System</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Integrated Startbutton payment gateway to allow users to pay in
            local currency (NGN, ZAR, KES).
          </li>
          <li>
            ⚪ Implemented role-based billing management for farm owners and
            managers.
          </li>
        </ul>
        <p className="text-xl mt-4">4. Admin and Farm Manager Dashboards</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Developed a custom admin dashboard for managing fish ponds,
            inventory, and sales performance.
          </li>
          <li>
            ⚪ Built a farm manager dashboard for monitoring fish health,
            tracking feeding schedules, and managing financial records.
          </li>
        </ul>
        <p className="text-xl mt-4">5. Location-Based Data Analytics</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Integrated geo-mapping functionality with Leaflet.js to visualize
            fish farm performance across different locations.
          </li>
          <li>
            ⚪ Built data charts and performance reports using Recharts and
            Chart.js.
          </li>
        </ul>
        <p className="text-xl mt-4">
          6. Secure Authentication & Role Management
        </p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Implemented Firebase Auth and JWT-based authentication system for
            secure user access.
          </li>
          <li>
            ⚪ Created role-based access control (RBAC) for admins, farm
            managers, and technicians.
          </li>
        </ul>
        <p className="font-semibold text-xl mt-4">Performance Optimization</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Optimized large data handling with server-side pagination and
            caching.
          </li>
          <li>
            ⚪ Improved page speed and SEO using Next.js Server-Side Rendering
            (SSR) and Static Generation (SSG).
          </li>
        </ul>
        <p className="font-semibold text-2xl mt-4">Business Impact</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ✅ Reduced fish mortality rate by 40% through real-time water
            quality monitoring.
          </li>
          <li>
            ✅ Improved billing accuracy by 80% with automated payment
            integration.
          </li>
          <li>
            ✅ Streamlined inventory management and increased sales tracking
            efficiency by 60%.
          </li>
        </ul>
        <div className=" pt-4">
          <Link
            target="_blank"
            href="https://www.aquatrackinc.com"
            className="flex">
            <Button className="bg-white text-zinc-900 hover:bg-gray-400">
              View Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AquatrackCase;
