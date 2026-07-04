"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

const team = [
  {
    name: "M Usman Khan",
    bigTitle: "Founder",
    subRole: "CEO",
    footerRole: "Founder, CEO",
    img: "/images/man.png",
  },
  {
    name: "Dawood Mirza",
    bigTitle: "COO",
    subRole: "CFO | CMO",
    footerRole: "COO | CFO | CMO",
    img: "/images/1.png",
  },
  {
    name: "M. Hasaan",
    bigTitle: "Director",
    subRole: "",
    footerRole: "Creative Director",
    img: "/images/Untitled-design-2.png",
  },
];

export default function Team() {
  const [active, setActive] = useState<number | null>(0);

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative aspect-[3/5] rounded-[20px] overflow-hidden border border-white/[0.06] cursor-pointer bg-[var(--dark2)]"
              >
                {/* Purple arch — expands from bottom upward on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 z-[1] bg-[var(--brand-purple)] transition-[bottom,width,height,border-radius,opacity] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={
                    isActive
                      ? {
                          bottom: "82px",
                          width: "175%",
                          height: "68%",
                          borderTopLeftRadius: "420px",
                          borderTopRightRadius: "420px",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          transform: "translateX(-50%)",
                          opacity: 1,
                        }
                      : {
                          bottom: "82px",
                          width: "0%",
                          height: "0%",
                          borderRadius: "0px",
                          transform: "translateX(-50%)",
                          opacity: 0,
                        }
                  }
                />

                {/* Portrait */}
                <div className="absolute inset-0 z-[2] overflow-hidden">
                  <motion.img
                    src={m.img}
                    alt={m.name}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      filter: isActive ? "grayscale(0%) brightness(1)" : "grayscale(100%) brightness(0.85)",
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>

                {/* Title overlay */}
                <div className="absolute top-5 left-0 right-0 z-[3] px-5 flex items-baseline gap-2 pointer-events-none">
                  <motion.span
                    animate={{ x: isActive ? 8 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-none text-[var(--brand-cyan)]"
                  >
                    {m.bigTitle}
                  </motion.span>
                  {/* <motion.span
                    animate={{ x: isActive ? -10 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-white"
                  >
                    {m.subRole}
                  </motion.span> */}
                </div>

                {/* Social icons — overlay portrait bottom */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute left-0 right-0 z-[4] flex justify-center gap-2"
                      style={{ bottom: "94px" }}
                    >
                      {[
                        { Icon: LinkedinIcon, label: "LinkedIn" },
                        { Icon: FacebookIcon, label: "Facebook" },
                        { Icon: InstagramIcon, label: "Instagram" },
                      ].map(({ Icon, label }) => (
                        <a
                          key={label}
                          href="#"
                          aria-label={label}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-[var(--brand-purple)] hover:text-white"
                        >
                          <Icon size={14} />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer block */}
                <div className="absolute bottom-0 left-0 right-0 z-[5] rounded-b-[20px] bg-[#0c0c0c]/90 backdrop-blur-sm px-6 py-4 text-center border-t border-white/[0.05]">
                  <div className="font-display text-lg md:text-xl font-bold text-white leading-tight">
                    {m.name}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-white/60 font-medium">
                    {m.footerRole}
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
