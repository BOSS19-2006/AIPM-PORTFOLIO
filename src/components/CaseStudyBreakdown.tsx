import React, { useState } from 'react';
import { Target, Users, Lightbulb, HelpCircle, CheckCircle2, BarChart2, Repeat, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CaseStudyBreakdown() {
  const [selectedProject, setSelectedProject] = useState<'fireflies' | 'adnivio'>('fireflies');

  const caseStudies = {
    fireflies: {
      title: 'Fireflies.ai — Closed-Loop Execution Engine',
      category: 'Meeting Intelligence & Product Execution',
      framework: [
        {
          stage: '1. Problem Identified',
          icon: Target,
          content: 'Professional meeting commitments have no automated home. They sit stranded in summary emails — a "write-only" memory layer where only 28% reach closure in 14 days.',
        },
        {
          stage: '2. Target User',
          icon: Users,
          content: 'Product Managers, Engineering Leads, and Founders who lose 3+ hours weekly chasing status updates across Slack, Notion, and email.',
        },
        {
          stage: '3. Primary Insight',
          icon: Lightbulb,
          content: '15+ stakeholder interviews revealed that commitments fail not from unwillingness, but from lack of automated visibility, context-aware reminders, and external dependency friction.',
        },
        {
          stage: '4. Product Hypothesis',
          icon: HelpCircle,
          content: 'If Fireflies transitions from a passive meeting recorder into an active Closed-Loop Execution Engine with automated smart nudges, commitment resolution will increase by +17%.',
        },
        {
          stage: '5. Solution Executed',
          icon: CheckCircle2,
          content: 'Designed 1-click Action-Item Review Modal, Slack/Teams interactive bot nudges, SendGrid magic links for external clients, and Make.com/n8n database webhooks.',
        },
        {
          stage: '6. Success Metric',
          icon: BarChart2,
          content: 'Targeted increase in 14-day commitment resolution rate from 28% to 45% (+17 percentage points), supported by RICE prioritization framework.',
        },
        {
          stage: '7. Key Learning',
          icon: Repeat,
          content: 'Traded 100% background automation for a 2-second human verification review step to protect task owner trust and eliminate bot misattribution.',
        },
      ]
    },
    adnivio: {
      title: 'Adnivio — AI-First SME Growth Platform',
      category: '0→1 AI Product Strategy & Digital Presence',
      framework: [
        {
          stage: '1. Problem Identified',
          icon: Target,
          content: 'Small & Medium Enterprises (SMEs) struggle with fragmented tools for social content, ad creation, customer engagement, and analytics.',
        },
        {
          stage: '2. Target User',
          icon: Users,
          content: 'Non-technical SME business owners who need to build, promote, manage, and measure their digital presence in one intuitive platform.',
        },
        {
          stage: '3. Primary Insight',
          icon: Lightbulb,
          content: 'SMEs abandon marketing tools because prompt engineering is too complex. They require a structured Input → Context → AI → Review workflow.',
        },
        {
          stage: '4. Product Hypothesis',
          icon: HelpCircle,
          content: 'Providing a dual AI pipeline (OpenAI for copy + Gemini for multi-variant visuals) combined with 3-minute onboarding will double SME campaign launch rates.',
        },
        {
          stage: '5. Solution Executed',
          icon: CheckCircle2,
          content: 'Built clickable prototype (adnivio.lovable.app) featuring automated ad creator, SME product catalog marketplace, digital wallet, and analytics dashboard.',
        },
        {
          stage: '6. Success Metric',
          icon: BarChart2,
          content: 'Tracked core engagement funnel metrics: 24.8k+ views, 3.4k ad clicks (13.7% CTR), 612 customer inquiries (+19%), and 4.2x ad spend ROI.',
        },
        {
          stage: '7. Key Learning',
          icon: Repeat,
          content: 'Freemium AI models drive top-of-funnel discovery, while monthly subscription tiers and sponsored ad slots establish long-term monetization.',
        },
      ]
    }
  };

  const activeData = caseStudies[selectedProject];

  return (
    <section id="case-study" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold">
            Product Decision Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Product Case Study Storytelling
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            How I structure product decisions: from problem identification to metric iteration.
          </p>
        </Reveal>

        {/* Project Selector Pills */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setSelectedProject('fireflies')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
              selectedProject === 'fireflies'
                ? 'bg-orange-500 text-white font-bold border-orange-500 shadow-md shadow-orange-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            Fireflies.ai Capstone
          </button>

          <button
            onClick={() => setSelectedProject('adnivio')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
              selectedProject === 'adnivio'
                ? 'bg-orange-500 text-white font-bold border-orange-500 shadow-md shadow-orange-500/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            Adnivio AI Platform
          </button>
        </div>

        {/* Interactive Case Study Breakdown List */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">{activeData.title}</h3>
              <p className="text-xs text-orange-400 font-mono">{activeData.category}</p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              7-Step PM Decision Framework
            </span>
          </div>

          {/* Sequential Steps */}
          <div className="space-y-4">
            {activeData.framework.map((item, idx) => (
              <Reveal key={idx} delay={idx * 60} direction="up">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-orange-500/30 transition-all duration-200 flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      {item.stage}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
