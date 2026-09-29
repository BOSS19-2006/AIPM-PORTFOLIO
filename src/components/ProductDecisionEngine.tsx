import React, { useState } from 'react';
import { 
  Target, HelpCircle, Layers, Sliders, CheckCircle2, ArrowRight, Activity, 
  ExternalLink, Sparkles, FileText, Bot, Rocket, ChevronRight, Compass, TrendingUp, Award
} from 'lucide-react';
import Reveal from './Reveal';
import AnimatedCounter from './AnimatedCounter';

export default function ProductDecisionEngine() {
  const [selectedScenario, setSelectedScenario] = useState<'fireflies' | 'adnivio'>('fireflies');
  const [selectedOption, setSelectedOption] = useState<number>(0);

  // RICE Matrix state inside Fireflies
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  // Adnivio Showcase tabs state
  const [activeAdnivioTab, setActiveAdnivioTab] = useState<'built' | 'workflow' | 'decisions' | 'roadmap'>('built');

  const riceFeatures = [
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

  const activeFeat = riceFeatures[selectedFeature];

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
        'Owners need single-dashboard visibility into campaign setup and customer messaging.',
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
          metric: 'Target: 3-Minute SME Setup & Guided Workflow Adoption',
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
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
            <Activity className="w-3.5 h-3.5" />
            Product Projects & Case Study Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            How I Evaluate Product Trade-offs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl mx-auto">
            Explore my 0→1 product projects, trade-off evaluations, RICE prioritization frameworks, and working prototypes.
          </p>
        </Reveal>

        {/* Project Selector Pills */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => { setSelectedScenario('fireflies'); setSelectedOption(0); }}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all border flex items-center gap-2 ${
              selectedScenario === 'fireflies'
                ? 'bg-orange-500 text-white font-bold border-orange-400 shadow-lg shadow-orange-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            Fireflies.ai Execution Engine
          </button>

          <button
            onClick={() => { setSelectedScenario('adnivio'); setSelectedOption(0); }}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all border flex items-center gap-2 ${
              selectedScenario === 'adnivio'
                ? 'bg-orange-500 text-white font-bold border-orange-400 shadow-lg shadow-orange-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <Rocket className="w-4 h-4 text-orange-400" />
            Adnivio SME Growth Platform
          </button>
        </div>


        {/* ========================================================================= */}
        {/* FIREFLIES.AI CASE STUDY + RICE PRIORITIZATION MATRIX MERGED CONTAINER */}
        {/* ========================================================================= */}
        {selectedScenario === 'fireflies' && (
          <div className="space-y-10 animate-in fade-in">
            
            {/* Top Overview & Action Buttons */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Product Management Capstone Project (Airtribe)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Fireflies.ai — Closed-Loop Execution Engine
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    From Meeting Notes to Closed Commitments
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/assets/Fireflies_AI_Capstone.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View Capstone PDF (22 Pages)
                  </a>

                  <a
                    href="https://firefliesaifeatures.architect.space"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-orange-400" />
                    Live Feature Prototype
                  </a>
                </div>
              </div>

              {/* Target Metrics Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">TARGET RESOLUTION METRIC</span>
                  <span className="text-2xl font-extrabold text-orange-400 flex items-center gap-1.5">
                    28% → <AnimatedCounter from={28} to={45} suffix="%" loop={true} loopDelay={2000} />
                  </span>
                  <span className="text-xs text-slate-300 block font-light mt-0.5">+17% Target Resolution Hypothesis</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">PRIMARY USER RESEARCH</span>
                  <span className="text-2xl font-extrabold text-white">
                    <AnimatedCounter from={0} to={15} suffix="+" loop={true} loopDelay={4000} /> Interviews
                  </span>
                  <span className="text-xs text-slate-300 block font-light mt-0.5">PMs, Engineers, Creators & Founders</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">PRIORITIZATION & AUTOMATION</span>
                  <span className="text-2xl font-extrabold text-white">RICE & Make.com</span>
                  <span className="text-xs text-slate-300 block font-light mt-0.5">n8n Workflows, Slack & SendGrid Bots</span>
                </div>
              </div>
            </div>

            {/* Trade-off Decision Workspace Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Problem & User Signals */}
              <div className="lg:col-span-5 space-y-6">
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

              {/* Options & Trade-off Evaluation */}
              <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                    Evaluate Product Directions ({currentScenario.options.length} Options)
                  </span>
                  <span className="text-xs text-blue-400 font-mono">Interactive Evaluation</span>
                </div>

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
                      <ArrowRight className={`w-5 h-5 shrink-0 mt-1 transition-transform ${selectedOption === oIdx ? 'text-blue-400 translate-x-1' : 'text-slate-500'}`} />
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-4">
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

                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 flex items-center justify-between">
                    <span>Validation Metric Outcome:</span>
                    <strong className="text-white font-bold">{activeOpt.metric}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* MERGED ITEM 1: RICE PRIORITIZATION MATRIX DIRECTLY EMBEDDED UNDER FIREFLIES */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase border-b border-white/10 pb-3">
                <Sliders className="w-4 h-4" />
                Product Prioritization Framework — RICE Prioritization Matrix
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Backlog Candidates */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase font-bold mb-2">
                    Feature Candidates (Score = Reach × Impact × Conf. / Effort)
                  </div>

                  {riceFeatures.map((feat, idx) => (
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
                          <h4 className="text-sm font-bold text-white">{feat.name}</h4>
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

                {/* Selected Feature Detail */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                        Rank #{activeFeat.rank} Opportunity
                      </span>
                      <span className="text-xs font-mono text-slate-400">Score: {activeFeat.score}</span>
                    </div>

                    <h4 className="text-base font-bold text-white">{activeFeat.name}</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {activeFeat.reason}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[10px]">REACH</span>
                        <span className="text-amber-400 font-bold text-sm">{activeFeat.reach} Users</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[10px]">IMPACT</span>
                        <span className="text-amber-400 font-bold text-sm">{activeFeat.impact} / 3</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[10px]">CONFIDENCE</span>
                        <span className="text-amber-400 font-bold text-sm">{activeFeat.confidence}%</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-slate-400 block text-[10px]">EFFORT</span>
                        <span className="text-amber-400 font-bold text-sm">{activeFeat.effort} / 5</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Prioritized for Sprint Release</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}


        {/* ========================================================================= */}
        {/* ADNIVIO CASE STUDY + ADNIVIO SHOWCASE MERGED CONTAINER */}
        {/* ========================================================================= */}
        {selectedScenario === 'adnivio' && (
          <div className="space-y-10 animate-in fade-in">
            
            {/* Top Overview & Action Buttons */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold mb-2">
                    <Rocket className="w-3.5 h-3.5" />
                    Startup Product Project • Founder (Aug 2025 – Present)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Adnivio — AI-First SME Growth Platform
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    An AI-powered platform helping small & medium enterprises create, promote, manage, and measure digital presence.
                  </p>
                </div>

                <a
                  href="https://adnivio.lovable.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-orange-gradient px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Clickable Prototype (adnivio.lovable.app)
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    Product Management Work
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Defined product strategy and end-to-end user journeys for an AI-powered SME growth platform.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Designed core experiences across SME onboarding, marketplace, AI advertising, analytics, digital wallet, and buyer–seller messaging.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>Evaluated AI use cases combining <strong className="text-white">OpenAI API</strong> for ad copy & <strong className="text-white">Gemini API</strong> for multivariant content generation.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
                    End-to-End AI Product Workflow
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    {['Input', 'Context', 'AI Model', 'Output', 'Review', 'Action'].map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-300 border border-orange-500/20">
                          {step}
                        </span>
                        {idx < 5 && <span className="text-slate-500">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                    Tech Stack: React • Node.js • MongoDB • OpenAI API • Gemini API • Make.com
                  </div>
                </div>
              </div>
            </div>

            {/* Trade-off Decision Workspace Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Problem & User Signals */}
              <div className="lg:col-span-5 space-y-6">
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

              {/* Options & Trade-off Evaluation */}
              <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                    Evaluate Product Directions ({currentScenario.options.length} Options)
                  </span>
                  <span className="text-xs text-blue-400 font-mono">Interactive Evaluation</span>
                </div>

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
                      <ArrowRight className={`w-5 h-5 shrink-0 mt-1 transition-transform ${selectedOption === oIdx ? 'text-blue-400 translate-x-1' : 'text-slate-500'}`} />
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-4">
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

                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 flex items-center justify-between">
                    <span>Validation Metric Outcome:</span>
                    <strong className="text-white font-bold">{activeOpt.metric}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* MERGED ITEM 2: ADNIVIO SHOWCASE DIRECTLY EMBEDDED UNDER ADNIVIO */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">STATE: BUILT PROTOTYPE</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">adnivio.lovable.app</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setActiveAdnivioTab('built')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeAdnivioTab === 'built'
                        ? 'bg-orange-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1. What is Built
                  </button>

                  <button
                    onClick={() => setActiveAdnivioTab('workflow')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeAdnivioTab === 'workflow'
                        ? 'bg-orange-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    2. AI Workflow
                  </button>

                  <button
                    onClick={() => setActiveAdnivioTab('decisions')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeAdnivioTab === 'decisions'
                        ? 'bg-orange-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3. Product Decisions
                  </button>

                  <button
                    onClick={() => setActiveAdnivioTab('roadmap')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeAdnivioTab === 'roadmap'
                        ? 'bg-orange-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    4. Next Iteration
                  </button>
                </div>
              </div>

              {/* Tab 1: Built */}
              {activeAdnivioTab === 'built' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in">
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                      <span>STATUS: BUILT</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">SME Onboarding & Marketplace</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Designed streamlined onboarding journeys allowing SMEs to set up business profile and product catalog within 3 minutes.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                      <span>STATUS: BUILT</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Dual AI API Pipeline</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Integrated OpenAI API for ad copy structuring paired with Gemini API for multivariant visual content generation.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                      <span>STATUS: BUILT</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Clickable Web Prototype</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Built and iterated an interactive prototype deployed live at adnivio.lovable.app to demonstrate core user flows.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Workflow */}
              {activeAdnivioTab === 'workflow' && (
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 animate-in fade-in">
                  <h4 className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
                    Real AI Execution Architecture
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    {[
                      { step: '1. Input', desc: 'Business Goal & Product Details' },
                      { step: '2. Context', desc: 'SME Target Audience Guardrails' },
                      { step: '3. AI Model', desc: 'OpenAI + Gemini APIs' },
                      { step: '4. Output', desc: 'Ad Copies & Creative Variants' },
                      { step: '5. Review', desc: 'Human SME Verification' },
                      { step: '6. Action', desc: 'Campaign Dispatch' },
                    ].map((item, idx) => (
                      <React.Fragment key={idx}>
                        <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                          <span className="text-orange-400 font-bold block">{item.step}</span>
                          <span className="text-[11px] text-slate-300 font-light block">{item.desc}</span>
                        </div>
                        {idx < 5 && <span className="text-slate-500 font-bold">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Decisions */}
              {activeAdnivioTab === 'decisions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in text-xs sm:text-sm text-slate-300">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Decision: Guided AI Prompts vs Open Chat
                    </h4>
                    <p className="font-light leading-relaxed text-xs">
                      <strong className="text-white">Reasoning:</strong> Non-technical SME owners struggle with raw prompt engineering in ChatGPT. We built structured inputs with context guardrails so owners generate high-converting ads without AI expertise.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Decision: Dual AI Model Architecture
                    </h4>
                    <p className="font-light leading-relaxed text-xs">
                      <strong className="text-white">Reasoning:</strong> Leveraged OpenAI for structured marketing messaging & positioning, paired with Gemini for multi-variant visual concepts, optimizing latency and cost.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 4: Roadmap */}
              {activeAdnivioTab === 'roadmap' && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>FUTURE ROADMAP & HYPOTHESES TO TEST (NOT YET BUILT IN CURRENT PROTOTYPE)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">NEXT ITERATION</span>
                      <h5 className="font-bold text-white">Production Analytics Integration</h5>
                      <p className="text-slate-400 font-light">Integrating real-time conversion tracking & campaign metrics across Meta & Google Ads APIs.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">EXPLORING</span>
                      <h5 className="font-bold text-white">Subscription & Monetization Tiers</h5>
                      <p className="text-slate-400 font-light">Testing monthly subscription tiers, sponsored ad placement slots, and premium AI generation limits.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">NEXT ITERATION</span>
                      <h5 className="font-bold text-white">Automated Campaign Optimization</h5>
                      <p className="text-slate-400 font-light">Auto-allocating SME ad budget toward top-performing ad variants based on real CTR signals.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
