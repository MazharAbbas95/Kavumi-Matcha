import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedFeedback(true);
    setTimeout(() => {
      setAddedFeedback(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#fffcf5] border border-[#d8d0c1] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#fffcf5]/80 hover:bg-[#ede8dd] text-[#1d1c15] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="p-6 bg-[#f8f3e8] flex flex-col justify-between">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#ede8dd] shadow-sm mb-4">
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-[#fffcf5] text-[#173b2a] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnail row */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImg(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImg === idx
                        ? 'border-[#173b2a] opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 lg:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[#775a1a] text-[11px] font-semibold uppercase tracking-widest mb-1">
                {product.terroir}
              </div>
              <h3 className="font-serif text-2xl text-[#173b2a] leading-tight mb-2">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-2xl text-[#173b2a] font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xs text-[#414843] uppercase">USD</span>
              </div>
              <p className="text-sm text-[#414843] leading-relaxed mb-4">
                {product.subtitle}
              </p>

              <div className="bg-[#f8f3e8] p-3 rounded-lg text-xs text-[#414843] mb-4">
                <span className="font-medium text-[#173b2a] block">Specification:</span>
                {product.netWeight} • {product.servings}
              </div>
            </div>

            {/* Action Area */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#ede8dd] rounded px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#414843] hover:text-[#173b2a] text-lg font-bold px-1"
                  >
                    −
                  </button>
                  <span className="mx-3 text-sm font-semibold text-[#173b2a] w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#414843] hover:text-[#173b2a] text-lg font-bold px-1"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={addedFeedback}
                  className="flex-1 bg-[#173b2a] hover:bg-[#254f3a] text-white py-3 px-6 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {addedFeedback ? (
                    <>
                      <Check className="w-4 h-4 text-[#ffdea5]" />
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

              <Link
                to={`/products/${product.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs text-[#775a1a] hover:text-[#173b2a] font-medium tracking-wide uppercase pt-1"
              >
                <span>View Full Product Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
