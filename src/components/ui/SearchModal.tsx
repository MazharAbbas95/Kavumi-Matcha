import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { FAQS } from '../../data/faqs';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.subtitle.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingFaqs = trimmed
    ? FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(trimmed) ||
          f.answer.toLowerCase().includes(trimmed)
      )
    : [];

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate(`/products/${slug}`);
  };

  const handleSelectFaq = () => {
    onClose();
    navigate('/pages/faq');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-[#ffeafe]/0 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#fffcf5] border border-[#d8d0c1] rounded-xl shadow-2xl overflow-hidden">
          {/* Header & Input */}
          <div className="p-4 border-b border-[#d8d0c1] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#775a1a]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search matcha, ritual sets, brewing guides, FAQs..."
              className="flex-1 bg-transparent text-[#1d1c15] text-base placeholder-[#414843]/60 focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#414843] hover:text-[#173b2a] hover:bg-[#f2ede2] transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {!trimmed ? (
              <div className="space-y-4">
                <span className="text-[11px] font-semibold text-[#775a1a] tracking-widest uppercase block">
                  Suggested Explorations
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Ceremonial Grade',
                    'Matcha Latte',
                    'How to Whisk',
                    'Storage Tips',
                    'Double Pack',
                    'Uji Terroir'
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 bg-[#f8f3e8] hover:bg-[#ede8dd] text-[#173b2a] rounded text-xs font-medium transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : matchingProducts.length === 0 && matchingFaqs.length === 0 ? (
              <div className="py-12 text-center text-[#414843]">
                <p className="font-serif text-lg text-[#173b2a] mb-1">
                  No direct results for &ldquo;{query}&rdquo;
                </p>
                <p className="text-sm">
                  Try searching for &ldquo;ceremonial&rdquo;, &ldquo;whisk&rdquo;, or &ldquo;latte&rdquo;.
                </p>
              </div>
            ) : (
              <>
                {matchingProducts.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-[#775a1a] tracking-widest uppercase block mb-3">
                      Products ({matchingProducts.length})
                    </span>
                    <div className="space-y-2">
                      {matchingProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => handleSelectProduct(p.slug)}
                          className="flex items-center gap-4 p-3 bg-[#f8f3e8] hover:bg-[#f2ede2] rounded-lg cursor-pointer transition-colors group"
                        >
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-14 h-14 object-cover rounded bg-[#ede8dd]"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-base text-[#173b2a] group-hover:text-[#775a1a] transition-colors truncate">
                              {p.name}
                            </h4>
                            <p className="text-xs text-[#414843] truncate">
                              {p.subtitle}
                            </p>
                          </div>
                          <span className="font-semibold text-sm text-[#173b2a]">
                            ${p.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {matchingFaqs.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-[#775a1a] tracking-widest uppercase block mb-3">
                      Answers & Guidance ({matchingFaqs.length})
                    </span>
                    <div className="space-y-2">
                      {matchingFaqs.map((faq) => (
                        <div
                          key={faq.id}
                          onClick={handleSelectFaq}
                          className="p-3 bg-[#f8f3e8] hover:bg-[#f2ede2] rounded-lg cursor-pointer transition-colors"
                        >
                          <p className="font-serif text-sm font-medium text-[#173b2a]">
                            {faq.question}
                          </p>
                          <p className="text-xs text-[#414843] line-clamp-2 mt-1">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Quick Footer Links */}
          <div className="p-3 bg-[#f8f3e8] border-t border-[#d8d0c1] flex items-center justify-between text-xs text-[#414843]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#775a1a]" />
              Kavumi Search Index
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  onClose();
                  navigate('/collections/matcha-powder');
                }}
                className="hover:text-[#173b2a] flex items-center gap-1"
              >
                All Offerings <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
