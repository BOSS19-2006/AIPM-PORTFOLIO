import React from 'react';
import { Code2, Cpu, BarChart3, Rocket, Compass, Layers, Zap, Bot, BrainCircuit } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Product Management',
      icon: Rocket,
      skills: [
        'Product Discovery', 'User Research', 'Problem Framing', 'PRDs & User Stories',
        'Roadmapping', 'RICE & MoSCoW Prioritization', 'Product Metrics & KPIs', 'Stakeholder Communication'
      ]
    },
    {
      title: 'AI Product Strategy',
      icon: Bot,
      skills: [
        'AI Product Strategy', 'AI Use-Case Evaluation', 'AI Feasibility Analysis',
        'AI Product Lifecycle', 'Model Evaluation (OpenAI / Gemini)', 'AI Risk Management'
      ]
    },
    {
      title: 'Business & Growth',
      icon: BarChart3,
      skills: [
        'Market Research', 'Competitive Analysis', 'TAM / SAM / SOM Modeling',
        'Business Models', 'ROI & Impact Analysis', 'Data-Informed Decision Making'
      ]
    },
  ];

  const tools = [
    'Notion', 'Amplitude', 'Figma', 'Make.com', 'n8n', 'Git', 'GitHub', 
    'ChatGPT', 'Claude Code', 'Replit', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Skills & Expertise
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 uppercase tracking-widest">
            AI & Product Competencies
          </span>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl space-y-4 border border-white/10 hover:border-orange-500/30 transition-all">
              <div className="flex items-center gap-2.5 text-white font-bold text-base border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <cat.icon className="w-4 h-4" />
                </div>
                <h3>{cat.title}</h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-light">
                {cat.skills.map((s, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools & Tech Stack */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-orange-400" />
            Tools, Frameworks & Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {tools.map((tool, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/10 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
