'use client';

import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: {
    container: 'text-base',
    icon: 'w-4 h-4',
    sparkle: 'w-2 h-2',
  },
  md: {
    container: 'text-lg sm:text-xl',
    icon: 'w-5 h-5',
    sparkle: 'w-2.5 h-2.5',
  },
  lg: {
    container: 'text-xl sm:text-2xl lg:text-3xl',
    icon: 'w-6 h-6',
    sparkle: 'w-3 h-3',
  },
};

export const Logo = ({
  size = 'md',
  showIcon = true,
  className = '',
  href = '/',
  onClick,
}: LogoProps) => {
  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <div
      className={`
      ${sizes.container} ${className}
      relative group inline-flex items-center space-x-2 
      font-bold text-primary-900 
      hover:text-primary-700 
      transition-all duration-300 
      cursor-pointer
    `}
    >
      {/* メインロゴテキスト */}
      <div className="relative">
        {/* 装飾的な背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 to-accent-100/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1" />

        <div className="relative z-10 flex items-center space-x-1">
          {showIcon && (
            <div className="relative">
              {/* ハサミアイコン */}
              <Scissors
                className={`
                ${sizes.icon} 
                text-primary-600 
                group-hover:text-primary-500 
                transition-all duration-300 
                group-hover:rotate-12 
                group-hover:scale-110
              `}
              />

              {/* より控えめなキラキラエフェクト */}
              <div
                className={`
                ${sizes.sparkle} 
                absolute -top-0.5 -right-0.5 
                bg-accent-400 rounded-full
                opacity-0 group-hover:opacity-60 
                transition-all duration-700 
                animate-pulse
              `}
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          )}

          <div className="flex flex-col leading-tight">
            {/* メインタイトル - より自然で読みやすく */}
            <div className="flex items-baseline relative overflow-hidden">
              <motion.span 
                className="font-extrabold tracking-tight relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 
                }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.3 }
                }}
              >
                美容室ウイング
                {/* 滑らかなアンダーライン */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: 0 }}
                  whileHover={{ 
                    width: '100%',
                    transition: { duration: 0.7, ease: 'easeOut' }
                  }}
                />
              </motion.span>
              <motion.span 
                className="font-black text-accent-600 ml-1 relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 3,
                  transition: { duration: 0.3 }
                }}
              >
                R
                {/* より控えめな装飾 */}
                <motion.div 
                  className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-accent-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.6, 0], 
                    scale: [0, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </motion.span>
            </div>

            {/* サブタイトル - アニメーション追加 */}
            {size === 'lg' && (
              <div className="text-xs text-primary-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium mt-1 transform translate-y-1 group-hover:translate-y-0">
                Hair Salon Wing R
              </div>
            )}
          </div>
        </div>

        {/* ホバー時のキラキラエフェクト */}
        <div
          className="absolute top-0 left-0 w-1 h-1 bg-accent-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="absolute bottom-0 right-0 w-1 h-1 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"
          style={{ animationDelay: '0.5s' }}
        />
      </div>
    </div>
  );

  if (href && onClick) {
    return (
      <Link href={href} onClick={onClick}>
        <LogoContent />
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <LogoContent />
      </Link>
    );
  }

  return (
    <div onClick={onClick}>
      <LogoContent />
    </div>
  );
};
