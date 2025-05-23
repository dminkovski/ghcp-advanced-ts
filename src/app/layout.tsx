"use client";

import "./globals.css";
import "./colors.css";

import image from "@public/image.png";
import clsx from "clsx";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
            <h2 className="text-xl font-bold mb-6">
              <Image alt="Logo" src={image} width={100} height={100} className="inline-block mr-2" />
            </h2>
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
                href="/prompt-engineering"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/prompt-engineering",
                })}
              >
                3. Prompt Engineering
              </Link>
              <Link
                href="/architecture"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/architecture",
                })}
              >
                4. Architecture
              </Link>
              <Link
                href="/code-analysis"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/code-analysis",
                })}
              >
                5. Code Analysis
              </Link>
              <Link
                href="/advanced-control-flow"
                className={clsx("hover:underline", {
                  "font-bold": activePathname === "/advanced-control-flow",
                })}
              >
                6. Advanced Control Flow
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
