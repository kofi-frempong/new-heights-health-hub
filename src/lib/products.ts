import type { Product } from "./cart";

export const CATEGORIES = [
  "Prescription",
  "OTC",
  "Vitamins & Supplements",
  "Personal Care",
  "Baby & Mom",
  "Medical Devices",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Daily Multivitamin (90 ct)", price: 18.99, category: "Vitamins & Supplements", color: "#5FAE6B", emoji: "🌿", badge: "Best Seller", popularity: 98, createdAt: 20 },
  { id: "p2", name: "Vitamin D3 2000 IU", price: 12.5, category: "Vitamins & Supplements", color: "#F4B740", emoji: "☀️", popularity: 88, createdAt: 15 },
  { id: "p3", name: "Omega-3 Fish Oil", price: 21.0, category: "Vitamins & Supplements", color: "#2E6F95", emoji: "🐟", popularity: 74, createdAt: 12 },
  { id: "p4", name: "Extra Strength Pain Relief", price: 9.75, category: "OTC", color: "#E76F75", emoji: "💊", popularity: 92, createdAt: 18 },
  { id: "p5", name: "Allergy Relief 24hr", price: 14.25, category: "OTC", color: "#7FC7B0", emoji: "🤧", popularity: 70, createdAt: 8 },
  { id: "p6", name: "Cough & Cold Syrup", price: 11.4, category: "OTC", color: "#8B6BC5", emoji: "🧴", popularity: 60, createdAt: 5 },
  { id: "p7", name: "First Aid Kit — Home", price: 34.9, category: "Medical Devices", color: "#E76F75", emoji: "🩹", badge: "Popular", popularity: 82, createdAt: 22 },
  { id: "p8", name: "Digital Thermometer", price: 16.0, category: "Medical Devices", color: "#2E6F95", emoji: "🌡️", popularity: 55, createdAt: 3 },
  { id: "p9", name: "Blood Pressure Monitor", price: 62.0, category: "Medical Devices", color: "#5FAE6B", emoji: "❤️", popularity: 65, createdAt: 25 },
  { id: "p10", name: "Sensitive Skin Moisturizer", price: 15.5, category: "Personal Care", color: "#7FC7B0", emoji: "🧴", popularity: 78, createdAt: 10 },
  { id: "p11", name: "SPF 50 Sunscreen", price: 13.25, category: "Personal Care", color: "#F4B740", emoji: "☀️", popularity: 80, createdAt: 14 },
  { id: "p12", name: "Prenatal Vitamins", price: 24.0, category: "Baby & Mom", color: "#E8A0BF", emoji: "🤰", popularity: 68, createdAt: 9 },
  { id: "p13", name: "Baby Gentle Wash", price: 8.75, category: "Baby & Mom", color: "#F0C987", emoji: "🍼", popularity: 50, createdAt: 6 },
  { id: "p14", name: "Amoxicillin 500mg (Rx)", price: 24.0, category: "Prescription", rx: true, color: "#2E6F95", emoji: "💊", popularity: 45, createdAt: 21 },
  { id: "p15", name: "Lisinopril 10mg (Rx)", price: 12.0, category: "Prescription", rx: true, color: "#5FAE6B", emoji: "💊", popularity: 40, createdAt: 19 },
  { id: "p16", name: "Metformin 500mg (Rx)", price: 15.0, category: "Prescription", rx: true, color: "#8B6BC5", emoji: "💊", popularity: 42, createdAt: 17 },
];
