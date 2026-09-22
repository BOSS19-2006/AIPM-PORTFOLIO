import React from 'react';
import { FolderKanban, ExternalLink, ArrowUpRight, Sparkles, FileText, Bot, Rocket, CheckCircle2, Layers } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <FolderKanban className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Major Product Projects
              </h2>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                0→1 AI Product Strategy, Capstone Engineering & Working Prototypes
              </p>
            </div>
          </div>
        </div>

        {/* PROJECT 1: Fireflies.ai Capstone Project */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-300 space-y-6 relative overflow-hidden group">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Product Management Capstone Project (Airtribe)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
                Fireflies.ai — Closed-Loop Execution Engine
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                From Meeting Notes to Closed Commitments
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/assets/Fireflies_AI_Capstone.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                View Capstone PDF (22 Pages)
              </a>

              <a
                href="https://firefliesaifeatures.architect.space"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 text-orange-400" />
                Live Feature Prototype
              </a>
            </div>
          </div>

          {/* Key Metrics Highlight Box with Continuous Looping Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">TARGET CLOSURE METRIC (CONTINUOUSLY INCREASING)</span>
              <span className="text-2xl font-extrabold text-orange-400 flex items-center gap-1.5">
                28% → <AnimatedCounter from={28} to={45} suffix="%" loop={true} loopDelay={2000} />
              </span>
              <span className="text-xs text-slate-300 block font-light mt-0.5">+17% Meeting Commitment Resolution Rate</span>
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

          {/* Detailed Description */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              <strong className="text-white font-semibold">The Problem:</strong> Current AI meeting assistants excel at transcribing and summarizing, but fail at post-meeting execution. Commitments sit stranded in passive summary emails — a "write-only" memory layer where only 28% reach resolution within 14 days.
            </p>
            <p>
              <strong className="text-white font-semibold">My Product Solution:</strong> Designed a Closed-Loop Execution Engine that transforms Fireflies from a passive meeting recorder into an active tracking system featuring context-aware smart nudges, AI pre-meeting progress check-ins, multi-tool sync, and automated Make.com webhooks.
            </p>
          </div>

          {/* Product Artifacts Tags */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            {['RICE Prioritization', 'PRD', 'User Story Mapping', 'Make.com Automation', 'n8n Workflows', 'Slack/Teams Bots', 'SendGrid Magic Links'].map((tag, tIdx) => (
              <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECT 2: Adnivio AI SME Growth Platform */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-300 space-y-6 relative overflow-hidden group">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold mb-2">
                <Rocket className="w-3.5 h-3.5" />
                Founder & Product Lead (0→1 Product Strategy)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
                Adnivio — AI-Powered SME Growth Platform
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                All-in-One Digital Presence, AI Advertising & Growth Engine for SMEs
              </p>
            </div>

            {/* Prototype Link */}
            <a
              href="https://adnivio.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="btn-orange-gradient px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Clickable Prototype (adnivio.lovable.app)
            </a>
          </div>

          {/* Product Architecture Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                My Product Management Work
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Defined product vision, target SME personas, MVP scope, and core user journeys.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Designed SME onboarding, product/service marketplace, and campaign management flows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Integrated dual AI model pipeline combining <strong className="text-white">OpenAI API</strong> for ad copy & <strong className="text-white">Gemini API</strong> for multivariant content generation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>Established product metrics & subscription/ad monetization strategy.</span>
                </li>
              </ul>
            </div>

            {/* AI Workflow Framework Box */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-orange-400 tracking-wider">
                End-to-End AI Product Workflow
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {['Input', 'Context', 'AI Model', 'Output', 'Review', 'Action', 'Measurement'].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      {step}
                    </span>
                    {idx < 6 && <span className="text-slate-500">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                Tech Stack: React • Node.js • MongoDB • OpenAI API • Gemini API • Make.com
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
