"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  // { href: "/#projects", label: "Projects" },
  // { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D0D0D]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/TCC_white_bg-removebg-preview (2).png" alt="The Creative Clowns" className="h-26 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-display text-sm uppercase tracking-wide text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--brand-cyan)] transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="/contact" className="btn-primary">Book A Consultation</a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, rotateX: -15 }}
            animate={{ height: "auto", opacity: 1, rotateX: 0 }}
            exit={{ height: 0, opacity: 0, rotateX: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            className="lg:hidden bg-gradient-to-br from-[var(--brand-purple)]/30 via-[var(--dark)] to-[var(--brand-cyan)]/20 border-t border-white/20 overflow-hidden backdrop-blur-2xl shadow-2xl shadow-[var(--brand-purple)]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-cyan)]/10 via-transparent to-[var(--brand-purple)]/10 animate-pulse" />
            <nav className="relative flex flex-col px-6 py-6 gap-2 font-display text-base uppercase tracking-wide">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -50, rotateY: -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 50, rotateY: 20 }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 0.5, 
                    ease: [0.16, 1, 0.3, 1],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-white/90 hover:text-[var(--brand-cyan)] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent rounded-lg transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-cyan)]/20 to-[var(--brand-purple)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  delay: links.length * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 10
                }}
                whileHover={{ scale: 1.08, rotate: [0, -1, 1, -1, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 block text-center relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Book A Consultation</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}