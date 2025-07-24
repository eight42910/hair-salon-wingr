'use client';

import { motion } from 'framer-motion';

interface HamburgerIconProps {
  isOpen?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const strokeWidths = {
  sm: 1.5,
  md: 2,
  lg: 2.5,
};

export const HamburgerIcon = ({
  isOpen = false,
  className = '',
  size = 'md',
}: HamburgerIconProps) => {
  const strokeWidth = strokeWidths[size];

  return (
    <div
      className={`${sizeClasses[size]} ${className} relative flex items-center justify-center`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        className="overflow-visible"
      >
        {/* Top line */}
        <motion.path
          d="M4 6h16"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ rotate: 0, y: 0, opacity: 1 }}
          animate={
            isOpen
              ? { rotate: 45, y: 6, opacity: 1 }
              : { rotate: 0, y: 0, opacity: 1 }
          }
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Middle line */}
        <motion.path
          d="M4 12h16"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ opacity: 1, scaleX: 1 }}
          animate={
            isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
          }
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Bottom line */}
        <motion.path
          d="M4 18h16"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ rotate: 0, y: 0, opacity: 1 }}
          animate={
            isOpen
              ? { rotate: -45, y: -6, opacity: 1 }
              : { rotate: 0, y: 0, opacity: 1 }
          }
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </div>
  );
};
