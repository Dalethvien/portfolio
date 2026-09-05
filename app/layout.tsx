import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Viewport } from "next";

const lora = Lora({subsets:['latin'],variable:'--font-serif'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECHE Tiago",
  description: "Portfolio de ECHE Tiago",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "scroll-smooth", geistSans.variable, geistMono.variable, "font-serif", lora.variable)}
    >
      <body className="min-h-full flex flex-col bg-page fg-foreground">{children}</body>
    </html>
  );
}
