"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const pressLogos = ["Forbes", "Inc.", "Yahoo Finance", "Bloomberg", "Entrepreneur", "TechCrunch"];

export default function Press() {
  return (
    <section className="bg-[#0D0D0D] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--brand-cyan)] to-[var(--brand-sky)] flex items-center justify-center">
              <Sparkles className="text-[var(--brand-black)]" size={28} />
              <div className="absolute inset-0 rounded-full border border-white/20" />
            </div>
            <div>
              <div className="text-3xl font-display">200+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider font-display">5-Star Reviews</div>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-cyan)] font-display mb-4">
              Featured In
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
              {pressLogos.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-xl md:text-2xl text-white/60 hover:text-white transition"
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}