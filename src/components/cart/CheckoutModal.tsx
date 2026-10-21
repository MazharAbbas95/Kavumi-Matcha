import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, AlertCircle, FileText } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
  });
  const [submittedOrder, setSubmittedOrder] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `KM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedOrder(orderNumber);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="bg-[#fffcf5] border border-[#d8d0c1] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-[#1d1c15] shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-md text-[#414843] hover:text-[#173b2a] hover:bg-[#ede8dd] transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedOrder ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#f8f3e8] border border-[#775a1a]/30 flex items-center justify-center text-[#775a1a]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl text-[#173b2a]">
              Order Inscription Received
            </h2>
            <div className="inline-block px-4 py-1.5 bg-[#f2ede2] text-[#173b2a] font-mono text-sm font-semibold rounded-md">
              Order Reference: {submittedOrder}
            </div>
            <p className="text-sm text-[#414843] max-w-md mx-auto leading-relaxed">
              Thank you, {formData.firstName || 'valued patron'}. We have logged your tea order preferences for dispatch.
            </p>

            <div className="p-4 bg-[#f8f3e8] border border-[#d8d0c1] rounded-xl text-left text-xs text-[#414843] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#173b2a]">
                <FileText className="w-4 h-4 text-[#775a1a]" />
                Integration Transparency Note
              </div>
              <p>
                This demonstration environment does not charge actual credit cards. In a live production deployment, this checkout boundary connects to Stripe Elements or Shopify Checkout.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 bg-[#173b2a] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#254f3a] transition-colors"
              >
                Return to Storefront
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e7e2d7]">
              <div>
                <span className="text-[11px] font-semibold text-[#775a1a] uppercase tracking-widest block">
                  Kavumi Direct
                </span>
                <h2 className="font-serif text-2xl text-[#173b2a] font-medium">
                  Review &amp; Checkout
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#536b3e] bg-[#f2ede2] px-3 py-1 rounded">
                <Lock className="w-3.5 h-3.5" />
                <span>SSL Secured</span>
              </div>
            </div>

            {/* Order Items Snapshot */}
            <div className="mb-6 p-4 bg-[#f8f3e8] rounded-xl border border-[#e7e2d7] space-y-2 max-h-40 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-xs">
                  <span className="font-medium text-[#173b2a]">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-[#173b2a]">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#e7e2d7] flex justify-between text-xs font-semibold text-[#173b2a]">
                <span>Total ({items.length} item kinds):</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Customer Shipping Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-lg text-[#173b2a]">1. Delivery Destination</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address (for shipment tracking) *"
                required
                className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address *"
                required
                className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City *"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State/Province *"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
                />
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Postal Code *"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#f8f3e8] border border-[#d8d0c1] rounded text-sm focus:outline-none focus:border-[#173b2a]"
                />
              </div>

              {/* Payment Boundary Notice */}
              <div className="p-4 bg-[#f2ede2] rounded-xl border border-[#d8d0c1] text-xs text-[#414843] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#173b2a]">
                  <ShieldCheck className="w-4 h-4 text-[#775a1a]" />
                  <span>2. Payment Integration Boundary</span>
                </div>
                <p>
                  To complete live payments in production, connect your Stripe account or Shopify Storefront API keys via server-side environment variables.
                </p>
                <div className="flex items-center gap-1.5 text-[#775a1a] font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>No live payment card is charged in this development build.</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="w-full py-4 bg-[#173b2a] hover:bg-[#254f3a] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Lock className="w-4 h-4 text-[#ffdea5]" />
                  <span>Confirm Test Order — ${total.toFixed(2)} USD</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
