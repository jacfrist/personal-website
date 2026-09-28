import React from "react";

// Illustrated covers for projects whose real screenshots contain client data.

const GRADE_COLORS = ["#3fb68b", "#8cc152", "#e8c547", "#f0a04b", "#e76f51", "#c0392b"];

export const DrainCover = () => (
  <svg className="cover-svg" viewBox="0 0 640 400" role="img" aria-label="Illustration of a storm drain pipe cross-section being graded by AI">
    <defs>
      <linearGradient id="drain-bg" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#0f2a2e" />
        <stop offset="100%" stopColor="#1d4a47" />
      </linearGradient>
      <radialGradient id="drain-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#7fd1b9" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#7fd1b9" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Oversized so the art bleeds to fill taller frames (e.g. the featured card). */}
    <rect x="-200" y="-400" width="1040" height="1200" fill="url(#drain-bg)" />
    <circle cx="250" cy="200" r="190" fill="url(#drain-glow)" />

    {/* Tunnel rings receding into the pipe */}
    {[150, 120, 94, 72, 54, 39, 27].map((r, i) => (
      <circle
        key={r}
        cx="250"
        cy={200 + i * 2}
        r={r}
        fill="none"
        stroke="#7fd1b9"
        strokeOpacity={0.9 - i * 0.11}
        strokeWidth={i === 0 ? 3 : 1.5}
        strokeDasharray={i % 2 ? "4 6" : "none"}
      />
    ))}

    {/* Point cloud speckle */}
    {Array.from({ length: 90 }).map((_, i) => {
      const a = (i * 137.5 * Math.PI) / 180;
      const r = 40 + ((i * 53) % 110);
      return (
        <circle
          key={i}
          cx={250 + Math.cos(a) * r}
          cy={200 + Math.sin(a) * r * 0.96}
          r={i % 7 === 0 ? 2.2 : 1.3}
          fill="#b8f0dc"
          opacity={0.25 + (i % 5) * 0.12}
        />
      );
    })}

    {/* Detected defect callout */}
    <circle cx="340" cy="255" r="16" fill="none" stroke="#f0a04b" strokeWidth="2.5" />
    <line x1="352" y1="266" x2="400" y2="300" stroke="#f0a04b" strokeWidth="2" />
    <rect x="400" y="288" width="118" height="26" rx="13" fill="#f0a04b" />
    <text x="459" y="306" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a1a1a" fontFamily="Manrope, sans-serif">
      joint offset
    </text>

    {/* Grade scale */}
    <g transform="translate(440 70)">
      <text x="0" y="0" fontSize="12" fill="#b8f0dc" letterSpacing="2" fontFamily="Manrope, sans-serif">
        CONDITION GRADE
      </text>
      {GRADE_COLORS.map((c, i) => (
        <g key={c} transform={`translate(0 ${16 + i * 26})`}>
          <rect width={i === 2 ? 150 : 120} height="20" rx="10" fill={c} opacity={i === 2 ? 1 : 0.35} />
          <text x="12" y="15" fontSize="12" fontWeight="700" fill="#10201f" fontFamily="Manrope, sans-serif">
            {i}
          </text>
        </g>
      ))}
      <text x="160" y="84" fontSize="13" fontWeight="700" fill="#e8c547" fontFamily="Manrope, sans-serif">
        ←
      </text>
    </g>
  </svg>
);

export const SignatureCover = () => (
  <svg className="cover-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of an agreement moving through submission, signature, and completion">
    <defs>
      <linearGradient id="sig-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f7e3d3" />
        <stop offset="100%" stopColor="#efc7b0" />
      </linearGradient>
    </defs>
    <rect width="640" height="400" fill="url(#sig-bg)" />
    <circle cx="560" cy="60" r="120" fill="#e9a07f" opacity="0.3" />
    <circle cx="60" cy="370" r="90" fill="#d97757" opacity="0.18" />

    {/* Flow path */}
    <path d="M110 210 C 200 120, 260 300, 330 210 S 470 120, 540 210" fill="none" stroke="#b5543a" strokeWidth="3" strokeDasharray="8 8" />

    {[
      { x: 110, label: "Submitted", done: true },
      { x: 330, label: "Signing", done: true },
      { x: 540, label: "Complete", done: false },
    ].map((s, i) => (
      <g key={s.label} transform={`translate(${s.x} 210)`}>
        <circle r="26" fill={s.done ? "#b5543a" : "#fff"} stroke="#b5543a" strokeWidth="3" />
        {s.done ? (
          <path d="M-10 0 L-3 8 L11 -8" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <text y="6" textAnchor="middle" fontSize="18" fontWeight="800" fill="#b5543a" fontFamily="Manrope, sans-serif">
            {i + 1}
          </text>
        )}
        <text y="54" textAnchor="middle" fontSize="14" fontWeight="700" fill="#5a2a1d" fontFamily="Manrope, sans-serif">
          {s.label}
        </text>
      </g>
    ))}

    {/* Document with signature */}
    <g transform="translate(250 38) rotate(-4)">
      <rect width="150" height="104" rx="10" fill="#fff" stroke="#e0b39c" />
      <rect x="16" y="16" width="80" height="8" rx="4" fill="#d9b8a6" />
      <rect x="16" y="32" width="118" height="6" rx="3" fill="#efdcd1" />
      <rect x="16" y="44" width="104" height="6" rx="3" fill="#efdcd1" />
      <path d="M18 82 C 30 62, 40 94, 54 76 S 76 70, 84 82 S 104 74, 128 78" fill="none" stroke="#2d3a8c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="90" x2="134" y2="90" stroke="#d9b8a6" strokeWidth="1.5" />
    </g>
  </svg>
);

export const HrpgCover = () => (
  <div className="cover-hrpg" role="img" aria-label="Pixel-art office battle scene from HR-PG">
    <img src="/img/hrpg/office.jpg" alt="" className="hrpg-bg" loading="lazy" />
    <div className="hrpg-hud">
      <div className="hp">
        <span>YOU</span>
        <i style={{ "--hp": "82%" }} />
      </div>
      <div className="hp boss">
        <span>RECRUITER</span>
        <i style={{ "--hp": "35%" }} />
      </div>
    </div>
    <img src="/img/hrpg/player.png" alt="" className="hrpg-player" />
    <img src="/img/hrpg/swe-boss.png" alt="" className="hrpg-boss" />
  </div>
);

export const covers = {
  drain: DrainCover,
  signature: SignatureCover,
  hrpg: HrpgCover,
};
