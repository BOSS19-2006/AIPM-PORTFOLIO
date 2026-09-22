import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Phone, Sparkles, Award, MapPin, Activity, Cpu, Bot } from 'lucide-react';

interface HeroProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  currentFrameIndex: number;
  totalFrames: number;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ canvasRef, currentFrameIndex, totalFrames, onNavigate }: HeroProps) {
  const [signalState, setSignalState] = useState(0);
  const signals = ['DISCOVERY', 'AI WORKFLOW', 'EXPERIMENTATION', 'ANALYTICS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalState((prev) => (prev + 1) % signals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Soft Ambient Lighting Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full bg-gradient-to-b from-orange-500/15 via-amber-600/5 to-transparent blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Staggered Entrance Sequence */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* System Active Status Indicator (Requirement #01) */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-400">PRODUCT SYSTEM:</span>
            <span className="text-orange-400 font-bold uppercase transition-all duration-300">
              {signals[signalState]}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 flex items-center gap-1 font-normal">
              <MapPin className="w-3 h-3 text-orange-400" /> Indore, India
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-none">
              ATHARV CHAURE
            </h1>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-gradient-orange">
              AI Product Manager & Founder @ Adnivio
            </h2>
          </div>

          {/* Summary Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            Computer Science undergraduate specializing in AI-first products. Experienced in 0→1 product discovery, user research, PRDs, RICE prioritization, Make.com/n8n workflows, and data-informed decision making.
          </p>

          {/* Certifications Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-orange-400" />
              Airtribe AI PM Certified
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-orange-400" />
              IBM & Microsoft AI Certified
            </span>
          </div>

          {/* CTA Buttons (Requirement #01 & #17) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('decision-engine')}
              className="btn-orange-gradient px-6 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 group transition-all duration-300 active:scale-95"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-full text-sm font-bold border border-white/15 bg-white/5 hover:bg-white/10 hover:border-orange-500/40 text-white flex items-center gap-2 backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              Contact Me
              <Mail className="w-4 h-4 text-orange-400" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md text-xs text-slate-300">
            <span className="font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/atharvchaure"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/BOSS19-2006"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:atharv.business19@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:7987709099"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 text-slate-300 flex items-center justify-center transition-all duration-200"
                title="Call Me"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Atharv Chaure Headshot + Living System Signals */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl p-3 glass-card border border-white/15 shadow-glow-orange group transition-all duration-500 hover:-translate-y-1">
            
            {/* Soft Ambient Halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
              <img
                src="/assets/atharv_headshot.png"
                alt="Atharv Chaure - Professional Headshot"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for PM Roles</span>
              </div>

              {/* Name Overlay Stamp */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  ATHARV CHAURE
                </span>
                <span className="text-slate-400">FOUNDER & PM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
