import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here!");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8fcf8] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0e1b0e] mb-4">Your cart is empty</h2>
          <p className="text-[#4e974e] mb-6">Add some products to get started!</p>
          <Link
            to="/products"
            className="px-6 py-3 bg-[#39e079] text-white font-bold rounded-lg hover:bg-[#2dc869] transition-colors"
          >
            Shop Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fcf8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#0e1b0e] mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#0e1b0e] mb-6">Cart Items ({cartItems.length})</h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-[#e7f3e7] last:border-b-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-[#0e1b0e]">{item.title}</h3>
                    <p className="text-[#4e974e] text-sm">{item.size}</p>
                    <p className="text-[#39e079] font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-[#e7f3e7] text-[#0e1b0e] rounded-full hover:bg-[#d0e7d0] transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-[#e7f3e7] text-[#0e1b0e] rounded-full hover:bg-[#d0e7d0] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#0e1b0e] mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-[#e7f3e7] pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-[#39e079] text-white font-bold rounded-lg hover:bg-[#2dc869] transition-colors"
                >
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/products"
                  className="block text-center text-[#39e079] hover:text-[#2dc869] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
