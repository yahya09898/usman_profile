"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { name: "Aisha Rahman", role: "CMO, Aurora Labs", text: "The Creative Clowns rebuilt our entire acquisition funnel in six weeks. CAC dropped 42%, MQLs doubled. Best agency engagement I've ever had.", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Marcus Chen", role: "Founder, Vertex", text: "They treated our seed-stage budget like their own. Strategic, transparent, and the work shipped on time — every single time.", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Lina Park", role: "Marketing Director, Northwind", text: "From SEO to paid social, this team actually understands the full picture. We've renewed our retainer twice — that says everything.", avatar: "https://i.pravatar.cc/100?img=32" },
];

export default function TestimonialContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 section-pad grid lg:grid-cols-2 gap-12">
        <div id="reviews">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
            Testimonials
          </motion.span>
          <h2 className="headline-lg text-white mb-10">
            What our <span className="text-[var(--brand-cyan)]">clients</span> say.
          </h2>

          <div className="space-y-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[var(--brand-cyan)] text-[var(--brand-cyan)]" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed">{r.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-display">{r.name}</div>
                    <div className="text-xs text-white/60">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
            Contact
          </motion.span>
          <h2 className="headline-lg text-white mb-2">
            Let&apos;s <span className="text-[var(--brand-cyan)]">Talk!</span>
          </h2>
          <p className="text-white/65 mb-8">
            Tell us about your project. We respond within one business day.
          </p>

          <form onSubmit={submit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--brand-cyan)] outline-none transition"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--brand-cyan)] outline-none transition"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-3xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--brand-cyan)] outline-none transition resize-none"
            />
            <button type="submit" className="btn-primary w-full justify-center">
              {sent ? "Sent! We'll be in touch." : (<>Send Message <Send size={16} /></>)}
            </button>
          </form>

          <div className="mt-10 space-y-4 text-white/80">
            <a href="mailto:info@creativeclowns.com" className="flex items-center gap-3 hover:text-[var(--brand-cyan)] transition">
              <Mail size={18} /> info@creativeclowns.com
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-[var(--brand-cyan)] transition">
              <Phone size={18} /> +1 (555) 123-4567
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={18} /> 123 Main Street, Anytown, USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}