import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BrewingGuidePage } from './pages/BrewingGuidePage';
import { FaqPage } from './pages/FaqPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#fef9ee] text-[#1d1c15] selection:bg-[#173b2a] selection:text-[#fed489]">
          {/* Top Announcement Bar */}
          <AnnouncementBar />

          {/* Sticky Top Navbar */}
          <Navbar />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Collections & Shop */}
              <Route path="/collections" element={<CollectionPage />} />
              <Route path="/collections/matcha-powder" element={<CollectionPage />} />
              <Route path="/collections/:category" element={<CollectionPage />} />
              <Route path="/shop" element={<CollectionPage />} />

              {/* Product Detail Pages */}
              <Route path="/products/:slug" element={<ProductDetailPage />} />

              {/* Story / About Pages (both URL styles) */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pages/our-story" element={<AboutPage />} />

              {/* Ritual & Preparation Guide (both URL styles) */}
              <Route path="/brewing-guide" element={<BrewingGuidePage />} />
              <Route path="/pages/the-art-of-matcha" element={<BrewingGuidePage />} />

              {/* FAQs & Support */}
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/pages/faq" element={<FaqPage />} />

              {/* Cart Page */}
              <Route path="/cart" element={<CartPage />} />

              {/* Fallback 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Slide-out Cart Drawer */}
          <CartDrawer />

          {/* Editorial Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
