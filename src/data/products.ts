import { Product } from '../types';
import { ASSETS } from './assets';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-ceremonial-30g',
    slug: 'kavumi-matcha-powder',
    name: 'Kavumi Ceremonial Grade Matcha Powder',
    subtitle: 'First harvest Uji-style ceremonial grade, stone-milled with vibrant jade froth and delicate umami sweet notes.',
    tag: 'Single Origin',
    tagColor: 'primary',
    badge: 'SINGLE-ORIGIN CEREMONIAL GRADE',
    harvest: 'Spring First Flush (Ichibancha)',
    price: 38.0,
    netWeight: '30 g tin (approx. 1.05 oz)',
    servings: 'Approx. 20–30 servings',
    terroir: 'Wazuka & Uji Terroir, Kyoto',
    milling: 'Granite Stone Ground (< 5 Micron)',
    origin: 'Uji, Kyoto Prefecture, Japan',
    grade: 'Highest Tier Ceremonial Grade (First Flush / Spring Harvest)',
    ingredients: '100% Japanese Green Tea (Camellia sinensis)',
    description:
      'Bring a refined tea ritual into your everyday routine with Kavumi Matcha Powder. Its vibrant green color, distinctive tea character, and versatile preparation options make it a considered choice for traditional matcha and matcha latte creations.',
    longDescription: [
      'Matcha, Made Personal: Kavumi Matcha Powder invites you to experience matcha at your own pace. Prepare it as a simple whisked tea, blend it into a velvety latte, or experiment with refreshing iced recipes that suit your personal taste.',
      'Designed for those who appreciate thoughtful details, Kavumi pairs a premium brand experience with the simple pleasure of preparing an unhurried, mindful cup of matcha.',
      'Shaded for 28 days beneath rice straw to stimulate intense chlorophyll and L-theanine development, our hand-picked tencha leaves are destemmed and stone-ground on slow granite mills in Kyoto to preserve ethereal floral aromatics.'
    ],
    tasteProfile: {
      umami: 92,
      creaminess: 88,
      astringency: 15,
    },
    features: [
      '100% First Flush Ichibancha Leaves',
      'Shade-grown for 28 days beneath natural straw mats',
      'Stone-milled at 30g per hour on granite stones',
      'Airtight double-lidded recyclable canister',
      'Zero artificial additives, preservatives, or added sugars'
    ],
    preparationBenchmark:
      'Sift 1–2g (approx. 1/2 tsp) into a warm chawan bowl, add 60ml of 80°C (176°F) filtered water, and whisk briskly in a W-pattern until a dense microfoam crowns the surface.',
    storage:
      'Keep sealed in a cool, dark place. Refrigerate after opening for optimal aroma and vibrant jade green color preservation. Best enjoyed within 60 days of unsealing.',
    image: ASSETS.productTin,
    images: [
      ASSETS.productTin,
      ASSETS.whiskedMicrofoam,
      ASSETS.bambooScoopPowder,
      ASSETS.cafeScene,
      ASSETS.icedMatchaSplash
    ],
    inStock: true,
    category: 'powder'
  },
  {
    id: 'prod-ritual-set',
    slug: 'kavumi-matcha-ritual-set',
    name: 'The Kavumi Matcha Ritual Set',
    subtitle: 'Ceremonial Matcha 30g, Handcrafted Bamboo Whisk (Chasen), Ceramic Whisk Holder & Chashaku for pure mindfulness.',
    tag: 'Complete Kit',
    tagColor: 'secondary',
    badge: 'CURATED RITUAL EDITION',
    harvest: 'Handcrafted Artisan Kit',
    price: 76.0,
    originalPrice: 88.0,
    netWeight: '4-Piece Gift Ensemble',
    servings: 'Complete starter ceremony',
    terroir: 'Wazuka Kyoto & Takayama Bamboo Craft',
    milling: 'Hand-split 100-prong bamboo & Stone Ground',
    origin: 'Kyoto & Nara Prefectures, Japan',
    grade: 'Master Artisan Selection',
    ingredients: '100% Ceremonial Matcha (30g), Golden Bamboo, Glazed Stoneware',
    description:
      'The quintessential four-piece collection for building an intentional morning matcha ritual. Includes a full 30g tin of Ceremonial Grade Matcha, a 100-prong golden bamboo whisk, a sculpted ceramic whisk keeper to maintain tine geometry, and a traditional bamboo scoop.',
    longDescription: [
      'Everything required to begin your mindfulness journey. Hand-selected tools that elevate preparation from a chore into a calming daily ceremony.',
      'The bamboo whisk is hand-carved in Takayama by generational masters from natural cured white bamboo, designed to create instantaneous micro-foam with effortless wrist movement.',
      'Packaged in a debossed textured linen presentation box, ready for mindful gifting or displaying prominently in your kitchen tea corner.'
    ],
    tasteProfile: {
      umami: 95,
      creaminess: 90,
      astringency: 12,
    },
    features: [
      'Full 30g Kavumi Ceremonial Grade Matcha Tin',
      '100-Tine Handcrafted Golden Bamboo Whisk (Chasen)',
      'Sculpted Emerald Ceramic Whisk Holder (Kusenaoshi)',
      'Traditional Hand-Curved Bamboo Scoop (Chashaku)',
      'Rigid linen gift box with gold-foil seal'
    ],
    preparationBenchmark:
      'Warm the chasen tines in warm water for 20 seconds. Scoop 2 chashaku spoons (approx. 1.5g) into bowl, add 60ml warm water at 80°C, whisk until frothy.',
    storage:
      'Rinse bamboo tools with warm water only (no soap). Store chasen upright on the ceramic holder to preserve its tulip flare.',
    image: ASSETS.whiskedMicrofoam,
    images: [
      ASSETS.whiskedMicrofoam,
      ASSETS.productTin,
      ASSETS.bambooScoopPowder,
      ASSETS.cafeScene
    ],
    inStock: true,
    category: 'sets'
  },
  {
    id: 'prod-reserve-50g',
    slug: 'kavumi-reserve-harvest-50g',
    name: 'Kavumi Reserve Harvest Matcha (50g)',
    subtitle: 'Limited single-estate reserve from shaded Okumidori cultivars. Velvety body, profound umami, lingering floral finish.',
    tag: 'Limited Reserve',
    tagColor: 'primary',
    badge: 'SINGLE-ESTATE RESERVE',
    harvest: 'Single-Plot Hand-Picked First Flush',
    price: 58.0,
    netWeight: '50 g tin (approx. 1.76 oz)',
    servings: 'Approx. 35–45 servings',
    terroir: 'Shirakawa & Wazuka, Kyoto',
    milling: 'Artisanal Slow Granite (< 4 Micron)',
    origin: 'Shirakawa, Kyoto Prefecture, Japan',
    grade: 'Pinnacle Competition Grade Reserve',
    ingredients: '100% Japanese Green Tea (Single Cultivar Okumidori)',
    description:
      'Our master tea blender’s most celebrated reserve. Sourced exclusively from shaded mature Okumidori bushes grown on misty mountainsides in Shirakawa. Rich, creamy, deeply comforting, and naturally sweet without a trace of bitterness.',
    longDescription: [
      'For the devoted connoisseur who seeks a transcendent cup. Exceptional depth of savoriness with lingering pistachio and honeydew undertones.',
      'Shaded for a prolonged 35 days under dual straw mats, forcing the plant to draw minerals from deep subterranean soil.',
      'Milled at an exceptionally slow speed of 25 grams per hour to ensure cool granite contact throughout the process.'
    ],
    tasteProfile: {
      umami: 98,
      creaminess: 96,
      astringency: 8,
    },
    features: [
      '100% Single Cultivar Okumidori',
      'Extended 35-Day Traditional Honzu Shading',
      'Stone-milled under 4 micron consistency',
      'Satin gold collector canister with pull-ring safety seal',
      'Tested for zero heavy metals and chemical residue'
    ],
    preparationBenchmark:
      'Ideal for both thin tea (Usucha) and concentrated thick tea (Koicha). Sift 2-3g, whisk with 50ml soft mineral water at 75°C.',
    storage:
      'Keep tightly sealed and refrigerated. Allow tin to come to room temperature before opening to avoid condensation.',
    image: ASSETS.bambooScoopPowder,
    images: [
      ASSETS.bambooScoopPowder,
      ASSETS.productTin,
      ASSETS.whiskedMicrofoam,
      ASSETS.icedMatchaSplash
    ],
    inStock: true,
    category: 'powder'
  }
];

export const FEATURED_PRODUCT = PRODUCTS[0];
