export type PhotoCount = 3 | 4 | 6;
export type CountdownDuration = 3 | 5 | 10;

export interface BackgroundTheme {
  id: string;
  name: string;
  type: "solid" | "gradient" | "pattern";
  bgValue: string; // CSS background value or canvas fill
  textColor: string;
  subtextColor: string;
  borderColor?: string;
  previewClass: string;
  hasFilmHoles?: boolean;
}

export interface PhotoFilter {
  id: string;
  name: string;
  cssFilter: string;
  canvasFilter: string;
}

export const BACKGROUND_THEMES: BackgroundTheme[] = [
  {
    id: "classic-dark",
    name: "Classic Noir",
    type: "solid",
    bgValue: "#141416",
    textColor: "#ffffff",
    subtextColor: "#a1a1aa",
    borderColor: "#27272a",
    previewClass: "bg-[#141416] text-white",
  },
  {
    id: "studio-white",
    name: "Korean Studio",
    type: "solid",
    bgValue: "#ffffff",
    textColor: "#18181b",
    subtextColor: "#71717a",
    borderColor: "#e4e4e7",
    previewClass: "bg-white text-zinc-900 border border-zinc-200",
  },
  {
    id: "vintage-cream",
    name: "Oatmeal Paper",
    type: "solid",
    bgValue: "#f5f0e6",
    textColor: "#44403c",
    subtextColor: "#78716c",
    borderColor: "#e7dfd1",
    previewClass: "bg-[#f5f0e6] text-[#44403c]",
  },
  {
    id: "hazy-blue",
    name: "Haru Sky Blue",
    type: "solid",
    bgValue: "#e6ecf5",
    textColor: "#1c2d4a",
    subtextColor: "#3e577d",
    borderColor: "#cbd7e8",
    previewClass: "bg-[#e6ecf5] text-[#1c2d4a]",
  },
  {
    id: "korean-matcha",
    name: "Sage Matcha",
    type: "solid",
    bgValue: "#e4ece3",
    textColor: "#1e3a1e",
    subtextColor: "#3f623f",
    borderColor: "#cbdacf",
    previewClass: "bg-[#e4ece3] text-[#1e3a1e]",
  },
  {
    id: "warm-terracotta",
    name: "Warm Clay",
    type: "solid",
    bgValue: "#ece3db",
    textColor: "#4a3224",
    subtextColor: "#745643",
    borderColor: "#d8c7ba",
    previewClass: "bg-[#ece3db] text-[#4a3224]",
  },
  {
    id: "midnight-navy",
    name: "Midnight Indigo",
    type: "solid",
    bgValue: "#121b2d",
    textColor: "#f8fafc",
    subtextColor: "#94a3b8",
    borderColor: "#1e293b",
    previewClass: "bg-[#121b2d] text-slate-100",
  },
  {
    id: "cherry-blossom",
    name: "Rose Cotton",
    type: "solid",
    bgValue: "#f6edea",
    textColor: "#542c2c",
    subtextColor: "#7f4848",
    borderColor: "#e5d3cd",
    previewClass: "bg-[#f6edea] text-[#542c2c]",
  },
  {
    id: "retro-film",
    name: "Retro 35mm Strip",
    type: "solid",
    bgValue: "#18181b",
    textColor: "#fbbf24",
    subtextColor: "#d97706",
    borderColor: "#27272a",
    previewClass: "bg-zinc-900 text-amber-400 border border-amber-500/20",
    hasFilmHoles: true,
  },
];

export const PHOTO_FILTERS: PhotoFilter[] = [
  {
    id: "normal",
    name: "Normal",
    cssFilter: "none",
    canvasFilter: "none",
  },
  {
    id: "bw",
    name: "B&W Film",
    cssFilter: "grayscale(100%) contrast(115%)",
    canvasFilter: "grayscale(100%) contrast(115%)",
  },
  {
    id: "warm",
    name: "Warm Gold",
    cssFilter: "sepia(28%) saturate(120%) contrast(105%) brightness(102%)",
    canvasFilter: "sepia(28%) saturate(120%) contrast(105%) brightness(102%)",
  },
  {
    id: "korean-soft",
    name: "Korean Glow",
    cssFilter: "brightness(108%) contrast(98%) saturate(105%)",
    canvasFilter: "brightness(108%) contrast(98%) saturate(105%)",
  },
  {
    id: "cool-vintage",
    name: "Cool Indigo",
    cssFilter: "hue-rotate(185deg) saturate(85%) contrast(105%)",
    canvasFilter: "hue-rotate(185deg) saturate(85%) contrast(105%)",
  },
  {
    id: "dramatic",
    name: "Vivid Pop",
    cssFilter: "contrast(125%) saturate(135%)",
    canvasFilter: "contrast(125%) saturate(135%)",
  },
];

export const STICKERS = [
  { id: "sparkles", symbol: "✨", label: "Sparkles" },
  { id: "heart", symbol: "💖", label: "Heart" },
  { id: "star", symbol: "⭐️", label: "Star" },
  { id: "ribbon", symbol: "🎀", label: "Ribbon" },
  { id: "camera", symbol: "📸", label: "Camera" },
  { id: "flower", symbol: "🌸", label: "Flower" },
  { id: "butterfly", symbol: "🦋", label: "Butterfly" },
  { id: "film", symbol: "🎞️", label: "Film" },
  { id: "clover", symbol: "🍀", label: "Clover" },
  { id: "sunglasses", symbol: "🕶️", label: "Cool" },
];

export interface PhotoboothSettings {
  photoCount: PhotoCount;
  duration: CountdownDuration;
  background: BackgroundTheme;
  filter: PhotoFilter;
  layout: "strip" | "grid";
  customCaption: string;
  showDate: boolean;
  selectedSticker: string | null;
  mirrored: boolean;
}
