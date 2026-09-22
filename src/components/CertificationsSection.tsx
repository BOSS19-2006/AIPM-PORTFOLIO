import React from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
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
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Certifications & Professional Credentials
            </h2>
            <p className="text-xs text-slate-400 font-light mt-0.5">
              Verified Qualifications in AI Product Strategy & Product Management
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
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

                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  Issued by: <span className="text-white">{cert.issuer}</span>
                </p>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-orange-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
