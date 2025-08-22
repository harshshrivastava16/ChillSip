import React from "react";
import { useParams, Link } from "react-router-dom";

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  
  // Get order from localStorage
  const orderData = localStorage.getItem(`order_${orderId}`);
  const order = orderData ? JSON.parse(orderData) : null;

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="fade-in">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
                Order <span className="gradient-text-white">Not Found</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
                We couldn't find the order you're looking for.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="fade-in text-center">
            <div className="card-hover bg-white rounded-2xl p-12 border border-[#d1e6d9] shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#f8fbfa] to-[#e8f2ec] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0e1a13] mb-4">Order Not Found</h2>
              <p className="text-[#51946b] text-lg mb-8">The order you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Order <span className="gradient-text-white">Confirmed!</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Thank you for choosing ChillSip! Your refreshing hydration is on its way.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          <div className="card-hover bg-white rounded-2xl p-12 border border-[#d1e6d9] shadow-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-[#39e079] to-[#2dc869] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-black text-[#0e1a13] mb-4">Order Confirmed!</h1>
            <p className="text-[#51946b] text-xl mb-2">Thank you for your purchase!</p>
            <p className="text-[#0e1a13] text-lg mb-8">Your order has been successfully placed.</p>
            
            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-8 border border-[#d1e6d9] mb-8">
              <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Order Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
                <div>
                  <p className="text-sm text-[#51946b] mb-1">Order ID</p>
                  <p className="font-bold text-[#0e1a13] text-lg">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-[#51946b] mb-1">Order Date</p>
                  <p className="font-bold text-[#0e1a13] text-lg">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-[#51946b] mb-1">Status</p>
                  <p className="font-bold text-[#39e079] text-lg">{order.status}</p>
                </div>
                <div>
                  <p className="text-sm text-[#51946b] mb-1">Total Amount</p>
                  <p className="font-bold text-[#0e1a13] text-lg">${order.total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="border-t border-[#d1e6d9] pt-6">
                <h3 className="font-bold text-[#0e1a13] text-lg mb-3">Shipping Address</h3>
                <p className="text-[#51946b]">
                  {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                  {order.shippingAddress.address}<br />
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
              </div>
            </div>
            
            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-8 border border-[#d1e6d9] mb-8">
              <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 p-4 bg-white rounded-xl border border-[#d1e6d9]">
                    <div
                      className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-[#0e1a13] text-lg">{item.title}</h3>
                      <p className="text-[#51946b] text-sm">{item.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#39e079] font-bold text-lg">${item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/track-order"
                className="btn-primary h-12 px-8 rounded-full text-white font-bold hover:scale-105 transition-transform duration-300"
              >
                Track Your Order
              </Link>
              <Link
                to="/products"
                className="h-12 px-8 border-2 border-[#39e079] text-[#39e079] rounded-full font-bold hover:bg-[#39e079] hover:text-white transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
            
            <p className="text-[#51946b] text-lg">
              A confirmation email has been sent to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
