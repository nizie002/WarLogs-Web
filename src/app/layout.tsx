import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  openGraph: {
    type: "website",
    locale: "de_DE",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
