import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, Truck, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutModal } from '../components/cart/CheckoutModal';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoAppliedMessage, setPromoAppliedMessage] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const freeShippingThreshold = 50;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = isFreeShipping || items.length === 0 ? 0 : 7.0;

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'RITUAL10') {
      setDiscountPercent(10);
      setPromoAppliedMessage('10% Ritual discount successfully applied!');
    } else if (promoCode.trim().toUpperCase() === 'FIRSTFLUSH') {
      setDiscountPercent(15);
      setPromoAppliedMessage('15% First Flush discount successfully applied!');
    } else {
      setPromoAppliedMessage('Invalid code. Try "RITUAL10"');
    }
  };

  return (
    <div className="min-h-screen bg-[#fef9ee] text-[#1d1c15] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b border-[#e7e2d7]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a]">
            YOUR SELECTION
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#002516] mt-1">
            Your Matcha Ritual Cart ({totalItems})
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-[#ffffff] rounded-2xl border border-[#e7e2d7] p-8 max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center text-[#775a1a] mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl text-[#002516]">
              Your next matcha ritual is waiting.
            </h2>
            <p className="text-sm text-[#414843] max-w-md mx-auto leading-relaxed">
              Explore our single-origin first harvest ceremonial matcha powder, handcrafted bamboo tools, and curated sets.
            </p>
            <div className="pt-2">
              <Link
                to="/collections/matcha-powder"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#002516] text-[#ffffff] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#173b2a] transition-all shadow-md"
              >
                <span>Explore Matcha Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Shipping Progress Bar */}
              <div className="bg-[#ffffff] p-5 rounded-xl border border-[#e7e2d7] shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-2 text-[#002516]">
                    <Truck className="w-4 h-4 text-[#775a1a]" />
                    {isFreeShipping ? (
                      <span className="text-[#173b2a]">
                        You've unlocked complimentary standard shipping!
                      </span>
                    ) : (
                      <span>
                        Add{' '}
                        <strong className="text-[#775a1a]">
                          ${shippingRemaining.toFixed(2)}
                        </strong>{' '}
                        more for complimentary shipping
                      </span>
                    )}
                  </span>
                  <span className="text-[#775a1a]">{isFreeShipping ? '100%' : `${Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%`}</span>
                </div>
                <div className="w-full bg-[#f2ede2] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#002516] h-full transition-all duration-500 rounded-full"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Items Card */}
              <div className="bg-[#ffffff] rounded-2xl border border-[#e7e2d7] shadow-sm divide-y divide-[#e7e2d7] overflow-hidden">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                    <Link
                      to={`/products/${product.slug}`}
                      className="w-24 h-28 rounded-xl overflow-hidden bg-[#f2ede2] border border-[#e7e2d7] shrink-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1 space-y-1 text-center sm:text-left">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#775a1a]">
                        {product.tag || 'Ceremonial Grade'}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#002516] font-medium">
                        <Link to={`/products/${product.slug}`} className="hover:underline">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#414843]/80">
                        {product.netWeight} • {product.terroir}
                      </p>
                      <div className="text-xs text-[#775a1a] font-medium pt-1">
                        ${product.price.toFixed(2)} each
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity Stepper */}
                      <div className="inline-flex items-center justify-between bg-[#f8f3e8] border border-[#e7e2d7] rounded-lg px-2 py-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#414843] hover:text-[#002516]"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold px-2 text-[#002516]">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#414843] hover:text-[#002516]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-lg font-medium text-[#002516] w-20 text-right">
                        ${(product.price * quantity).toFixed(2)}
                      </span>

                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="p-2 text-[#414843]/60 hover:text-red-700 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#414843]">
                <Link
                  to="/collections/matcha-powder"
                  className="inline-flex items-center gap-1.5 font-medium hover:text-[#002516] underline underline-offset-4"
                >
                  ← Continue Shopping
                </Link>
                <span>Taxes & Duties calculated at checkout</span>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#ffffff] p-6 rounded-2xl border border-[#e7e2d7] shadow-sm space-y-6">
                <h2 className="font-serif text-xl text-[#002516] border-b border-[#e7e2d7] pb-3">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm text-[#414843]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#002516]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-800 font-medium">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shippingFee === 0 ? (
                        <strong className="text-[#173b2a]">Free</strong>
                      ) : (
                        `$${shippingFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 border-t border-[#e7e2d7] text-base font-semibold text-[#002516]">
                    <span>Total</span>
                    <span className="font-serif text-2xl">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2 pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. RITUAL10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#f8f3e8] border border-[#e7e2d7] rounded-lg text-xs uppercase focus:outline-none focus:border-[#002516]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#f2ede2] hover:bg-[#ede8dd] text-[#002516] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoAppliedMessage && (
                    <p className="text-[11px] text-[#775a1a] font-medium">
                      {promoAppliedMessage}
                    </p>
                  )}
                </form>

                {/* Checkout CTA */}
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 bg-[#002516] text-[#ffffff] hover:bg-[#173b2a] text-xs font-semibold uppercase tracking-widest rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[11px] text-[#414843]/70 space-y-1">
                  <p>Guaranteed Safe & Secure Checkout</p>
                  <p>Encrypted 256-bit SSL Connection</p>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-[#f8f3e8] p-5 rounded-xl border border-[#e7e2d7] space-y-3 text-xs text-[#414843]">
                <div className="flex items-center gap-2 text-[#002516] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#775a1a]" />
                  <span>The Kavumi Purity Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  If our ceremonial grade matcha does not exceed your expectations for freshness and froth, our concierge will replace your tin with no questions asked.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};
