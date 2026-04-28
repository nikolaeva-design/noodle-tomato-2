import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IconifyInit } from "@/components/IconifyInit";
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
  title: "Noodle Tomato — AI documentaries for YouTube",
  description:
    "Turn a topic into a long-form documentary. Script, visuals, VO, editing—ready to upload and monetize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-28 antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#07090f] text-zinc-100">
        <IconifyInit />
        {children}
        {/* Last in DOM + pointer-events:none so texture sits over the UI without blocking clicks */}
        <div className="nt-grain" aria-hidden />
      </body>
    </html>
  );
}
