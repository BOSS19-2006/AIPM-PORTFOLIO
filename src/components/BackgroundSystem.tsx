import React, { useEffect, useState, useRef } from 'react';
import { 
  Users, Sliders, FileText, FlaskConical, TrendingUp, MapPin, 
  CheckCircle2, ArrowRight, Sparkles, ChevronRight, Activity 
} from 'lucide-react';

interface BackgroundSystemProps {
  activeSection: string;
  theme?: 'dark' | 'light';
}

export default function BackgroundSystem({ activeSection, theme = 'dark' }: BackgroundSystemProps) {
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
      case 'projects':
        return 'from-blue-600/18 via-indigo-500/10 to-transparent';
      default:
        return 'from-orange-500/18 via-amber-500/10 to-transparent';
    }
  };

  const isLight = theme === 'light';

  const cardBaseStyle = isLight
    ? 'bg-white/90 backdrop-blur-xl border-slate-200/90 text-slate-800 shadow-xl shadow-slate-200/60'
    : 'bg-[#0d0b18]/80 backdrop-blur-xl border-white/12 text-slate-200 shadow-2xl';

  const cardActiveBorder = isLight
    ? 'border-orange-500/60 shadow-orange-500/20 bg-white/95 scale-[1.02]'
    : 'border-orange-500/50 shadow-orange-500/10 bg-[#0d0b18]/95 scale-[1.02]';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. LAYER 1 (FAR DEPTH): Atmospheric Ambient Lighting & Grid */}
      <div 
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[580px] rounded-full bg-gradient-to-b ${getSectionGlow()} blur-[140px] transition-all duration-1000 ${isLight ? 'opacity-40' : 'opacity-80'}`}
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
        }}
      />

      <div 
        className={`absolute bottom-10 right-10 w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[160px] transition-transform duration-700 ease-out ${isLight ? 'opacity-20' : 'opacity-100'}`}
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
      <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-500/20 via-white/10 to-orange-500/20 opacity-30 -translate-x-1/2 ${isLight ? 'opacity-15' : 'opacity-30'}`} />


      {/* ========================================================================= */}
      {/* 2. THE SIX PRODUCT MANAGEMENT ARTIFACT BOXES */}
      {/* ========================================================================= */}

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 1 — USER RESEARCH (Top Left) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[0] = el)}
        className="absolute top-[18%] left-[5%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 32 + magneticOffsets[0].x}px, ${mousePos.y * 32 + magneticOffsets[0].y}px, 0) rotate(${mousePos.x * 1.5}deg)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-52 space-y-3 ${cardBaseStyle} ${
          magneticOffsets[0].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-orange-400">
              <Users className="w-3.5 h-3.5" />
              <span>USER RESEARCH</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Interviews</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Key Insights</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Pain Points</span>
            </div>
          </div>

          <div className="pt-1 border-t border-white/10">
            <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 font-bold block text-center">
              INSIGHT → OPPORTUNITY
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 2 — USER JOURNEY (Mid Left) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[2] = el)}
        className="absolute top-[48%] left-[7%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 20 + magneticOffsets[2].x}px, ${mousePos.y * -18 + magneticOffsets[2].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-56 space-y-3 ${cardBaseStyle} ${
          magneticOffsets[2].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <span className="text-xs font-mono font-bold tracking-wide text-orange-400">
              USER JOURNEY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          </div>

          {/* 4 Connected Nodes Map */}
          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-semibold">Discover</span>
              <span className="text-orange-400 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-semibold">Evaluate</span>
            </div>
            <div className="flex items-center gap-1.5 pl-6">
              <span className="text-orange-400 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-orange-300 font-bold">Activate</span>
            </div>
            <div className="flex items-center gap-1.5 pl-12">
              <span className="text-orange-400 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-semibold">Retain</span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 3 — PRODUCT REQUIREMENT (Bottom Left) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[4] = el)}
        className="absolute top-[72%] left-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 25 + magneticOffsets[4].x}px, ${mousePos.y * 18 + magneticOffsets[4].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-56 space-y-2.5 ${cardBaseStyle} ${
          magneticOffsets[4].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-orange-400">
              <FileText className="w-3.5 h-3.5" />
              <span>PRODUCT REQUIREMENT</span>
            </div>
          </div>

          <div className="space-y-1 text-[11px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">•</span>
              <span>Problem</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">•</span>
              <span>User Story</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">•</span>
              <span>Acceptance Criteria</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">•</span>
              <span>Success Metric</span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-400 font-semibold">PRD v1.2</span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              READY
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 4 — FEATURE PRIORITY (Top Right) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[1] = el)}
        className="absolute top-[16%] right-[6%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -24 + magneticOffsets[1].x}px, ${mousePos.y * 24 + magneticOffsets[1].y}px, 0) rotate(${mousePos.x * -1.5}deg)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-52 space-y-3 ${cardBaseStyle} ${
          magneticOffsets[1].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-amber-400">
              <Sliders className="w-3.5 h-3.5" />
              <span>FEATURE PRIORITY</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
              RICE
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
            <div className="flex justify-between items-center">
              <span>Impact</span>
              <span className="text-amber-400 tracking-wider">●●●●○</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Reach</span>
              <span className="text-amber-400 tracking-wider">●●●●●</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Confidence</span>
              <span className="text-amber-400 tracking-wider">●●●●○</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Effort</span>
              <span className="text-emerald-400 tracking-wider">●●○○○</span>
            </div>
          </div>

          <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400 font-bold">
            <span>PRIORITIZED</span>
            <span>✓</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 5 — PRODUCT EXPERIMENT (Mid Right) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[3] = el)}
        className="absolute top-[45%] right-[8%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -30 + magneticOffsets[3].x}px, ${mousePos.y * -25 + magneticOffsets[3].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-52 space-y-2.5 ${cardBaseStyle} ${
          magneticOffsets[3].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-orange-400">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>PRODUCT EXPERIMENT</span>
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] font-mono">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">HYPOTHESIS</span>
            
            {/* A -> B Variant Flow */}
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold font-mono">
              <span className="text-orange-400 px-1.5 py-0.5 rounded bg-orange-500/10">A</span>
              <span className="text-slate-400">─────────→</span>
              <span className="text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">B</span>
            </div>

            <div className="text-[10px] text-slate-300 pt-0.5">
              <span>Metric: </span>
              <strong className="text-white">Activation</strong>
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
            <span className="text-slate-400">Status:</span>
            <span className="flex items-center gap-1 text-orange-400 font-bold">
              TESTING
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* BOX 6 — PRODUCT METRICS (Bottom Right) */}
      {/* ------------------------------------------------------------------------- */}
      <div 
        ref={(el) => (cardRefs.current[5] = el)}
        className="absolute top-[70%] right-[10%] hidden lg:block transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -28 + magneticOffsets[5].x}px, ${mousePos.y * 22 + magneticOffsets[5].y}px, 0)`,
        }}
      >
        <div className={`p-4 rounded-2xl border transition-all duration-300 w-52 space-y-2.5 ${cardBaseStyle} ${
          magneticOffsets[5].active ? cardActiveBorder : ''
        }`}>
          <div className="flex items-center justify-between border-b pb-2 border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>PRODUCT METRICS</span>
            </div>
          </div>

          {/* Metric lines flow */}
          <div className="space-y-1 text-[11px] font-mono text-slate-300">
            <div className="flex justify-between items-center">
              <span>Activation</span>
              <span className="text-slate-400">─────╮</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Retention</span>
              <span className="text-slate-400">───╮ │</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Conversion</span>
              <span className="text-slate-400">───╯ ╰─</span>
            </div>
          </div>

          <div className="pt-1 border-t border-white/10">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold block text-center">
              MEASURE → LEARN
            </span>
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
