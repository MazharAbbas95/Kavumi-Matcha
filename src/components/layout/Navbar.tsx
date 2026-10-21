import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, HelpCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ASSETS } from '../../data/assets';
import { SearchModal } from '../ui/SearchModal';

export const Navbar: React.FC = () => {
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop Matcha', path: '/collections/matcha-powder' },
    { label: 'The Art of Matcha', path: '/pages/the-art-of-matcha' },
    { label: 'Our Story', path: '/pages/our-story' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fef9ee]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e7e2d7]/80">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Mark & Monogram */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Kavumi Matcha Home">
            <img
              src={ASSETS.logoMonogram}
              alt="KM Monogram"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-[#c6a15b]/40 shadow-xs group-hover:scale-105 transition-transform"
            />
            <span className="font-serif text-xl tracking-wide text-[#002516] font-medium uppercase">
              KAVUMI MATCHA
            </span>
          </Link>

          {/* Zone 2: Primary Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm py-1.5 transition-colors whitespace-nowrap tracking-wide ${
                    active
                      ? 'text-[#002516] font-semibold border-b-2 border-[#002516]'
                      : 'text-[#414843] hover:text-[#002516] font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Affordances (Search, FAQ, Cart) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="text-[#414843] hover:text-[#002516] transition-colors p-2 rounded-md hover:bg-[#f2ede2]"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/pages/faq"
              className="hidden sm:flex text-[#414843] hover:text-[#002516] transition-colors p-2 rounded-md hover:bg-[#f2ede2]"
              aria-label="Frequently Asked Questions"
              title="FAQ & Support"
            >
              <HelpCircle className="w-5 h-5" />
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="relative text-[#414843] hover:text-[#002516] transition-colors p-2 rounded-md hover:bg-[#f2ede2]"
              aria-label={`Shopping Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute 0 top-1 right-1 bg-[#173b2a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#414843] hover:text-[#002516] p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e7e2d7] bg-[#fffcf5] px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base py-2 border-b border-[#f2ede2] ${
                    isActive(link.path)
                      ? 'text-[#002516] font-semibold'
                      : 'text-[#414843] font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/pages/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base py-2 text-[#414843] font-medium flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-[#775a1a]" />
                Frequently Asked Questions
              </Link>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
