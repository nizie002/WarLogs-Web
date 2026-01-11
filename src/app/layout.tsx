import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = localFont({
  src: [
    {
      path: "../fonts/cinzel/Cinzel-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cinzel/Cinzel-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/cinzel/Cinzel-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const rajdhani = localFont({
  src: [
    {
      path: "../fonts/rajdhani/Rajdhani-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/rajdhani/Rajdhani-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-interface",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WarLogs",
    template: "%s | WarLogs",
  },
  description: "Self-hosted platform for tabletop campaign management. Track battles, manage campaigns, and chronicle your tabletop gaming history.",
  keywords: ["tabletop games", "campaign management", "wargaming", "battle tracking"],
  authors: [{ name: "WarLogs Team" }],
  creator: "WarLogs",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://warlogs.de",
    siteName: "WarLogs",
    title: "WarLogs - Tabletop Campaign Management",
    description: "Self-hosted platform for tabletop campaign management. Track battles, manage campaigns, and chronicle your tabletop gaming history.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${rajdhani.variable}`}>
        <div className="scanline-effect" />
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
