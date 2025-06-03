import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Phone, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'MENU', href: '/menu' },
  { name: 'ACCESS', href: '/access' },
  { name: 'VOICE', href: '/testimonials' },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // スクロール制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-primary-900"
          onClick={onClose}
        >
          ウイング R
        </Link>
        <button onClick={onClose} className="p-2">
          <X className="w-6 h-6 text-primary-900" />
        </button>
      </div>

      <nav className="px-4 py-8">
        <div className="flex flex-col space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-primary-700 hover:text-primary-900"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <a
            href="tel:058-123-4567"
            className="flex items-center justify-center text-primary-700 hover:text-primary-900"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">058-123-4567</span>
          </a>
          <Link href="/booking">
            <Button className="w-full" onClick={onClose}>
              ご予約はこちら
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
