import React, { useState } from 'react';
import { 
  X, Download, Printer, CheckCircle, FileText, Award, GraduationCap, 
  Briefcase, Code2, FolderKanban, ExternalLink, Mail, MapPin, Eye
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');
  const pdfUrl = `${import.meta.env.BASE_URL}assets/Atharv_Chaure_Resume.pdf`;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      data-lenis-prevent="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="glass-card w-full max-w-4xl rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6 overscroll-contain"
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide">ATHARV CHAURE</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
                  Latest Resume
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Indore, India • atharv.business19@gmail.com
              </p>
            </div>
          </div>

          {/* Mode Switch & Close */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <div className="flex items-center bg-black/50 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('formatted')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'formatted'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Structured View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'pdf'
                    ? 'bg-orange-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                PDF Preview
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode 1: PDF Embed Preview */}
        {viewMode === 'pdf' ? (
          <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-full"
              title="Atharv Chaure Resume PDF"
            />
          </div>
        ) : (
          /* View Mode 2: Formatted Resume (Exact structure of latest resume PDF) */
          <div className="space-y-6 text-xs text-slate-300 font-sans">
            
            {/* Header Contacts */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-4 text-slate-300">
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" /> Indore, India
                </span>
                <a 
                  href="mailto:atharv.business19@gmail.com" 
                  className="flex items-center gap-1 text-orange-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" /> atharv.business19@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com/in/atharvchaure" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-300 hover:text-orange-400 font-semibold"
                >
                  LINKEDIN
                </a>
                <span className="text-slate-600">•</span>
                <a 
                  href="https://github.com/BOSS19-2006" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-300 hover:text-orange-400 font-semibold"
                >
                  GITHUB
                </a>
                <span className="text-slate-600">•</span>
                <a 
                  href="https://aipm-portfolio-smoky.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-orange-400 hover:underline font-semibold"
                >
                  PORTFOLIO
                </a>
              </div>
            </div>

            {/* 1. PROFESSIONAL SUMMARY */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="leading-relaxed font-light text-slate-200 text-xs sm:text-[13px]">
                Computer Science undergraduate specializing in <strong className="text-white font-medium">Product Management</strong> and <strong className="text-white font-medium">AI-first product development</strong>. Proven experience translating ambiguous customer pain points into structured <strong className="text-white font-medium">PRDs</strong>, prioritized feature backlogs (<strong className="text-orange-400 font-medium">RICE</strong>), interactive prototypes, and measurable <strong className="text-white font-medium">KPI frameworks</strong>. Seeking <strong className="text-orange-400 font-medium">Product Management / APM</strong> internship opportunities.
              </p>
            </div>

            {/* 2. SKILLS */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3.5">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> SKILLS
              </h4>
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-white">Product Management: </span>
                  <span className="text-slate-300 font-light">
                    Product Discovery, User Research, Problem Framing, PRDs, User Stories, User Flows, Feature Prioritization (RICE), Roadmapping, Product Metrics, KPI Definition, Stakeholder Communication
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white">AI Product Management: </span>
                  <span className="text-slate-300 font-light">
                    AI Product Strategy, AI Product Fundamentals, AI Use-Case Identification, Prompt Engineering, AI Tool Evaluation, AI Workflow Design, LLM Evaluation
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white">Business & Analytics: </span>
                  <span className="text-slate-300 font-light">
                    Market Research, Competitive Analysis, TAM/SAM/SOM, Business Models, ROI Analysis, Data-Informed Decision-Making
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white">Technical: </span>
                  <span className="text-slate-300 font-light">
                    Core Java, Advanced SQL, JavaScript, HTML, CSS
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white">Tools & Platforms: </span>
                  <span className="text-slate-300 font-light">
                    Amplitude, Mixpanel, Figma, Notion, Make.com, n8n, Replit, ChatGPT, Claude Code, Antigravity, Codex, Git, GitHub
                  </span>
                </div>
              </div>
            </div>

            {/* 3. EXPERIENCE */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> EXPERIENCE
              </h4>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/5 pb-2">
                  <div>
                    <p className="font-bold text-white text-sm">
                      Marketing Team Member <span className="text-slate-500 font-normal">|</span> <span className="text-orange-400 font-semibold">Entrepreneurship Cell, IES IPS Academy</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Mar 2025 – Present</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                  <li>
                    Orchestrated cross-functional execution for <strong className="text-white font-medium">3 flagship entrepreneurship events</strong>, aligning marketing, outreach, and logistics to achieve a <strong className="text-orange-400 font-medium">40% increase</strong> in qualified student participation.
                  </li>
                  <li>
                    Standardized cross-functional communication and approval workflows across 3 internal teams, reducing project coordination time by <strong className="text-white font-medium">30%</strong>.
                  </li>
                  <li>
                    Formulated targeted digital distribution and partner acquisition campaigns, resulting in a <strong className="text-orange-400 font-medium">55% increase</strong> in event attendance.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. PRODUCT MANAGEMENT PROJECTS */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-5">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <FolderKanban className="w-4 h-4" /> PRODUCT MANAGEMENT PROJECTS
              </h4>

              {/* Project 1: Fireflies Capstone */}
              <div className="space-y-2 border-b border-white/5 pb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                  <div>
                    <span className="font-bold text-white text-sm">
                      Product Management Capstone — Meeting Commitment Tracking
                    </span>
                    <span className="text-slate-500 mx-1.5 hidden sm:inline">•</span>
                    <span className="text-xs font-mono text-slate-400">Fireflies.ai | Airtribe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="/assets/Fireflies_AI_Capstone.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 text-orange-400 font-mono text-[11px] font-semibold flex items-center gap-1"
                    >
                      <span>VIEW PRD</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                  <li>
                    Diagnosed the gap between post-meeting transcription and task ownership across knowledge workers through qualitative discovery and workflow analysis.
                  </li>
                  <li>
                    Specced a connected solution combining <strong className="text-white font-medium">automated smart nudges, multi-tool synchronization</strong>, and <strong className="text-white font-medium">commitment lifecycle tracking</strong>; authored a comprehensive <strong className="text-white font-medium">PRD</strong> and prioritized features using <strong className="text-orange-400 font-medium">RICE</strong>.
                  </li>
                  <li>
                    Established success metrics targeting an improvement in meeting commitment resolution from <strong className="text-orange-400 font-medium">28% to 45% (+17 percentage points)</strong> based on asynchronous workplace benchmarks.
                  </li>
                  <li>
                    Engineered functional end-to-end automation workflows using <strong className="text-white font-medium">Make.com / n8n webhooks</strong> integrated with collaborative task managers.
                  </li>
                </ul>
              </div>

              {/* Project 2: Adnivio */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                  <div>
                    <span className="font-bold text-white text-sm">
                      Adnivio — AI-Powered Growth Platform for SMEs
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://adnivio.lovable.app"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 text-orange-400 font-mono text-[11px] font-semibold flex items-center gap-1"
                    >
                      <span>VIEW PROTOTYPE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  0-to-1 Product Discovery & Prototype | Independent Venture Case Study
                </p>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside font-light leading-relaxed">
                  <li>
                    Defined product vision and prioritized user journeys for an <strong className="text-white font-medium">AI-powered SME enablement platform</strong>, translating small business customer acquisition barriers into product feature specs.
                  </li>
                  <li>
                    Architected core end-to-end user flows across <strong className="text-white font-medium">merchant onboarding, service marketplace, self-serve ad generation, performance analytics</strong>, and <strong className="text-white font-medium">in-app wallet transactions</strong>.
                  </li>
                  <li>
                    Conducted feasibility and trade-off assessments for AI-assisted ad copy creation, evaluating model inference cost, user value, and output guardrails.
                  </li>
                  <li>
                    Calculated market sizing (<strong className="text-white font-medium">TAM/SAM/SOM</strong> of target micro-enterprises), designed a tiered monetization model, and mapped release milestones with accompanying guardrail metrics.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. EDUCATION */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> EDUCATION
              </h4>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <p className="font-bold text-white text-sm">B.Tech, Computer Science & Engineering</p>
                  <p className="text-xs text-slate-400">IES IPS Academy, Indore</p>
                </div>
                <span className="text-xs font-mono text-orange-400 font-semibold">2024 – 2028</span>
              </div>
            </div>

            {/* 6. CERTIFICATIONS */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" /> CERTIFICATIONS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-[11px]">AI-First Product Management</p>
                    <p className="text-[10px] text-slate-400">Airtribe</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-[11px]">IBM AI Product Manager</p>
                    <p className="text-[10px] text-slate-400">IBM / Coursera</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-[11px]">Microsoft AI Product Manager</p>
                    <p className="text-[10px] text-slate-400">Microsoft / Coursera</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
              Open PDF
            </a>
          </div>

          <a
            href={pdfUrl}
            download="Atharv_Chaure_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-orange-gradient px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <Download className="w-4 h-4" />
            Download PDF Resume
          </a>
        </div>

      </div>
    </div>
  );
}
