"use client";

import { motion } from "framer-motion";

/* ---------- tiny icon helpers ---------- */
const ThumbIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M2 20h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H2v10zm19.83-7.12A2 2 0 0 0 20 10h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 3 6.59 9.59A2 2 0 0 0 6 11v8a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.9z"/>
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm13.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const BrushIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a1 1 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 0 0 0-1.41z"/>
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

/* ---------- badge / chip data ---------- */
const badges = [
  {
    id: "social",
    label: "SOCIAL MEDIA\nMARKETING",
    icon: <ThumbIcon />,
    color: "#3b5bdb",   // blue
    position: "top-[4%] left-[20%]",
    delay: 0.2,
  },
  {
    id: "paid",
    label: "PAID\nADVERTISING",
    icon: <MegaphoneIcon />,
    color: "#e03131",   // red
    position: "top-[10%] right-[2%]",
    delay: 0.35,
  },
  {
    id: "content",
    label: "CONTENT\nCREATION",
    icon: <PlayIcon />,
    color: "#f59f00",   // amber
    position: "top-[50%] left-[2%]",
    delay: 0.5,
  },
  {
    id: "branding",
    label: "BRANDING &\nDESIGN",
    icon: <BrushIcon />,
    color: "#f76707",   // orange
    position: "top-[40%] right-[0%]",
    delay: 0.65,
  },
  {
    id: "web",
    label: "WEB\nDEVELOPMENT",
    icon: <WebIcon />,
    color: "#0ca678",   // teal-green
    position: "bottom-[22%] right-[1%]",
    delay: 0.8,
  },
];

/* floating animation */
const float = (delay = 0) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export default function HeroGraphic() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center select-none">
      {/* ── background glow ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[380px] h-[380px] rounded-full bg-[#5201cc]/25 blur-[90px]" />
      </div>

      {/* ── dashed orbit ring ── */}
      <div
        className="absolute"
        style={{
          width: 420,
          height: 420,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -58%)",
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.18)",
          pointerEvents: "none",
        }}
      />

      {/* ── service badge chips ── */}
      {badges.map((b) => (
        <motion.div
          key={b.id}
          className={`absolute ${b.position} z-20 flex flex-col items-center gap-1`}
          {...float(b.delay)}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: b.delay }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: b.color, boxShadow: `0 4px 20px ${b.color}88` }}
          >
            {b.icon}
          </div>
          <span className="text-[9px] font-bold text-white/80 text-center leading-tight whitespace-pre-line">
            {b.label}
          </span>
        </motion.div>
      ))}

      {/* ── central laptop ── */}
      <motion.div
        className="relative z-10 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ width: 280 }}
      >
        {/* laptop screen */}
        <div
          className="relative rounded-t-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            height: 160,
            border: "2px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 40px rgba(82,1,204,0.5)",
          }}
        >
          {/* screen content – growth chart */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            {/* chart label */}
            <div className="text-white font-black text-xs mb-2 font-display tracking-wide">
              GROWTH<br />IN ACTION
            </div>
            {/* SVG chart line */}
            <svg viewBox="0 0 200 60" className="w-full" style={{ height: 50 }}>
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00b6ba" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <polyline
                points="0,55 30,45 60,38 90,28 120,18 150,10 180,4 200,2"
                fill="none"
                stroke="url(#chartGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* arrow tip */}
              <polygon points="196,0 204,4 196,8" fill="#a855f7" />
              {/* glow area under line */}
              <polygon
                points="0,55 30,45 60,38 90,28 120,18 150,10 180,4 200,2 200,60 0,60"
                fill="url(#chartGrad)"
                opacity="0.12"
              />
            </svg>
          </div>
        </div>

        {/* laptop hinge */}
        <div
          style={{
            height: 8,
            background: "linear-gradient(to right, #1a1a2e, #16213e, #1a1a2e)",
            borderRadius: "0 0 4px 4px",
            border: "2px solid rgba(255,255,255,0.1)",
            borderTop: "none",
          }}
        />

        {/* laptop base */}
        <div
          style={{
            height: 14,
            background: "linear-gradient(to right, #111, #1c1c2e, #111)",
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: "none",
          }}
        />
      </motion.div>

      {/* ── rocket ── */}
      <motion.div
        className="absolute z-30"
        style={{ top: "12%", left: "44%" }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 80 }}
      >
        {/* rocket body */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", width: 56, height: 100 }}
        >
          {/* body */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 32,
              height: 70,
              background: "linear-gradient(180deg, #e0e0e0 0%, #9e9e9e 100%)",
              borderRadius: "50% 50% 20% 20% / 60% 60% 10% 10%",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              top: 0,
            }}
          />
          {/* window */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 14,
              height: 14,
              background: "radial-gradient(circle, #60a5fa, #1e3a8a)",
              borderRadius: "50%",
              top: 18,
              border: "2px solid #93c5fd",
              boxShadow: "0 0 8px #60a5fa88",
            }}
          />
          {/* fins left */}
          <div
            style={{
              position: "absolute",
              left: "12%",
              bottom: 4,
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid #ef4444",
              borderTop: "22px solid #ef4444",
              borderRadius: "0 0 4px 0",
            }}
          />
          {/* fins right */}
          <div
            style={{
              position: "absolute",
              right: "12%",
              bottom: 4,
              width: 0,
              height: 0,
              borderLeft: "10px solid #ef4444",
              borderRight: "10px solid transparent",
              borderTop: "22px solid #ef4444",
              borderRadius: "0 0 0 4px",
            }}
          />
          {/* flame outer */}
          <motion.div
            animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 0.25, repeat: Infinity }}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -22,
              width: 20,
              height: 28,
              background: "linear-gradient(180deg, #f97316 0%, #fbbf24 40%, transparent 100%)",
              borderRadius: "50% 50% 60% 60%",
              filter: "blur(1px)",
              transformOrigin: "top center",
            }}
          />
          {/* flame inner */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -14,
              width: 10,
              height: 16,
              background: "linear-gradient(180deg, white 0%, #fef9c3 60%, transparent 100%)",
              borderRadius: "50% 50% 60% 60%",
              filter: "blur(0.5px)",
            }}
          />
          {/* smoke/cloud puff */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: -38,
              width: 34,
              height: 18,
              background: "radial-gradient(ellipse, rgba(150,150,150,0.5) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(4px)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── target / bullseye (bottom-left) ── */}
      <motion.div
        className="absolute z-20"
        style={{ bottom: "3%", left: "2%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
        {...float(1.2)}
      >
        <div style={{ position: "relative", width: 64, height: 64 }}>
          {/* outer ring */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "radial-gradient(circle, #f43f5e, #be123c)",
            boxShadow: "0 0 20px #f43f5e88",
          }} />
          {/* middle ring */}
          <div style={{
            position: "absolute", inset: 10, borderRadius: "50%",
            background: "white",
          }} />
          {/* inner ring */}
          <div style={{
            position: "absolute", inset: 18, borderRadius: "50%",
            background: "#f43f5e",
          }} />
          {/* center */}
          <div style={{
            position: "absolute", inset: 26, borderRadius: "50%",
            background: "white",
          }} />
          {/* arrow shaft */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            width: 54,
            height: 3,
            background: "#8b5cf6",
            transform: "translateY(-50%) rotate(-30deg)",
            transformOrigin: "right center",
            borderRadius: 2,
          }} />
          {/* arrowhead */}
          <div style={{
            position: "absolute",
            top: "50%",
            right: 6,
            transform: "translateY(-50%) rotate(-30deg)",
            width: 0,
            height: 0,
            borderLeft: "8px solid #8b5cf6",
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
          }} />
        </div>
      </motion.div>

      {/* ── clown head (bottom-right) ── */}
      <motion.div
        className="absolute z-20"
        style={{ bottom: "0%", right: "5%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, type: "spring" }}
        {...float(0.8)}
      >
        <div style={{ position: "relative", width: 72, height: 72 }}>
          {/* multicolor hair puffs */}
          {[
            { color: "#ef4444", top: -8, left: -4, size: 22 },
            { color: "#3b82f6", top: -10, left: 18, size: 24 },
            { color: "#f59f00", top: -8, left: 42, size: 22 },
            { color: "#10b981", top: 10, left: -12, size: 20 },
            { color: "#a855f7", top: 10, left: 56, size: 20 },
          ].map((puff, i) => (
            <div key={i} style={{
              position: "absolute",
              top: puff.top,
              left: puff.left,
              width: puff.size,
              height: puff.size,
              borderRadius: "50%",
              background: puff.color,
              boxShadow: `0 0 10px ${puff.color}88`,
            }} />
          ))}
          {/* face */}
          <div style={{
            position: "absolute",
            top: 10,
            left: 8,
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(180deg, #fde8c8, #fcd5a0)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}>
            {/* sunglasses */}
            <div style={{
              position: "absolute",
              top: 14,
              left: 6,
              display: "flex",
              gap: 3,
            }}>
              <div style={{
                width: 18, height: 12, borderRadius: 4,
                background: "#1a1a1a",
                border: "1px solid #555",
              }} />
              <div style={{
                width: 18, height: 12, borderRadius: 4,
                background: "#1a1a1a",
                border: "1px solid #555",
              }} />
            </div>
            {/* red nose */}
            <div style={{
              position: "absolute",
              top: 28,
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 8,
              borderRadius: "50%",
              background: "#ef4444",
              boxShadow: "0 0 8px #ef4444",
            }} />
            {/* smile */}
            <div style={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 24,
              height: 10,
              borderBottom: "3px solid #c45028",
              borderRadius: "0 0 50% 50%",
            }} />
          </div>
        </div>
      </motion.div>

      {/* ── bar chart (bottom-right corner) ── */}
      <motion.div
        className="absolute z-10"
        style={{ bottom: "2%", right: "23%" }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 48 }}>
          {[
            { h: 20, color: "#3b82f6" },
            { h: 32, color: "#06b6d4" },
            { h: 40, color: "#8b5cf6" },
            { h: 48, color: "#a855f7" },
          ].map((bar, i) => (
            <div key={i} style={{
              width: 10,
              height: bar.h,
              background: bar.color,
              borderRadius: "3px 3px 0 0",
              boxShadow: `0 0 8px ${bar.color}88`,
            }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
