import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { ASSETS } from '../data/assets';

export const CollectionPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'powder' | 'sets'>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15]">
      {/* 1. COLLECTION HERO */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#e7e2d7] bg-[#f8f3e8]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#f2ede2] border border-[#e7e2d7] text-[#775a1a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              MATCHA POWDER SELECTION
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#002516] tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            Explore Kavumi Matcha Powder
          </h1>

          <p className="text-base sm:text-lg text-[#414843] max-w-2xl mx-auto leading-relaxed">
            First flush ceremonial grade green tea stone-milled in Uji, Kyoto. Cultivated in shadow, crafted for clarity, calm energy, and your daily morning ritual.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeCategory === 'all'
                  ? 'bg-[#002516] text-[#ffffff]'
                  : 'bg-[#f2ede2] text-[#414843] hover:text-[#002516] hover:bg-[#ede8dd]'
              }`}
            >
              All Offerings ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('powder')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeCategory === 'powder'
                  ? 'bg-[#002516] text-[#ffffff]'
                  : 'bg-[#f2ede2] text-[#414843] hover:text-[#002516] hover:bg-[#ede8dd]'
              }`}
            >
              Ceremonial Grade
            </button>
            <button
              onClick={() => setActiveCategory('sets')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeCategory === 'sets'
                  ? 'bg-[#002516] text-[#ffffff]'
                  : 'bg-[#f2ede2] text-[#414843] hover:text-[#002516] hover:bg-[#ede8dd]'
              }`}
            >
              Ritual Sets & Tools
            </button>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG GRID */}
      <section className="w-full bg-[#f8f3e8] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e7e2d7]">
        <div className="max-w-7xl mx-auto">
          {/* Section Indicator Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e7e2d7] text-[#414843]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#775a1a]">
              CURATED EDITIONS [0{filteredProducts.length}]
            </span>
            <span className="text-xs text-[#414843]/70 hidden sm:inline">
              First Flush Uji Terroir • Granite Stone Ground • Vacuum Sealed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON & SELECTION GUIDE */}
      <section className="w-full bg-[#fef9ee] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              SELECTION GUIDE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002516]">
              Choose Your Match
            </h2>
            <p className="text-sm text-[#414843] max-w-lg mx-auto">
              Every Kavumi harvest is certified ceremonial quality, cultivated with strict shadow shading and traditional artisan milling.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e7e2d7] bg-[#ffffff] shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f8f3e8] border-b border-[#e7e2d7] text-xs font-semibold uppercase tracking-wider text-[#002516]">
                <tr>
                  <th className="py-4 px-6">Attributes</th>
                  <th className="py-4 px-6">Ceremonial 30g</th>
                  <th className="py-4 px-6">Reserve Harvest 50g</th>
                  <th className="py-4 px-6">The Ritual Set</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e2d7] text-[#414843]">
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Terroir</td>
                  <td className="py-4 px-6">Wazuka, Kyoto</td>
                  <td className="py-4 px-6">Uji & Shirakawa, Kyoto</td>
                  <td className="py-4 px-6">Single Estate Wazuka</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Harvest / Flush</td>
                  <td className="py-4 px-6">First Flush (Spring)</td>
                  <td className="py-4 px-6">First Flush Hand-Picked</td>
                  <td className="py-4 px-6">First Flush (Spring)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Shading Period</td>
                  <td className="py-4 px-6">21 Days Kanreisha</td>
                  <td className="py-4 px-6">28 Days Traditional Honzu</td>
                  <td className="py-4 px-6">21 Days Kanreisha</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Flavor Profile</td>
                  <td className="py-4 px-6">Sweet vegetative, delicate umami, zero bitterness</td>
                  <td className="py-4 px-6">Rich velvety cream, profound umami, lingering sweet finish</td>
                  <td className="py-4 px-6">Balanced, silky froth, pairs with milk or pure usucha</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Best Prepared As</td>
                  <td className="py-4 px-6">Usucha, Iced Latte</td>
                  <td className="py-4 px-6">Traditional Usucha & Koicha</td>
                  <td className="py-4 px-6">Complete Daily Ritual</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Packaging</td>
                  <td className="py-4 px-6">30g UV airtight tin</td>
                  <td className="py-4 px-6">50g Collector's tin</td>
                  <td className="py-4 px-6">30g tin + Whisk + Spoon + Rest</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-[#1d1c15]">Price</td>
                  <td className="py-4 px-6 font-semibold text-[#002516]">$38.00</td>
                  <td className="py-4 px-6 font-semibold text-[#002516]">$58.00</td>
                  <td className="py-4 px-6 font-semibold text-[#002516]">$76.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. TERROIR & QUALITY BANNER */}
      <section className="w-full bg-[#173b2a] text-[#ffffff] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fed489]">
              OUR QUALITY PROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Milled in Small Batches, Never Stored in Warehouses.
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Standard commercial matcha often sits in distribution centers for months before reaching shelves, losing its delicate chlorophyll and sweetness. Kavumi matcha is cold-milled in Kyoto and hermetically sealed to preserve the emerald hue and fresh vegetative aroma.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-white/90">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#fed489] text-[#271900] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Direct partner farms in Uji, Wazuka, and Kagoshima</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#fed489] text-[#271900] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Rigorous pesticide and heavy metal third-party lab testing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#fed489] text-[#271900] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Recyclable tin canisters with pull-ring safety seal</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                to="/brewing-guide"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#fed489] hover:text-white transition-colors"
              >
                <span>Read our Matcha Preparation Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={ASSETS.powderScoop}
                alt="Finely milled ceremonial matcha powder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
