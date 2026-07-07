"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative h-[400px] md:h-[500px] flex items-center justify-center md:items-center md:justify-center lg:block"
          >
            <div className="relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto lg:mx-0">
              {/* Top right image - world */}
              <div className="absolute top-0 right-0 w-48 h-56 sm:w-56 sm:h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="images/world.jpg" alt="Digital Marketing" className="w-full h-full object-cover" />
              </div>
              
              {/* Bottom left image - marketing */}
              <div className="absolute bottom-0 left-0 w-44 h-52 sm:w-52 sm:h-60 md:w-64 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="images/marketing.jpg" alt="Marketing Strategy" className="w-full h-full object-cover" />
              </div>
              
              {/* Cyan glow effect */}
              <div className="absolute top-28 left-6 sm:top-32 sm:left-8 md:top-40 md:left-10 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-[var(--brand-cyan)]/30 blur-2xl" />
              
              {/* Marketing badge */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-white font-display text-sm sm:text-base md:text-lg">Marketing That Works</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}