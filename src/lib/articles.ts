export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Nutrition" | "Chronic Care" | "Seasonal Health" | "Medication Safety";
  author: string;
  date: string;
  readTime: string;
  gradient: string;
  icon: string;
  body: string[];
  sources: { label: string; url: string }[];
};

export const ARTICLE_CATEGORIES = [
  "All",
  "Nutrition",
  "Chronic Care",
  "Seasonal Health",
  "Medication Safety",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "flu-season-prep",
    title: "Preparing for Flu Season: A Practical Guide",
    excerpt:
      "Timing your flu shot, stocking your medicine cabinet, and simple habits that lower your risk this winter.",
    category: "Seasonal Health",
    author: "Dr. Amina Rivera, PharmD",
    date: "March 4, 2025",
    readTime: "6 min read",
    gradient: "from-[#dff1e6] to-[#c6e6f2]",
    icon: "🤧",
    body: [
      "Flu season looks a little different each year, but the fundamentals stay the same: get vaccinated early, wash your hands often, and know when to call your pharmacist.",
      "The CDC recommends most adults receive their annual flu shot in September or October, before flu activity typically peaks. If you're managing a chronic condition, our pharmacists can help you time your vaccine so it doesn't clash with other treatments.",
      "Keep a small ready-kit at home: acetaminophen or ibuprofen for fevers, an oral rehydration solution, a digital thermometer, and tissues. Being prepared means you don't have to leave the house when you already feel unwell.",
    ],
    sources: [
      { label: "CDC — Seasonal Flu Vaccination Recommendations", url: "https://www.cdc.gov/flu/season/2025-2026.html" },
      { label: "CDC — Key Facts About Seasonal Flu Vaccines", url: "https://www.cdc.gov/flu/vaccines/keyfacts.htm" },
    ],
  },
  {
    slug: "reading-medication-labels",
    title: "How to Read a Medication Label the Right Way",
    excerpt:
      "Active ingredients, dose intervals, and the warnings most people overlook — a quick primer from our team.",
    category: "Medication Safety",
    author: "Marcus Chen, PharmD",
    date: "February 18, 2025",
    readTime: "5 min read",
    gradient: "from-[#e7edf7] to-[#e1f0e5]",
    icon: "💊",
    body: [
      "Every over-the-counter medication label follows the same layout, and once you know where to look, you can spot interactions and dosing issues in under a minute.",
      "Start with the active ingredient — not the brand name. Two products with different names may share the same molecule, and doubling up is a common cause of accidental overdose.",
      "Check the 'Do not use' and 'Ask a doctor' sections. These flag the conditions and combinations that matter most for you.",
    ],
    sources: [
      { label: "FDA — The Over-the-Counter Drug Facts Label", url: "https://www.fda.gov/drugs/understanding-over-counter-medicines/over-counter-drug-facts-label" },
    ],
  },
  {
    slug: "living-well-with-diabetes",
    title: "Living Well With Type 2 Diabetes",
    excerpt:
      "Small daily routines — meals, movement, and medication timing — that add up to steadier blood sugar.",
    category: "Chronic Care",
    author: "Priya Shah, PharmD",
    date: "February 2, 2025",
    readTime: "8 min read",
    gradient: "from-[#e8f4e9] to-[#f2ecdb]",
    icon: "❤️",
    body: [
      "Managing type 2 diabetes is less about big changes and more about the small, repeatable habits you can sustain for years.",
      "Consistent meal timing helps your medication work with your body, not against it. If you're on metformin, taking it with food can reduce stomach upset.",
      "Ask your pharmacist for a free medication review once a year — we'll look for interactions and simplifications you might have missed.",
    ],
    sources: [
      { label: "American Diabetes Association — Standards of Care", url: "https://diabetes.org/living-with-diabetes" },
      { label: "CDC — Managing Diabetes", url: "https://www.cdc.gov/diabetes/managing/index.html" },
    ],
  },
  {
    slug: "everyday-nutrition-basics",
    title: "Everyday Nutrition Basics That Actually Move the Needle",
    excerpt:
      "Forget the trends. Focus on protein at every meal, fiber for gut health, and hydration you can measure.",
    category: "Nutrition",
    author: "Dr. Amina Rivera, PharmD",
    date: "January 20, 2025",
    readTime: "4 min read",
    gradient: "from-[#eaf6e7] to-[#dbeef5]",
    icon: "🥗",
    body: [
      "Most nutrition advice is more marketing than medicine. Three habits do most of the work: enough protein, enough fiber, and enough water.",
      "Aim for a palm-sized portion of protein at each meal and 25–35 grams of fiber daily. It steadies blood sugar and supports a healthy microbiome.",
      "If you're not sure your diet is covering the basics, a targeted supplement — like vitamin D or omega-3 — can close the gap. We're happy to review what you're taking.",
    ],
    sources: [
      { label: "Dietary Guidelines for Americans (USDA/HHS)", url: "https://www.dietaryguidelines.gov" },
      { label: "Harvard T.H. Chan School — The Nutrition Source", url: "https://www.hsph.harvard.edu/nutritionsource/" },
    ],
  },
  {
    slug: "safe-storage-medications",
    title: "Where to Store Medications (and Where Not To)",
    excerpt:
      "Bathroom cabinets are the worst place for most prescriptions. Here's what works better.",
    category: "Medication Safety",
    author: "Marcus Chen, PharmD",
    date: "January 8, 2025",
    readTime: "3 min read",
    gradient: "from-[#f2ecdb] to-[#e7edf7]",
    icon: "🗄️",
    body: [
      "Heat and humidity break down most medications faster than the printed expiration suggests. That's a problem, because the bathroom is exactly where most of us keep them.",
      "A cool, dry drawer in the bedroom or kitchen works better. Keep them in the original container, and out of reach of children and pets.",
    ],
    sources: [
      { label: "FDA — Where and How to Dispose of Unused Medicines", url: "https://www.fda.gov/consumers/consumer-updates/where-and-how-dispose-unused-medicines" },
    ],
  },
  {
    slug: "allergy-season-survival",
    title: "An Allergy Season Survival Kit",
    excerpt:
      "Non-drowsy antihistamines, saline rinses, and when it's time to see someone about it.",
    category: "Seasonal Health",
    author: "Priya Shah, PharmD",
    date: "December 12, 2024",
    readTime: "5 min read",
    gradient: "from-[#dbeef5] to-[#e8f4e9]",
    icon: "🌸",
    body: [
      "Seasonal allergies are miserable but manageable. Start non-drowsy antihistamines a week before symptoms typically begin and keep them consistent through the season.",
      "A saline nasal rinse once a day clears pollen before it triggers a reaction. If symptoms persist despite treatment, ask about prescription options.",
    ],
    sources: [
      { label: "American Academy of Allergy, Asthma & Immunology", url: "https://www.aaaai.org" },
      { label: "Mayo Clinic — Seasonal Allergies", url: "https://www.mayoclinic.org/diseases-conditions/hay-fever/symptoms-causes/syc-20373039" },
    ],
  },
];
