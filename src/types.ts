export interface Campaign {
  id: string;
  title: string;
  badge?: string;
  description: string[];
  mainStat?: string;
  secondaryStat?: string;
  posterImage: string;
  galleryImages: string[];
  isDark?: boolean;
  order?: number;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}