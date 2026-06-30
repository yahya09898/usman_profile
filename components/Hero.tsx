"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const lines = ["The", "Best", "Digital", "Marketing", "Agency."];

  return (
    <section id="home" className="relative min-h-screen bg-[#0D0D0D] overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--brand-cyan)]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--brand-purple)]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              ✦ #1 Digital Marketing Agency in Asia
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
                Get a Quote <ArrowRight size={16} />
              </a>
              <a href="/services" className="btn-outline">
                Our Services
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[var(--brand-cyan)] text-[var(--brand-cyan)]" />
                  ))}
                </div>
                200+ 5-Star Reviews
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative h-[500px] hidden lg:block"
          >
            <div className="absolute top-0 right-0 w-72 h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/tVDg230sxN3guk1uVhxlFkIu1s.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/dUseUtuxWZALl1W4o3xjq8KWc.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-[var(--brand-cyan)]/30 blur-2xl" />
            <div className="absolute bottom-10 right-10 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-xs uppercase tracking-widest text-[var(--brand-cyan)] font-display">Featured In</div>
              <div className="text-white font-display text-lg mt-1">Forbes • Inc. • Yahoo</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}