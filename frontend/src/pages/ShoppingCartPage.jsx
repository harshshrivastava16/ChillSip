import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function ShoppingCartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
  const cartItems = cart.items;

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
                Your Shopping <span className="gradient-text-white">Cart</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
                Add your favorite ChillSip products to your cart and enjoy refreshing hydration.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="fade-in text-center">
            <div className="card-hover bg-white rounded-2xl p-12 border border-[#d1e6d9] shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#f8fbfa] to-[#e8f2ec] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0e1a13] mb-4">Your Cart is Empty</h2>
              <p className="text-[#51946b] text-lg mb-8">Add some refreshing ChillSip products to get started!</p>
              <Link
                to="/products"
                className="btn-primary inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300"
              >
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Your Shopping <span className="gradient-text-white">Cart</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Review your ChillSip selections and proceed to checkout.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Cart Items</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="card-hover group flex items-center gap-6 p-6 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0e1a13] mb-1">{item.title}</h3>
                        <p className="text-[#51946b] text-sm mb-2">{item.size}</p>
                        <p className="text-[#39e079] font-bold text-lg">₹{item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-[#e8f2ec] text-[#39e079] font-bold hover:bg-[#39e079] hover:text-white transition-all duration-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-[#0e1a13]">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-[#e8f2ec] text-[#39e079] font-bold hover:bg-[#39e079] hover:text-white transition-all duration-300"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg sticky top-8">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#51946b]">Subtotal</span>
                    <span className="font-bold text-[#0e1a13]">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#51946b]">Shipping</span>
                    <span className="font-bold text-[#39e079]">Free</span>
                  </div>
                  
                  <div className="border-t border-[#d1e6d9] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#0e1a13]">Total</span>
                      <span className="text-xl font-bold text-[#39e079]">₹{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary h-14 rounded-xl text-white font-bold hover:scale-105 transition-transform duration-300"
                >
                  Proceed to Checkout
                </button>

                <p className="text-sm text-[#51946b] text-center mt-4">
                  Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
