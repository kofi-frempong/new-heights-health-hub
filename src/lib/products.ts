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
  { id: "p50", name: "Children's Cough Relief Syrup", price: 6.5, color: "#7FC7B0", emoji: "C", popularity: 44, createdAt: 70, ...auto("childrens-cough-relief.jpg") },
  { id: "p51", name: "Zubes Children's Cough Syrup", price: 6.25, color: "#5FAE6B", emoji: "C", popularity: 44, createdAt: 71, ...auto("zubes-childrens-cough-syrup.jpg") },
  { id: "p52", name: "Stopkof Enfant Formule", price: 6.0, color: "#E76F75", emoji: "C", popularity: 42, createdAt: 72, ...auto("stopkof-enfant-formule.jpg") },
  { id: "p53", name: "Stopkof Child Formula", price: 6.0, color: "#E76F75", emoji: "C", popularity: 42, createdAt: 73, ...auto("stopkof-child-formula.jpg") },
  { id: "p54", name: "Dry & Tickly Cough Syrup", price: 6.75, color: "#6FA8DC", emoji: "C", popularity: 43, createdAt: 74, ...auto("dry-tickly-cough.jpg") },
  { id: "p55", name: "Basecold Baby Syrup", price: 5.75, color: "#7FA8C9", emoji: "C", popularity: 43, createdAt: 75, ...auto("basecold-baby.jpg") },
  { id: "p56", name: "Chesty Cough Syrup", price: 6.5, color: "#7FC7B0", emoji: "C", popularity: 43, createdAt: 76, ...auto("chesty-cough-syrup.jpg") },
  { id: "p57", name: "Baby Cough Syrup", price: 5.9, color: "#E8A0BF", emoji: "C", popularity: 43, createdAt: 77, ...auto("baby-cough-syrup.jpg") },
  { id: "p58", name: "Tixylix Children's Cough Syrup", price: 8.5, color: "#8B5FA6", emoji: "C", popularity: 47, createdAt: 78, ...auto("tixylix-childrens.jpg") },
  { id: "p59", name: "Diphex Junior Cough Syrup", price: 6.4, color: "#5B8FB0", emoji: "C", popularity: 42, createdAt: 79, ...auto("diphex-junior-cough-syrup.jpg") },
  { id: "p60", name: "Samalin Junior Cough Syrup", price: 7.5, color: "#8B5FA6", emoji: "C", popularity: 42, createdAt: 80, ...auto("samalin-junior-cough-syrup.jpg") },
  { id: "p61", name: "Koffex Junior Cough Syrup", price: 6.4, color: "#7FC7B0", emoji: "C", popularity: 42, createdAt: 81, ...auto("koffex-junior.jpg") },
  { id: "p62", name: "Luex Children's Chesty Cough Syrup", price: 6.75, color: "#6FA8DC", emoji: "C", popularity: 43, createdAt: 82, ...auto("luex-childrens-chesty-cough.jpg") },
  { id: "p63", name: "Luex Children's Dry Cough Syrup", price: 6.75, color: "#6FA8DC", emoji: "C", popularity: 43, createdAt: 83, ...auto("luex-childrens-dry-cough.jpg") },
  { id: "p64", name: "Salo Cold Decongestant Syrup", price: 7.0, color: "#2E6F95", emoji: "C", popularity: 44, createdAt: 84, ...auto("salo-cold-decongestant.jpg") },
  { id: "p65", name: "Benylin Infant's Cough Syrup", price: 9.0, color: "#8B5FA6", emoji: "C", popularity: 50, createdAt: 85, ...auto("benylin-infants-cough-syrup.jpg") },
  { id: "p66", name: "Benylin Children's Dry Cough & Sore Throat", price: 9.5, color: "#8B5FA6", emoji: "C", popularity: 50, createdAt: 86, ...auto("benylin-childrens-dry-cough-sore-throat.jpg") },
  { id: "p67", name: "Mucolex Junior Expectorant (Carton)", price: 6.6, color: "#7FC7B0", emoji: "C", popularity: 43, createdAt: 87, ...auto("mucolex-junior-carton.jpg") },
  { id: "p68", name: "Lemsip Max Cold & Flu", price: 11.0, color: "#E76F75", emoji: "F", badge: "New", popularity: 58, createdAt: 88, ...auto("lemsip-max.jpg") },
  { id: "p69", name: "Salo Cold & Flu Tablets", price: 6.5, color: "#2E6F95", emoji: "F", popularity: 46, createdAt: 89, ...auto("salo-cold-flu-tablets.jpg") },
  { id: "p70", name: "Basecold Tablets", price: 5.5, color: "#7FA8C9", emoji: "F", popularity: 45, createdAt: 90, ...auto("basecold-tablets.jpg") },
  { id: "p71", name: "Coldrilif Cold & Flu Tablets", price: 6.0, color: "#5B8FB0", emoji: "F", popularity: 45, createdAt: 91, ...auto("coldrilif.jpg") },
  { id: "p72", name: "Procold Tablets", price: 5.75, color: "#5FAE6B", emoji: "F", popularity: 45, createdAt: 92, ...auto("procold.jpg") },
  { id: "p73", name: "Piriton Allergy Relief Tablets", price: 8.0, color: "#E76F75", emoji: "A", popularity: 52, createdAt: 93, ...auto("piriton-tablets.jpg") },
  { id: "p74", name: "Piriton Children's Syrup", price: 8.5, color: "#E8A0BF", emoji: "A", popularity: 52, createdAt: 94, ...auto("piriton-childrens-syrup.jpg") },
  { id: "p75", name: "Claritin Loratadine 10mg Tablets", price: 12.0, color: "#2E6F95", emoji: "A", popularity: 56, createdAt: 95, ...auto("claritin-loratadine.jpg") },
  { id: "p76", name: "Rhizin Cetirizine 10mg Tablets (30)", price: 9.0, color: "#5FAE6B", emoji: "A", popularity: 50, createdAt: 96, ...auto("rhizin-tablets.jpg") },
  { id: "p77", name: "Rhizin Syrup", price: 8.5, color: "#5FAE6B", emoji: "A", popularity: 48, createdAt: 97, ...auto("rhizin-syrup.jpg") },
  { id: "p78", name: "Rhizine 10mg Tablets", price: 8.75, color: "#5FAE6B", emoji: "A", popularity: 48, createdAt: 98, ...auto("rhizine-tablets.jpg") },
  { id: "p79", name: "Zyten 120mg Tablets", price: 10.5, color: "#7FC7B0", emoji: "A", popularity: 49, createdAt: 99, ...auto("zyten-120.jpg") },
  { id: "p80", name: "Zyten 180mg Tablets", price: 12.5, color: "#E76F75", emoji: "A", popularity: 49, createdAt: 100, ...auto("zyten-180.jpg") },
  { id: "p81", name: "Zyfen Allergy Syrup 150ml", price: 11.0, color: "#2E6F95", emoji: "A", popularity: 49, createdAt: 101, ...auto("zyfen-allergy-syrup.jpg") },
];

