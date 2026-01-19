import { SectionTitle } from '@/components/ui/SectionTitle';
import type { PageLayoutProps } from '@/types/layout';

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
};

export const PageLayout = ({
  children,
  titleJa,
  titleEn,
  description,
  maxWidth = '4xl',
  className = '',
}: PageLayoutProps) => {
  return (
    <main className={`min-h-screen pt-20 bg-bg ${className}`}>
      {/* ヒーローセクション */}
      <section className="py-16 bg-surface2">
        <div className="container mx-auto px-4">
          <div
            className={`${
              maxWidthClasses[maxWidth as keyof typeof maxWidthClasses]
            } mx-auto`}
          >
            <SectionTitle
              level="h1"
              align="center"
              subTitle={titleEn ?? ''}
              mainTitle={titleJa}
              description={description ?? ''}
              showDivider={true}
            />
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div
            className={`${
              maxWidthClasses[maxWidth as keyof typeof maxWidthClasses]
            } mx-auto`}
          >
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};
