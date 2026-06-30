import type { Metadata } from "next";
import { Unbounded, Roboto, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Creative Clowns — Best Digital Marketing Agency in Asia",
  description:
    "The Creative Clowns blends innovative design, sustainable practices, and craftsmanship to deliver world-class digital marketing, web development, SEO, and social media services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${roboto.variable} ${inter.variable}`}>
      <body className="bg-white text-brand-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}