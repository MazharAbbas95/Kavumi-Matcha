import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { ASSETS } from '../../data/assets';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <footer className="w-full bg-[#173b2a] text-[#ffffff] mt-16 border-t border-[#002516]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4 pr-4">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={ASSETS.logoMonogram}
                  alt="Kavumi Logo"
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-[#ffdea5]/40"
                />
                <span className="font-serif text-xl tracking-wider text-[#fffcfa] uppercase font-medium">
                  KAVUMI MATCHA
                </span>
              </Link>
              <p className="text-sm text-[#7fa68f] max-w-sm leading-relaxed">
                Simple ingredients. Thoughtful preparation. A moment that belongs to you.
              </p>
              <div className="pt-2 text-xs text-[#7fa68f]">
                <span>Single-Origin Ceremonial Grade • Uji, Kyoto</span>
              </div>
            </div>

            {/* Shop Navigation */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold text-[#ffdea5] tracking-widest uppercase">
                Shop
              </h4>
              <ul className="space-y-2 text-sm text-[#7fa68f]">
                <li>
                  <Link
                    to="/products/kavumi-matcha-powder"
                    className="hover:text-white transition-colors"
                  >
                    Ceremonial Grade Matcha
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/kavumi-matcha-ritual-set"
                    className="hover:text-white transition-colors"
                  >
                    Starter Sets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/matcha-powder"
                    className="hover:text-white transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/kavumi-reserve-double-pack"
                    className="hover:text-white transition-colors"
                  >
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>

            {/* The Brand Navigation */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold text-[#ffdea5] tracking-widest uppercase">
                The Brand
              </h4>
              <ul className="space-y-2 text-sm text-[#7fa68f]">
                <li>
                  <Link to="/pages/our-story" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/the-art-of-matcha"
                    className="hover:text-white transition-colors"
                  >
                    The Art of Matcha
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/our-story"
                    className="hover:text-white transition-colors"
                  >
                    Ritual &amp; Philosophy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Client Care */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold text-[#ffdea5] tracking-widest uppercase">
                Client Care
              </h4>
              <ul className="space-y-2 text-sm text-[#7fa68f]">
                <li>
                  <a
                    href="mailto:concierge@kavumimatcha.com"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/pages/faq" className="hover:text-white transition-colors">
                    Shipping &amp; Returns
                  </Link>
                </li>
                <li>
                  <Link to="/pages/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/pages/faq" className="hover:text-white transition-colors">
                    Order Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ritual Letters Newsletter */}
            <div className="lg:col-span-1 space-y-3">
              <h4 className="text-[11px] font-semibold text-[#ffdea5] tracking-widest uppercase">
                Ritual Letters
              </h4>
              <p className="text-sm text-[#7fa68f]">
                A little more matcha in your inbox.
              </p>
              {isSubscribed ? (
                <div className="p-3 bg-[#002516] border border-[#7fa68f]/30 rounded text-xs text-[#ffdea5] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffdea5] shrink-0" />
                  <span>Welcome to the Kavumi ritual.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-[#002516] text-white placeholder-[#7fa68f]/60 px-3 py-2 text-sm rounded border border-[#7fa68f]/20 focus:outline-none focus:border-[#ffdea5]"
                    required
                  />
                  {errorMessage && (
                    <span className="text-xs text-[#ffdea5]">{errorMessage}</span>
                  )}
                  <button
                    type="submit"
                    className="bg-[#775a1a] hover:bg-[#8e6e22] text-white px-3 py-2 text-[11px] font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#7fa68f]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7fa68f]">
            <p>© 2025 KAVUMI MATCHA. All rights reserved.</p>
            <div className="flex gap-6 text-[11px] uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActiveModal('cookies')}
                className="hover:text-white transition-colors"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fffcf5] border border-[#d8d0c1] rounded-xl max-w-lg w-full p-6 text-[#1d1c15] shadow-2xl relative">
            <h3 className="font-serif text-2xl text-[#173b2a] mb-3 capitalize">
              {activeModal === 'privacy' && 'Privacy Policy'}
              {activeModal === 'terms' && 'Terms of Service'}
              {activeModal === 'cookies' && 'Cookie Preferences'}
            </h3>
            <div className="text-sm text-[#414843] space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    Kavumi Matcha values your privacy and is committed to protecting your personal data. We collect information you provide directly to us (e.g., when placing an order, subscribing to Ritual Letters, or contacting client care).
                  </p>
                  <p>
                    We never sell your personal information to third parties. We use industry-standard encryption for all digital commerce transactions.
                  </p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p>
                    By accessing or using the Kavumi Matcha website, you agree to be bound by these terms. All products are single-origin ceremonial green tea from certified tea estates in Uji, Kyoto.
                  </p>
                  <p>
                    Orders placed through this demonstration storefront illustrate the complete consumer checkout path. Production payment transactions are securely handled via configured payment processors.
                  </p>
                </>
              )}
              {activeModal === 'cookies' && (
                <>
                  <p>
                    We use essential cookies strictly to maintain your active shopping cart state and remember your viewing preferences. No intrusive cross-site tracking scripts are deployed.
                  </p>
                  <p>
                    You can manage or disable local storage in your browser settings at any time without compromising basic website navigation.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#d8d0c1] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#173b2a] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#254f3a] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
