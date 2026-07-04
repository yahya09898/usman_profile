"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const items = [
  { n: "01", title: "Our History", body: "Founded in 2010 as a small New York consultancy, we've grown into a global agency with offices in New York, London, and Sydney — from three founders to a fifty-plus team of strategists, designers, and engineers." },
  { n: "02", title: "Our Mission", body: "Empower businesses of every size with strategies rooted in clarity, creativity, and measurable excellence. We don't ship vanity metrics — we ship growth." },
  { n: "03", title: "Our Vision", body: "Reshape what digital marketing looks like in the next decade: sustainable, transparent, AI-augmented, and built on long-term partnerships rather than retainer churn." },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="eyebrow">About Founder</span>
            <h2 className="headline-lg">
              Meet The <span className="text-[var(--brand-cyan)]">Founder</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-white font-semibold">Muhammad Usman Khan</span>, the heart of The Creative Clowns. With a decade of <span className="text-white">digital marketing expertise</span>, Usman's passion for innovation and dedication to clients have guided our journey. His <span className="text-white">strategic vision, client-centered approach, and knack for creative solutions</span> shape our commitment to excellence.
          </motion.p>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20"
          >
            {/* Left - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Purple background circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[var(--brand-purple)] -z-10" />
                <img
                  src="/images/man.png"
                  alt="Muhammad Usman Khan"
                  className="relative z-10 w-full"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--brand-cyan)] mb-1">Muhammad</h3>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Usman Khan</h3>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <p className="text-white/80 text-base leading-relaxed">
                My name is Muhammad Usman Khan, CEO and Founder of The Creative Clowns. I built this agency with one purpose: to bring smart creativity and bold strategy together in a way that transforms brands. At The Creative Clowns, we don't just make content. We create experiences that engage, inspire, and deliver real results. Our focus is simple: meaningful impact, modern ideas, and a touch of playful brilliance that makes every brand unforgettable. Whether we're starting out or scaling globally, we're here to elevate your presence and help you grow with confidence. Let's create something extraordinary together.
              </p>

              {/* Traits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {founderTraits.map((trait, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10"
                  >
                    <span className="text-[var(--brand-cyan)] text-xl">{trait.icon}</span>
                    <span className="text-white text-sm font-medium">{trait.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Featured In */}
              <div>
                <p className="text-white/60 text-sm mb-4">Featured in:</p>
                <div className="flex flex-wrap gap-4">
                  {featuredIn.map((brand, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10"
                    >
                      <Image
                        src={brand.img}
                        alt={brand.name}
                        width={80}
                        height={40}
                        className="object-contain opacity-70 hover:opacity-100 transition"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message from Founder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--brand-purple)]/10 to-[var(--brand-cyan)]/5 border border-white/10">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[var(--brand-cyan)]/20 text-6xl font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                  Message from the <span className="text-[var(--brand-cyan)]">Founder</span>
                </h3>
                
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