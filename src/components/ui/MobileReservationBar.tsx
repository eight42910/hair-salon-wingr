import { Phone } from 'lucide-react';
import { LineButton } from '@/components/ui/LineButton';

export const MobileReservationBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="bg-surface/95 backdrop-blur border-t border-border">
        <div className="container mx-auto px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3">
          <div className="grid grid-cols-2 gap-3">
            <LineButton
              variant="line-official"
              text="LINEで予約"
              size="md"
              className="w-full"
            />
            <a
              href="tel:058-241-3375"
              className="inline-flex items-center justify-center h-11 rounded-xl border border-border text-accent font-medium bg-surface hover:bg-surface2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              aria-label="お電話で予約する"
            >
              <Phone className="w-4 h-4 mr-2" />
              058-241-3375
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
