import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Linkedin, Github, CheckCircle2, Copy, Sparkles, RefreshCw, ExternalLink, Globe } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [msgCopied, setMsgCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('atharv.business19@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: atharv.business19@gmail.com\nFrom: ${form.name} (${form.email})\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    navigator.clipboard.writeText(fullText);
    setMsgCopied(true);
    setTimeout(() => setMsgCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);

    const subjectText = form.subject || 'AI PM Opportunity / Inquiry';
    const bodyText = `Hi Atharv,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\nSent from your AI PM Portfolio.`;

    const encodedSubject = encodeURIComponent(subjectText);
    const encodedBody = encodeURIComponent(bodyText);

    // 1. Copy message text to clipboard automatically
    handleCopyFullMessage();

    // 2. Build Gmail Web Composer URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=atharv.business19@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

    // 3. Native mailto URL
    const mailtoUrl = `mailto:atharv.business19@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Try opening Gmail Web Composer in a new tab
      try {
        window.open(gmailUrl, '_blank');
      } catch (err) {
        console.log('Browser blocked popup, fallback to mailto');
      }

      // Also trigger native mailto as secondary fallback
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Let's Connect & Collaborate
            </h2>
            <p className="text-xs text-slate-400 font-light mt-0.5">
              Seeking Product Management & AI Product Management Internships / Roles
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-white">
                Interested in building AI products together?
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Whether you have an internship opportunity, a product discovery project, or want to discuss AI product strategy, I'd love to connect!
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              
              {/* Direct Email Card with Copy Action */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">DIRECT EMAIL</span>
                    <a href="mailto:atharv.business19@gmail.com" className="font-semibold text-white hover:text-orange-400 transition-colors">
                      atharv.business19@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-black/40 hover:bg-orange-500/20 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-orange-300 transition-all flex items-center gap-1 shrink-0"
                  title="Copy email address"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">PHONE</span>
                  <a href="tel:7987709099" className="font-semibold text-white hover:text-orange-400 transition-colors">
                    +91 7987709099
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">LOCATION</span>
                  <span className="font-semibold text-white">Indore, India</span>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/atharvchaure"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-all"
              >
                <Linkedin className="w-4 h-4 text-orange-400" />
                LinkedIn
              </a>

              <a
                href="https://github.com/BOSS19-2006"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-all"
              >
                <Github className="w-4 h-4 text-orange-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form & Multi-Option Dispatcher */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-6 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Message Prepared & Dispatched!</h3>
                  <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-light">
                    Your message has been copied to clipboard and email launchers were opened for <strong className="text-orange-400 font-semibold">atharv.business19@gmail.com</strong>.
                  </p>
                </div>

                {/* Dispatch Details Card */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 w-full max-w-md text-left text-xs font-mono space-y-2 text-slate-300">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">TO: atharv.business19@gmail.com</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> READY
                    </span>
                  </div>
                  <p><strong className="text-slate-400">SENDER:</strong> {form.name} ({form.email})</p>
                  <p><strong className="text-slate-400">SUBJECT:</strong> {form.subject || 'AI PM Opportunity'}</p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  
                  {/* Gmail Web Launcher */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=atharv.business19@gmail.com&su=${encodeURIComponent(form.subject || 'AI PM Opportunity')}&body=${encodeURIComponent(`Hi Atharv,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-orange-gradient px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Globe className="w-4 h-4" />
                    Open in Gmail Web
                  </a>

                  {/* Copy Text Button */}
                  <button
                    onClick={handleCopyFullMessage}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5 text-orange-400" />
                    {msgCopied ? 'Copied to Clipboard!' : 'Copy Message Text'}
                  </button>

                  {/* Send another message */}
                  <button
                    onClick={handleReset}
                    className="px-3.5 py-2.5 rounded-xl bg-black/40 hover:bg-white/5 border border-white/10 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset
                  </button>

                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Recruiter / Founder Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="Product Manager Role / Internship Opportunity"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Atharv, we reviewed your AI PM portfolio and capstone project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500/60 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-orange-gradient py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 group transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message to Atharv
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
