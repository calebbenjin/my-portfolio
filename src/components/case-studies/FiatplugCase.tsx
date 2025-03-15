import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const covers = [
  { url: "/fiatplug1.png" },
  { url: "/fiatplug2.png" },
  { url: "/fiatplug4.png" },
  { url: "/fiatplug3.png" },
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

const FiatplugCase = () => {
  return (
    <div className="mx-auto lg:w-10/12 w-11/12 lg:pt-20 pt-10">
      <section>
        <h2 className="font-bold lg:text-6xl text-2xl text-center">
          Frontend Case Study: <br /> Fiatplug - Gift Card & Cryptocurrency
          Platform
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 mt-8">
          {covers?.map((image, i) => (
            <div
              key={i}
              className="lg:h-70 w-full relative overflow-hidden rouned-lg">
              <Image
                src={`${image.url}`}
                alt="project-image"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto lg:w-6/12 w-11/12 my-8">
        <h2 className="font-bold text-2xl">Project Overview</h2>
        <p className="mt-4 text-base">
          Fiatplug is a platform that allows users to buy, sell, and manage gift
          cards while also handling cryptocurrency transactions. My role as the
          Frontend Engineer focused on building the Admin Dashboard and Landing
          Page.
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
        <p className="text-xl mt-4">1. Admin Dashboard</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Gift Card Management System: Developed a system that allows
            admins to manage gift card listings, track sales, and handle
            customer requests.
          </li>
          <li>
            ⚪ Cryptocurrency Integration: Built a feature for managing crypto
            transactions and tracking wallet balances.
          </li>
          <li>
            ⚪ Live Chat Integration: Enabled real-time communication between
            customers and support teams for smooth issue resolution.
          </li>
          <li>
            ⚪ Analytics Dashboard: Provided insights on user activity, sales
            performance, and customer engagement.
          </li>
        </ul>
        <p className="text-xl mt-4">2. Landing Page</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Responsive and User-Friendly Design: Built a clean and engaging
            landing page with Tailwind CSS to attract users and increase
            conversion rates.
          </li>
          <li>
            ⚪ SEO Optimization: Leveraged Next.js Server-Side Rendering (SSR)
            and Static Site Generation (SSG) for faster page loads and improved
            SEO.
          </li>
          <li>
            ⚪ Live Chat Integration: Enabled real-time communication between
            customers and support teams for smooth issue resolution.
          </li>
          <li>
            ⚪ Analytics Dashboard: Provided insights on user activity, sales
            performance, and customer engagement.
          </li>
        </ul>
        <p className="font-semibold text-xl mt-4">Performance Optimization</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Used Redux Toolkit for state management, reducing re-renders and
            improving data handling.
          </li>
          <li>
            ⚪ Integrated Firebase Firestore for real-time data handling and
            secure storage.
          </li>
        </ul>
        <p className="font-semibold text-2xl mt-4">Business Impact</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ✅ Improved efficiency in managing gift card sales and crypto
            transactions.
          </li>
          <li>✅ Enhanced customer support with live chat integration.</li>
          <li>
            ✅ Increased user conversion through a high-performing landing page.
          </li>
          <li>
            ✅ Real-time data tracking and performance analytics for admins.
          </li>
        </ul>
        <div className=" pt-4">
          <Link
            target="_blank"
            href="https://www.fiatplug.com"
            className="flex">
            <Button className="bg-white text-zinc-900 hover:bg-gray-400">
              View Fiatplug Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FiatplugCase;
