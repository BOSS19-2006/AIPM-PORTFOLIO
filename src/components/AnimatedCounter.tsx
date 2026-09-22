import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  loop?: boolean;
  loopDelay?: number;
}

export default function AnimatedCounter({ 
  from = 28, 
  to, 
  duration = 1600, 
  suffix = '', 
  prefix = '',
  loop = true,
  loopDelay = 2500
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isIntersectingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setCount(from);
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth Ease-out quad formula
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(from + easeProgress * (to - from));
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setCount(to);
        // If looping is enabled and still in view, trigger continuous repeat cycle
        if (loop && isIntersectingRef.current) {
          timeoutRef.current = setTimeout(() => {
            if (isIntersectingRef.current) {
              startAnimation();
            }
          }, loopDelay);
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isIntersectingRef.current = true;
          startAnimation();
        } else {
          isIntersectingRef.current = false;
          if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setCount(from);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [from, to, duration, loop, loopDelay]);

  return (
    <span ref={elementRef} className="font-mono inline-block transition-all">
      {prefix}{count}{suffix}
    </span>
  );
}
