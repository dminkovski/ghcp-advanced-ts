import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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

export const metadata: Metadata = {
  title: "GitHub Copilot Advanced",
  description: "Learn how to use GitHub Copilot effectively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="antialiased grid grid-cols-[250px_1fr] min-h-screen bg-white-100">
          <aside className="bg-primary text-white p-6 border-r border-gray-300">
            <h2 className="text-xl font-bold mb-6">Examples</h2>
            <nav className="flex flex-col gap-4">
              <Link href="/integration" className="hover:underline">
                1. Integration
              </Link>
              <Link href="/faster-code" className="hover:underline">
                2. Faster Code
              </Link>
              <Link href="/dev-experience" className="hover:underline">
                3. Developer Experience
              </Link>
              <Link href="/boilerplate" className="hover:underline">
                4. Boilerplate Reduction
              </Link>
              <Link href="/onboarding" className="hover:underline">
                5. Onboarding
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
