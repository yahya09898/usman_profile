import type { Metadata } from "next";
import About from "@/components/About";
import Values from "@/components/Values";
import Brands from "@/components/Brands";
import TestimonialContact from "@/components/TestimonialContact";

export const metadata: Metadata = {
  title: "About — The Creative Clowns",
  description:
    "Learn about The Creative Clowns — our history, mission, vision, and the team behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <span className="eyebrow">About Us</span>
          <h1 className="font-display text-white headline-xl">
            We build brands <br />
            <span className="text-[var(--brand-cyan)]">that last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Fifteen years. Three continents. One relentless focus on craft,
            partnership, and measurable outcomes.
          </p>
        </div>
      </section>
      <About />
      <Values />
      <Brands />
      <TestimonialContact />
    </>
  );
}