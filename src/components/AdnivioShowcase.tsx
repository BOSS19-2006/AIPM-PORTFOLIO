import React, { useState } from 'react';
import { ExternalLink, Sparkles, Bot, Rocket, ShoppingBag, Layers, CheckCircle2, Compass, ArrowRight, HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

export default function AdnivioShowcase() {
  const [activeTab, setActiveTab] = useState<'built' | 'workflow' | 'decisions' | 'roadmap'>('built');

  return (
    <section id="adnivio-showcase" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold mb-2">
              <Rocket className="w-3.5 h-3.5" />
              Primary Product Project • Founder & Product Lead
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Adnivio — AI-First SME Growth Platform
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1 max-w-2xl">
              An AI-powered platform helping small & medium enterprises create, promote, manage, and measure their digital presence in one unified workspace.
            </p>
          </div>

          <a
            href="https://adnivio.lovable.app"
            target="_blank"
            rel="noreferrer"
            className="btn-orange-gradient px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 w-fit shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Launch Clickable Prototype (adnivio.lovable.app)
          </a>
        </Reveal>

        {/* Adnivio Product Showcase Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6 shadow-2xl">
          
          {/* Header Status & Tab Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">STATE: BUILT PROTOTYPE</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">adnivio.lovable.app</span>
            </div>

            {/* Interactive Feature Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('built')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'built'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. What is Built
              </button>

              <button
                onClick={() => setActiveTab('workflow')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'workflow'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. AI Workflow
              </button>

              <button
                onClick={() => setActiveTab('decisions')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'decisions'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3. Product Decisions
              </button>

              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'roadmap'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                4. Next Iteration
              </button>
            </div>
          </div>

          {/* TAB 1: What is Currently Built */}
          {activeTab === 'built' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                    <span>STATUS: BUILT</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">SME Onboarding & Marketplace</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Designed streamlined onboarding journeys allowing SMEs to set up their business profile and product/service catalog within 3 minutes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                    <span>STATUS: BUILT</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Dual AI API Pipeline</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Integrated OpenAI API for ad copy structuring & messaging combined with Gemini API for multivariant visual content generation.
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
            </div>
          )}

          {/* TAB 2: Real AI Product Workflow */}
          {activeTab === 'workflow' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
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
            </div>
          )}

          {/* TAB 3: PM Product Decisions */}
          {activeTab === 'decisions' && (
            <div className="space-y-4 animate-in fade-in text-xs sm:text-sm text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-white text-orange-400 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Decision: Guided AI Prompts vs Open Chat
                  </h4>
                  <p className="font-light leading-relaxed">
                    <strong className="text-white">Reasoning:</strong> Non-technical SME owners struggle with raw prompt engineering in ChatGPT. We built structured inputs with context guardrails so owners generate high-converting ads without AI expertise.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-white text-orange-400 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Decision: Dual AI Model Architecture
                  </h4>
                  <p className="font-light leading-relaxed">
                    <strong className="text-white">Reasoning:</strong> Leveraged OpenAI for structured marketing messaging & positioning, paired with Gemini for multi-variant visual concepts, optimizing latency and cost.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Next Iteration / Future Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2 mb-2">
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
    </section>
  );
}
