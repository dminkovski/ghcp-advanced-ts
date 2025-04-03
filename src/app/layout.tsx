"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import Link from "next/link";

import "./globals.css";
import "./colors.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "GitHub Copilot Advanced",
  description: "Learn how to use GitHub Copilot effectively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const activePathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="antialiased grid grid-cols-[250px_1fr] min-h-screen bg-white-100">
          <aside className="bg-primary text-white p-6 border-r border-gray-300">
            <h2 className="text-xl font-bold mb-6">Modules</h2>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/",
                })}
              >
                Home
              </Link>
              <Link
                href="/server-side"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/server-side",
                })}
              >
                1. Server Side
              </Link>
              <Link
                href="/client-side"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/client-side",
                })}
              >
                2. Client Side
              </Link>
              <Link
                href="/architecture"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/architecture",
                })}
              >
                3. Architecture
              </Link>
              <Link
                href="/code-analysis"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/code-analysis",
                })}
              >
                4. Code Analysis
              </Link>
            </nav>
          </aside>
          <main className="p-8">
            <div className="flex items-center mb-8">
            {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
