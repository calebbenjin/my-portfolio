"use client";

import React, { useEffect } from "react";
import { X, Download } from "lucide-react";

const RESUME_EMBED_URL =
  "https://docs.google.com/document/d/1qvTTISaTxDKUW28W3yrvFIP3QHlZpNW5T7kNXeRh-f0/preview";
const RESUME_DOWNLOAD_URL =
  "https://docs.google.com/document/d/1qvTTISaTxDKUW28W3yrvFIP3QHlZpNW5T7kNXeRh-f0/export?format=pdf";

export function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl h-[88vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex-shrink-0">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Caleb Benjamin — Resume
          </span>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Download size={12} />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              aria-label="Close resume"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Embed */}
        <iframe
          src={RESUME_EMBED_URL}
          className="w-full flex-1"
          title="Caleb Benjamin - Resume"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
