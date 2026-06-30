"use client";

const badges = [
  "Best Digital Marketing Agency",
  "Best Digital Marketing Agency",
  "Best Digital Marketing Agency",
  "Best Digital Marketing Agency",
  "Best Digital Marketing Agency",
  "Best Digital Marketing Agency",
];

export default function Marquee() {
  return (
    <div className="relative bg-[var(--brand-cyan)] text-[var(--brand-black)] py-5 overflow-hidden border-y border-[var(--brand-black)]/10">
      <div className="marquee-track gap-12 font-display uppercase tracking-wider text-sm md:text-base font-semibold">
        {[...badges, ...badges].map((b, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span>{b}</span>
            <span className="text-[var(--brand-black)]/50">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}