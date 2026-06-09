"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavProps {
  back?: boolean;
}

const Nav = ({ back = false }: NavProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-100 dark:border-zinc-800/60">
      {back ? (
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>
      ) : (
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Caleb Benjamin
        </span>
      )}
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
