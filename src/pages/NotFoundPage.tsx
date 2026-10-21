import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#fef9ee] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#f8f3e8] border border-[#e7e2d7] flex items-center justify-center mx-auto text-[#775a1a]">
          <Sparkles className="w-8 h-8" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#775a1a] block">
          PAGE NOT FOUND
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#002516]">
          A Moment of Pause
        </h1>
        <p className="text-sm text-[#414843] leading-relaxed">
          The page you are seeking has dissolved like fine microfoam. Return to our sanctuary and discover our ceremonial offerings.
        </p>
        <div className="pt-2">
          <Link
            to="/collections/matcha-powder"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#002516] text-white text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#173b2a] transition-all shadow-md"
          >
            <span>Return to Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
