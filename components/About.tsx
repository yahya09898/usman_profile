"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  { n: "01", title: "Our History", body: "Founded in 2010 as a small New York consultancy, we've grown into a global agency with offices in New York, London, and Sydney — from three founders to a fifty-plus team of strategists, designers, and engineers." },
  { n: "02", title: "Our Mission", body: "Empower businesses of every size with strategies rooted in clarity, creativity, and measurable excellence. We don't ship vanity metrics — we ship growth." },
  { n: "03", title: "Our Vision", body: "Reshape what digital marketing looks like in the next decade: sustainable, transparent, AI-augmented, and built on long-term partnerships rather than retainer churn." },
];

export default function About() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section id="about" className="bg-white text-[#0D0D0D] section-pad relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[520px] order-2 lg:order-1"
        >
          <div className="absolute top-0 left-0 w-56 h-72 rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-32 right-0 w-60 h-72 rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/KuIBzI0VbhnNU4FBscAHrIRO2DQ.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-24 w-48 h-48 rounded-3xl overflow-hidden shadow-xl">
            <img src="/images/hn4bVCIy3rXGNQvvwT9Qi3YKiKU.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-10 right-10 px-5 py-3 rounded-full bg-[var(--brand-cyan)] text-[var(--brand-black)] font-display text-sm">
            15+ Years Experience
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="eyebrow">Who we are</span>
            <h2 className="headline-lg">About our <span className="text-[var(--brand-cyan)]">Company</span></h2>
            <p className="mt-5 text-[var(--brand-gray)] text-lg leading-relaxed">
              The Creative Clowns is an independent, founder-led digital agency. We work
              with ambitious teams — from funded startups to Fortune 500 brands — to
              build marketing engines that scale.
            </p>
          </motion.div>

          <div className="mt-10 space-y-3">
            {items.map((it) => {
              const isOpen = open === it.n;
              return (
                <div
                  key={it.n}
                  className="border border-black/10 rounded-2xl overflow-hidden bg-[var(--brand-black)]/[0.02] hover:bg-[var(--brand-black)]/[0.04] transition"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : it.n)}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-display text-2xl text-[var(--brand-cyan)]">{it.n}.</span>
                    <span className="font-display text-lg flex-1">{it.title}</span>
                    <span className="w-9 h-9 rounded-full bg-[var(--brand-black)] text-white flex items-center justify-center">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-6 text-[var(--brand-gray)] leading-relaxed"
                    >
                      {it.body}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}