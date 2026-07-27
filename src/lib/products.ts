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
  { id: "p1", name: "Daily Multivitamin (90 ct)", price: 18.99, category: "Vitamins & Supplements", color: "#5FAE6B", emoji: "V", badge: "Best Seller", popularity: 98, createdAt: 20 },
  { id: "p2", name: "Vitamin D3 2000 IU", price: 12.5, category: "Vitamins & Supplements", color: "#F4B740", emoji: "V", popularity: 88, createdAt: 15 },
  { id: "p3", name: "Omega-3 Fish Oil", price: 21.0, category: "Vitamins & Supplements", color: "#2E6F95", emoji: "V", popularity: 74, createdAt: 12 },
  { id: "p4", name: "Extra Strength Pain Relief", price: 9.75, category: "OTC", color: "#E76F75", emoji: "P", popularity: 92, createdAt: 18 },
  { id: "p5", name: "Allergy Relief 24hr", price: 14.25, category: "OTC", color: "#7FC7B0", emoji: "A", popularity: 70, createdAt: 8 },
  { id: "p6", name: "Cough & Cold Syrup", price: 11.4, category: "OTC", color: "#8B6BC5", emoji: "C", popularity: 60, createdAt: 5 },
  { id: "p7", name: "First Aid Kit - Home", price: 34.9, category: "Medical Devices", color: "#E76F75", emoji: "F", badge: "Popular", popularity: 82, createdAt: 22 },
  { id: "p8", name: "Digital Thermometer", price: 16.0, color: "#2E6F95", emoji: "T", popularity: 55, createdAt: 3, ...auto("digital-thermometer.jpg") },
  { id: "p9", name: "Blood Pressure Monitor", price: 62.0, color: "#5FAE6B", emoji: "B", popularity: 65, createdAt: 25, ...auto("greenline-bp-monitor.jpg") },
  { id: "p10", name: "Sensitive Skin Moisturizer", price: 15.5, category: "Personal Care", color: "#7FC7B0", emoji: "S", popularity: 78, createdAt: 10 },
  { id: "p11", name: "SPF 50 Sunscreen", price: 13.25, category: "Personal Care", color: "#F4B740", emoji: "S", popularity: 80, createdAt: 14 },
  { id: "p12", name: "Prenatal Vitamins", price: 24.0, category: "Baby & Mom", color: "#E8A0BF", emoji: "P", popularity: 68, createdAt: 9 },
  { id: "p13", name: "Baby Gentle Wash", price: 8.75, category: "Baby & Mom", color: "#F0C987", emoji: "B", popularity: 50, createdAt: 6 },
  { id: "p14", name: "Amoxicillin 500mg (Prescription)", price: 24.0, category: "Prescription", rx: true, color: "#2E6F95", emoji: "R", popularity: 45, createdAt: 21 },
  { id: "p15", name: "Lisinopril 10mg (Prescription)", price: 12.0, category: "Prescription", rx: true, color: "#5FAE6B", emoji: "R", popularity: 40, createdAt: 19 },
  { id: "p16", name: "Metformin 500mg (Prescription)", price: 15.0, category: "Prescription", rx: true, color: "#8B6BC5", emoji: "R", popularity: 42, createdAt: 17 },
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
];
