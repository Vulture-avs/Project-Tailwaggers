import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Project Shelter | Web3 Animal Welfare",
  description: "A modern donation platform for stray animal welfare that combines traditional donations with NFT rewards.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", GeistSans.variable)}>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
