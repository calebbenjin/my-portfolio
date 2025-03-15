import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const covers = [
  { url: "/trubooker1.png" },
  { url: "/trubooker2.png" },
  { url: "/trubooker4.png" },
  { url: "/trubooker3.png" },
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
  { name: "PayStack API" },
  { name: "Google Map API Integration" },
];

const TrubookerCase = () => {
  return (
    <div className="lg:pt-20 pt-10">
      <section className="mx-auto lg:w-10/12 w-11/12 ">
        <h2 className="font-bold lg:text-5xl text-2xl text-center">
          Frontend Case Study: <br /> TruBooker - Transport Management Platform
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
          TruBooker is a transport management platform that allows drivers and
          public corporations to list vehicles, sell tickets, and manage
          schedules. The platform also enables agents to earn through referrals
          and passengers to book tickets with ease. My role as the Frontend
          Engineer focused on building the Admin Dashboard, Agent Web App, and
          the Landing Page.
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
            ⚪ Real-time Driver & Trip Management: Integrated live tracking
            functionality using Google Map API to allow admins to monitor driver
            movement and trip progress in real-time.
          </li>
          <li>
            ⚪ Revenue Tracking: Built a system to monitor total revenue from
            ticket sales and agent commissions.
          </li>
          <li>
            ⚪ Driver Performance Management: This enabled admins to track
            driver performance and trip history.
          </li>
        </ul>
        <p className="text-xl mt-4">2. Agent Web App</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Referral Management System: Built a referral system that allows
            agents to invite passengers and earn commissions on each successful
            booking.
          </li>
          <li>
            ⚪ Wallet System: Integrated agent wallet management, allowing
            agents to receive earnings and request withdrawals to their bank
            accounts.
          </li>
          <li>
            ⚪ Earnings Dashboard: This enabled agents to track their revenue,
            referrals, and commission history.
          </li>
        </ul>

        <p className="text-xl mt-4">3. Landing Page</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Responsive and High-Converting Design: Built a fast and
            user-friendly landing page with Tailwind CSS to allow passengers to
            book tickets and view available routes.
          </li>
          <li>
            ⚪ Local Currency Support: Integrated Paystack API for seamless
            payments in local currency.
          </li>
        </ul>

        <p className="font-semibold text-xl mt-4">Performance Optimization</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Leveraged Next.js Server-Side Rendering (SSR) and Static Site
            Generation (SSG) for faster page load times and improved SEO.
          </li>
          <li>
            ⚪ Used Redux Toolkit for efficient state management, reducing
            unnecessary re-renders and improving data flow.
          </li>
        </ul>
        <p className="font-semibold text-2xl mt-4">Business Impact</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ✅ Improved admin efficiency in managing trips, drivers, and
            revenue.
          </li>
          <li>
            ✅ Increased agent engagement with the referral and earnings
            tracking system
          </li>
          <li>
            ✅ Boosted passenger satisfaction with a seamless booking experience
            and local payment support.
          </li>
          <li>
            ✅ Enhanced platform performance and SEO through Next.js
            optimization.
          </li>
        </ul>
        <div className=" pt-4">
          <Link target="_blank" href="https://trubooker.com" className="flex">
            <Button className="bg-white text-zinc-900 hover:bg-gray-400">
              View Trubooker Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrubookerCase;
