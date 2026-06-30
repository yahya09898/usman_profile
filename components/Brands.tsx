"use client";

import { motion } from "framer-motion";

const brands = ["AURORA", "NORTHWIND", "OCTAVE", "VERTEX", "PIXEL+", "KAIROS", "LUMEN", "ARC"];

export default function Brands() {
  return (
    <section className="bg-[#0D0D0D] py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-10">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
          Brands we have worked with
        </motion.span>
        <h2 className="headline-md text-white">Trusted by teams worldwide</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-track gap-16 items-center">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="shrink-0 px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] font-display text-2xl tracking-wider text-white/60 hover:text-white hover:border-[var(--brand-cyan)]/60 transition"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}