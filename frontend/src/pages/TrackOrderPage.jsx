import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleTrackOrder = (e) => {
    e.preventDefault();
    
    if (!orderId.trim()) {
      setError("Please enter an order ID");
      return;
    }

    // Get order from localStorage
    const orderData = localStorage.getItem(`order_${orderId}`);
    
    if (orderData) {
      const parsedOrder = JSON.parse(orderData);
      
      // Simulate order status progression based on order date
      const orderDate = new Date(parsedOrder.date);
      const now = new Date();
      const hoursDiff = (now - orderDate) / (1000 * 60 * 60);
      
      let status = parsedOrder.status;
      if (hoursDiff > 48) {
        status = "Delivered";
      } else if (hoursDiff > 24) {
        status = "Shipped";
      } else if (hoursDiff > 12) {
        status = "Processing";
      } else {
        status = "Confirmed";
      }
      
      // Update order status
      const updatedOrder = { ...parsedOrder, status };
      localStorage.setItem(`order_${orderId}`, JSON.stringify(updatedOrder));
      
      setOrder(updatedOrder);
      setError("");
    } else {
      setOrder(null);
      setError("Order not found. Please check your order ID.");
    }
  };

  const getStatusSteps = (currentStatus) => {
    const steps = [
      { status: "Confirmed", label: "Order Confirmed", description: "Your order has been received" },
      { status: "Processing", label: "Processing", description: "Preparing your order for shipment" },
      { status: "Shipped", label: "Shipped", description: "Your order is on the way" },
      { status: "Delivered", label: "Delivered", description: "Order delivered successfully" }
    ];
    
    return steps.map((step, index) => {
      const isCompleted = steps.findIndex(s => s.status === currentStatus) >= index;
      const isCurrent = step.status === currentStatus;
      
      return (
        <div key={step.status} className="flex items-center">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            isCompleted ? 'bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white' : 'bg-[#f8fbfa] text-[#51946b] border-2 border-[#d1e6d9]'
          }`}>
            {isCompleted ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <span className="text-lg font-bold">{index + 1}</span>
            )}
          </div>
          <div className="ml-6">
            <p className={`font-bold text-lg ${isCurrent ? 'text-[#39e079]' : 'text-[#0e1a13]'}`}>
              {step.label}
            </p>
            <p className="text-[#51946b]">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-2 mx-6 ${isCompleted ? 'bg-gradient-to-r from-[#39e079] to-[#2dc869]' : 'bg-[#d1e6d9]'}`}></div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Track Your <span className="gradient-text-white">Order</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Stay updated on your ChillSip delivery. Enter your order ID to see real-time progress.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          {/* Order Tracking Form */}
          <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg mb-8">
            <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID (e.g., ABC123XYZ)"
                className="flex-1 h-12 px-6 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Track Order
              </button>
            </form>
            
            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
            )}
          </div>

        {order && (
          <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg">
            <h2 className="text-3xl font-black text-[#0e1a13] mb-8 text-center">Order Status</h2>
            
            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] mb-8">
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-6">Shipping Progress</h3>
              <div className="space-y-8">
                {getStatusSteps(order.status)}
              </div>
            </div>

            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] mb-8">
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-6">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 p-4 bg-white rounded-xl border border-[#d1e6d9]">
                    <div
                      className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#0e1a13] text-lg">{item.title}</h4>
                      <p className="text-[#51946b] text-sm">{item.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#39e079] font-bold text-lg">${item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9]">
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-4">Shipping Address</h3>
              <p className="text-[#51946b] text-lg">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                {order.shippingAddress.address}<br />
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        )}

        {!order && !error && (
          <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#f8fbfa] to-[#e8f2ec] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-[#51946b] text-xl mb-4">Enter your order ID above to track your order.</p>
            <p className="text-[#51946b]">
              Don't have an order ID? <Link to="/products" className="text-[#39e079] font-bold hover:underline">Shop now</Link>
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
