import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import BackgroundParallax from "@/components/ui/background-parallax";
import ScrollProgress from "@/components/ui/scroll-progress";
import CursorGlow from "@/components/ui/cursor-glow";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

// export const metadata: Metadata = {
//   title: "Kenenisa Mekonnen | Full Stack Developer",
//   description: "Kenenisa Mekonnen is a Full Stack Developer specialized in building web applications and mobile apps using modern technologies. ",
// };


export const metadata: Metadata = {
  title: "Kenenisa Mekonnen | Full-Stack Developer",
  description:
    "Kenenisa Mekonnen is a Full Stack Developer specialized in building web applications and mobile apps using modern technologies.",
  authors: [{ name: "Kenenisa Mekonnen" }],
  keywords: [
    "Kenenisa Mekonnen",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Web Developer",
    "AI Developer",
    "Portfolio",
    "Software Engineer",
  ],
  openGraph: {
    title: "Kenenisa Mekonnen | Full-Stack Developer",
    description:
      "Portfolio of Kenenisa Mekonnen, a full-stack developer building modern web application,mobile apps and AI-powered applications.",
    url: "https://kenenisa.dev",
    siteName: "Kenenisa Mekonnen Portfolio",
    type: "website",
  },
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
          <StructuredData />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
