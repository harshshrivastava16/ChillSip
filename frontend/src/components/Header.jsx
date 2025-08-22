import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-4 sm:px-6 md:px-10 py-3">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-[#0e1a13] hover:no-underline">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">ChillSip</h2>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-6 lg:gap-9">
          <Link to="/products" className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#39e079] transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#39e079] transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#39e079] transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#39e079] transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Cart Icon */}
          <Link
            to="/cart"
            className="flex items-center gap-2 text-[#0e1a13] hover:text-[#39e079] transition-colors relative"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42a27.75,27.75,0,1,0,8.92-16H82.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"/>
          </svg>
          {getCartItemsCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#39e079] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartItemsCount()}
            </span>
          )}
        </Link>
        
        <Link
          to="/products"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39e079] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2dc869] transition-colors"
        >
          <span className="truncate">Order Now</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className="w-6 h-0.5 bg-[#0e1a13]"></div>
          <div className="w-6 h-0.5 bg-[#0e1a13]"></div>
          <div className="w-6 h-0.5 bg-[#0e1a13]"></div>
        </div>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#e8f2ec] shadow-lg z-50">
          <div className="px-4 py-4 space-y-4">
            <Link to="/products" className="block text-[#0e1a13] text-sm font-medium hover:text-[#39e079] transition-colors">
              Shop
            </Link>
            <Link to="/about" className="block text-[#0e1a13] text-sm font-medium hover:text-[#39e079] transition-colors">
              About
            </Link>
            <Link to="/blog" className="block text-[#0e1a13] text-sm font-medium hover:text-[#39e079] transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="block text-[#0e1a13] text-sm font-medium hover:text-[#39e079] transition-colors">
              Contact
            </Link>
            <Link to="/cart" className="block text-[#0e1a13] text-sm font-medium hover:text-[#39e079] transition-colors">
              Cart ({getCartItemsCount()})
            </Link>
            <Link
              to="/products"
              className="block w-full text-center py-2 bg-[#39e079] text-[#0e1a13] text-sm font-bold rounded-lg hover:bg-[#2dc869] transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
