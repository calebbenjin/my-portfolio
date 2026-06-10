import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 mt-20 border-t border-zinc-300 dark:border-zinc-600">
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-600 dark:text-zinc-400 ">
          © {currentYear} Caleb Benjamin
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
