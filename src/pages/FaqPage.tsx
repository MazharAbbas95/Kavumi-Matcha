import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'basics', label: 'Matcha Basics' },
    { id: 'preparation', label: 'Preparation & Taste' },
    { id: 'sourcing', label: 'Sourcing & Terroir' },
    { id: 'storage', label: 'Storage & Freshness' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15]">
      {/* 1. HERO */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#f8f3e8]/70 border-b border-[#e7e2d7] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ede2] border border-[#e7e2d7] text-[#775a1a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              KAVUMI CONCIERGE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#002516] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-[#414843] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our ceremonial matcha, traditional stone milling, mindful preparation, and storage.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-5 h-5 absolute left-4 top-7 text-[#414843]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search matcha questions, whisking, terroir..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#ffffff] border border-[#e7e2d7] text-sm text-[#002516] placeholder-[#414843]/60 shadow-sm focus:outline-none focus:border-[#002516]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#002516] text-[#ffffff] shadow-sm'
                    : 'bg-[#f2ede2] text-[#414843] hover:bg-[#ede8dd]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#ffffff] rounded-2xl border border-[#e7e2d7] p-8">
            <HelpCircle className="w-12 h-12 text-[#775a1a] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#002516] mb-2">
              No matching answers found
            </h3>
            <p className="text-sm text-[#414843] mb-6">
              We couldn't find an answer matching "{searchQuery}". Please reach out to our team directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-2.5 bg-[#002516] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#ffffff] rounded-xl border border-[#e7e2d7] shadow-xs overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#f8f3e8]/50 transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#002516] font-medium">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#002516] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-[#414843] text-sm leading-relaxed border-t border-[#f2ede2]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* 3. SUPPORT CONTACT BOX */}
        <div className="mt-16 bg-[#f8f3e8] border border-[#e7e2d7] rounded-2xl p-8 text-center space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
            PERSONAL CONCIERGE
          </span>
          <h3 className="font-serif text-2xl text-[#002516]">
            Have a question about your ritual?
          </h3>
          <p className="text-sm text-[#414843] max-w-lg mx-auto leading-relaxed">
            Whether you want preparation advice, wholesale inquiries for your boutique café, or gifting recommendations, our team is at your disposal.
          </p>
          <div className="pt-2">
            <a
              href="mailto:ritual@kavumimatcha.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002516] text-[#ffffff] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#173b2a] transition-colors"
            >
              <span>Contact Concierge: ritual@kavumimatcha.com</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
