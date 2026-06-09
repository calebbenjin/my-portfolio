import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Exo_2({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb Benjamin — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specialising in React, TypeScript & Next.js. 6+ years building scalable products in fintech, SaaS, and logistics.",
  openGraph: {
    type: "website",
    url: "https://calebbenjamin.vercel.app",
    title: "Caleb Benjamin — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialising in React, TypeScript & Next.js. 6+ years building scalable products in fintech, SaaS, and logistics.",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "Caleb Benjamin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Benjamin — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specialising in React, TypeScript & Next.js. 6+ years building scalable products in fintech, SaaS, and logistics.",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "Caleb Benjamin",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
