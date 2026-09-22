import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, Award, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-card w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">ATHARV CHAURE — RESUME</h3>
              <p className="text-xs text-slate-400">AI Product Manager & Founder @ Adnivio • Indore, India</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Preview */}
        <div className="space-y-6 text-xs text-slate-300">
          
          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400">Summary</h4>
            <p className="leading-relaxed font-light">
              Computer Science undergraduate focused on Product Management and AI-first products, with hands-on experience in product discovery, user research, PRDs, prioritization, product metrics, AI product strategy, and startup product development. Seeking Product Management / AI Product Management internships to apply product thinking, technical understanding, and data-informed decision-making.
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-orange-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h4>
              <p className="font-bold text-white">B.Tech in Computer Science & Engineering</p>
              <p className="text-[11px] text-slate-400">IES IPS Academy, Indore (2024 – 2028)</p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-orange-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Certifications
              </h4>
              <ul className="space-y-1 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>AI-First PM Certificate (Airtribe)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>IBM AI PM Professional Certificate</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Microsoft AI PM Professional Certificate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Skills Summary */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-orange-400">Skills & Tools</h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Product Discovery', 'User Research', 'PRDs', 'RICE & MoSCoW Prioritization',
                'AI Product Strategy', 'Model Evaluation', 'Make.com', 'n8n', 'Notion',
                'Amplitude', 'Figma', 'SQL', 'Java', 'React', 'Node.js', 'MongoDB'
              ].map((skill, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>

          <a
            href="/assets/Atharv_Chaure_Resume.pdf"
            download="Atharv_Chaure_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-orange-gradient px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF Resume
          </a>
        </div>

      </div>
    </div>
  );
}
