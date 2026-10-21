import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, ShieldCheck, Heart, Award } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 bg-[#002516] text-[#ffffff] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fed489_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173b2a] border border-[#2a4e3c] text-[#fed489]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                  OUR STORY & PHILOSOPHY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#ffdea5] leading-tight tracking-tight">
                The Philosophy <br />
                <span className="italic font-light text-white">Behind Kavumi</span>
              </h1>

              <p className="text-base sm:text-lg text-[#ffffff]/80 max-w-xl leading-relaxed">
                A modern homage to eight centuries of Japanese tea culture. We believe everyday rituals deserve thoughtful attention, pure ingredients, and timeless beauty.
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-[#fed489] uppercase tracking-widest font-semibold">
                <span>EST. 2024</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fed489]" />
                <span>KYOTO TERROIR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fed489]" />
                <span>SHADE-GROWN TENCHA</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] group">
                <img
                  src={ASSETS.tinWithBowl}
                  alt="Kavumi Matcha ceremonial tin and ceramic bowl"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002516]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#fef9ee]/95 backdrop-blur-md rounded-xl text-[#002516] flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                      SEAL OF PURITY
                    </span>
                    <p className="font-serif text-sm font-semibold">
                      Wazuka & Uji Terroir, Kyoto
                    </p>
                  </div>
                  <img
                    src={ASSETS.logoMonogram}
                    alt="KM Monogram"
                    className="w-10 h-10 rounded-full border border-[#775a1a]/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: A RITUAL OF SIMPLICITY */}
      <section className="w-full py-16 lg:py-28 bg-[#fef9ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e7e2d7] aspect-[3/4]">
                <img
                  src={ASSETS.powderScoop}
                  alt="Emerald green ceremonial matcha powder in ceramic bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:right-6 bg-[#ffffff] p-5 rounded-xl shadow-xl border border-[#e7e2d7] max-w-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-bold text-[#775a1a]">KM</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#775a1a] uppercase tracking-wider">
                    SEAL OF PURITY
                  </p>
                  <p className="text-xs text-[#414843]">
                    Tencha shade-grown for 25–28 days
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[#775a1a]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
                  CHAPTER ONE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002516] tracking-tight leading-tight">
                A Ritual of Simplicity
              </h2>

              <div className="space-y-4 text-base text-[#414843] leading-relaxed">
                <p>
                  Kavumi Matcha was created around a simple idea: <em>everyday rituals deserve thoughtful attention</em>.
                </p>
                <p>
                  Matcha offers a distinctive way to experience tea. Its preparation encourages you to pause, focus on the process, and appreciate the moment in front of you. Unlike steep-and-discard infusions, matcha involves consuming the entire stone-milled leaf, preserving all of its chlorophyll, polyphenols, and slow-release caffeine.
                </p>
                <p>
                  Our brand reflects that philosophy through an elegant visual identity, considered details, and a modern approach to enjoying matcha without pretension.
                </p>
              </div>

              {/* Micro Metric Bento */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-[#f8f3e8] p-4 rounded-xl text-center border border-[#e7e2d7]">
                  <span className="font-serif text-3xl text-[#002516] block font-medium">
                    800<span className="text-sm font-sans text-[#775a1a]">+</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#414843]">
                    Years of Craft
                  </span>
                </div>
                <div className="bg-[#f8f3e8] p-4 rounded-xl text-center border border-[#e7e2d7]">
                  <span className="font-serif text-3xl text-[#002516] block font-medium">
                    100<span className="text-sm font-sans text-[#775a1a]">%</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#414843]">
                    Single Origin Uji
                  </span>
                </div>
                <div className="bg-[#f8f3e8] p-4 rounded-xl text-center border border-[#e7e2d7]">
                  <span className="font-serif text-3xl text-[#002516] block font-medium">
                    0<span className="text-sm font-sans text-[#775a1a]">g</span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#414843]">
                    Additives or Fillers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: ROOTED IN THE RITUAL */}
      <section className="w-full py-16 lg:py-28 bg-[#f8f3e8] border-t border-b border-[#e7e2d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[#775a1a]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
                  CHAPTER TWO
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002516] tracking-tight leading-tight">
                Rooted in the Ritual. <br />
                Designed for Today.
              </h2>

              <div className="space-y-4 text-base text-[#414843] leading-relaxed">
                <p>
                  Whether you prepare a traditional-style cup with bamboo chasen or create a contemporary velvety oat milk matcha latte, the experience is yours to shape.
                </p>
                <p>
                  Kavumi is for those who appreciate simplicity without overlooking detail, and who find meaning in the small rituals that make a day feel different.
                </p>
                <p className="font-serif text-lg text-[#002516] italic pt-2">
                  “Simple ingredients. Thoughtful preparation. A moment that belongs to you.”
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/collections/matcha-powder"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#002516] text-[#ffffff] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#173b2a] transition-all shadow-md"
                >
                  <span>Discover Our Matcha</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e7e2d7] aspect-[4/3]">
                <img
                  src={ASSETS.cafeScene}
                  alt="Matcha drink in modern cafe setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE THREE KAVUMI PILLARS */}
      <section className="w-full py-20 lg:py-28 bg-[#fef9ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              BRAND VALUES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002516]">
              The Three Kavumi Pillars
            </h2>
            <div className="w-12 h-0.5 bg-[#775a1a] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e7e2d7] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#002516]">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a] block">
                PILLAR 01
              </span>
              <h3 className="font-serif text-2xl text-[#002516]">
                Mindful Intention
              </h3>
              <p className="text-sm text-[#414843] leading-relaxed">
                Matcha is more than a beverage. It is a moment of calm attention, inviting you to slow down, breathe, and find focus in a fast-moving world.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e7e2d7] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#002516]">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a] block">
                PILLAR 02
              </span>
              <h3 className="font-serif text-2xl text-[#002516]">
                Uncompromising Quality
              </h3>
              <p className="text-sm text-[#414843] leading-relaxed">
                First harvest leaves shade-grown for 28 days beneath rice straw, hand-plucked in Kyoto and stone-milled to an ultra-fine 5-micron powder.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e7e2d7] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#002516]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a] block">
                PILLAR 03
              </span>
              <h3 className="font-serif text-2xl text-[#002516]">
                Contemporary Aesthetics
              </h3>
              <p className="text-sm text-[#414843] leading-relaxed">
                With a timeless visual identity and tactile packaging, Kavumi brings a refined presence to your kitchen counter, tea shelf, and gifting rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TERROIR: GROWN IN MIST, GROUND ON GRANITE */}
      <section className="w-full py-20 bg-[#173b2a] text-[#ffffff] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fed489]">
              THE TERROIR STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Grown in Mist, <br />
              Ground on Granite
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              The rolling hills of Wazuka in southern Kyoto are shrouded in morning river mists that naturally diffuse sunlight. Shaded for nearly a month before harvest, the tea bushes produce extraordinary concentrations of chlorophyll and L-theanine.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Each stone mill turns slowly, producing just 30 to 40 grams of powder per hour to prevent friction heat from oxidizing delicate aromatics. What reaches your tin is fresh, vibrant, and alive with sweet vegetative notes.
            </p>
            <div className="pt-2">
              <Link
                to="/collections/matcha-powder"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#fed489] hover:text-white transition-colors"
              >
                <span>Shop the First Flush Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={ASSETS.matchaFoam}
              alt="Artisanal microfoam in ceramic chawan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
