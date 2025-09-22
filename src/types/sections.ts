// src/types/sections.ts
// ========================================
// Section Components Type Definitions
// ========================================

import { LucideIcon } from 'lucide-react';
import { BaseProps } from './common';

// === Feature Section Types ===
export interface FeatureItem {
  id: number;
  titleJa: string;
  titleEn: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  icon: LucideIcon;
}

export interface FeatureProps extends BaseProps {
  features?: FeatureItem[];
  title?: string;
  subtitle?: string;
}

// === FAQ Section Types ===
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQProps extends BaseProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

// === Testimonials Section Types ===
export interface Testimonial {
  id: string;
  name: string;
  attribute: string;
  comment: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
}

export interface TestimonialsProps extends BaseProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

// === Access Section Types ===
export interface AccessInfo {
  address: string;
  phone: string;
  email?: string;
  businessHours: {
    [key: string]: string;
  };
  holidays: string[];
  parking?: string;
  access?: string[];
}

export interface AccessProps extends BaseProps {
  info?: AccessInfo;
  showMap?: boolean;
}

// === Line Reservation Types ===
export interface LineReservationProps extends BaseProps {
  title?: string;
  subtitle?: string;
  lineUrl?: string;
  phoneNumber?: string;
}

// === Animated Hero Types ===
export interface AnimatedHeroProps extends BaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaButtons?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

// === Menu Content Types (sections固有のProps) ===
export interface MenuContentProps extends BaseProps {
  showAllCategories?: boolean;
  highlightPopular?: boolean;
  showPricing?: boolean;
}
