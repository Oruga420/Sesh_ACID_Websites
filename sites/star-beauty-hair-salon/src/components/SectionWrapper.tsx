'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  style,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${className} ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ ...style, animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
