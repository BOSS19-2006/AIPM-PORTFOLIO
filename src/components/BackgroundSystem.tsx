import React, { useEffect, useState, useRef } from 'react';
import { Bot, Sparkles, Sliders, CheckCircle2, TrendingUp, Layers, ChevronRight } from 'lucide-react';

interface BackgroundSystemProps {
  activeSection: string;
}

interface TrailPoint {
  x: number;
  y: number;
  angle: number;
  opacity: number;
  scale: number;
}

export default function BackgroundSystem({ activeSection }: BackgroundSystemProps) {
  // Mouse position normalized (-1 to 1) for parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Real mouse pixel coordinates for cursor glow & arrow trail
  const [isMouseInWindow, setIsMouseInWindow] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  // Direct DOM refs for 60fps cursor animation performance
  const glowRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Card magnetic response state (offsets for 6 cards)
  const [magneticOffsets, setMagneticOffsets] = useState<Array<{ x: number; y: number; active: boolean }>>([
    { x: 0, y: 0, active: false },
    { x: 0, y: 0, active: false },
    { x: 0, y: 0, active: false },
    { x: 0, y: 0, active: false },
    { x: 0, y: 0, active: false },
    { x: 0, y: 0, active: false },
  ]);

  // Card element refs for proximity detection
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation loop variables
  const cursorRef = useRef({
    currX: -100,
    currY: -100,
    targetX: -100,
    targetY: -100,
    currAngle: 0,
    targetAngle: 0,
    speed: 0,
    history: [] as Array<{ x: number; y: number; angle: number }>,
  });

  useEffect(() => {
    let animationFrameId: number;
    let stopTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setIsMouseInWindow(true);
      setIsMoving(true);

      const pageX = e.clientX;
      const pageY = e.clientY;

      // Update target position
      const prevX = cursorRef.current.targetX;
      const prevY = cursorRef.current.targetY;
      cursorRef.current.targetX = pageX;
      cursorRef.current.targetY = pageY;

      // Calculate move velocity & direction angle
      const dx = pageX - prevX;
      const dy = pageY - prevY;
      const distance = Math.hypot(dx, dy);

      if (distance > 1) {
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        cursorRef.current.targetAngle = angle;
        cursorRef.current.speed = Math.min(distance, 30);
      }

      // Parallax normalized coordinates (-1 to 1)
      const normX = (pageX / window.innerWidth - 0.5) * 2;
      const normY = (pageY / window.innerHeight - 0.5) * 2;
      setMousePos({ x: normX, y: normY });

      // Detect proximity for magnetic response on background cards
      const newOffsets = cardRefs.current.map((card) => {
        if (!card) return { x: 0, y: 0, active: false };
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const distToCard = Math.hypot(pageX - cardCenterX, pageY - cardCenterY);

        // Magnetic range: 220px
        if (distToCard < 220 && distToCard > 0) {
          const pullFactor = (1 - distToCard / 220) * 8; // Max 8px magnetic pull
          const pullX = ((pageX - cardCenterX) / distToCard) * pullFactor;
          const pullY = ((pageY - cardCenterY) / distToCard) * pullFactor;
          return { x: pullX, y: pullY, active: true };
        }
        return { x: 0, y: 0, active: false };
      });

      setMagneticOffsets(newOffsets);

      // Reset stationary timer
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        setIsMoving(false);
        cursorRef.current.speed = 0;
      }, 150);
    };

    const handleMouseLeave = () => {
      setIsMouseInWindow(false);
      setIsMoving(false);
    };

    const handleMouseEnter = () => {
      setIsMouseInWindow(true);
    };

    // Smooth 60fps interpolation loop
    const updateCursorAnimation = () => {
      const state = cursorRef.current;

      // Position smooth interpolation (0.18 lerp factor)
      state.currX += (state.targetX - state.currX) * 0.18;
      state.currY += (state.targetY - state.currY) * 0.18;

      // Rotation smooth interpolation (handling angle wrap-around)
      let diff = state.targetAngle - state.currAngle;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      state.currAngle += diff * 0.15;

      // Update cursor spotlight glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${state.currX - 175}px, ${state.currY - 175}px, 0)`;
      }

      // Update main arrow cursor indicator
      if (arrowRef.current) {
        const scale = isMoving ? 1.15 : 0.85;
        arrowRef.current.style.transform = `translate3d(${state.currX - 12}px, ${state.currY - 12}px, 0) rotate(${state.currAngle}deg) scale(${scale})`;
      }

      // Push history point for trail echoes
      state.history.unshift({ x: state.currX, y: state.currY, angle: state.currAngle });
      if (state.history.length > 20) state.history.pop();

      // Render 3 fading trail echoes
      const trailDelays = [4, 8, 12];
      trailRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const delayIndex = trailDelays[idx];
        const hist = state.history[delayIndex] || { x: state.currX, y: state.currY, angle: state.currAngle };
        const opacity = (1 - (idx + 1) * 0.28) * (isMoving ? 0.7 : 0.2);
        const trailScale = (1 - (idx + 1) * 0.2) * (isMoving ? 1 : 0.6);

        ref.style.transform = `translate3d(${hist.x - 6}px, ${hist.y - 6}px, 0) rotate(${hist.angle}deg) scale(${trailScale})`;
        ref.style.opacity = `${opacity}`;
      });

      animationFrameId = requestAnimationFrame(updateCursorAnimation);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(updateCursorAnimation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(stopTimer);
    };
  }, [isMoving]);

  // Section atmospheric ambient light shifts
  const getSectionGlow = () => {
    switch (activeSection) {
      case 'home':
        return 'from-orange-500/18 via-amber-500/10 to-transparent';
      case 'pm-process':
        return 'from-amber-500/18 via-orange-600/10 to-transparent';
      case 'decision-engine':
        return 'from-blue-600/18 via-indigo-500/10 to-transparent';
      case 'adnivio-showcase':
        return 'from-orange-500/18 via-cyan-500/10 to-transparent';
      default:
        return 'from-orange-500/18 via-amber-500/10 to-transparent';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. LAYER 1 (FAR DEPTH): Atmospheric Ambient Lighting & Grid */}
      <div 
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[580px] rounded-full bg-gradient-to-b ${getSectionGlow()} blur-[140px] transition-all duration-1000 opacity-80`}
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
        }}
      />

      <div 
        className="absolute bottom-10 right-10 w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[160px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-mousePos.x * 10}px, ${-mousePos.y * 10}px, 0)`,
        }}
      />

      {/* Subtle Grid Pattern Infrastructure (Far Depth: multiplier 0.02) */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{
          transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 4}px, 0)`,
        }}
      />

      {/* Vertical Product Thread Axis */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500/20 via-white/10 to-orange-500/20 opacity-30 -translate-x-1/2" />


      {/* 2. LAYER 2 & 3 (MIDDLE & NEAR DEPTH): Pure Product UI Fragments (ZERO TEXT) */}

      {/* FRAGMENT 1 (NEAR DEPTH: multiplier ~0.08): AI Model Workflow Node */}
      <div 
        ref={(el) => (cardRefs.current[0] = el)}
        className="absolute top-[18%] left-[5%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 32 + magneticOffsets[0].x}px, ${mousePos.y * 32 + magneticOffsets[0].y}px, 0) rotate(${mousePos.x * 1.5}deg)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-52 space-y-3 shadow-2xl ${
          magneticOffsets[0].active ? 'border-orange-500/50 shadow-orange-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center justify-between text-orange-400">
            <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-12 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>
          
          {/* Skeleton UI Lines */}
          <div className="space-y-1.5">
            <div className="w-3/4 h-2 rounded-full bg-white/30" />
            <div className="w-1/2 h-2 rounded-full bg-white/15" />
          </div>

          {/* Node Pipeline Diagram */}
          <div className="flex items-center justify-between pt-1 text-slate-400">
            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-orange-400" />
            </div>
            <div className="w-8 h-[1px] bg-orange-500/40" />
            <div className="w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-orange-300" />
            </div>
            <div className="w-8 h-[1px] bg-orange-500/40" />
            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 2 (MIDDLE DEPTH: multiplier ~0.045): RICE Prioritization Sliders */}
      <div 
        ref={(el) => (cardRefs.current[1] = el)}
        className="absolute top-[16%] right-[6%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -24 + magneticOffsets[1].x}px, ${mousePos.y * 24 + magneticOffsets[1].y}px, 0) rotate(${mousePos.x * -1.5}deg)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-48 space-y-3 shadow-2xl ${
          magneticOffsets[1].active ? 'border-amber-500/50 shadow-amber-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center justify-between">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sliders className="w-4 h-4" />
            </div>
            <div className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 w-10 h-3" />
          </div>

          {/* 3 Slider Track Visuals */}
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between">
                <div className="w-10 h-1.5 rounded bg-white/20" />
                <div className="w-6 h-1.5 rounded bg-amber-400" />
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                <div className="w-[75%] h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <div className="w-8 h-1.5 rounded bg-white/20" />
                <div className="w-6 h-1.5 rounded bg-emerald-400" />
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                <div className="w-[45%] h-full bg-emerald-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 3 (MIDDLE DEPTH: multiplier ~0.045): Connected User Journey Step Blocks */}
      <div 
        ref={(el) => (cardRefs.current[2] = el)}
        className="absolute top-[48%] left-[7%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 20 + magneticOffsets[2].x}px, ${mousePos.y * -18 + magneticOffsets[2].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-56 space-y-2.5 shadow-2xl ${
          magneticOffsets[2].active ? 'border-orange-500/50 shadow-orange-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="w-20 h-2 rounded bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-orange-400" />
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-5 h-2 rounded bg-slate-300" />
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <div className="px-2.5 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shadow-lg">
              <div className="w-6 h-2 rounded bg-orange-300" />
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-5 h-2 rounded bg-slate-300" />
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 4 (NEAR DEPTH: multiplier ~0.08): Roadmap Status Checklist */}
      <div 
        ref={(el) => (cardRefs.current[3] = el)}
        className="absolute top-[45%] right-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -30 + magneticOffsets[3].x}px, ${mousePos.y * -25 + magneticOffsets[3].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-50 space-y-2.5 shadow-2xl ${
          magneticOffsets[3].active ? 'border-orange-500/50 shadow-orange-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="w-24 h-2 rounded bg-white/30" />
            <div className="w-6 h-2 rounded bg-orange-500/40" />
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <div className="w-24 h-1.5 rounded bg-emerald-400/40" />
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping shrink-0" />
              <div className="w-28 h-1.5 rounded bg-orange-400/60" />
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="w-2 h-2 rounded-full border border-slate-600 shrink-0" />
              <div className="w-20 h-1.5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* FRAGMENT 5 (MIDDLE DEPTH: multiplier ~0.045): AI Sparkle Prompt Fragment */}
      <div 
        ref={(el) => (cardRefs.current[4] = el)}
        className="absolute top-[72%] left-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 25 + magneticOffsets[4].x}px, ${mousePos.y * 18 + magneticOffsets[4].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-52 space-y-2 shadow-2xl ${
          magneticOffsets[4].active ? 'border-purple-500/50 shadow-purple-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles className="w-4 h-4" />
            <div className="w-16 h-2 rounded bg-purple-400/40" />
          </div>
          <div className="w-full h-1.5 rounded bg-white/15" />
          <div className="w-3/4 h-1.5 rounded bg-white/10" />
        </div>
      </div>

      {/* FRAGMENT 6 (NEAR DEPTH: multiplier ~0.08): Product Analytics Sparkline Graph */}
      <div 
        ref={(el) => (cardRefs.current[5] = el)}
        className="absolute top-[70%] right-[10%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -28 + magneticOffsets[5].x}px, ${mousePos.y * 22 + magneticOffsets[5].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border transition-all duration-300 w-48 space-y-2.5 shadow-2xl ${
          magneticOffsets[5].active ? 'border-emerald-500/50 shadow-emerald-500/10 bg-[#0d0b18]/95 scale-[1.02]' : 'border-white/12'
        }`}>
          <div className="flex items-center justify-between">
            <div className="w-20 h-2 rounded bg-white/30" />
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>

          {/* SVG Sparkline Graph Curve */}
          <svg className="w-full h-8 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" viewBox="0 0 100 30" fill="none">
            <path d="M 0,24 Q 25,2 50,18 T 100,4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="100" cy="4" r="3" fill="#f97316" />
          </svg>

          <div className="flex items-end gap-1.5 pt-1 h-5 justify-between">
            <div className="w-3 bg-white/10 rounded-t h-2" />
            <div className="w-3 bg-white/15 rounded-t h-3" />
            <div className="w-3 bg-orange-500/40 rounded-t h-4" />
            <div className="w-3 bg-orange-400 rounded-t h-5" />
          </div>
        </div>
      </div>


      {/* 3. INTERACTIVE CURSOR SYSTEM (SPOTLIGHT & DIRECTIONAL ARROW TRAIL) */}
      
      {/* Soft Radial Cursor Spotlight Glow */}
      <div 
        ref={glowRef}
        className={`absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-orange-500/18 via-amber-500/12 to-transparent blur-[80px] pointer-events-none transition-opacity duration-500 ${
          isMouseInWindow ? (isMoving ? 'opacity-100 scale-110' : 'opacity-60 scale-95') : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Motion Trail Echoes (3 small fading arrow/dot echoes) */}
      {[0, 1, 2].map((idx) => (
        <div
          key={idx}
          ref={(el) => (trailRefs.current[idx] = el)}
          className={`absolute top-0 left-0 w-3 h-3 pointer-events-none transition-opacity duration-300 ${
            isMouseInWindow ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-orange-400/50 blur-[1px] shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
        </div>
      ))}

      {/* Main Directional Minimal Arrow/Chevron Cursor Indicator */}
      <div 
        ref={arrowRef}
        className={`absolute top-0 left-0 w-6 h-6 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-50 ${
          isMouseInWindow ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glowing Backlight */}
          <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-[4px]" />
          
          {/* Refined Minimal Arrow Chevron Visual (→) */}
          <svg className="w-5 h-5 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.9)] relative z-10" viewBox="0 0 24 24" fill="none">
            <path 
              d="M 5 12 H 19 M 13 6 L 19 12 L 13 18" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
      </div>

    </div>
  );
}
