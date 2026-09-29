import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, Award, GraduationCap, Briefcase, Code2, FolderKanban } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-card w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">ATHARV CHAURE — RESUME</h3>
              <p className="text-xs text-slate-400 font-mono">
                Indore, India • +91 7987709099 • atharv.business19@gmail.com
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Sections (Order: Summary -> Education -> Skills -> Projects -> Certifications -> Experience) */}
        <div className="space-y-6 text-xs text-slate-300">
          
          {/* 1. SUMMARY */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">SUMMARY</h4>
            <p className="leading-relaxed font-light text-slate-200">
              Computer Science undergraduate focused on Product Management and AI-first products, with hands-on experience in product discovery, user research, PRDs, prioritization, product metrics, AI product strategy, and startup product development. Seeking Product Management / AI Product Management internships to apply product thinking, technical understanding, and data-informed decision-making to user and business problems.
            </p>
          </div>

          {/* 2. EDUCATION */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h4>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <p className="font-bold text-white text-sm">B.Tech in Computer Science & Engineering</p>
                <p className="text-xs text-slate-400">IES IPS Academy, Indore</p>
              </div>
              <span className="text-xs font-mono text-orange-400 font-semibold">2024 – 2028</span>
            </div>
          </div>

          {/* 3. SKILLS (BEFORE PROJECTS) */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> SKILLS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="font-bold text-white mb-1">Product:</p>
                <p className="text-slate-300 font-light">Product Discovery, User Research, Problem Framing, PRDs, User Stories, Roadmapping, RICE, MoSCoW, Prioritization, Product Metrics, KPI, Stakeholder Communication</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">AI Product:</p>
                <p className="text-slate-300 font-light">AI Product Strategy, AI Use-Case Evaluation, AI Feasibility, AI Product Lifecycle, Model Evaluation, AI Risk Management</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Business:</p>
                <p className="text-slate-300 font-light">Market Research, Competitive Analysis, TAM/SAM/SOM, Business Models, ROI & Impact Analysis, Data-Informed Decision Making</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Programming & Tools:</p>
                <p className="text-slate-300 font-light">Java (Core & Advanced), SQL, JavaScript, HTML, CSS • Notion, Amplitude, Figma, Git, GitHub, ChatGPT, Claude Code, Make.com, n8n, Replit</p>
              </div>
            </div>
          </div>

          {/* 4. PROJECTS */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <FolderKanban className="w-4 h-4" /> PROJECTS
            </h4>

            {/* Project 1: Adnivio Startup Product Project */}
            <div className="space-y-2 border-b border-white/5 pb-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <p className="font-bold text-white text-sm">Adnivio — AI-First SME Growth Platform</p>
                <span className="text-xs font-mono text-orange-400 font-semibold">Founder | Aug 2025 – Present</span>
              </div>
              <p className="text-[11px] text-slate-400 italic">Startup Product Project • Founder-Led Product Development</p>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                <li>Defined product strategy and end-to-end user journeys for an AI-powered SME growth platform, translating customer pain points into product requirements and priorities.</li>
                <li>Designed core experiences across SME onboarding, product/service marketplace, AI advertising, analytics, wallet, and buyer–seller communication.</li>
                <li>Evaluated AI use cases for ad creation, content generation, campaign planning, and performance insights, balancing user value, business impact, feasibility, and responsible AI.</li>
                <li>Conducted market and competitive analysis covering SME pain points, TAM/SAM/SOM, monetization, and product positioning.</li>
                <li>Created user flows, product requirements, success metrics, prioritization frameworks, and prototypes through iterative product development.</li>
                <li>Developed the product prototype through the MSME portal submission stage, translating the product concept into a structured startup proposal.</li>
              </ul>
            </div>

            {/* Project 2: Fireflies.ai Capstone */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <p className="font-bold text-white text-sm">Product Management Capstone — Fireflies.ai</p>
                <span className="text-xs font-mono text-slate-400">Airtribe AI-First Product Management Program</span>
              </div>
              <p className="text-[11px] text-slate-400 italic">RICE prioritization, PRD, Make.com, n8n automation workflows</p>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                <li>Conducted product research and analyzed the gap between meeting intelligence and post-meeting execution, identifying opportunities to improve commitment ownership and follow-through.</li>
                <li>Designed end-to-end features including automated smart nudges, multi-tool sync, and lifecycle tracking, supported by RICE prioritization, PRD, and Make.com/n8n automation workflows.</li>
                <li>Engineered a product solution targeting an increase in meeting commitment resolution from <strong className="text-orange-400">28% to 45% (+17 percentage points)</strong>.</li>
                <li>Defined product requirements, user flows, success metrics, and product strategy for the proposed solution.</li>
              </ul>
            </div>
          </div>

          {/* 5. CERTIFICATIONS */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" /> CERTIFICATIONS
            </h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">AI-First Product Management Certificate</strong> — Airtribe</span>
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">IBM AI Product Manager Professional Certificate</strong> — IBM / Coursera</span>
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Microsoft AI Product Manager Professional Certificate</strong> — Microsoft / Coursera</span>
              </li>
            </ul>
          </div>

          {/* 6. WORK EXPERIENCE */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> WORK EXPERIENCE
            </h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/5 pb-2">
                <div>
                  <p className="font-bold text-white text-sm">Marketing Team Member</p>
                  <p className="text-xs text-orange-400">Entrepreneurship Cell, IES IPS Academy</p>
                </div>
                <span className="text-xs font-mono text-slate-400">Mar 2025 – Present</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                <li>Led cross-functional teams to launch 3 entrepreneurship events, increasing student engagement by <strong className="text-white">40%</strong>.</li>
                <li>Drove stakeholder alignment by coordinating with marketing, outreach, and operations to streamline event delivery, resulting in a <strong className="text-white">30% reduction</strong> in coordination time.</li>
                <li>Implemented data-driven campaign strategies for event promotion, boosting event attendance by <strong className="text-white">55%</strong> through targeted digital outreach and partnership initiatives.</li>
              </ul>
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
            Print Resume
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
