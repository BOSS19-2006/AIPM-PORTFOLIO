import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PMProcessSection from './components/PMProcessSection';
import ProductDecisionEngine from './components/ProductDecisionEngine';
import PrioritizationMatrix from './components/PrioritizationMatrix';
import AdnivioShowcase from './components/AdnivioShowcase';
import CaseStudyBreakdown from './components/CaseStudyBreakdown';
import ProjectsSection from './components/ProjectsSection';
import LearningLoop from './components/LearningLoop';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import BackgroundSystem from './components/BackgroundSystem';
import Reveal from './components/Reveal';

gsap.registerPlugin(ScrollTrigger);

const FRAMES = [
  `${import.meta.env.BASE_URL}assets/frame_01.jpg`,
  `${import.meta.env.BASE_URL}assets/frame_02.jpg`,
  `${import.meta.env.BASE_URL}assets/frame_03.jpg`,
  `${import.meta.env.BASE_URL}assets/frame_04.jpg`,
  `${import.meta.env.BASE_URL}assets/frame_05.jpg`,
];

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const loadedImagesRef = useRef<HTMLImageElement[]>([]);

  // Preload frame images
  useEffect(() => {
    let count = 0;
    const imgs: HTMLImageElement[] = [];

    FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count++;
        imgs[idx] = img;
        if (count === FRAMES.length) {
          loadedImagesRef.current = imgs;
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    function onRaf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    }
    const rafId = requestAnimationFrame(onRaf);

    // Sync Scroll Progress & Active Section Detector
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      const progress = e.progress || 0;
      setScrollProgress(progress);

      const sections = [
        'home', 'about', 'pm-process', 'decision-engine', 
        'prioritization-matrix', 'adnivio-showcase', 'case-study', 
        'projects', 'learning-loop', 'skills', 'certifications', 'experience', 'contact'
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Smooth Canvas Frame Scrubbing Engine
  const renderCanvas = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesLoaded || loadedImagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const total = FRAMES.length;
    const rawFrame = progress * (total - 1);
    const idx = Math.floor(rawFrame);
    const nextIdx = Math.min(idx + 1, total - 1);
    const blend = rawFrame - idx;

    if (currentFrameIndex !== idx) {
      setCurrentFrameIndex(idx);
    }

    const img1 = loadedImagesRef.current[idx];
    const img2 = loadedImagesRef.current[nextIdx];

    if (!img1) return;

    const drawCover = (img: HTMLImageElement, alpha: number) => {
      ctx.globalAlpha = alpha;
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;

      let drawW, drawH, drawX, drawY;

      if (canvasAspect > imgAspect) {
        drawW = width;
        drawH = width / imgAspect;
        drawX = 0;
        drawY = (height - drawH) / 2;
      } else {
        drawH = height;
        drawW = height * imgAspect;
        drawX = (width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    drawCover(img1, 1 - blend * 0.85);
    if (img2 && blend > 0.001) {
      drawCover(img2, blend * 0.85);
    }

    ctx.globalAlpha = 1.0;
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderCanvas(scrollProgress);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded]);

  useEffect(() => {
    renderCanvas(scrollProgress);
  }, [scrollProgress, imagesLoaded]);

  // Navigate to section with Lenis smooth scroll
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { duration: 1.2 });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#08070b] text-white selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Dynamic Living AI Background Environment */}
      <BackgroundSystem activeSection={activeSection} />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections with Narrative Progression */}
      <main className="relative z-10 space-y-12">
        <Hero
          canvasRef={canvasRef}
          currentFrameIndex={currentFrameIndex}
          totalFrames={FRAMES.length}
          onNavigate={handleNavigate}
        />

        <Reveal>
          <AboutSection />
        </Reveal>

        <Reveal>
          <PMProcessSection />
        </Reveal>

        <Reveal>
          <ProductDecisionEngine />
        </Reveal>

        <Reveal>
          <PrioritizationMatrix />
        </Reveal>

        <Reveal>
          <AdnivioShowcase />
        </Reveal>

        <Reveal>
          <CaseStudyBreakdown />
        </Reveal>

        <Reveal>
          <ProjectsSection />
        </Reveal>

        <Reveal>
          <LearningLoop />
        </Reveal>

        <Reveal>
          <SkillsSection />
        </Reveal>

        <Reveal>
          <CertificationsSection />
        </Reveal>

        <Reveal>
          <ExperienceSection />
        </Reveal>

        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      {/* Footer (User requested to remove "© 2026 ATHARV CHAURE. All rights reserved.") */}
      <footer className="relative z-10 py-8 border-t border-white/10 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1">
            AI Product Manager & Founder @ <span className="text-orange-500 font-bold">Adnivio</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/atharvchaure" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/BOSS19-2006" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">GitHub</a>
            <a href="mailto:atharv.business19@gmail.com" className="hover:text-orange-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Download Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}


