import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  detailedDescription: string;
  price: string;
  originalPrice: string | null;
  duration: string;
  popular: boolean;
  new: boolean;
  image: string;
}

export interface MenuCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  items: MenuItem[];
}

export interface MenuData {
  [key: string]: MenuCategory;
}

// Props型定義
export interface MenuItemProps {
  item: MenuItem;
}

export interface MenuCategoryProps {
  category: MenuCategory;
}
