import type { Metadata } from "next";
import TestimonialContact from "@/components/TestimonialContact";

export const metadata: Metadata = {
  title: "Contact — The Creative Clowns",
  description:
    "Get in touch with The Creative Clowns. Tell us about your project and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white pt-40 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <span className="eyebrow">Get in touch</span>
          <h1 className="font-display text-white headline-xl">
            Let&apos;s <span className="text-[var(--brand-cyan)]">Talk!</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Tell us about your project. We respond within one business day — usually
            faster.
          </p>
        </div>
      </section>
      <TestimonialContact />
    </>
  );
}