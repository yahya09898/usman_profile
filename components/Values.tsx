"use client";

import { motion } from "framer-motion";

const values = [
  "Quality", "Reliability", "Personalization", "Collaboration",
  "Innovation", "Long-Term Relationships", "Trustworthiness",
  "Positive Experience", "Passion", "Customer Support", "Customer Focus",
];

export default function Values() {
  return (
    <section className="bg-[#0D0D0D] text-white section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
          Values
        </motion.span>
        <h2 className="headline-lg text-white mb-12">What we stand for</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.span
              key={v}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-3 rounded-full font-display border cursor-default ${
                i % 5 === 0
                  ? "bg-[var(--brand-cyan)] text-[var(--brand-black)] border-[var(--brand-cyan)]"
                  : "bg-white/[0.03] border-white/15 text-white/80"
              }`}
            >
              {v}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}