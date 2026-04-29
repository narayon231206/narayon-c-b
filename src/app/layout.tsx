import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cinzel, Dancing_Script } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: false,
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: 'swap',
  preload: false,
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Frontend Developer | Narayon Chandra Barman",
  description: "Frontend Developer Portfolio - Designing high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${cinzel.variable} ${dancingScript.variable} h-full antialiased dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%231a1a1a'/><path d='M30 70 L30 30 L70 70 L70 30' fill='none' stroke='%2357f1db' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/><circle cx='70' cy='20' r='5' fill='%2357f1db'/></svg>" />
      </head>
      <body className="min-h-full bg-background text-on-background selection:bg-primary/30 selection:text-primary relative">
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
