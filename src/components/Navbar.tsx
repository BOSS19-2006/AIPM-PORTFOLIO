import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Menu, X, Code2, Award, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export default function Navbar({ activeSection, theme, onToggleTheme, onNavigate, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Process', id: 'pm-process' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills & Certs', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 header-scrolled bg-[#08070b]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo for Atharv Chaure */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-xl font-bold font-display tracking-tight group"
        >
          <span className="text-orange-500 font-extrabold group-hover:scale-110 transition-transform">&lt;/&gt;</span>
          <span className="text-white group-hover:text-orange-400 transition-colors">
            Atharv<span className="text-orange-500">.PM</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 ml-1">
            AI Product Manager
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeSection === link.id
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Controls, Theme Toggle & Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Small Circular Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 bg-white/5 border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 text-slate-300 hover:text-orange-400 cursor-pointer"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-orange-400" />
            ) : (
              <Moon className="w-4 h-4 text-orange-500" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="btn-orange-gradient px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </button>
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-orange-400"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-orange-400" />
            ) : (
              <Moon className="w-4 h-4 text-orange-500" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mx-4 mt-3 p-4 rounded-2xl border border-white/10 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                activeSection === link.id
                  ? 'bg-orange-500 text-white font-bold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex-1 btn-orange-gradient py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
