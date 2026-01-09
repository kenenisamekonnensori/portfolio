import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import BackgroundParallax from "@/components/ui/background-parallax";
import ScrollProgress from "@/components/ui/scroll-progress";
import CursorGlow from "@/components/ui/cursor-glow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Kenenisa Mekonnen | Full Stack Developer",
  description: "Portfolio of Kenenisa Mekonnen - Full Stack Developer and Compter Science and Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <BackgroundParallax />
          <CursorGlow />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
