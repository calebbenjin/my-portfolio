import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Exo_2 } from "next/font/google";

const geist = Exo_2({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb Benjamin",
  description:
    "Frontend developer, an optimist, passionate about optimization, Startups and Founders.",
  openGraph: {
    type: "website",
    url: "https://calebbenjamin.vercel.app",
    title: "Caleb Benjamin",
    description:
      "Frontend developer, an optimist, passionate about optimization, Startups and Founders.",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Benjamin",
    description:
      "Frontend developer, an optimist, passionate about optimization, Startups and Founders.",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1742071730/WhatsApp_Image_2025-03-15_at_21.46.23_fca5f021_ammmlp.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
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
    <html lang="en" className={geist.className}>
      <Analytics />
      <body className={` antialiase bg-zinc-800 text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}
