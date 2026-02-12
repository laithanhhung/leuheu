import type { Campaign, Partner, Service } from './types';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'balloon',
    title: "A BALLOON'S LANDING",
    badge: "LGBTQ+ movie",
    description: [
      "Collab with CJ Entertainment to distribute and promote Taiwanese indie LGBT movie: A balloon's Landing",
      "Top 2 box office international LGBT movie in Vietnam 2024"
    ],
    posterImage: "https://picsum.photos/400/600?random=1",
    galleryImages: ["https://picsum.photos/300/400?random=11", "https://picsum.photos/300/400?random=12"],
    isDark: false
  },
  {
    id: 'exorcism',
    title: "EXORCISM CHRONICLES: THE BEGINNING",
    badge: "First distributed movie of #LeuHeu",
    description: [
      "Collab with Lotte Cinema, Sate and Anh Teu Studio to distribute the movie Exorcism Chronicles in Vietnam",
      "In charge of the whole marketing and social media strategy planning and executing"
    ],
    posterImage: "https://picsum.photos/400/600?random=2",
    galleryImages: ["https://picsum.photos/300/200?random=13", "https://picsum.photos/300/200?random=14", "https://picsum.photos/300/200?random=15"],
    isDark: true
  },
  {
    id: 'teeyod',
    title: "TOP 1 BOX OFFICE THAI MOVIE IN VIETNAM 2024",
    badge: "TEE YOD 2",
    description: [
      "Strategic planning and executing marketing plan for the movie on TikTok platform"
    ],
    mainStat: "30M+ video",
    posterImage: "https://picsum.photos/400/600?random=3",
    galleryImages: ["https://picsum.photos/200/300?random=16", "https://picsum.photos/200/300?random=17", "https://picsum.photos/200/300?random=18"],
    isDark: true
  },
  {
    id: 'lamgiau',
    title: "HIGHEST EARNING MOVIE IN VIETNAM NATIONAL HOLIDAY (2/9)",
    badge: "LÀM GIÀU VỚI MA MOVIE",
    description: [
      "Strategic planning and executing marketing plan for the movie on TikTok platform.",
      "More than 200 videos and 50M views"
    ],
    mainStat: "50M+ views",
    posterImage: "https://picsum.photos/400/600?random=4",
    galleryImages: ["https://picsum.photos/150/250?random=19", "https://picsum.photos/150/250?random=20", "https://picsum.photos/150/250?random=21", "https://picsum.photos/150/250?random=22"],
    isDark: false
  },
  {
    id: 'keanhon',
    title: "KẺ ĂN HỒN MOVIE",
    badge: "KẺ ĂN HỒN MOVIE",
    description: [
      "Lead the strategic planning and executing marketing plan for the movie on TikTok platform.",
      "More than 300 videos and 150M views"
    ],
    mainStat: "150M+ views on TikTok",
    secondaryStat: "50M+ views ON PRODUCED VIDEOS",
    posterImage: "https://picsum.photos/400/600?random=5",
    galleryImages: ["https://picsum.photos/300/200?random=23", "https://picsum.photos/300/200?random=24"],
    isDark: true
  },
  {
    id: 'anmang',
    title: "ÁN MẠNG LẨU 4 MOVIE",
    badge: "ÁN MẠNG LẨU 4 MOVIE",
    description: [
      "Lead the strategic planning and executing marketing plan for the movie on TikTok platform.",
      "More than 200 videos and 30M views"
    ],
    mainStat: "30M views clip viral san xuất",
    secondaryStat: "Top 3 trending TikTok",
    posterImage: "https://picsum.photos/400/600?random=6",
    galleryImages: ["https://picsum.photos/200/300?random=25", "https://picsum.photos/200/300?random=26", "https://picsum.photos/200/300?random=27"],
    isDark: true
  },
  {
    id: 'edsheeran',
    title: "ED SHEERAN - OLD PHONE",
    badge: "ED SHEERAN - OLD PHONE",
    description: [
      "Collab with Warner Music to promote Old Phone song in Vietnam",
      "TikTok Kols planning and booking"
    ],
    mainStat: "40+ produced videos",
    posterImage: "https://picsum.photos/500/300?random=7",
    galleryImages: ["https://picsum.photos/200/300?random=28", "https://picsum.photos/200/300?random=29", "https://picsum.photos/200/300?random=30"],
    isDark: false
  }
];

export const SERVICES: Service[] = [
  {
    title: "COMMUNICATION ON SOCIAL PLATFORMS",
    description: "Strategic planning and executing marketing / communication plan for the entertainment products (movie, music, shows) on TikTok platform and other social platforms.",
    image: "https://picsum.photos/600/400?random=101"
  },
  {
    title: "Production",
    description: "Creative planning and produce short-form videos for promotion on social platforms",
    image: "https://picsum.photos/600/400?random=102"
  },
  {
    title: "Distribution",
    description: "Official partner of Movie Distributors and Music Labels such as: CGV Cinema, CJ Cinema, Warner Music, etc.",
    image: "https://picsum.photos/600/400?random=103"
  }
];

export const PARTNERS: Partner[] = [
  { name: "CJ", logo: "https://picsum.photos/100/50?random=201" },
  { name: "CGV", logo: "https://picsum.photos/100/50?random=202" },
  { name: "Galaxy", logo: "https://picsum.photos/100/50?random=203" },
  { name: "Warner Music", logo: "https://picsum.photos/100/50?random=204" },
  { name: "VNG", logo: "https://picsum.photos/100/50?random=205" },
  { name: "ProductionQ", logo: "https://picsum.photos/100/50?random=206" },
  { name: "Oat Side", logo: "https://picsum.photos/100/50?random=207" },
  { name: "Beta", logo: "https://picsum.photos/100/50?random=208" },
  { name: "Netflix", logo: "https://picsum.photos/100/50?random=209" },
  { name: "TR", logo: "https://picsum.photos/100/50?random=210" },
  { name: "K+", logo: "https://picsum.photos/100/50?random=211" },
];