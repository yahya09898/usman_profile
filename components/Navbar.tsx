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
          <a href="/contact" className="btn-primary">Get a Quote</a>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#0D0D0D] border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-6 gap-4 font-display text-base uppercase tracking-wide">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-[var(--brand-cyan)]"
                >
                  {l.label}
                </Link>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 self-start">
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}