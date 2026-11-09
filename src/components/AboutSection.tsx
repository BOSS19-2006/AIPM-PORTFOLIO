import React from 'react';
import { User, Target, TrendingUp, Cpu, Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { 
      title: 'Founder @ Adnivio (0-to-1 Case Study)', 
      desc: 'Product strategy, AI feasibility trade-offs, user discovery & prototyping for SME growth.' 
    },
    { 
      title: 'Airtribe Capstone Lead (Fireflies.ai)', 
      desc: 'Engineered solution targeting 14-day meeting commitment resolution increase from 28% to 45% (+17%).' 
    },
    { 
      title: 'AI Product Certified', 
      desc: 'Certified AI Product Manager by Airtribe, IBM, and Microsoft/Coursera.' 
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            About Atharv Chaure
          </h2>
        </div>

        {/* Content Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Computer Science undergraduate building AI-first products with data-informed precision.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                I am a Computer Science undergraduate specializing in Product Management and AI-first product development. Proven experience translating ambiguous customer pain points into structured PRDs, prioritized feature backlogs (RICE), interactive prototypes, and measurable KPI frameworks.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                As the creator and product lead of <strong className="text-orange-400 font-semibold">Adnivio</strong> (0-to-1 Product Discovery & Prototype), I defined product vision, mapped core user flows across onboarding, self-serve AI ads, and in-app wallet transactions, and evaluated AI inference cost vs user value. In my capstone project for <strong className="text-orange-400 font-semibold">Fireflies.ai</strong>, I diagnosed commitment execution drop-offs and authored a full PRD targeting resolution improvement from 28% to 45% (+17 percentage points).
              </p>
            </div>

            {/* Education Badge */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">B.Tech Computer Science & Engineering</h4>
                  <p className="text-xs text-slate-400">IES IPS Academy, Indore (2024 – 2028)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Metrics Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
