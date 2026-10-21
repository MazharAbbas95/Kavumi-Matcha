import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check, Droplets, Flame, Clock, Heart } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const BrewingGuidePage: React.FC = () => {
  const [servings, setServings] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState<'traditional' | 'latte' | 'iced'>('traditional');

  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#f8f3e8]/70 border-b border-[#e7e2d7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede2] border border-[#e7e2d7] text-[#775a1a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              THE KAVUMI PREPARATION RITUAL
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#002516] tracking-tight leading-tight">
            How to Make Matcha
          </h1>

          <p className="text-base sm:text-lg text-[#414843] max-w-2xl mx-auto leading-relaxed">
            Simple ingredients. Thoughtful preparation. A moment that belongs to you. Whether whisking pure usucha or blending a velvety latte, follow our guide for luminous jade micro-foam and zero bitterness.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-wider text-[#775a1a] font-semibold">
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#002516]" />
              <span>Optimal Temp: 80°C (176°F)</span>
            </span>
            <span className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#002516]" />
              <span>Water: Filtered / Soft</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#002516]" />
              <span>Whisk Time: 20–30 Seconds</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PREPARATION METHODS */}
      <section className="w-full py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
            CHOOSE YOUR METHOD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#002516]">
            Three Distinct Expressions
          </h2>
          <p className="text-sm text-[#414843] max-w-lg mx-auto">
            Ceremonial matcha accommodates your daily mood—from mindful morning contemplation to chilled afternoon refreshment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Method 1: Traditional Usucha */}
          <div className="bg-[#ffffff] rounded-2xl border border-[#e7e2d7] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] bg-[#f2ede2] relative overflow-hidden">
              <img
                src={ASSETS.matchaFoam}
                alt="Traditional whisked matcha"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#002516] text-[#ffffff] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                TRADITIONAL USUCHA
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#002516]">
                  Traditional-Style Matcha
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Whisk the powder with warm water until evenly combined and crowned with a thick layer of silky jade micro-foam.
                </p>

                <div className="bg-[#f8f3e8] p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Matcha Powder:</span>
                    <span>1.5 – 2 g (approx. 1/2 tsp)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Water Volume:</span>
                    <span>60 – 70 ml (2.5 oz)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Water Temperature:</span>
                    <span>80°C / 176°F</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    How to Prepare:
                  </p>
                  <ol className="text-xs text-[#414843] space-y-1.5 list-decimal pl-4">
                    <li>Sift 1–2 scoops of matcha into a warm chawan bowl.</li>
                    <li>Add 60ml of water heated to 80°C (not boiling).</li>
                    <li>Whisk in a rapid W-shaped wrist motion for 20 seconds.</li>
                    <li>Slow down slightly to break larger bubbles into microfoam.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2: Matcha Latte */}
          <div className="bg-[#ffffff] rounded-2xl border border-[#e7e2d7] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] bg-[#f2ede2] relative overflow-hidden">
              <img
                src={ASSETS.icedLatte}
                alt="Creamy matcha latte"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#775a1a] text-[#ffffff] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                CREAMY LATTE
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#002516]">
                  Matcha Latte (Warm)
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Mix the powder with a small amount of warm water into a rich concentrate, then fold into silky warm oat or whole dairy milk.
                </p>

                <div className="bg-[#f8f3e8] p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Matcha Powder:</span>
                    <span>2 g (1 level tsp)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Warm Water:</span>
                    <span>30 ml (to make paste)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Steamed Milk:</span>
                    <span>150 – 180 ml (6 oz)</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    How to Prepare:
                  </p>
                  <ol className="text-xs text-[#414843] space-y-1.5 list-decimal pl-4">
                    <li>Sift matcha powder into cup or bowl.</li>
                    <li>Add 30ml warm water and whisk until completely smooth.</li>
                    <li>Steam or froth oat milk until creamy and aerated.</li>
                    <li>Gently pour milk over matcha concentrate, dusting extra powder.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3: Iced Matcha */}
          <div className="bg-[#ffffff] rounded-2xl border border-[#e7e2d7] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-[4/3] bg-[#f2ede2] relative overflow-hidden">
              <img
                src={ASSETS.matchaSplash}
                alt="Refreshing iced matcha"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#173b2a] text-[#ffffff] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                REFRESHING ICED
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#002516]">
                  Iced Matcha
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Prepare a smooth ceremonial matcha mixture, pour over crystal-clear ice cubes, and top with chilled oat milk or filtered spring water.
                </p>

                <div className="bg-[#f8f3e8] p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Matcha Powder:</span>
                    <span>2 g (approx. 1 tsp)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Warm Water (to dissolve):</span>
                    <span>40 ml (80°C)</span>
                  </div>
                  <div className="flex justify-between text-[#002516] font-medium">
                    <span>Cold Milk or Water:</span>
                    <span>120 – 150 ml over Ice</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    How to Prepare:
                  </p>
                  <ol className="text-xs text-[#414843] space-y-1.5 list-decimal pl-4">
                    <li>Whisk matcha with 40ml warm water until fully aerated.</li>
                    <li>Fill a tall glass with fresh clear ice cubes.</li>
                    <li>Pour chilled oat milk into glass first (for a gradient layer).</li>
                    <li>Slowly pour the whisked matcha over the top. Stir and enjoy!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE RATIO CALCULATOR */}
      <section className="w-full bg-[#f8f3e8] py-16 border-t border-b border-[#e7e2d7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              PRECISION CALCULATOR
            </span>
            <h2 className="font-serif text-3xl text-[#002516]">
              Interactive Ratio Calculator
            </h2>
            <p className="text-sm text-[#414843] max-w-md mx-auto">
              Select your preferred style and number of servings to get exact measurements for your perfect bowl.
            </p>
          </div>

          <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl border border-[#e7e2d7] shadow-sm space-y-8">
            {/* Style Selector */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={() => setSelectedStyle('traditional')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedStyle === 'traditional'
                    ? 'bg-[#002516] text-[#ffffff] shadow-sm'
                    : 'bg-[#f2ede2] text-[#414843] hover:bg-[#ede8dd]'
                }`}
              >
                Traditional Usucha
              </button>
              <button
                type="button"
                onClick={() => setSelectedStyle('latte')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedStyle === 'latte'
                    ? 'bg-[#002516] text-[#ffffff] shadow-sm'
                    : 'bg-[#f2ede2] text-[#414843] hover:bg-[#ede8dd]'
                }`}
              >
                Matcha Latte
              </button>
              <button
                type="button"
                onClick={() => setSelectedStyle('iced')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedStyle === 'iced'
                    ? 'bg-[#002516] text-[#ffffff] shadow-sm'
                    : 'bg-[#f2ede2] text-[#414843] hover:bg-[#ede8dd]'
                }`}
              >
                Iced Matcha
              </button>
            </div>

            {/* Serving Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-[#002516]">Servings to Prepare:</span>
                <span className="font-bold text-base text-[#775a1a]">
                  {servings} {servings === 1 ? 'Cup' : 'Cups'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="w-full accent-[#002516] h-2 bg-[#f2ede2] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#414843]/70 uppercase tracking-wider">
                <span>1 Cup</span>
                <span>2 Cups</span>
                <span>3 Cups</span>
                <span>4 Cups</span>
                <span>5 Cups</span>
                <span>6 Cups</span>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e7e2d7]">
              <div className="bg-[#f8f3e8] p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a]">
                  KAVUMI MATCHA POWDER
                </span>
                <p className="font-serif text-2xl text-[#002516] font-medium">
                  {selectedStyle === 'traditional' ? servings * 2 : servings * 2} g
                </p>
                <span className="text-xs text-[#414843]">
                  ({servings} to {servings * 2} chashaku scoops)
                </span>
              </div>

              <div className="bg-[#f8f3e8] p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a]">
                  HOT WATER (80°C / 176°F)
                </span>
                <p className="font-serif text-2xl text-[#002516] font-medium">
                  {selectedStyle === 'traditional'
                    ? servings * 65
                    : selectedStyle === 'latte'
                    ? servings * 30
                    : servings * 40}{' '}
                  ml
                </p>
                <span className="text-xs text-[#414843]">
                  ({((selectedStyle === 'traditional' ? servings * 65 : selectedStyle === 'latte' ? servings * 30 : servings * 40) / 29.57).toFixed(1)} oz)
                </span>
              </div>

              <div className="bg-[#f8f3e8] p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a]">
                  {selectedStyle === 'traditional' ? 'WHISK MOTION' : 'MILK / LIQUID'}
                </span>
                <p className="font-serif text-2xl text-[#002516] font-medium">
                  {selectedStyle === 'traditional'
                    ? '20 sec W-whisk'
                    : `${servings * 150} ml`}
                </p>
                <span className="text-xs text-[#414843]">
                  {selectedStyle === 'traditional'
                    ? 'Until microfoam crowns'
                    : 'Warm frothed or chilled'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARE & UTENSILS GUIDE (BAMBOO WHISK / CHASEN CARE) */}
      <section className="w-full py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#e7e2d7]">
              <img
                src={ASSETS.tinWithBowl}
                alt="Chasen bamboo whisk resting on ceramic holder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              TRADITIONAL TOOLS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002516]">
              Caring for Your Chasen & Chashaku
            </h2>
            <p className="text-base text-[#414843] leading-relaxed">
              A handcrafted bamboo whisk (Chasen) contains up to 100 delicate tines cut from single stalks of mature bamboo. Proper care preserves their curved shape and ensures effortless frothing for years.
            </p>

            <div className="space-y-3 text-sm text-[#414843]">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f2ede2] text-[#002516] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong>Pre-soak tines:</strong> Before whisking, dip the bamboo tines in warm water for 15 seconds to soften them and prevent breakage.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f2ede2] text-[#002516] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong>Rinse immediately:</strong> Rinse thoroughly with warm running water immediately after use. Never use soap, detergents, or dishwashers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f2ede2] text-[#002516] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong>Dry on a Kusenaoshi:</strong> Place your whisk on a ceramic whisk holder to allow air circulation and maintain the curved blossom shape.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/products/kavumi-matcha-ritual-set"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#002516] text-[#ffffff] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#173b2a] transition-colors shadow-md"
              >
                <span>Discover The Kavumi Ritual Set</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
