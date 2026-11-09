import React from 'react';
import { Code2, BarChart3, Rocket, Bot, BrainCircuit, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Product Management',
      icon: Rocket,
      skills: [
        'Product Discovery', 'User Research', 'Problem Framing', 'PRDs & User Stories',
        'User Flows', 'Feature Prioritization (RICE)', 'Roadmapping', 'Product Metrics & KPI Definition', 'Stakeholder Communication'
      ]
    },
    {
      title: 'AI Product Management',
      icon: Bot,
      skills: [
        'AI Product Strategy', 'AI Product Fundamentals', 'AI Use-Case Identification',
        'Prompt Engineering', 'AI Tool Evaluation', 'AI Workflow Design', 'LLM Evaluation'
      ]
    },
    {
      title: 'Business & Analytics',
      icon: BarChart3,
      skills: [
        'Market Research', 'Competitive Analysis', 'TAM / SAM / SOM Modeling',
        'Business Models', 'ROI Analysis', 'Data-Informed Decision-Making'
      ]
    },
  ];

  const technicalSkills = ['Core Java', 'Advanced SQL', 'JavaScript', 'HTML', 'CSS'];

  const tools = [
    'Amplitude', 'Mixpanel', 'Figma', 'Notion', 'Make.com', 'n8n', 'Replit', 
    'ChatGPT', 'Claude Code', 'Antigravity', 'Codex', 'Git', 'GitHub'
  ];

  const certifications = [
    {
      title: 'AI-First Product Management Certificate',
      issuer: 'Airtribe',
      desc: 'Hands-on training in AI product strategy, user discovery, RICE prioritization, PRD crafting, and n8n/Make.com workflows.',
      badge: 'Airtribe Launchpad',
    },
    {
      title: 'IBM AI Product Manager Professional Certificate',
      issuer: 'IBM / Coursera',
      desc: 'Comprehensive specialization covering AI use-case evaluation, machine learning lifecycle for PMs, and AI risk management.',
      badge: 'IBM Specialization',
    },
    {
      title: 'Microsoft AI Product Manager Professional Certificate',
      issuer: 'Microsoft / Coursera',
      desc: 'Enterprise AI product strategy, model evaluation, Azure AI services integration, and responsible AI governance.',
      badge: 'Microsoft Professional',
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Skills, Tools & Verified Credentials
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 uppercase tracking-widest">
            Product, AI & Technical Stack
          </span>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Technical & Tools Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Technical Languages */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-orange-400" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {technicalSkills.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & AI Workflow Platforms */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-orange-400" />
              Tools, Platforms & AI Assistants
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

        {/* Certifications Grid */}
        <div className="space-y-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Industry-recognized credentials in AI Product Management & Strategy
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-mono font-semibold">
                      {cert.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-400">
                    Issued by: <span className="text-white">{cert.issuer}</span>
                  </p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-orange-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
