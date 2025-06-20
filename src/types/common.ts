// 共通で使用される型定義
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// 美容室固有の共通型
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: BusinessHours[];
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}
