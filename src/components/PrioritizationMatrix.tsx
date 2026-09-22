import React, { useState } from 'react';
import { Sliders, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function PrioritizationMatrix() {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      name: 'Internal Smart Reminders (Slack/Teams)',
      reach: 800,
      impact: 2,
      confidence: 80,
      effort: 2,
      score: 640,
      rank: 1,
      reason: 'Addresses #1 research finding: internal owners forget items when multitasking. Low effort, high reach.',
    },
    {
      name: 'Auto-Nudge Email Bots (External Clients)',
      reach: 500,
      impact: 3,
      confidence: 80,
      effort: 2,
      score: 600,
      rank: 2,
      reason: 'Bridges client-dependency bottlenecks without forcing external stakeholders to install new apps.',
    },
    {
      name: 'AI Pre-Meeting Progress Check-in',
      reach: 600,
      impact: 3,
      confidence: 75,
      effort: 3,
      score: 450,
      rank: 3,
      reason: 'Asks owners for updates before next meeting, keeping status logs accurate without micromanagement.',
    },
    {
      name: 'Bi-directional Jira / Asana Sync',
      reach: 400,
      impact: 2,
      confidence: 70,
      effort: 3,
      score: 187,
      rank: 4,
      reason: 'Deep integration useful for engineering teams, but higher effort and restricted reach.',
    },
  ];

  const activeFeat = features[selectedFeature];

  return (
    <section id="prioritization-matrix" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            Product Prioritization Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            RICE Prioritization Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Quantifying product reach, impact, confidence, and effort to rank feature opportunities.
          </p>
        </Reveal>

        {/* RICE Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Feature List Column */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase font-bold mb-2">
              Feature Backlog Candidates (RICE Score = Reach × Impact × Conf. / Effort)
            </div>

            {features.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFeature(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 ${
                  selectedFeature === idx
                    ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-mono ${
                    feat.rank === 1 ? 'bg-amber-500 text-black' : 'bg-white/10 text-slate-300'
                  }`}>
                    #{feat.rank}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{feat.name}</h3>
                    <p className="text-[11px] text-slate-400">Reach: {feat.reach} • Impact: {feat.impact} • Effort: {feat.effort}</p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-xs text-slate-400 block">SCORE</span>
                  <span className="text-lg font-extrabold text-amber-400">{feat.score}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Detail Column */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Rank #{activeFeat.rank} Opportunity
                </span>
                <span className="text-xs font-mono text-slate-400">Score: {activeFeat.score}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{activeFeat.name}</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {activeFeat.reason}
              </p>

              {/* RICE Variables Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">REACH</span>
                  <span className="text-amber-400 font-bold text-base">{activeFeat.reach} Users</span>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">IMPACT</span>
                  <span className="text-amber-400 font-bold text-base">{activeFeat.impact} / 3</span>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">CONFIDENCE</span>
                  <span className="text-amber-400 font-bold text-base">{activeFeat.confidence}%</span>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">EFFORT</span>
                  <span className="text-amber-400 font-bold text-base">{activeFeat.effort} / 5</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Prioritized for Sprint Release</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
