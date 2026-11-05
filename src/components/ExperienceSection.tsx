import React from 'react';
import { Briefcase, Calendar, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Marketing Team Member',
      company: 'Entrepreneurship Cell, IES IPS Academy',
      period: 'Mar 2025 – Present',
      location: 'Indore, India',
      highlights: [
        'Coordinated delivery of 3 entrepreneurship events with marketing, outreach, and operations teams, contributing to a 40% increase in student engagement.',
        'Streamlined cross-functional event workflows by aligning marketing, outreach, and operations stakeholders, reducing coordination time by 30%.',
        'Executed targeted digital outreach and partnership campaigns, contributing to a 55% increase in event attendance.',
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
              Hands-On Leadership, Marketing Strategy & Stakeholder Alignment
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
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">B.Tech in Computer Science & Engineering</h3>
                <p className="text-xs text-slate-400 font-light">IES IPS Academy, Indore</p>
              </div>
            </div>
            <span className="text-xs font-mono text-orange-400 font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              2024 – 2028
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
