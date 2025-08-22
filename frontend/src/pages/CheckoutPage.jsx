import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random order ID
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Save order to localStorage for tracking
    const order = {
      id: orderId,
      date: new Date().toISOString(),
      items: cart.items,
      total: getCartTotal() * 1.08, // Including tax
      status: "Processing",
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
      }
    };
    
    localStorage.setItem(`order_${orderId}`, JSON.stringify(order));
    
    // Clear cart and redirect to confirmation
    clearCart();
    navigate(`/order-confirmation/${orderId}`);
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Secure <span className="gradient-text-white">Checkout</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Complete your purchase with confidence. Your information is secure with us.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-3 border-b border-[#d1e6d9]">
                      <div
                        className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-xl"
                        style={{ backgroundImage: `url(${item.img})` }}
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-[#0e1a13]">{item.title}</h3>
                        <p className="text-[#51946b] text-sm">{item.size}</p>
                        <p className="text-[#39e079] font-bold">${item.price.toFixed(2)} × {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#51946b]">Subtotal</span>
                    <span className="font-medium text-[#0e1a13]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#51946b]">Tax (8%)</span>
                    <span className="font-medium text-[#0e1a13]">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-[#d1e6d9] pt-3">
                    <span className="text-[#0e1a13]">Total</span>
                    <span className="text-[#39e079]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div>
              <form onSubmit={handleSubmit} className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#0e1a13] mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Payment Information</h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#0e1a13] mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e1a13] mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#0e1a13] mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Place Order - ${total.toFixed(2)}
                </button>

                <div className="flex items-center justify-center mt-4 text-[#51946b] text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Your payment information is secure and encrypted
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
