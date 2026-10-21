import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ArrowRight, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    shipping,
    total,
    freeShippingThreshold,
    freeShippingProgress,
    openCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fffcf5] border-l border-[#d8d0c1] shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#e7e2d7] bg-[#f8f3e8] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#173b2a]" />
              <h2 className="font-serif text-xl text-[#173b2a] font-medium tracking-wide">
                Your Ritual Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-md text-[#414843] hover:text-[#173b2a] hover:bg-[#ede8dd] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Banner */}
          <div className="bg-[#f2ede2] px-6 py-3 border-b border-[#e7e2d7]">
            <div className="flex items-center justify-between text-xs text-[#414843] mb-1.5">
              <span className="flex items-center gap-1 font-medium text-[#173b2a]">
                <Truck className="w-3.5 h-3.5 text-[#775a1a]" />
                {amountNeededForFreeShipping === 0
                  ? 'Complimentary shipping unlocked!'
                  : `Add $${amountNeededForFreeShipping.toFixed(2)} more for complimentary shipping`}
              </span>
              <span className="font-semibold text-[#173b2a]">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-[#d8d0c1]/60 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#173b2a] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f2ede2] flex items-center justify-center text-[#775a1a]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#173b2a]">
                  Your next matcha ritual is waiting.
                </h3>
                <p className="text-sm text-[#414843] max-w-xs mx-auto">
                  Take a moment to explore our single-origin harvest and curated utensils.
                </p>
                <div className="pt-2">
                  <Link
                    to="/collections/matcha-powder"
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#173b2a] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#254f3a] transition-colors"
                  >
                    <span>Explore Matcha</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-[#f8f3e8] border border-[#e7e2d7] rounded-xl relative group"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#ede8dd] shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-serif text-base text-[#173b2a] hover:text-[#775a1a] transition-colors line-clamp-1 font-medium"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#414843]/60 hover:text-red-700 transition-colors p-1"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#414843] truncate">
                        {item.product.netWeight}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Stepper */}
                      <div className="flex items-center bg-[#ede8dd] rounded px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-xs font-bold text-[#414843] hover:text-[#173b2a] px-1.5"
                        >
                          −
                        </button>
                        <span className="text-xs font-semibold text-[#173b2a] w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-xs font-bold text-[#414843] hover:text-[#173b2a] px-1.5"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-base text-[#173b2a] font-semibold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 bg-[#f8f3e8] border-t border-[#e7e2d7] space-y-4">
              <div className="space-y-1.5 text-sm text-[#414843]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#173b2a]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-[#536b3e] font-medium">Complimentary</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Taxes</span>
                  <span className="text-[#414843]/70">Calculated at checkout</span>
                </div>
                <div className="pt-2 border-t border-[#e7e2d7] flex justify-between font-serif text-lg text-[#173b2a] font-semibold">
                  <span>Estimated Total</span>
                  <span>${total.toFixed(2)} USD</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={openCheckout}
                  className="w-full bg-[#173b2a] hover:bg-[#254f3a] text-white py-3.5 px-6 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Continue to Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="text-[#775a1a] hover:underline"
                  >
                    View Full Cart Page
                  </Link>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="text-[#414843] hover:text-[#173b2a]"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
