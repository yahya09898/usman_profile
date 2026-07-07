import type { Metadata } from "next";
import Services from "@/components/Services";
import TestimonialContact from "@/components/TestimonialContact";

export const metadata: Metadata = {
  title: "Services — The Creative Clowns",
  description:
    "From SEO and content to performance marketing and web development — see how we grow ambitious brands.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <span className="eyebrow">Our Services</span>
          <h1 className="font-display text-white headline-xl">
            Everything you need <br />
            <span className="text-[var(--brand-cyan)]">to grow online.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Seven service lines, one team. We plug into your business end-to-end —
            strategy, creative, and engineering under one roof.
          </p>
        </div>
      </section>
      <Services showAllMobile={true} />
      <TestimonialContact />
    </>
  );
}