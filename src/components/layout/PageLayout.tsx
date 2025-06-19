import { ReactNode } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface PageLayoutProps {
  children: ReactNode;
  titleJa: string; // 日本語タイトル（必須）
  titleEn?: string; // 英語タイトル（装飾的）
  description?: string; // 日本語説明文
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
  className?: string;
}

export const PageLayout = ({
  children,
  titleJa,
  titleEn,
  description,
  maxWidth = '4xl',
  className = '',
}: PageLayoutProps) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
  };

  return (
    <main className={`min-h-screen pt-20 bg-white ${className}`}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
            <SectionTitle
              level="h1"
              align="center"
              subTitle={titleEn}
              mainTitle={titleJa}
              description={description}
              showDivider={true}
            />
            {/* {subtitle && (
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )} */}
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};
