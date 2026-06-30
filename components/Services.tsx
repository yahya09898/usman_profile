"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Digital Marketing", icon: "📈", desc: "End-to-end digital strategy, paid media, and funnel design that turns clicks into customers." },
  { title: "Social Media Marketing", icon: "💬", desc: "Scroll-stopping content, community management, and ad campaigns on every platform that matters." },
  { title: "Performance Marketing", icon: "🎯", desc: "ROI-obsessed paid acquisition across Google, Meta, TikTok, and LinkedIn — measured to the cent." },
  { title: "Content Writing", icon: "✍️", desc: "SEO-friendly copy, brand storytelling, and editorial calendars that compound over time." },
  { title: "Web Development", icon: "💻", desc: "Lightning-fast, conversion-tuned websites and web apps built on the modern stack." },
  { title: "Designing", icon: "🎨", desc: "Brand systems, UI/UX, and motion design that look as good as they perform." },
  { title: "SEO", icon: "🔍", desc: "Technical SEO, content strategy, and link building that earns rankings — and keeps them." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0D0D0D] text-white section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--brand-cyan)]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow">What we are offering</span>
          <h2 className="headline-lg text-white max-w-3xl mx-auto">
            Services that <span className="text-[var(--brand-cyan)]">scale your brand</span> and grow revenue.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[var(--brand-cyan)]/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{s.desc}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[var(--brand-cyan)] font-display text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Learn More <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="/services" className="btn-outline">View all services</a>
        </motion.div>
      </div>
    </section>
  );
}