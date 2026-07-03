"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const team = [
  { name: "M Usman Khan", role: "Founder / CEO", img: "/images/Untitled-design-1.png", bio: "Vision-driven founder with 15+ years scaling brands across three continents." },
  { name: "Dawood Mirza", role: "COO / CFO / CMO", img: "/images/1.png", bio: "Operations and growth mastermind keeping the engine running and the budget honest." },
  { name: "M. Hasaan", role: "Creative Director", img: "/images/Untitled-design-2.png", bio: "Award-winning art director turning strategy into work people actually remember." },
];

export default function Team() {
  // 1 = actively-hovered card index, null = none
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-[var(--dark)] text-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow">Our Squad</span>
          <h2 className="headline-lg">
            Say Hello to <span className="text-[var(--brand-purple)]">Our Squad</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {team.map((m, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={m.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative rounded-3xl overflow-hidden border border-white/5 cursor-pointer bg-[var(--dark2)]"
              >
                {/* "dot" back effect: tiny circle at the card's center that
                    morphs on hover into a dome — rounded at the top, anchored
                    so it covers the IMAGE (top half of the card) and stops at
                    the card's vertical middle. Sits behind content so the
                    image and text stay readable. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 z-0 bg-[var(--brand-purple)] transition-[top,width,height,border-radius,opacity] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={
                    isActive
                      ? {
                          // anchor the BOTTOM edge of the shape at the card's
                          // vertical middle, so the dome sits on top of the
                          // image. height=200% + huge top-radius makes the
                          // top a perfect half-circle "dome" while the bottom
                          // is flat (only top corners are rounded).
                          top: "50%",
                          width: "175%",
                          height: "200%",
                          borderTopLeftRadius: "420px",
                          borderTopRightRadius: "420px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          transform: "translate(-50%, 0%)",
                          opacity: 1,
                        }
                      : {
                          // resting state: a small dot at the card's center
                          top: "50%",
                          width: "24px",
                          height: "24px",
                          borderRadius: "260px",
                          transform: "translate(-50%, -50%)",
                          opacity: 0,
                        }
                  }
                />

                {/* All card content sits above the dot */}
                <div className="relative z-10">
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={m.img}
                      alt={m.name}
                      animate={{ scale: isActive ? 1.08 : 1, filter: isActive ? "grayscale(0%)" : "grayscale(35%)" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <motion.div
                      animate={{ color: isActive ? "#fff" : "var(--brand-pink)" }}
                      transition={{ duration: 0.4 }}
                      className="text-xs uppercase tracking-[0.2em] font-display"
                    >
                      {m.role}
                    </motion.div>
                    <div className="font-display text-2xl mt-1">{m.name}</div>
                    <p
                      className={
                        "text-sm mt-3 leading-relaxed transition-colors duration-500 " +
                        (isActive ? "text-white/80" : "text-white/65")
                      }
                    >
                      {m.bio}
                    </p>

                    <div
                      className={
                        "mt-4 flex gap-3 transition-colors duration-500 " +
                        (isActive ? "text-white/80" : "text-white/50")
                      }
                    >
                      <a href="#" className="hover:opacity-100 opacity-90 transition"><LinkedinIcon size={18} /></a>
                      <a href="#" className="hover:opacity-100 opacity-90 transition"><FacebookIcon size={18} /></a>
                      <a href="#" className="hover:opacity-100 opacity-90 transition"><InstagramIcon size={18} /></a>
                      <a href="#" className="hover:opacity-100 opacity-90 transition"><TwitterIcon size={18} /></a>
                    </div>

                    {/* active label that morphs in when this card is the focused one */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="badge"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.35 }}
                          className="mt-5 inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] text-white/90"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          Featured Member
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
