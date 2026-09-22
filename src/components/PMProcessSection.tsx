import React, { useState } from 'react';
import { Search, Target, Sliders, Cpu, BarChart2, RefreshCw, ChevronRight } from 'lucide-react';

export default function PMProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'discover',
      title: '1. Discover',
      subtitle: 'User Research & Discovery',
      icon: Search,
      description: 'Conduct primary stakeholder interviews, survey analysis, and competitive landscape evaluation to uncover latent user pain points and unarticulated needs.',
      artifacts: ['15+ User Interviews', 'Stakeholder Mapping', 'TAM/SAM/SOM Analysis', 'Competitor Audits'],
    },
    {
      id: 'define',
      title: '2. Define',
      subtitle: 'Problem Framing & PRD',
      icon: Target,
      description: 'Transform raw qualitative observations into structured problem statements, clear user personas, target metrics, and high-impact PRDs.',
      artifacts: ['PRD Writing', 'User Story Mapping', 'Translation-Execution Gap', 'Core Value Props'],
    },
    {
      id: 'prioritize',
      title: '3. Prioritize',
      subtitle: 'RICE & MoSCoW Frameworks',
      icon: Sliders,
      description: 'Evaluate solution hypotheses against Reach, Impact, Confidence, and Effort to maximize business ROI while minimizing technical complexity.',
      artifacts: ['RICE Scoring Matrix', 'MoSCoW Bucketing', 'MVP Scope Boundaries', 'Feature Roadmap'],
    },
    {
      id: 'build',
      title: '4. Build',
      subtitle: 'AI Workflows & Agile Execution',
      icon: Cpu,
      description: 'Collaborate with engineering teams to integrate OpenAI/Gemini APIs, Make.com/n8n automated webhooks, and iterative product sprints.',
      artifacts: ['OpenAI + Gemini Pipeline', 'Make.com Webhooks', 'Sprint Backlog', 'Clickable Prototypes'],
    },
    {
      id: 'measure',
      title: '5. Measure',
      subtitle: 'Metrics & Performance Analytics',
      icon: BarChart2,
      description: 'Track quantitative activation rates, feature retention, and conversion funnels to evaluate whether product hypotheses achieved target outcomes.',
      artifacts: ['Commitment Resolution Rate', 'Funnel Analytics', 'A/B Test Results', 'Retention Metrics'],
    },
    {
      id: 'iterate',
      title: '6. Iterate',
      subtitle: 'Continuous Product Feedback',
      icon: RefreshCw,
      description: 'Synthesize user feedback and metric drop-offs to refine prompt context, optimize user journeys, and drive continuous product iteration.',
      artifacts: ['User Feedback Loops', 'Prompt Tuning', 'Funnel Optimization', 'V2 Feature Specs'],
    },
  ];

  return (
    <section id="pm-process" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold">
            Product Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            End-to-End Product Thinking Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            How I approach product management: from raw user research to metrics-driven delivery.
          </p>
        </div>

        {/* Desktop Pipeline Steps Nav */}
        <div className="hidden lg:grid grid-cols-6 gap-2 bg-black/40 p-2 rounded-2xl border border-white/10">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl flex flex-col items-center gap-2 text-center transition-all ${
                activeStep === idx
                  ? 'bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <step.icon className={`w-5 h-5 ${activeStep === idx ? 'text-white' : 'text-orange-400'}`} />
              <span className="text-xs font-semibold">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Mobile Step Selector */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeStep === idx
                  ? 'bg-orange-500 text-white font-bold'
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              <step.icon className="w-4 h-4" />
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Details Panel */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{steps[activeStep].title} — {steps[activeStep].subtitle}</h3>
                <span className="text-xs text-orange-400 font-mono">Phase 0{activeStep + 1} of 06</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Key PM Artifacts Delivered:</span>
              <div className="flex flex-wrap gap-2">
                {steps[activeStep].artifacts.map((art, aIdx) => (
                  <span key={aIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    {art}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
              PM Thought Framework
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-light">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span>User Centricity</span>
                <span className="text-emerald-400 font-bold">100%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span>Data-Informed</span>
                <span className="text-emerald-400 font-bold">RICE / KPIs</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Execution Speed</span>
                <span className="text-orange-400 font-bold">Agile Sprints</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
