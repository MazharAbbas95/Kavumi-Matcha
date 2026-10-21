import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { FEATURED_PRODUCT } from '../data/products';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const [email, setEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleFeaturedAddToCart = () => {
    addToCart(FEATURED_PRODUCT, 1);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setNewsletterSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#fef9ee] py-16 lg:py-24">
        {/* Ambient gold/botanical aura backdrop */}
        <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-[#ffdea5]/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#c4ecd3]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text & Editorial Architecture */}
            <div className="lg:col-span-7 flex flex-col space-y-6 lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#775a1a]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
                  KAVUMI MATCHA • CEREMONIAL GRADE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#002516] tracking-tight leading-[1.1] text-balance">
                A More Refined <br className="hidden sm:inline" />
                <span className="italic font-light">Matcha Ritual</span>
              </h1>

              <p className="text-base sm:text-lg text-[#414843] max-w-xl leading-relaxed pt-1">
                Discover the art of matcha with Kavumi. Inspired by the beauty of simplicity and the ritual of tea, our matcha collection brings a thoughtful touch to your everyday moments.
              </p>

              <p className="text-sm sm:text-base text-[#414843]/80 max-w-lg leading-relaxed italic">
                &ldquo;From a quiet morning cup to a carefully crafted matcha latte, make space for a ritual worth returning to.&rdquo;
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/collections/matcha-powder"
                  className="inline-flex justify-center items-center px-8 py-3.5 bg-[#002516] text-white text-xs font-semibold uppercase tracking-wider rounded shadow-md hover:bg-[#173b2a] transition-all duration-300 group"
                >
                  <span>Shop Matcha Powder</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pages/the-art-of-matcha"
                  className="inline-flex justify-center items-center px-8 py-3.5 bg-[#f8f3e8] text-[#002516] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#ede8dd] border border-[#d8d0c1]/60 transition-colors"
                >
                  <span>Discover the Art of Matcha</span>
                </Link>
              </div>

              {/* Micro Metrology Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-[#d8d0c1]/40">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                    HARVEST
                  </span>
                  <span className="text-sm text-[#002516] font-medium block">
                    First Flush (Ichibancha)
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                    PROVENANCE
                  </span>
                  <span className="text-sm text-[#002516] font-medium block">
                    Uji, Kyoto, Japan
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                    MILLING
                  </span>
                  <span className="text-sm text-[#002516] font-medium block">
                    Granite Stone Ground
                  </span>
                </div>
              </div>
            </div>

            {/* Asymmetric Visual Anchor */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-[#fffcf5] p-4 rounded-2xl shadow-[0_20px_50px_rgba(23,59,42,0.08)] border border-[#d8d0c1]/60 relative">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-[#f2ede2]">
                    <img
                      src={ASSETS.whiskedMicrofoam}
                      alt="Ceremonial matcha froth in artisanal chawan bowl"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002516]/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#fef9ee]/90 backdrop-blur-md rounded shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                          RITUAL ELEMENT
                        </span>
                        <p className="font-serif text-lg text-[#002516] font-medium">
                          Micro-Foam Perfection
                        </p>
                      </div>
                      <Sparkles className="w-5 h-5 text-[#775a1a]" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge Accent */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-[#002516] text-white p-4 rounded-xl shadow-xl items-center gap-3 max-w-[220px] border border-[#ffdea5]/30">
                  <div className="w-10 h-10 rounded-full bg-[#ffdea5] flex items-center justify-center text-[#002516] shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-[10px] leading-tight tracking-wider uppercase font-semibold text-[#ffdea5]">
                    100% Shade Grown • Ceremonial Grade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION SECTION: Meet Your New Tea Ritual */}
      <section className="w-full bg-[#f8f3e8] py-20 lg:py-28 relative border-t border-[#e7e2d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Visual Column with Bamboo Scoop Texture */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#fffcf5] shadow-[0_16px_40px_rgba(23,59,42,0.06)] border border-[#d8d0c1]/50 p-4 flex items-center justify-center">
                  <img
                    src={ASSETS.bambooScoopPowder}
                    alt="Finely sifted jade matcha powder prepared with traditional chashaku scoop"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Decorative Accent Card */}
                <div className="absolute -top-4 -right-4 sm:-right-8 bg-[#fffcf5] p-5 rounded-xl shadow-lg border border-[#d8d0c1] max-w-[220px]">
                  <span className="text-[10px] font-semibold text-[#775a1a] tracking-wider uppercase block mb-1">
                    THE PHILOSOPHY OF MA
                  </span>
                  <p className="text-xs text-[#414843] italic leading-snug">
                    Space between thoughts; deliberate pauses that invite tranquility.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#775a1a]">
                  A Mindful Practice
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#002516] leading-tight">
                Make Every Moment a Matcha Moment
              </h2>

              <div className="space-y-4 text-[#414843] text-base leading-relaxed">
                <p>
                  Some rituals ask you to slow down. Matcha is one of them.
                </p>
                <p>
                  Measure your powder, add water, whisk until smooth, and enjoy the process. Whether you prefer a traditional preparation or a creamy iced matcha latte, Kavumi invites you to make the experience your own.
                </p>
                <p className="font-serif text-xl text-[#002516] pt-2 italic font-normal">
                  &ldquo;Simple ingredients. Thoughtful preparation. A moment that belongs to you.&rdquo;
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/collections/matcha-powder"
                  className="inline-flex items-center gap-2 text-[#002516] text-xs font-semibold tracking-wider uppercase group py-2"
                >
                  <span className="underline decoration-[#775a1a] decoration-1 underline-offset-8 group-hover:decoration-2 transition-all">
                    Explore Matcha
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#775a1a] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY / THE KAVUMI DIFFERENCE */}
      <section className="w-full bg-[#fef9ee] py-20 lg:py-28 border-t border-[#e7e2d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#775a1a]">
              CRAFT &amp; INTENTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002516]">
              A Premium Experience in Every Detail
            </h2>
            <div className="w-12 h-0.5 bg-[#775a1a] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Block 1 */}
            <div className="bg-[#fffcf5] p-8 lg:p-10 rounded-xl border border-[#d8d0c1]/60 shadow-[0_4px_24px_rgba(40,41,31,0.03)] hover:shadow-[0_16px_40px_rgba(23,59,42,0.06)] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                  01 — PRACTICE
                </span>
                <h3 className="font-serif text-2xl text-[#002516]">
                  Made for the Ritual
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Matcha is more than a drink. It is a practice built around preparation, attention, and appreciation for the little things.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f2ede2] flex items-center text-[#775a1a] text-[10px] font-semibold uppercase tracking-wider">
                <span>Presence • Intention</span>
              </div>
            </div>

            {/* Benefit Block 2 */}
            <div className="bg-[#fffcf5] p-8 lg:p-10 rounded-xl border border-[#d8d0c1]/60 shadow-[0_4px_24px_rgba(40,41,31,0.03)] hover:shadow-[0_16px_40px_rgba(23,59,42,0.06)] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                  02 — HARMONY
                </span>
                <h3 className="font-serif text-2xl text-[#002516]">
                  A Considered Aesthetic
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  With a sophisticated visual identity and elegant packaging, Kavumi brings a refined presence to your kitchen, tea shelf, or gifting collection.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f2ede2] flex items-center text-[#775a1a] text-[10px] font-semibold uppercase tracking-wider">
                <span>Form • Tactility</span>
              </div>
            </div>

            {/* Benefit Block 3 */}
            <div className="bg-[#fffcf5] p-8 lg:p-10 rounded-xl border border-[#d8d0c1]/60 shadow-[0_4px_24px_rgba(40,41,31,0.03)] hover:shadow-[0_16px_40px_rgba(23,59,42,0.06)] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                  03 — EXPRESSION
                </span>
                <h3 className="font-serif text-2xl text-[#002516]">
                  Your Matcha, Your Way
                </h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Enjoy matcha as a traditional whisked tea, a smooth latte, or a refreshing iced creation. Discover the preparation style that suits your taste.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#f2ede2] flex items-center text-[#775a1a] text-[10px] font-semibold uppercase tracking-wider">
                <span>Warm • Iced • Ceremonial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCT PRESENTATION: Discover Your Matcha */}
      <section className="w-full bg-[#173b2a] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#cfecb3_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Tin & Packaging Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#002516]/40 shadow-2xl relative flex items-center justify-center">
                  <img
                    src={ASSETS.productTin}
                    alt="Kavumi Ceremonial Grade Matcha 30g tin canister with ceramic bowl and bamboo whisk"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffdea5] text-[#271900] text-[10px] font-semibold px-3 py-1 rounded uppercase tracking-wider">
                    First Harvest 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details & Purchase Architecture */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <span className="text-[11px] font-semibold text-[#ffdea5] uppercase tracking-[0.2em]">
                FEATURED SELECTION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Your Next Favorite Cup Starts Here
              </h2>

              <p className="text-base text-[#7fa68f] leading-relaxed">
                Explore Kavumi Matcha Powder and discover new ways to bring matcha into your daily routine. Ground from shaded tencha leaves, delivering a vibrant emerald tone with natural umami sweetness and zero bitterness.
              </p>

              {/* Product Pricing Box */}
              <div className="bg-[#002516]/70 p-6 rounded-xl border border-white/10 space-y-4 my-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white font-medium">
                      Kavumi Ceremonial Grade Matcha Powder
                    </h3>
                    <span className="text-[11px] text-[#7fa68f] uppercase tracking-wider block mt-1">
                      NET WEIGHT: 30 G • APPROX. 20–30 SERVINGS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl text-[#ffdea5] font-semibold block">
                      $38.00
                    </span>
                    <span className="text-[10px] text-[#7fa68f] block uppercase tracking-wider">
                      USD • In Stock
                    </span>
                  </div>
                </div>

                {/* Sensory Matrix */}
                <div className="pt-2 space-y-2 border-t border-white/10">
                  <span className="text-[10px] font-semibold text-[#ffdea5] uppercase tracking-wider block">
                    Sensory Matrix
                  </span>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#173b2a]/80 p-2.5 rounded border border-white/5">
                      <div className="text-xs font-semibold text-white">UMAMI</div>
                      <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                        <div className="bg-[#ffdea5] h-1.5 rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div className="bg-[#173b2a]/80 p-2.5 rounded border border-white/5">
                      <div className="text-xs font-semibold text-white">CREAMINESS</div>
                      <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                        <div className="bg-[#ffdea5] h-1.5 rounded-full w-[88%]" />
                      </div>
                    </div>
                    <div className="bg-[#173b2a]/80 p-2.5 rounded border border-white/5">
                      <div className="text-xs font-semibold text-white">ASTRINGENCY</div>
                      <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                        <div className="bg-[#ffdea5] h-1.5 rounded-full w-[15%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleFeaturedAddToCart}
                  className="px-8 py-3.5 bg-[#ffdea5] text-[#271900] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#e9c178] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  {addedFeedback ? (
                    <>
                      <Check className="w-4 h-4 text-[#002516]" />
                      <span>Added to Ritual Bag ✓</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart — $38.00</span>
                    </>
                  )}
                </button>
                <Link
                  to="/products/kavumi-matcha-powder"
                  className="px-6 py-3.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-white/20 transition-colors text-center border border-white/15"
                >
                  View Product Details
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  to="/collections/matcha-powder"
                  className="inline-flex items-center gap-2 text-[#7fa68f] hover:text-white text-[11px] font-semibold uppercase tracking-widest transition-colors"
                >
                  <span>Shop the Full Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MATCHA PREPARATION STEP SEQUENCE: From Powder to Pour */}
      <section className="w-full bg-[#fef9ee] py-20 lg:py-28 border-t border-[#e7e2d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#775a1a]">
              A THREE-STEP RITUAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#002516]">
              The Art of Preparing Matcha
            </h2>
            <p className="text-sm text-[#414843]">
              Follow the contemplative cadence of chanoyu adapted for your everyday sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#f8f3e8] p-8 rounded-xl border border-[#e7e2d7] flex flex-col justify-between hover:bg-[#f2ede2] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#775a1a] font-light">01</span>
                  <span className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    Measure
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#002516]">Measure</h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Add your preferred amount of matcha powder to a bowl. Sifting 1 to 2 scoops creates an effortlessly velvety suspension.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d8d0c1]/40">
                <span className="text-[11px] text-[#775a1a] uppercase tracking-wider font-semibold">
                  RECOMMENDED: 1.5G – 2G
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f8f3e8] p-8 rounded-xl border border-[#e7e2d7] flex flex-col justify-between hover:bg-[#f2ede2] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#775a1a] font-light">02</span>
                  <span className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    Whisk
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#002516]">Whisk</h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Add a small amount of warm water and whisk until the powder is evenly mixed and a light foam forms with a brisk &lsquo;W&rsquo; motion.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d8d0c1]/40">
                <span className="text-[11px] text-[#775a1a] uppercase tracking-wider font-semibold">
                  TEMP: 70°C – 80°C (160°F)
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f8f3e8] p-8 rounded-xl border border-[#e7e2d7] flex flex-col justify-between hover:bg-[#f2ede2] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#775a1a] font-light">03</span>
                  <span className="text-xs font-semibold text-[#002516] uppercase tracking-wider">
                    Enjoy
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#002516]">Enjoy</h3>
                <p className="text-sm text-[#414843] leading-relaxed">
                  Add more water for a traditional-style tea, or combine with your preferred milk and ice for a matcha latte.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d8d0c1]/40">
                <span className="text-[11px] text-[#775a1a] uppercase tracking-wider font-semibold">
                  USUCHA OR OAT LATTE
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pages/the-art-of-matcha"
              className="inline-flex items-center gap-2 text-[#002516] text-xs font-semibold uppercase tracking-wider group py-2"
            >
              <span className="underline decoration-[#775a1a] underline-offset-8">
                Learn How to Make Matcha
              </span>
              <ArrowRight className="w-4 h-4 text-[#775a1a] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LIFESTYLE & CAFÉ HIGHLIGHT */}
      <section className="w-full bg-[#ede8dd] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fffcf5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,59,42,0.06)] border border-[#d8d0c1]/60 grid grid-cols-1 lg:grid-cols-12">
            {/* Cafe Imagery with Tiled Interior */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px]">
              <img
                src={ASSETS.cafeScene}
                alt="Two layered iced matcha lattes resting on deep green ceramic tiles in warm ambient café lighting"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>

            {/* Editorial Atmosphere Pull-Quote */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-[#fffcf5]">
              <div className="flex items-center gap-2 text-[#775a1a]">
                <span className="text-[11px] font-semibold uppercase tracking-widest">
                  KAVUMI CAFÉ &amp; ATELIER
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl text-[#002516] leading-snug italic font-normal">
                &ldquo;Crafted for morning contemplation and afternoon revival.&rdquo;
              </blockquote>

              <p className="text-sm text-[#414843] leading-relaxed">
                Experience our curated menu at our flagship tea counter. Savor slow-drip matcha, cold froth creations, and single-origin seasonal harvest flights crafted by our resident tea masters.
              </p>

              <div className="pt-2 flex items-center gap-4 border-t border-[#f2ede2]">
                <div className="space-y-0.5">
                  <span className="text-sm font-semibold text-[#002516] block">
                    Kyoto • New York
                  </span>
                  <span className="text-xs text-[#414843] block">
                    Open Daily 8:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SUBSCRIPTION SECTION */}
      <section className="w-full bg-[#fef9ee] py-20 lg:py-24 border-t border-[#e7e2d7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#f8f3e8] p-8 sm:p-12 lg:p-16 rounded-2xl shadow-sm border border-[#d8d0c1]/70 space-y-6 relative overflow-hidden">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              RITUAL DISPATCHES
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#002516] max-w-xl mx-auto leading-tight">
              A Little More Matcha in Your Inbox
            </h2>

            <p className="text-sm text-[#414843] max-w-lg mx-auto leading-relaxed">
              Discover matcha preparation tips, new recipes, and updates from Kavumi. Join our mailing list for thoughtful inspiration delivered to your inbox.
            </p>

            {newsletterSubmitted ? (
              <div className="p-4 bg-[#fffcf5] border border-[#775a1a]/30 rounded text-xs text-[#775a1a] font-semibold tracking-wide uppercase inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-[#775a1a]" />
                <span>THANK YOU FOR JOINING. WELCOME TO THE KAVUMI RITUAL.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-[#fffcf5] text-[#1d1c15] text-sm rounded border border-[#d8d0c1] focus:outline-none focus:border-[#002516] shadow-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#002516] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#173b2a] transition-colors shadow-sm whitespace-nowrap"
                >
                  Join the Kavumi List
                </button>
              </form>
            )}

            <p className="text-xs text-[#414843]/70">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime with ease.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER: Find Your Matcha Moment */}
      <section className="w-full bg-[#ffdea5] text-[#271900] py-20 lg:py-24 border-t border-[#e9c178]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
            YOUR DAILY SANCTUARY
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002516] leading-tight">
            Find Your Matcha Moment
          </h2>

          <p className="text-base sm:text-lg text-[#5d4202] max-w-xl mx-auto leading-relaxed">
            A little intention can change the rhythm of your day. Start your matcha ritual with Kavumi.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/collections/matcha-powder"
              className="px-10 py-4 bg-[#002516] text-white text-xs font-semibold uppercase tracking-widest rounded hover:bg-[#173b2a] transition-all duration-300 shadow-xl inline-flex items-center gap-3"
            >
              <span>Shop Kavumi Matcha</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
