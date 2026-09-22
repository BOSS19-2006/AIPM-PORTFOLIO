import React from 'react';
import { Briefcase, Calendar, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Founder & Product Lead',
      company: 'Adnivio',
      period: 'Aug 2025 – Present',
      location: 'Indore, India',
      highlights: [
        'Defined product strategy and end-to-end user journeys for an AI-powered SME growth platform, translating customer pain points into product requirements.',
        'Designed core experiences across SME onboarding, product/service marketplace, AI advertising, analytics, digital wallet, and buyer–seller communication.',
        'Evaluated AI use cases for ad creation, content generation, campaign planning, and performance insights, balancing user value, feasibility, and responsible AI.',
        'Conducted market & competitive analysis covering SME pain points, TAM/SAM/SOM modeling, subscription monetization, and product positioning.',
        'Created user flows, PRDs, success metrics, prioritization frameworks, and clickable prototypes through iterative product development.',
      ]
    },
    {
      role: 'Marketing Team Member',
      company: 'Entrepreneurship Cell, IES IPS Academy',
      period: 'Mar 2025 – Present',
      location: 'Indore, India',
      highlights: [
        'Supported marketing, outreach, sponsorship research, lead generation, and event promotion for entrepreneurship initiatives.',
        'Collaborated with cross-functional teams on communication, promotional campaigns, sponsor outreach, and event execution.',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Work Experience & Leadership
            </h2>
            <p className="text-xs text-slate-400 font-light mt-0.5">
              Product Leadership, Startup Building & Entrepreneurship
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2.5">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">B.Tech in Computer Science & Engineering</h3>
                <p className="text-xs text-slate-400 font-light">IES IPS Academy, Indore</p>
              </div>
            </div>
            <span className="text-xs font-mono text-orange-400 font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10">
              2024 – 2028
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
