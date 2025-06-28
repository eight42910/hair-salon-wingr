'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?:
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInScale'
    | 'fadeInRotate';
  threshold?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  animation = 'fadeInUp',
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const animationClasses = {
    fadeInUp: isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8',
    fadeInLeft: isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-8',
    fadeInRight: isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-8',
    fadeInScale: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    fadeInRotate: isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180',
  };

  return (
    <div
      ref={elementRef as unknown as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-400 ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};
