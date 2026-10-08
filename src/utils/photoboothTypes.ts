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
  {
    id: "lavender-dream",
    name: "Lilac Bloom",
    type: "solid",
    bgValue: "#f0e8f7",
    textColor: "#4c2d66",
    subtextColor: "#765196",
    borderColor: "#deceeb",
    previewClass: "bg-[#f0e8f7] text-[#4c2d66]",
  },
  {
    id: "butter-custard",
    name: "Butter Custard",
    type: "solid",
    bgValue: "#fbf5dc",
    textColor: "#594511",
    subtextColor: "#8c6e23",
    borderColor: "#ede1ba",
    previewClass: "bg-[#fbf5dc] text-[#594511]",
  },
  {
    id: "mocha-espresso",
    name: "Mocha Espresso",
    type: "solid",
    bgValue: "#241914",
    textColor: "#f5ebe6",
    subtextColor: "#b8a39a",
    borderColor: "#3a2a22",
    previewClass: "bg-[#241914] text-[#f5ebe6]",
  },
  {
    id: "mint-breeze",
    name: "Mint Breeze",
    type: "solid",
    bgValue: "#e2f3ee",
    textColor: "#184439",
    subtextColor: "#356d5e",
    borderColor: "#c3e5db",
    previewClass: "bg-[#e2f3ee] text-[#184439]",
  },
  {
    id: "blush-peony",
    name: "Blush Peony",
    type: "solid",
    bgValue: "#fae5ea",
    textColor: "#632238",
    subtextColor: "#994762",
    borderColor: "#edd0d7",
    previewClass: "bg-[#fae5ea] text-[#632238]",
  },
  {
    id: "cloud-silver",
    name: "Cloud Minimalist",
    type: "solid",
    bgValue: "#eceef2",
    textColor: "#252b36",
    subtextColor: "#525e73",
    borderColor: "#d2d7e0",
    previewClass: "bg-[#eceef2] text-[#252b36]",
  },
  {
    id: "twilight-violet",
    name: "Twilight Velvet",
    type: "solid",
    bgValue: "#201633",
    textColor: "#e9ddff",
    subtextColor: "#a998cb",
    borderColor: "#352752",
    previewClass: "bg-[#201633] text-[#e9ddff]",
  },
  {
    id: "forest-moss",
    name: "Forest Moss",
    type: "solid",
    bgValue: "#1b2b22",
    textColor: "#e1efe6",
    subtextColor: "#8aa594",
    borderColor: "#2a4235",
    previewClass: "bg-[#1b2b22] text-[#e1efe6]",
  },
  {
    id: "cyber-neon",
    name: "Cyber Sapphire",
    type: "solid",
    bgValue: "#0c1322",
    textColor: "#38bdf8",
    subtextColor: "#818cf8",
    borderColor: "#38bdf8",
    previewClass: "bg-[#0c1322] text-[#38bdf8] border border-sky-400/40",
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
