"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const items = [
  { n: "01", title: "Our History", body: "Founded in 2024, The Creative Clowns was built with one goal: to help businesses stand out in the digital world through creativity and strategy. What started as a passionate team of marketers and creators has grown into a full-service digital marketing agency dedicated to delivering impactful campaigns, compelling content, and measurable results. Today, we partner with businesses of all sizes to build strong brands and meaningful digital experiences." },
  { n: "02", title: "Our Mission", body: "Our mission is to empower businesses with innovative digital marketing solutions that drive growth, strengthen brand identity, and create lasting connections with their audiences. We combine creativity, strategy, and data-driven insights to deliver results that matter." },
  { n: "03", title: "Our Vision", body: "Our vision is to become a globally trusted digital marketing agency recognized for transforming ideas into impactful brands. We aim to inspire innovation, deliver excellence, and help businesses thrive in an ever-evolving digital landscape." },
];

const founderTraits = [
  { icon: "✦", label: "Visionary Thinker" },
  { icon: "✦", label: "Empathetic Leader" },
  { icon: "✦", label: "Creative Problem-Solver" },
  { icon: "✦", label: "Passionate Mentor" },
];

const featuredIn = [
  { name: "Culture Pixel", img: "/images/brand-1.png" },
  { name: "IMC", img: "/images/brand-2.png" },
  { name: "Naibay", img: "/images/brand-3.png" },
  { name: "Logo 4", img: "/images/brand-4.png" },
  { name: "2MF", img: "/images/brand-5.png" },
];

export default function About() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* About Our Company Section */}
      <section id="about" className="bg-[var(--dark)] text-white section-pad relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">Who we are</span>
              <h2 className="headline-lg mb-8">
                About our <span className="text-[var(--brand-cyan)]">Company</span>
              </h2>
              <div className="text-white/70 text-base leading-relaxed space-y-4">
                <p>
                  The Creative Clowns is a creative digital marketing agency passionate about helping businesses build a strong online presence and achieve sustainable growth. We specialize in <span className="text-white font-semibold">social media marketing, paid advertising, branding, content creation, website development, and digital strategy</span> tailored to your business goals.
                </p>
                <p>
                  Our team combines creativity with data-driven insights to craft impactful campaigns that connect brands with the right audience. Whether you're a startup or an established business, we're committed to delivering innovative solutions that <span className="text-[var(--brand-cyan)]">increase visibility, generate leads, and drive measurable results</span>.
                </p>
                <p>
                  At The Creative Clowns, we turn creative ideas into powerful digital experiences that help your brand stand out in a competitive market.
                </p>
              </div>
            </motion.div>

            {/* Right - Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {items.map((it) => {
                const isOpen = open === it.n;
                return (
                  <div
                    key={it.n}
                    className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : it.n)}
                      className="w-full flex items-center gap-5 px-6 py-5 text-left"
                    >
                      <span className="font-display text-xl text-white/60">{it.n}.</span>
                      <span className="font-display text-lg flex-1 text-white">{it.title}</span>
                      <span className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[var(--brand-cyan)] transition">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-white/60 leading-relaxed"
                      >
                        {it.body}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet The Founder Section */}
      <section className="bg-[var(--dark)] text-white section-pad border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Message from Founder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--brand-purple)]/10 to-[var(--brand-cyan)]/5 border border-white/10">
              {/* Quote Icon - Opening */}
              {/* <div className="absolute top-6 left-6 text-[var(--brand-cyan)]/20 text-6xl font-serif leading-none">"</div> */}
              
              {/* Quote Icon - Closing */}
              {/* <div className="absolute bottom-6 right-6 text-[var(--brand-cyan)]/20 text-6xl font-serif leading-none">"</div> */}
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                  Message from the <span className="text-[var(--brand-cyan)]">CEO</span>
                </h3>
              {/* <div className="absolute top- left-6 text-[var(--brand-cyan)]/20 text-6xl font-serif leading-none">"</div> */}

                
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p className="text-lg font-semibold text-white">
                    Welcome to The Creative Clowns.
                  </p>
                  <p>
                    At The Creative Clowns, we believe every brand has a unique story worth telling. Our mission is to help businesses transform their ideas into meaningful digital experiences through creativity, innovation, and strategic marketing. We are committed to delivering solutions that not only enhance your online presence but also create measurable business growth.
                  </p>
                  <p>
                    Our team works with passion, dedication, and a results-driven mindset to ensure every campaign adds value to our clients' success. Thank you for trusting us to be part of your journey. We look forward to building lasting partnerships and achieving remarkable results together.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--brand-cyan)]">
                      <img 
                        src="/images/man.png" 
                        alt="Usman Khan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-white">— Usman Khan</p>
                      <p className="text-sm text-white/60">CEO & Founder, The Creative Clowns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}