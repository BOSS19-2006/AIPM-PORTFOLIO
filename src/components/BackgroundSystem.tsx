import React, { useEffect, useState, useRef } from 'react';
import { Bot, Sparkles, ArrowRight, Layers, Sliders, CheckCircle2, TrendingUp, Compass } from 'lucide-react';

interface BackgroundSystemProps {
  activeSection: string;
}

export default function BackgroundSystem({ activeSection }: BackgroundSystemProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardProximity, setCardProximity] = useState({ card1: 1, card2: 1, card3: 1 });

  // Smooth mouse movement and parallax tracking
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Section theme subtle glow shifts
  const getSectionGlow = () => {
    switch (activeSection) {
      case 'home':
        return 'from-orange-500/20 via-amber-500/10 to-transparent';
      case 'pm-process':
        return 'from-amber-500/20 via-orange-600/10 to-transparent';
      case 'decision-engine':
        return 'from-blue-600/20 via-indigo-500/10 to-transparent';
      case 'adnivio-showcase':
        return 'from-orange-500/20 via-cyan-500/10 to-transparent';
      default:
        return 'from-orange-500/20 via-amber-500/10 to-transparent';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. ATMOSPHERIC BASE: Soft Blurred Gradient Light Fields */}
      <div 
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b ${getSectionGlow()} blur-[140px] transition-all duration-1000 opacity-90`}
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
        }}
      />

      <div 
        className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-mousePos.x * 15}px, ${-mousePos.y * 15}px, 0)`,
        }}
      />

      {/* CURSOR SPOTLIGHT EFFECT: Soft cursor-following light layer */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent blur-[100px] transition-transform duration-300 ease-out"
        style={{
          left: `calc(50% + ${mousePos.x * 380}px - 225px)`,
          top: `calc(40% + ${mousePos.y * 280}px - 225px)`,
        }}
      />

      {/* 2. SUBTLE WORKSPACE GRID INFRASTRUCTURE */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-25"
        style={{
          transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
        }}
      />

      {/* 3. PRODUCT UI FRAGMENTS: 6 Floating Product Cards in Background */}
      
      {/* FRAGMENT 1: AI Campaign Card (Top Left) */}
      <div 
        className="absolute top-[20%] left-[6%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 32}px, ${mousePos.y * 32}px, 0) rotate(${mousePos.x * 2}deg)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-2 w-48">
          <div className="flex items-center justify-between text-[11px] font-mono text-orange-400">
            <span className="flex items-center gap-1 font-bold">
              <Bot className="w-3.5 h-3.5" /> AI Campaign
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[10px] text-slate-400 font-light">Generate multivariant SME ad copy</p>
          <div className="px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-300 flex items-center justify-between">
            <span>Action</span>
            <span className="flex items-center font-bold">Continue <ArrowRight className="w-3 h-3 ml-1" /></span>
          </div>
        </div>
      </div>

      {/* FRAGMENT 2: Feature Priority Card (Top Right) */}
      <div 
        className="absolute top-[18%] right-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -28}px, ${mousePos.y * 28}px, 0) rotate(${mousePos.x * -2}deg)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-2 w-48">
          <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
            <span className="flex items-center gap-1 font-bold">
              <Sliders className="w-3.5 h-3.5" /> Feature Priority
            </span>
            <span className="text-[9px] font-bold bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">RICE</span>
          </div>
          <div className="space-y-1 text-[10px] font-mono text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Impact</span>
              <span className="text-amber-400">●●●●○</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Effort</span>
              <span className="text-emerald-400">●●○○○</span>
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 3: User Flow Journey Card (Mid Left) */}
      <div 
        className="absolute top-[48%] left-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 24}px, ${mousePos.y * -20}px, 0)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-2 w-52">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">User Flow Journey</span>
          <div className="flex items-center gap-1 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Discover</span>
            <span className="text-orange-400">→</span>
            <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-orange-300 font-bold">Evaluate</span>
            <span className="text-orange-400">→</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Convert</span>
          </div>
        </div>
      </div>

      {/* FRAGMENT 4: Product Roadmap Status (Mid Right) */}
      <div 
        className="absolute top-[45%] right-[10%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -22}px, 0)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-2 w-48">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 font-bold">
            <span>Product Roadmap</span>
            <span className="text-[9px] text-orange-400 font-bold">NOW</span>
          </div>
          <div className="space-y-1 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" /> <span>Discovery Phase</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" /> <span>MVP Core Flows</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full border border-slate-600" /> <span>Scale & Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 5: AI Assistant Query Card (Bottom Left) */}
      <div 
        className="absolute top-[72%] left-[10%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 15}px, 0)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-1.5 w-52">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-purple-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> AI Assistant
          </div>
          <p className="text-[10px] text-slate-300 font-light italic">
            "Optimize SME onboarding conversion step"
          </p>
        </div>
      </div>

      {/* FRAGMENT 6: Analytics Sparkline Trend (Bottom Right) */}
      <div 
        className="absolute top-[70%] right-[12%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * 20}px, 0)`,
        }}
      >
        <div className="p-3.5 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/12 text-slate-200 shadow-2xl space-y-2 w-48">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 font-bold">
            <span>Product Trend</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          {/* Simple Clean Sparkline SVG Wave */}
          <svg className="w-full h-6 text-orange-400" viewBox="0 0 100 30" fill="none">
            <path d="M 0,25 Q 25,5 50,20 T 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Continuous Vertical System Thread Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-orange-500/25 via-white/10 to-orange-500/25 opacity-30 -translate-x-1/2" />
    </div>
  );
}
