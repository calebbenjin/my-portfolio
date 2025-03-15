import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const covers = [{ url: "/yea-mockup.png" }, { url: "/Yea-web-admin.png" }];

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
  { name: "Startbutton API" },
  { name: "IP Geolocation AP" },
];

const YeaCaseStudy = () => {
  return (
    <div className="lg:pt-20 pt-10">
      <section className="mx-auto lg:w-10/12 w-11/12 ">
        <h2 className="font-bold lg:text-5xl text-2xl text-center">
          Frontend Case Study: <br /> Yoga Experience Africa (YEA)
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
          Yoga Experience Africa (YEA) is a community-driven platform that
          connects users with top yoga instructors across Africa, offering live
          sessions, wellness programs, and event management. As the Frontend
          Developer, I was responsible for building an intuitive user interface
          and seamless payment experience for users to book sessions and access
          wellness resources.
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
        <p className="text-xl mt-4">1. User Authentication and Account Setup</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>⚪ Implemented secure user authentication with Firebase Auth.</li>
          <li>⚪ Built a custom onboarding flow for users and instructors.</li>
        </ul>
        <p className="text-xl mt-4">2. Event and Session Booking System</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Developed a real-time booking system for yoga sessions and
            wellness events.
          </li>
          <li>⚪ Integrated calendar view for upcoming sessions.</li>
        </ul>

        <p className="text-xl mt-4">3. Payment Integration with Startbutton</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Integrated Startbutton payment gateway to support local currency
            payments (NGN, ZAR, KES).
          </li>
          <li>
            ⚪ Displayed user currency based on IP address for a localized
            experience.
          </li>
        </ul>

        <p className="text-xl mt-4">
          4. Admin Dashboard for Instructor Management
        </p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Built a dashboard for instructors to manage schedules, view
            bookings, and earnings.
          </li>
          <li>⚪ Integrated performance analytics to track user engagement.</li>
        </ul>

        <p className="text-xl mt-4">5. User Profile and Wellness Tracking</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Created user profiles to track session history and progress.
          </li>
          <li>
            ⚪ Implemented personalized wellness recommendations based on user
            preferences.
          </li>
        </ul>
        <p className="text-xl mt-4">6. Mobile-Friendly UI with Tailwind CSS</p>
        <ul className="space-y-2 mt-4 lg:pl-8">
          <li>
            ⚪ Designed a clean, responsive UI for both web and mobile users.
          </li>
          <li>
            ⚪ Optimized performance with Next.js static generation and
            server-side rendering.
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
            ✅ Increased session bookings by 70% through seamless booking flow.
          </li>
          <li>
            ✅ Improved user retention by 40% with personalized wellness
            tracking.
          </li>
          <li>
            ✅ Enhanced payment success rate by 60% with local currency support.
          </li>
        </ul>
        <div className=" pt-4">
          <Link
            target="_blank"
            href="https://www.yogaexperiences.africa"
            className="flex">
            <Button className="bg-white text-zinc-900 hover:bg-gray-400">
              View YEA Website
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default YeaCaseStudy;
