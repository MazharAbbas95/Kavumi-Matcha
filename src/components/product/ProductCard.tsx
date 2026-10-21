import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <>
      <article className="group flex flex-col bg-[#fffcf5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#d8d0c1]/60">
        {/* Product Image Stage */}
        <div className="relative bg-[#f2ede2] p-6 aspect-[4/5] flex items-center justify-center overflow-hidden">
          {product.tag && (
            <span
              className={`absolute top-4 left-4 text-[10px] font-semibold px-3 py-1 rounded shadow-xs uppercase tracking-wider z-10 ${
                product.tagColor === 'secondary'
                  ? 'bg-[#ffdea5] text-[#271900]'
                  : product.tagColor === 'tertiary'
                  ? 'bg-[#cfecb3] text-[#102401]'
                  : 'bg-[#fffcf5] text-[#173b2a]'
              }`}
            >
              {product.tag}
            </span>
          )}

          <Link to={`/products/${product.slug}`} className="w-full h-full block">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
            />
          </Link>

          {/* Quick View Overlay Button */}
          <div className="absolute inset-0 bg-[#002516]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
            <button
              type="button"
              onClick={() => setIsQuickViewOpen(true)}
              className="bg-[#fffcf5] text-[#173b2a] px-4 py-2 rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#fffcfa] shadow-md transition-transform active:scale-95"
            >
              Quick View
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="p-6 flex flex-col flex-grow justify-between bg-[#fffcf5]">
          <div>
            <div className="flex items-center justify-between text-[#775a1a] text-[11px] font-semibold uppercase tracking-widest mb-1.5">
              <span>{product.terroir.split('/')[0]}</span>
              <span>{product.milling.split('(')[0]}</span>
            </div>

            <Link to={`/products/${product.slug}`}>
              <h3 className="font-serif text-xl text-[#002516] hover:text-[#775a1a] transition-colors mb-2 line-clamp-2">
                {product.name}
              </h3>
            </Link>

            <p className="text-xs text-[#414843] mb-4 leading-relaxed line-clamp-2">
              {product.subtitle}
            </p>

            <div className="text-[#414843]/80 text-xs mb-6 pb-2 pt-2 bg-[#f8f3e8] px-3 py-2 rounded">
              {product.netWeight}
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-2 flex items-center justify-between mt-auto border-t border-[#f2ede2]">
            <div>
              <span className="block text-[10px] text-[#414843]/60 uppercase font-semibold">
                Price
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-xl text-[#002516] font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#414843]/60 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${
                justAdded
                  ? 'bg-[#536b3e] text-white'
                  : 'bg-[#173b2a] hover:bg-[#254f3a] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#ffdea5]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>

      <QuickViewModal
        product={isQuickViewOpen ? product : null}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
