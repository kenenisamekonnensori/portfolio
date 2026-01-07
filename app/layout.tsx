import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import AnimatedBackground from "@/components/ui/animated-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Robert Garcia | Frontend Developer",
  description: "Portfolio of Robert Garcia - Frontend Developer & Mechanical Engineer",
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
          <CustomCursor />
          <AnimatedBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
