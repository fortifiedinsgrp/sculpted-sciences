'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      (canvas.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl || gl.isContextLost()) return false;
    // Release the test context so it doesn't consume a context slot
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export default function HeroAscii() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglSupported(false);
      return;
    }

    // Intercept Unicorn Studio's own warning when WebGL context creation fails
    const origWarn = console.warn;
    console.warn = function (...args: unknown[]) {
      if (typeof args[0] === 'string' && args[0].toLowerCase().includes('unable to create webgl')) {
        setWebglSupported(false);
        console.warn = origWarn;
      }
      origWarn.apply(console, args);
    };

    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        const allElements = projectDiv.querySelectorAll('*');
        allElements.forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            el.remove();
          }
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      console.warn = origWarn;
      clearInterval(interval);
      if (document.head.contains(embedScript)) document.head.removeChild(embedScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04080f]">
      {/* Vitruvian man animation — desktop only, requires WebGL */}
      {webglSupported && (
        <div className="absolute inset-0 w-full h-full hidden lg:block">
          <div
            data-us-project="whwOGlfJ5Rz2rHaEUgHl"
            style={{ width: '100%', height: '100%', minHeight: '100vh' }}
          />
        </div>
      )}

      {/* Desktop fallback when WebGL is unavailable */}
      {!webglSupported && (
        <div className="absolute inset-0 w-full h-full hidden lg:block dna-bg">
          <div className="stars-bg absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0044aa]/10 to-[#04080f]" />
        </div>
      )}

      {/* Mobile stars / glow background */}
      <div className="absolute inset-0 w-full h-full lg:hidden dna-bg">
        <div className="stars-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0044aa]/10 to-[#04080f]" />
      </div>

      {/* Ambient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/80 via-transparent to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04080f] to-transparent pointer-events-none" />

      {/* ── Top Nav Bar ── */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-[#0088ff]/20 bg-[#04080f]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4">
            <Image
              src="/logo-dark.png"
              alt="Sculpted Sciences"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <div className="hidden lg:flex flex-col">
              <span className="font-[family-name:var(--font-orbitron)] text-white text-sm font-bold tracking-wider leading-none">
                SCULPTED
              </span>
              <span className="font-[family-name:var(--font-orbitron)] text-[#00d4ff] text-[9px] tracking-[0.3em] leading-none mt-0.5">
                SCIENCES
              </span>
            </div>
            <div className="h-4 w-px bg-[#0088ff]/30 hidden lg:block" />
            <span className="text-[#0088ff]/60 text-[8px] lg:text-[9px] font-[family-name:var(--font-space-mono)] hidden lg:block tracking-widest">
              PHYSICIAN-GUIDED PROTOCOLS
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-[family-name:var(--font-space-mono)] text-[#8090a0] tracking-widest">
            <a href="#protocols" className="hover:text-[#00d4ff] transition-colors">PROTOCOLS</a>
            <div className="w-px h-3 bg-[#0088ff]/20" />
            <a href="#how-it-works" className="hover:text-[#00d4ff] transition-colors">SCIENCE</a>
            <div className="w-px h-3 bg-[#0088ff]/20" />
            <a href="#membership" className="hover:text-[#00d4ff] transition-colors">MEMBERSHIP</a>
          </nav>

          <button className="ss-btn-primary px-4 py-2 text-[10px] lg:text-[11px] font-[family-name:var(--font-space-mono)] tracking-widest rounded-sm">
            GET STARTED
          </button>
        </div>
      </div>

      {/* ── Corner Frame Accents ── */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-14 lg:h-14 border-t-2 border-l-2 border-[#0088ff]/30 z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-14 lg:h-14 border-t-2 border-r-2 border-[#0088ff]/30 z-10" />
      <div className="absolute bottom-[5vh] left-0 w-8 h-8 lg:w-14 lg:h-14 border-b-2 border-l-2 border-[#0088ff]/30 z-10" />
      <div className="absolute bottom-[5vh] right-0 w-8 h-8 lg:w-14 lg:h-14 border-b-2 border-r-2 border-[#0088ff]/30 z-10" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex min-h-screen items-center pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
        <div className="container mx-auto px-6 lg:px-16 lg:ml-[8%]">
          <div className="max-w-xl relative">

            {/* Index line */}
            <div className="flex items-center gap-2 mb-4 opacity-50">
              <div className="w-6 h-px bg-[#0088ff]" />
              <span className="text-[#0088ff] text-[9px] font-[family-name:var(--font-space-mono)] tracking-widest">PROTOCOL_001</span>
              <div className="flex-1 h-px bg-[#0088ff]/40" />
            </div>

            {/* Main Headline */}
            <div className="relative">
              <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-1 dither-pattern opacity-50" />
              <h1
                className="text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-4 leading-none tracking-wider"
                style={{ fontFamily: 'var(--font-orbitron)', letterSpacing: '0.08em' }}
              >
                <span className="block ss-gradient-text">SCULPTED</span>
                <span className="block text-white mt-1 lg:mt-2">
                  BY SCIENCE
                </span>
              </h1>
            </div>

            {/* Dot row */}
            <div className="hidden lg:flex gap-1 mb-4 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-[#00d4ff] rounded-full" />
              ))}
            </div>

            {/* Subheadline */}
            <p className="text-xs lg:text-base text-[#8090a0] mb-6 lg:mb-8 leading-relaxed font-[family-name:var(--font-dm-sans)] max-w-sm">
              Physician-guided GLP-1, peptide, and hormone protocols —
              engineered for peak performance and lasting transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="ss-btn-primary px-6 py-3 font-[family-name:var(--font-space-mono)] text-xs lg:text-sm tracking-widest rounded-sm group relative">
                <span className="hidden lg:block absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="hidden lg:block absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                START YOUR PROTOCOL
              </button>
              <button className="ss-btn-ghost px-6 py-3 font-[family-name:var(--font-space-mono)] text-xs lg:text-sm tracking-widest rounded-sm">
                VIEW PROTOCOLS
              </button>
            </div>

            {/* Bottom notation */}
            <div className="hidden lg:flex items-center gap-2 mt-7 opacity-35">
              <span className="text-[#00d4ff] text-[9px] font-[family-name:var(--font-space-mono)]">⬡</span>
              <div className="flex-1 h-px bg-[#0088ff]/50" />
              <span className="text-[#8090a0] text-[9px] font-[family-name:var(--font-space-mono)] tracking-widest">GLP-1 · PEPTIDES · TRT</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Status Bar ── */}
      <div className="absolute left-0 right-0 z-20 border-t border-[#0088ff]/15 bg-[#04080f]/60 backdrop-blur-sm" style={{ bottom: '5vh' }}>
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-[family-name:var(--font-space-mono)] text-[#0088ff]/50">
            <span className="hidden lg:inline text-[#00d4ff]/60">SYSTEM.ACTIVE</span>
            <span className="lg:hidden text-[#00d4ff]/60">SYS.ACT</span>
            <div className="hidden lg:flex gap-0.5">
              {[8, 14, 6, 12, 10, 16, 8, 11].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#0088ff]/40"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-[family-name:var(--font-space-mono)] text-[#0088ff]/50">
            <span className="hidden lg:inline">◑ PROTOCOLS READY</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#00d4ff]/70 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-[#0088ff]/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-1 bg-[#0088ff]/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="hidden lg:inline">FRAME: ∞</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dna-bg {
          background-image:
            radial-gradient(ellipse at 20% 30%, rgba(0, 100, 220, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0, 180, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(0, 50, 150, 0.2) 0%, transparent 60%);
        }
        .stars-bg {
          background-image:
            radial-gradient(1px 1px at 10% 15%, rgba(0, 212, 255, 0.8), transparent),
            radial-gradient(1px 1px at 25% 55%, white, transparent),
            radial-gradient(1px 1px at 40% 25%, rgba(0, 136, 255, 0.6), transparent),
            radial-gradient(1px 1px at 60% 80%, white, transparent),
            radial-gradient(1px 1px at 75% 45%, rgba(0, 212, 255, 0.7), transparent),
            radial-gradient(1px 1px at 85% 20%, white, transparent),
            radial-gradient(1px 1px at 90% 65%, rgba(0, 136, 255, 0.5), transparent),
            radial-gradient(1px 1px at 15% 80%, white, transparent);
          background-size: 200% 200%;
          opacity: 0.4;
        }
        .dither-pattern {
          background-image:
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,136,255,0.35) 1px, rgba(0,136,255,0.35) 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, rgba(0,136,255,0.35) 1px, rgba(0,136,255,0.35) 2px);
          background-size: 3px 3px;
        }
      `}</style>
    </section>
  );
}
