"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroGraphic from "@/components/HeroGraphic";

export default function Hero() {
  const lines = ["Digital", "Marketing", "Agency."];

  return (
    <section id="home" className="relative min-h-screen bg-[#0D0D0D] overflow-hidden pt-32 pb-6">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--brand-cyan)]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--brand-purple)]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              {/* ✦ #1 Digital Marketing Agency in Asia */}
            </motion.span>

            <h1 className="font-display text-white">
              {lines.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
                  className="block headline-xl"
                >
                  {w}
                  {i === 2 && (
                    <span className="inline-block ml-3 w-3 h-3 rounded-full bg-[var(--brand-cyan)] align-middle" />
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-xl text-white/70 text-lg"
            >
              We combine innovative design, sustainable practices, and rock-solid
              craftsmanship to deliver digital marketing that actually moves the
              needle for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <a href="/contact" className="btn-primary">
                Book A Consultation <ArrowRight size={16} />
              </a>
              <a href="/services" className="btn-outline">
                Our Services
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 h-[480px] md:h-[520px] lg:h-[520px]">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}