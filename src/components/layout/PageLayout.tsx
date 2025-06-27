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
    <main className={`min-h-screen pt-20 bg-white ${className}`}>
      <section className="py-16">
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
