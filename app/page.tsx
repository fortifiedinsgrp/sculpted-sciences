import HeroAscii from "@/components/ui/hero-ascii";
import Image from "next/image";

/* ── Data ─────────────────────────────────────────────────── */

const stats = [
  { value: "97", prefix: "$", suffix: "/mo", label: "Membership" },
  { value: "90", suffix: "+", label: "Day Protocols" },
  { value: "3", suffix: "x", label: "Product Categories" },
  { value: "1:1", label: "Doctor Consult" },
];

const protocols = [
  {
    id: "glp1",
    tag: "WEIGHT OPTIMIZATION",
    name: "GLP-1",
    subtitle: "Semaglutide & Tirzepatide",
    description:
      "Physician-prescribed GLP-1 receptor agonists formulated for sustainable fat loss and metabolic optimization. Monthly dosing protocols tailored to your goals.",
    features: ["Semaglutide 2.5–12.5mg", "Tirzepatide 10–60mg", "Glycine blends available", "Monthly delivery"],
    price: "from $149/mo",
    comingSoon: false,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#0088ff" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M20 8v24M12 14l8 6 8-6" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="#0088ff" />
      </svg>
    ),
  },
  {
    id: "peptides",
    tag: "PERFORMANCE PROTOCOLS",
    name: "PEPTIDES",
    subtitle: "60–78 Day Blended Protocols",
    description:
      "Advanced peptide stacks engineered by physicians for body composition, recovery, cognition, and longevity. From BPC-157 to CJC/Ipamorelin — curated and compounded for you.",
    features: ["AOD / MOTS-C / NAD+", "BPC-157 / TB-500", "CJC-1295 / Ipamorelin", "GHK-Cu blends"],
    price: "from $299/protocol",
    comingSoon: false,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M14 6c0 0 0 8-6 14s6 14 6 14" stroke="#0088ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 6c0 0 0 8 6 14s-6 14-6 14" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="15" x2="26" y2="25" stroke="#0088ff" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="14" y1="25" x2="26" y2="15" stroke="#0088ff" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    id: "trt",
    tag: "HORMONE OPTIMIZATION",
    name: "TRT",
    subtitle: "Testosterone Replacement",
    description:
      "Clinically supervised testosterone replacement therapy. Restore vitality, strength, and drive with protocols crafted and monitored by licensed physicians.",
    features: ["Licensed physician oversight", "Bloodwork-guided dosing", "Ongoing monitoring", "Coming soon"],
    price: "from $149/mo",
    comingSoon: true,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="18" r="10" stroke="#0088ff" strokeWidth="1.5" />
        <path d="M27 25l6 6" stroke="#0088ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 13v10M15 18h10" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "JOIN THE MEMBERSHIP",
    body: "Activate your $97/month membership to unlock access to all protocols, physician consultations, and the Sculpted Sciences platform.",
  },
  {
    num: "02",
    title: "COMPLETE YOUR INTAKE",
    body: "Fill out your medical history and connect with a licensed physician or NP for a personalized consultation and protocol recommendation.",
  },
  {
    num: "03",
    title: "START YOUR PROTOCOL",
    body: "Receive your prescribed compounds, follow your customized protocol, and check in with your care team as you transform.",
  },
];

/* ── Page ─────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <main className="bg-[#04080f] overflow-x-hidden">
      {/* Hero */}
      <HeroAscii />

      {/* ── Stats Bar ─────────────────────────────── */}
      <div id="protocols" className="relative border-b border-[#0088ff]/10 bg-[#060d1a]">
        <div className="absolute inset-0 hex-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0088ff]/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[#06101e] px-6 py-7 lg:px-10 lg:py-8 flex flex-col gap-1 hover:bg-[#0a1628] transition-colors"
              >
                <div className="font-[family-name:var(--font-orbitron)] text-2xl lg:text-4xl font-bold ss-gradient-text leading-none">
                  {s.prefix}{s.value}{s.suffix}
                </div>
                <div className="text-[#8090a0] text-[10px] lg:text-xs font-[family-name:var(--font-space-mono)] tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Protocol Section Label ─────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#0088ff]" />
          <span className="text-[#0088ff] text-[9px] font-[family-name:var(--font-space-mono)] tracking-[0.3em]">TREATMENT CATALOG</span>
          <div className="flex-1 h-px bg-[#0088ff]/15" />
        </div>
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl lg:text-4xl font-bold text-white tracking-wider">
          CHOOSE YOUR{" "}
          <span className="ss-gradient-text">PROTOCOL</span>
        </h2>
        <p className="text-[#8090a0] mt-3 text-sm lg:text-base max-w-xl font-[family-name:var(--font-dm-sans)] leading-relaxed">
          Every protocol is physician-prescribed and pharmacist-compounded.
          Members gain access to all categories.
        </p>
      </div>

      {/* ── Protocol Cards ────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {protocols.map((p) => (
            <div
              key={p.id}
              className="relative ss-card-hover bg-[#06101e] rounded-sm overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0088ff] to-transparent" />

              {p.comingSoon && (
                <div className="absolute top-4 right-4 bg-[#0088ff]/15 border border-[#0088ff]/30 text-[#0088ff] text-[9px] font-[family-name:var(--font-space-mono)] tracking-widest px-2 py-0.5 rounded-full">
                  COMING SOON
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="mb-5 p-3 w-fit bg-[#0088ff]/8 rounded-sm border border-[#0088ff]/15">
                  {p.icon}
                </div>

                <div className="text-[#0088ff]/70 text-[9px] font-[family-name:var(--font-space-mono)] tracking-[0.25em] mb-2">
                  {p.tag}
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] text-xl lg:text-2xl font-bold text-white tracking-widest mb-1">
                  {p.name}
                </h3>
                <p className="text-[#00d4ff]/70 text-xs font-[family-name:var(--font-space-mono)] tracking-wide mb-4">
                  {p.subtitle}
                </p>

                <p className="text-[#8090a0] text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed mb-6">
                  {p.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs font-[family-name:var(--font-space-mono)] text-[#b8cce0]/70">
                      <span className="text-[#0088ff] text-[10px]">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-[#0088ff]/10">
                  <div>
                    <div className="text-[#00d4ff] font-[family-name:var(--font-orbitron)] text-sm font-bold">
                      {p.price}
                    </div>
                    <div className="text-[#0088ff]/40 text-[9px] font-[family-name:var(--font-space-mono)] tracking-widest mt-0.5">
                      MEMBERSHIP REQUIRED
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 text-[10px] font-[family-name:var(--font-space-mono)] tracking-widest rounded-sm transition-all ${
                      p.comingSoon
                        ? "border border-[#0088ff]/20 text-[#0088ff]/40 cursor-default"
                        : "ss-btn-primary"
                    }`}
                    disabled={p.comingSoon}
                  >
                    {p.comingSoon ? "NOTIFY ME" : "SELECT"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ───────────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center gap-4 opacity-20">
          <div className="flex-1 h-px bg-[#0088ff]" />
          <span className="text-[#0088ff] text-[10px] font-[family-name:var(--font-space-mono)] tracking-widest">⬡ ⬡ ⬡</span>
          <div className="flex-1 h-px bg-[#0088ff]" />
        </div>
      </div>

      {/* ── How It Works ──────────────────────────── */}
      <div id="how-it-works" className="container mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-[#0088ff]" />
          <span className="text-[#0088ff] text-[9px] font-[family-name:var(--font-space-mono)] tracking-[0.3em]">THE PROCESS</span>
          <div className="flex-1 h-px bg-[#0088ff]/15" />
        </div>
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl lg:text-4xl font-bold text-white tracking-wider mb-10 lg:mb-14">
          HOW IT <span className="ss-gradient-text">WORKS</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[42px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#0088ff]/20 via-[#0088ff]/50 to-[#0088ff]/20" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col lg:items-start gap-4">
              <div className="relative">
                <div className="w-[84px] h-[84px] border border-[#0088ff]/30 bg-[#06101e] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold ss-gradient-text">
                    {s.num}
                  </span>
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0088ff]/60" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0088ff]/60" />
                </div>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-sm lg:text-base font-bold text-white tracking-widest mb-2">
                  {s.title}
                </h3>
                <p className="text-[#8090a0] text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed max-w-xs">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Membership CTA ────────────────────────── */}
      <div id="membership" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04080f] via-[#021040] to-[#04080f]" />
        <div className="absolute inset-0 hex-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0055cc]/15 blur-[120px] pointer-events-none" />

        <div className="relative container mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#0088ff]/25 bg-[#0088ff]/8 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-[#00d4ff] text-[9px] font-[family-name:var(--font-space-mono)] tracking-[0.25em]">MEMBERSHIP OPEN</span>
          </div>

          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl lg:text-5xl font-bold text-white tracking-wider mb-4 max-w-3xl mx-auto">
            BEGIN YOUR{" "}
            <span className="ss-shimmer-text">TRANSFORMATION</span>
          </h2>

          <p className="text-[#8090a0] text-sm lg:text-base font-[family-name:var(--font-dm-sans)] leading-relaxed max-w-lg mx-auto mb-10">
            Unlock access to all protocols, physician consultations, and the
            full Sculpted Sciences platform for $97/month.
            Minimum 90-day commitment.
          </p>

          {/* Membership card */}
          <div className="relative inline-block mx-auto mb-10">
            <div className="ss-card-hover bg-[#060d1a] border border-[#0088ff]/20 rounded-sm px-10 py-8 min-w-[280px] lg:min-w-[360px]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0088ff] to-transparent" />
              <div className="text-[#0088ff]/60 text-[9px] font-[family-name:var(--font-space-mono)] tracking-[0.3em] mb-2">MONTHLY MEMBERSHIP</div>
              <div className="font-[family-name:var(--font-orbitron)] text-5xl font-black ss-gradient-text">$97</div>
              <div className="text-[#8090a0] text-xs font-[family-name:var(--font-space-mono)] tracking-widest mt-1">PER MONTH</div>
              <ul className="mt-6 space-y-2.5 text-left">
                {[
                  "Access to all protocol categories",
                  "Physician / NP consultation included",
                  "Prescription GLP-1, peptides & TRT",
                  "Personalized protocol review",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-[family-name:var(--font-dm-sans)] text-[#b8cce0]/70">
                    <span className="text-[#0088ff] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0088ff]/30 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="ss-btn-primary px-10 py-3.5 font-[family-name:var(--font-space-mono)] text-sm tracking-widest rounded-sm group relative">
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              ACTIVATE MEMBERSHIP
            </button>
            <span className="text-[#8090a0] text-[10px] font-[family-name:var(--font-space-mono)] tracking-widest">
              CANCEL ANYTIME AFTER 90 DAYS
            </span>
          </div>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="border-t border-[#0088ff]/10 bg-[#030710]">
        <div className="container mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-dark.png"
              alt="Sculpted Sciences"
              width={32}
              height={32}
              className="rounded-sm opacity-80"
            />
            <div>
              <div className="font-[family-name:var(--font-orbitron)] text-white text-xs font-bold tracking-wider">
                SCULPTED SCIENCES
              </div>
              <div className="text-[#0088ff]/40 text-[8px] font-[family-name:var(--font-space-mono)] tracking-widest mt-0.5">
                PHYSICIAN-GUIDED PROTOCOLS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[9px] font-[family-name:var(--font-space-mono)] text-[#0088ff]/40 tracking-widest">
            <span>PRIVACY</span>
            <span>TERMS</span>
            <span>CONTACT</span>
          </div>

          <div className="text-[#0088ff]/25 text-[8px] font-[family-name:var(--font-space-mono)] tracking-wider">
            © 2025 SCULPTED SCIENCES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}
