'use client';

import { ReactNode, useMemo } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  id,
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const initialTransform = useMemo(() => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  }, [direction, distance]);

  const style = useMemo<React.CSSProperties>(() => {
    const base: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'none' : initialTransform,
      transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      willChange: 'opacity, transform',
    };
    return base;
  }, [isVisible, initialTransform, delay]);

  return (
    <div id={id} ref={elementRef as unknown as React.RefObject<HTMLDivElement>} className={className} style={style}>
      {children}
    </div>
  );
};
