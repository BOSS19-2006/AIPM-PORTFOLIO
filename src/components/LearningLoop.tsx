import React from 'react';
import { RefreshCw, BarChart2, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedCounter from './AnimatedCounter';

export default function LearningLoop() {
  const loopSteps = [
    {
      step: 'BUILD',
      icon: Rocket,
      title: '0→1 Feature Delivery',
      desc: 'Shipped Make.com webhooks & OpenAI/Gemini workflow engines.',
    },
    {
      step: 'MEASURE',
      icon: BarChart2,
      title: 'Quantitative Tracking',
      desc: 'Tracked 28% → 45% resolution target & user onboarding completion rates.',
    },
    {
      step: 'LEARN',
      icon: Lightbulb,
      title: 'Qualitative Insights',
      desc: 'Learned human review step prevents bot fatigue and builds user trust.',
    },
    {
      step: 'ITERATE',
      icon: RefreshCw,
      title: 'Continuous Roadmap',
      desc: 'Refined prompt context, magic link flows, and subscription hypotheses.',
    },
  ];

  return (
    <section id="learning-loop" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            Continuous Product Optimization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Build → Measure → Learn → Iterate
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Closing the product loop to turn quantitative metrics into continuous roadmap enhancements.
          </p>
        </Reveal>

        {/* Looping Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {loopSteps.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Genuine Research & Capstone Metrics Banner */}
        <Reveal className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Fireflies.ai Resolution Target</span>
            <div className="text-3xl font-extrabold text-orange-400">
              28% → <AnimatedCounter to={45} suffix="%" />
            </div>
            <span className="text-xs text-slate-300 font-light">+17% Improvement in 14-day closure</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Primary Stakeholder Research</span>
            <div className="text-3xl font-extrabold text-white">
              <AnimatedCounter to={15} suffix="+" /> Interviews
            </div>
            <span className="text-xs text-slate-300 font-light">PMs, Founders & Engineer Stakeholders</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Verified Qualifications</span>
            <div className="text-3xl font-extrabold text-white">
              <AnimatedCounter to={3} /> Certifications
            </div>
            <span className="text-xs text-slate-300 font-light">Airtribe, IBM & Microsoft AI PM</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
