"use client";

import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <img src="/images/Untitled-200-x-100-px.png" alt="The Creative Clowns" className="h-10 w-auto mb-5" />
            <p className="text-white/60 text-sm leading-relaxed">
              Independent digital agency. Strategy, design, and engineering for
              ambitious teams — built on long-term partnerships.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[var(--brand-cyan)] hover:text-[var(--brand-black)] hover:border-[var(--brand-cyan)] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Menu</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              {["Home", "About", "Services", "Projects", "Blog", "Reviews", "Contact"].map((x) => (
                <li key={x}><Link href={x === "Home" ? "/" : `/${x.toLowerCase()}`} className="hover:text-[var(--brand-cyan)] transition">{x}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Services</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              {["SEO", "Content Marketing", "Website Design", "Social Media Marketing", "Performance Marketing", "Web Development"].map((x) => (
                <li key={x}><Link href="/services" className="hover:text-[var(--brand-cyan)] transition">{x}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Get in touch</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              <li>info@creativeclowns.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Main Street<br />Anytown, USA 2141</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-sm">
          <div>© {new Date().getFullYear()} The Creative Clowns. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[var(--brand-cyan)] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--brand-cyan)] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}