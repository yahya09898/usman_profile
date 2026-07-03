"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Brand 1", img: "/images/brand-1.png" },
  { name: "Brand 2", img: "/images/brand-2.png" },
  { name: "Brand 3", img: "/images/brand-3.png" },
  { name: "Brand 4", img: "/images/brand-4.png" },
  { name: "Brand 5", img: "/images/brand-5.png" },
];

export default function Brands() {
  return (
    <section className="bg-[#0D0D0D] py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-10">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
          Brands we have worked with
        </motion.span>
        <h2 className="headline-md text-white">Trusted by teams worldwide</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-track gap-12 items-center">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="shrink-0 px-8 py-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[var(--brand-cyan)]/60 transition"
            >
              <Image
                src={b.img}
                alt={b.name}
                width={130}
                height={71}
                className="object-contain opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}