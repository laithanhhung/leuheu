export interface Campaign {
  id: string;
  title: string;
  subTitle?: string;
  badge?: string;
  description: string[];
  mainStat?: string;
  secondaryStat?: string;
  posterImage: string;
  galleryImages: string[];
  isDark?: boolean;
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