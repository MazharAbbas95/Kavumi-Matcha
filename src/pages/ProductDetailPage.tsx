import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Leaf
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/product/ProductCard';
import { ASSETS } from '../data/assets';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by slug or default to ceremonial grade
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedServing, setSelectedServing] = useState<'traditional' | 'latte' | 'iced'>('traditional');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('specs');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
  }, [slug]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15]">
      {/* 1. BREADCRUMBS & TOP NAV ANCHOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs text-[#414843]/80">
          <Link to="/" className="hover:text-[#002516] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections/matcha-powder" className="hover:text-[#002516] transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-[#002516] font-medium truncate">{product.name}</span>
        </nav>
      </div>

      {/* 2. PRIMARY PRODUCT SHOWCASE & PURCHASE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Asymmetric Visual Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative bg-[#ffffff] p-4 sm:p-6 rounded-2xl shadow-[0_20px_50px_rgba(23,59,42,0.08)] border border-[#e7e2d7] overflow-hidden">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#f2ede2]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#002516] text-[#ffffff] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#fef9ee]/95 backdrop-blur-md rounded-lg shadow-sm border border-[#e7e2d7] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-[#775a1a] uppercase tracking-wider block">
                      ORIGIN CERTIFICATION
                    </span>
                    <p className="font-serif text-base text-[#002516] font-medium">
                      {product.terroir}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#173b2a]">
                    <Leaf className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery & Asset References */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm bg-[#ffffff] p-2">
                <img
                  src={ASSETS.matchaFoam}
                  alt="Microfoam consistency"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm bg-[#ffffff] p-2">
                <img
                  src={ASSETS.powderScoop}
                  alt="Finely milled powder"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm bg-[#ffffff] p-2">
                <img
                  src={ASSETS.icedLatte}
                  alt="Prepared iced matcha"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Product Narrative, Specs & Add to Cart */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a] block mb-2">
                {product.badge}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#002516] leading-tight mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-[#775a1a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#775a1a]" />
                  ))}
                </div>
                <span className="text-xs text-[#414843]/80">5.0 (48 Verified Ritual Reviews)</span>
              </div>
              <div className="flex items-baseline gap-3 pb-6 border-b border-[#e7e2d7]">
                <span className="font-serif text-3xl text-[#002516] font-medium">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#414843]/70">
                  USD / {product.netWeight} ({product.servings})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-[#414843] leading-relaxed">
              {product.description}
            </p>

            {/* Micro Metrology Badge */}
            <div className="bg-[#f8f3e8] border border-[#e7e2d7] p-4 rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#775a1a] tracking-wider">
                  TERROIR & CULTIVAR
                </span>
                <span className="font-medium text-[#002516]">{product.terroir}</span>
              </div>
              <div className="h-8 w-px bg-[#e7e2d7]" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#775a1a] tracking-wider">
                  MILLING
                </span>
                <span className="font-medium text-[#002516]">{product.milling}</span>
              </div>
              <div className="h-8 w-px bg-[#e7e2d7]" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#775a1a] tracking-wider">
                  HARVEST
                </span>
                <span className="font-medium text-[#002516]">{product.harvest}</span>
              </div>
            </div>

            {/* Sensory Matrix */}
            <div className="bg-[#ffffff] border border-[#e7e2d7] p-5 rounded-xl space-y-3 shadow-xs">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#775a1a] block">
                SENSORY ATTRIBUTES
              </span>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#002516]">Umami</span>
                    <span className="text-[#775a1a] font-semibold">9.5/10</span>
                  </div>
                  <div className="w-full bg-[#f2ede2] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#002516] h-full w-[95%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#002516]">Creaminess</span>
                    <span className="text-[#775a1a] font-semibold">9.0/10</span>
                  </div>
                  <div className="w-full bg-[#f2ede2] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#002516] h-full w-[90%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#002516]">Astringency</span>
                    <span className="text-[#775a1a] font-semibold">1.5/10</span>
                  </div>
                  <div className="w-full bg-[#f2ede2] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#775a1a] h-full w-[15%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Primary CTA */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Stepper */}
                <div className="inline-flex items-center justify-between bg-[#f8f3e8] border border-[#e7e2d7] rounded-lg px-3 py-2 sm:w-36">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#414843] hover:text-[#002516] transition-colors font-medium text-lg"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-[#002516]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#414843] hover:text-[#002516] transition-colors font-medium text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-8 rounded-lg text-xs font-semibold uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 ${
                    addedAnimation
                      ? 'bg-[#173b2a] text-[#c4ecd3]'
                      : 'bg-[#002516] text-[#ffffff] hover:bg-[#173b2a]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-[#fed489]" />
                      <span>Added to Ritual Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart — ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant Checkout / Secondary */}
              <div className="flex items-center justify-between text-xs text-[#414843] pt-1">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#173b2a]" />
                  <span>In Stock • Ready to ship</span>
                </span>
                <Link
                  to="/brewing-guide"
                  className="text-[#775a1a] hover:text-[#002516] underline underline-offset-4 font-medium transition-colors"
                >
                  Learn how to prepare matcha
                </Link>
              </div>
            </div>

            {/* Shipping & Trust Guarantees */}
            <div className="bg-[#f8f3e8] border border-[#e7e2d7] p-4 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#002516] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#002516]">
                    Complimentary US Shipping on orders over $50
                  </p>
                  <p className="text-[#414843]/80">
                    Dispatched within 24-48 business hours in insulated recyclable packaging.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-1 border-t border-[#e7e2d7]">
                <ShieldCheck className="w-5 h-5 text-[#002516] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-[#002516]">Freshness Sealed at Source</p>
                  <p className="text-[#414843]/80">
                    Pull-ring aluminum sealed tin preserves green chlorophyll and active L-theanine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & EXPANDABLE DETAILS */}
      <section className="w-full bg-[#f8f3e8] py-16 border-t border-b border-[#e7e2d7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
              TRANSPARENCY & PROVENANCE
            </span>
            <h2 className="font-serif text-3xl text-[#002516] mt-1">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-[#ffffff] rounded-xl border border-[#e7e2d7] shadow-sm overflow-hidden divide-y divide-[#e7e2d7] text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#f2ede2]/40">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Product Name
              </span>
              <span className="md:col-span-2 text-[#002516] font-medium">
                {product.name}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Brand
              </span>
              <span className="md:col-span-2 text-[#002516]">Kavumi Matcha</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#f2ede2]/40">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Net Weight
              </span>
              <span className="md:col-span-2 text-[#002516]">{product.netWeight}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Terroir & Origin
              </span>
              <span className="md:col-span-2 text-[#002516]">{product.terroir}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#f2ede2]/40">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Grade
              </span>
              <span className="md:col-span-2 text-[#002516] font-medium">
                Highest Tier Ceremonial Grade (First Flush / Spring Harvest)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Ingredients
              </span>
              <span className="md:col-span-2 text-[#002516]">
                100% Japanese Green Tea (<em>Camellia sinensis</em>)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-[#f2ede2]/40">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Storage Recommendation
              </span>
              <span className="md:col-span-2 text-[#414843] leading-relaxed">
                Keep sealed in a cool, dark place. Refrigerate after opening for optimal aroma and vibrant jade green color preservation. Best enjoyed within 60 days of unsealing.
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
              <span className="font-semibold text-xs uppercase tracking-wider text-[#775a1a]">
                Preparation Benchmark
              </span>
              <span className="md:col-span-2 text-[#414843] leading-relaxed">
                Sift 1–2g (1/2 tsp) into a chawan bowl, add 60ml 80°C (176°F) filtered water, whisk vigorously in a rapid W-motion until microfoam crowns the surface.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE PREPARATION EXPRESSIONS */}
      <section className="w-full bg-[#fef9ee] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
                THREE EXPRESSIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#002516] mt-1">
                How to Enjoy Kavumi
              </h2>
            </div>
            <p className="text-sm text-[#414843] max-w-md">
              Whether honoring ancestral ceremony or pouring an afternoon chilled refreshment, adjust water, milk, and motion to your personal rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expression 1: Traditional-Style */}
            <div className="bg-[#ffffff] rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-[#f2ede2] relative">
                <img
                  src={ASSETS.matchaFoam}
                  alt="Traditional Whisked Matcha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#002516] text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  01 • TRADITIONAL
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#002516] mb-2">
                    Traditional-Style Matcha
                  </h3>
                  <p className="text-sm text-[#414843] leading-relaxed">
                    Whisk the powder with warm water until evenly combined and topped with silky jade micro-foam.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#e7e2d7] flex items-center justify-between text-xs text-[#775a1a] font-medium uppercase tracking-wider">
                  <span>80°C Water</span>
                  <span>Bamboo Whisk</span>
                </div>
              </div>
            </div>

            {/* Expression 2: Matcha Latte */}
            <div className="bg-[#ffffff] rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-[#f2ede2] relative">
                <img
                  src={ASSETS.icedLatte}
                  alt="Matcha Latte"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#002516] text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  02 • CREAMY
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#002516] mb-2">
                    Matcha Latte
                  </h3>
                  <p className="text-sm text-[#414843] leading-relaxed">
                    Mix the powder with a little warm water, then add your preferred warm oat or dairy milk.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#e7e2d7] flex items-center justify-between text-xs text-[#775a1a] font-medium uppercase tracking-wider">
                  <span>Steamed Oat Milk</span>
                  <span>Silky Texture</span>
                </div>
              </div>
            </div>

            {/* Expression 3: Iced Matcha */}
            <div className="bg-[#ffffff] rounded-xl overflow-hidden border border-[#e7e2d7] shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-[#f2ede2] relative">
                <img
                  src={ASSETS.matchaSplash}
                  alt="Iced Matcha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#002516] text-[#ffffff] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  03 • REFRESHING
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#002516] mb-2">
                    Iced Matcha
                  </h3>
                  <p className="text-sm text-[#414843] leading-relaxed">
                    Prepare a smooth matcha mixture, pour over ice, and add cold milk or filtered water as desired.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#e7e2d7] flex items-center justify-between text-xs text-[#775a1a] font-medium uppercase tracking-wider">
                  <span>Chilled Ice</span>
                  <span>Layered Pour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RELATED OFFERINGS */}
      {relatedProducts.length > 0 && (
        <section className="w-full bg-[#f8f3e8] py-16 border-t border-[#e7e2d7] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
                  COMPLETE YOUR SANCTUARY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#002516] mt-1">
                  Related Ritual Selections
                </h2>
              </div>
              <Link
                to="/collections/matcha-powder"
                className="text-xs font-semibold uppercase tracking-wider text-[#002516] hover:text-[#173b2a] flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
