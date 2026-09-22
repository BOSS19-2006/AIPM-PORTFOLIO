import React, { useState } from 'react';
import { Target, HelpCircle, Layers, Sliders, CheckCircle2, AlertTriangle, ArrowRight, Activity } from 'lucide-react';
import Reveal from './Reveal';

export default function ProductDecisionEngine() {
  const [selectedScenario, setSelectedScenario] = useState<'fireflies' | 'adnivio'>('fireflies');
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const scenarios = {
    fireflies: {
      problemTitle: 'Fireflies.ai — Meeting Commitment Follow-Through Gap',
      userProblem: 'Professional meetings extract commitments effectively, but only 28% reach closure within 14 days because post-meeting summaries act as a passive "write-only" memory layer.',
      signals: [
        '15+ user interviews across PMs & founders revealed manual Trello/Slack pasting friction.',
        'Users forget pending documents or dependencies once summary email lands in inbox.',
        'Managers experience anxiety over opacity, leading to interruptive Slack pings.',
      ],
      options: [
        {
          title: 'Option A: Closed-Loop Execution Engine (Selected)',
          concept: 'Automated 1-click Action-Item Review Modal + Context-Aware Nudges (Slack/Teams + SendGrid magic links).',
          userImpact: 'High — Eliminates manual copying; automates gentle follow-ups without nagging.',
          businessImpact: 'High — Increases meeting resolution rate from 28% to 45% (+17%).',
          complexity: 'Medium — Requires Make.com webhooks & messaging integration.',
          risk: 'Low — 1-click review step prevents bot misattribution.',
          isRecommended: true,
          metric: 'Target: 45% Commitment Resolution Rate (Up +17%)',
        },
        {
          title: 'Option B: 100% Instant Silent Automation',
          concept: 'Automatically convert every extracted transcript sentence directly into Jira tickets without user review.',
          userImpact: 'Medium — Saves 2 seconds of review time but introduces noise.',
          businessImpact: 'Medium — High ticket creation volume.',
          complexity: 'High — Deep bi-directional sync required.',
          risk: 'High — Casual remarks falsely converted to firm commitments, causing bot fatigue.',
          isRecommended: false,
          metric: 'Risk of High Notification Opt-Out (>15%)',
        },
        {
          title: 'Option C: Passive Email Digest Reminders',
          concept: 'Send a daily summary email containing all open unclosed commitments to attendees.',
          userImpact: 'Low — Still lives inside flooded inboxes; easily ignored.',
          businessImpact: 'Low — Minimal change in resolution rate.',
          complexity: 'Low — Standard cron email trigger.',
          risk: 'Low — No architectural changes.',
          isRecommended: false,
          metric: 'Expected Resolution Increase: +2% (Negligible)',
        },
      ]
    },
    adnivio: {
      problemTitle: 'Adnivio — SME Fragmented Marketing & Ad Operations',
      userProblem: 'SME owners rely on 5+ disconnected tools for content generation, social marketing, buyer messaging, and analytics, causing high drop-off and ad budget waste.',
      signals: [
        'SMEs lack dedicated marketing managers and get overwhelmed by complex ad managers.',
        'Prompt engineering in raw ChatGPT is too complex for non-technical retail owners.',
        'Owners need single-dashboard visibility into ad spend ROI and customer inquiries.',
      ],
      options: [
        {
          title: 'Option A: Guided AI Workflow + Marketplace (Selected)',
          concept: 'Input → Context → OpenAI/Gemini AI → Review → 1-Click Launch + Catalog Marketplace.',
          userImpact: 'High — 3-minute setup; zero prompt engineering required.',
          businessImpact: 'High — Tiered subscriptions + sponsored AI ad slots monetization.',
          complexity: 'Medium — React + Node.js + dual OpenAI/Gemini API integration.',
          risk: 'Low — Guided guardrails keep content on-brand.',
          isRecommended: true,
          metric: 'Target: 3.4k Ad Clicks (13.7% CTR) & 4.2x ROI',
        },
        {
          title: 'Option B: Open Prompt AI Playground',
          concept: 'Provide an unconstrained AI chat interface where SMEs type freeform marketing prompts.',
          userImpact: 'Low — High friction for non-technical users.',
          businessImpact: 'Low — Hard to differentiate from standard ChatGPT.',
          complexity: 'Low — Single API wrapper.',
          risk: 'High — Poor prompt quality leads to low conversion ads.',
          isRecommended: false,
          metric: 'High Onboarding Churn (>50%)',
        },
      ]
    }
  };

  const currentScenario = scenarios[selectedScenario];
  const activeOpt = currentScenario.options[selectedOption] || currentScenario.options[0];

  return (
    <section id="decision-engine" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
            <Activity className="w-3.5 h-3.5" />
            Interactive Product Decision Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            How I Evaluate Product Trade-offs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Select a product challenge below to explore user signals, direction options, trade-offs, and metric validation.
          </p>
        </Reveal>

        {/* Scenario Toggle Pills */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => { setSelectedScenario('fireflies'); setSelectedOption(0); }}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all border ${
              selectedScenario === 'fireflies'
                ? 'bg-blue-600 text-white font-bold border-blue-500 shadow-md shadow-blue-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            Fireflies.ai Execution Engine
          </button>

          <button
            onClick={() => { setSelectedScenario('adnivio'); setSelectedOption(0); }}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all border ${
              selectedScenario === 'adnivio'
                ? 'bg-blue-600 text-white font-bold border-blue-500 shadow-md shadow-blue-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            Adnivio SME Growth Platform
          </button>
        </div>

        {/* Main Decision Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Problem & User Signals */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* User Problem Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold uppercase">
                <Target className="w-4 h-4" />
                Problem Statement
              </div>
              <h3 className="text-base font-bold text-white">{currentScenario.problemTitle}</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {currentScenario.userProblem}
              </p>
            </div>

            {/* User Signals Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <Layers className="w-4 h-4" />
                User Signals & Research Insights
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                {currentScenario.signals.map((sig, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right: Options & Trade-off Evaluation */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                Evaluate Product Directions ({currentScenario.options.length} Options)
              </span>
              <span className="text-xs text-blue-400 font-mono">Interactive Evaluation</span>
            </div>

            {/* Option Buttons */}
            <div className="space-y-3">
              {currentScenario.options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => setSelectedOption(oIdx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-start justify-between gap-3 ${
                    selectedOption === oIdx
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{opt.title}</span>
                      {opt.isRecommended && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 font-light">{opt.concept}</p>
                  </div>
                  <ChevronRightIcon className={`w-5 h-5 shrink-0 mt-1 transition-transform ${selectedOption === oIdx ? 'text-blue-400 translate-x-1' : 'text-slate-500'}`} />
                </button>
              ))}
            </div>

            {/* Selected Trade-Off Matrix Details */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-4 animate-in fade-in">
              <h4 className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
                Trade-off Matrix & Impact Analysis
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">USER VALUE</span>
                  <span className="font-semibold text-white">{activeOpt.userImpact}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">BUSINESS IMPACT</span>
                  <span className="font-semibold text-white">{activeOpt.businessImpact}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">COMPLEXITY</span>
                  <span className="font-semibold text-white">{activeOpt.complexity}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">RISK FACTOR</span>
                  <span className="font-semibold text-white">{activeOpt.risk}</span>
                </div>
              </div>

              {/* Validation Metric */}
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 flex items-center justify-between">
                <span>Validation Metric Outcome:</span>
                <strong className="text-white font-bold">{activeOpt.metric}</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function ChevronRightIcon(props: any) {
  return <ArrowRight {...props} />;
}
