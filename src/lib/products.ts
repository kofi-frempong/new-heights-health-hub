import type { Product } from "./cart";

export const CATEGORIES = [
  "Prescription",
  "OTC",
  "Vitamins & Supplements",
  "Personal Care",
  "Baby & Mom",
  "Medical Devices",
  "Allergies",
  "Diet & Fitness",
  "Eye & Ear Care",
  "Sexual Wellness",
  "Conception & Pregnancy",
  "Cosmetic & Beauty",
  "Men's Health",
  "Women's Health",
  "Cough, Cold & Flu",
  "Pain Relief",
] as const;

export type Category = (typeof CATEGORIES)[number];

const productImages = import.meta.glob("/src/assets/products/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function auto(filename: string): { category: string; image: string } {
  const entry = Object.entries(productImages).find(([path]) => path.endsWith(`/${filename}`));
  if (!entry) throw new Error(`Product image not found: ${filename}`);
  const [path, image] = entry;
  const match = path.match(/\/products\/([^/]+)\//);
  const category = match ? decodeURIComponent(match[1]) : "OTC";
  return { category, image };
}

export const PRODUCTS: Product[] = [
  { id: "p8", name: "Digital Thermometer", price: 16.0, color: "#2E6F95", emoji: "T", popularity: 55, createdAt: 3, ...auto("digital-thermometer.jpg") },
  { id: "p9", name: "Blood Pressure Monitor", price: 62.0, color: "#5FAE6B", emoji: "B", popularity: 65, createdAt: 25, ...auto("greenline-bp-monitor.jpg") },
  { id: "p41", name: "SD CodeFree Blood Glucose Test Strips (50)", price: 22.0, color: "#8B008B", emoji: "G", popularity: 60, createdAt: 60, ...auto("codefree-strips.jpg") },
  { id: "p42", name: "On Call Extra Blood Glucose Monitoring System", price: 48.0, color: "#5FAE6B", emoji: "G", badge: "New", popularity: 62, createdAt: 61, ...auto("oncall-extra-meter.jpg") },
  { id: "p43", name: "On Call Plus Blood Glucose Test Strips (50)", price: 20.0, color: "#2E6F95", emoji: "G", popularity: 58, createdAt: 62, ...auto("oncall-plus-strips.jpg") },
  { id: "p44", name: "Accu-Chek Active Test Strips (50)", price: 24.0, color: "#7FC7B0", emoji: "G", popularity: 58, createdAt: 63, ...auto("accu-chek-active-strips.jpg") },
  { id: "p45", name: "Oral-B Satin Floss Mint 25m", price: 9.0, color: "#7FA8C9", emoji: "F", popularity: 50, createdAt: 64, ...auto("oralb-satin-floss.jpg") },
  { id: "p46", name: "Cotton Wool Balls (Assorted)", price: 5.5, color: "#E8A0BF", emoji: "W", popularity: 50, createdAt: 65, ...auto("cotton-wool.jpg") },
  { id: "p47", name: "Hot Water Bottle — Teal Floral Cover", price: 18.0, color: "#2E6F95", emoji: "H", popularity: 48, createdAt: 66, ...auto("hot-water-bottle-teal.jpg") },
  { id: "p48", name: "Hot Water Bottle — Navy Fleece Cover", price: 18.0, color: "#2E6F95", emoji: "H", popularity: 48, createdAt: 67, ...auto("hot-water-bottle-blue.jpg") },
  { id: "p49", name: "Hot Water Bottle — Navy Star Cover", price: 18.0, color: "#2E6F95", emoji: "H", popularity: 48, createdAt: 68, ...auto("hot-water-bottle-star.jpg") },
  { id: "p17", name: "Benylin Original Cough Syrup 100ml", price: 8.99, color: "#8B5FA6", emoji: "C", badge: "New", popularity: 60, createdAt: 30, ...auto("benylin-original-syrup.jpg") },
  { id: "p18", name: "Benylin Dry Cough", price: 9.5, color: "#7FA8C9", emoji: "C", popularity: 55, createdAt: 31, ...auto("Benylin Dry Cough.jpg") },
  { id: "p19", name: "Benylin Mucus Max", price: 10.25, color: "#5B8FB0", emoji: "C", popularity: 55, createdAt: 32, ...auto("Benylin Mucus Max (1).jpg") },
  { id: "p20", name: "Koflet Cough Syrup", price: 6.75, color: "#8B6BC5", emoji: "C", popularity: 45, createdAt: 33, ...auto("Koflet Cough Syrup.jpg") },
  { id: "p21", name: "Menthodex Cough Mixture 100ml", price: 7.25, color: "#6FA8DC", emoji: "C", popularity: 45, createdAt: 34, ...auto("Menthodex Cough Mixture 100ml.jpg") },
  { id: "p22", name: "Mucolex Junior Expectorant", price: 6.5, color: "#7FC7B0", emoji: "C", popularity: 45, createdAt: 35, ...auto("Mucolex Junior Expextorant.jpg") },
  { id: "p23", name: "Stopkof Adult Cough Syrup", price: 6.0, color: "#E76F75", emoji: "C", popularity: 45, createdAt: 36, ...auto("Stopkof Adult Cough Syrup.jpg") },
  { id: "p24", name: "Viscof-S Expectorant", price: 6.25, color: "#F4B740", emoji: "C", popularity: 45, createdAt: 37, ...auto("Viscof-S  Expectorant.jpg") },
  { id: "p25", name: "Zubes Expectorant Cough Mixture", price: 5.75, color: "#5FAE6B", emoji: "C", popularity: 45, createdAt: 38, ...auto("Zubes Expectorant Cough Mixture.jpg") },
  { id: "p26", name: "Zubes Extra Strong Cough Mixture", price: 6.0, color: "#5FAE6B", emoji: "C", popularity: 45, createdAt: 39, ...auto("Zubes Extra Strong Cough Mixture.jpg") },
  { id: "p27", name: "Buttercup Cough Syrup", price: 6.5, color: "#F4B740", emoji: "C", popularity: 45, createdAt: 40, ...auto("Buttercup Cough Surup.jpg") },
  { id: "p28", name: "Flemex Adult Expectorant Cough Syrup", price: 7.0, color: "#7FC7B0", emoji: "C", popularity: 45, createdAt: 41, ...auto("Flemex Adult Expectorant Cough Syrup.jpg") },
  { id: "p29", name: "Go Cough Expectorant", price: 6.25, color: "#8B6BC5", emoji: "C", popularity: 45, createdAt: 42, ...auto("Go Cough Expectorant.jpg") },
  { id: "p30", name: "Kofof Cough Syrup", price: 5.75, color: "#E76F75", emoji: "C", popularity: 45, createdAt: 43, ...auto("Kofof Cough Syrup.jpg") },
  { id: "p31", name: "Letalin Expectorant Cough Syrup", price: 7.25, color: "#5FAE6B", emoji: "C", popularity: 45, createdAt: 44, ...auto("Letalin Expectorant Cough Syrup.jpg") },
  { id: "p32", name: "Luex Adult Chesty Cough Syrup", price: 6.75, color: "#6FA8DC", emoji: "C", popularity: 45, createdAt: 45, ...auto("Luex Adult Chesty Cough Syrup.jpg") },
  { id: "p33", name: "Luex Adult Dry Cough Syrup", price: 6.75, color: "#6FA8DC", emoji: "C", popularity: 45, createdAt: 46, ...auto("Luex Adult Dry Cough Syrup.jpg") },
  { id: "p34", name: "Mucolex Adult Expectorant Cough Syrup", price: 6.9, color: "#7FC7B0", emoji: "C", popularity: 45, createdAt: 47, ...auto("Mucolex Adult Expectorant Cough Syrup.jpg") },
  { id: "p35", name: "Rhinathiol Children Expectorant Cough Syrup", price: 7.5, color: "#E8A0BF", emoji: "C", popularity: 45, createdAt: 48, ...auto("Rhinathiol Children Expectorant Cough Syrup.jpg") },
  { id: "p36", name: "Rhinathiol Expectorant Cough Syrup", price: 7.5, color: "#2E6F95", emoji: "C", popularity: 45, createdAt: 49, ...auto("Rhinathiol Expectorant Cough Syrup.jpg") },
  { id: "p37", name: "Samalin Adult Cough Syrup", price: 8.0, color: "#8B5FA6", emoji: "C", popularity: 45, createdAt: 50, ...auto("Samalin Adult Cough Syrup.jpg") },
  { id: "p38", name: "Samalin Adult Cough Syrup Non-Drowsy", price: 8.25, color: "#8B5FA6", emoji: "C", popularity: 45, createdAt: 51, ...auto("Samalin Adult Cough Syrup Non-Drowsy.jpg") },
  { id: "p39", name: "Stopkof Adult Dry Cough Syrup", price: 6.0, color: "#E76F75", emoji: "C", popularity: 45, createdAt: 52, ...auto("Stopkof Adult Dry Cough Syrup.jpg") },
  { id: "p40", name: "Viscof Cough Syrup", price: 6.25, color: "#F4B740", emoji: "C", popularity: 45, createdAt: 53, ...auto("Viscof Cough Syrup.jpg") },
];

