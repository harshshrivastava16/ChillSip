import React, { useState } from "react";

export default function ManageSubscriptionPage() {
  // Mock subscription data
  const [subscription, setSubscription] = useState({
    product: "Fennel Mishri Water",
    frequency: "Monthly",
    nextDelivery: "July 15, 2024",
    shippingAddress: "123 Elm Street, San Francisco, CA 94102",
    paymentMethod: "Visa ending in 1234",
  });

  const handleChange = (field, value) => {
    setSubscription({ ...subscription, [field]: value });
  };

  const handleUpdate = () => {
    alert("Subscription updated!" + "\n" + JSON.stringify(subscription, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Manage Your <span className="gradient-text-white">Subscription</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Customize your ChillSip delivery schedule and preferences to suit your lifestyle.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg">
            <h2 className="text-3xl font-black text-[#0e1a13] mb-8 text-center">Subscription Details</h2>

            {/* Current Subscription */}
            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] mb-8">
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-6">Current Subscription</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-4 bg-white rounded-xl border border-[#d1e6d9]">
                  <div
                    className="w-16 h-16 bg-center bg-cover rounded-xl"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgIZzojSbH1EZBvT7HHTsGxkQqRJZGYDqCwmaFNeGDNG2OZuiYTjICc5p_bDhHgK2nUMpJF3081gcJIbeltpAmRBsH1LnZTwsaMB-0wJMQ3S3FLZ8eTuyCN6CGT2YBqOgJFhZCORDy3l2L0dw7AD2NfVfuuvvk_z4hUszGePqMv-vioVeTNF2ZZ0yhzgKUC2ThNOVOQG_NBWEGXIG8KfB8Xyg4Jc9U-M25GpkBZGAqA3UoCBZUnQxHayp2EqZpBGV_NcX0tmcKsoYF')"
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-[#51946b] mb-1">Product</p>
                    <p className="font-bold text-[#0e1a13] text-lg">{subscription.product}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-[#d1e6d9]">
                    <p className="text-sm text-[#51946b] mb-1">Frequency</p>
                    <p className="font-bold text-[#0e1a13] text-lg">{subscription.frequency}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#d1e6d9]">
                    <p className="text-sm text-[#51946b] mb-1">Next Delivery</p>
                    <p className="font-bold text-[#0e1a13] text-lg">{subscription.nextDelivery}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Settings */}
            <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] mb-8">
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-6">Subscription Settings</h3>
              
              <div className="space-y-6">
                {/* Product Select */}
                <div className="flex flex-col">
                  <label className="text-sm text-[#51946b] mb-2 font-medium">Product</label>
                  <select
                    value={subscription.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                    className="h-12 px-4 rounded-xl bg-white border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option>Fennel Mishri Water</option>
                    <option>Rose Lemon Tea</option>
                    <option>Mint Tulsi Blend</option>
                  </select>
                </div>

                {/* Frequency Select */}
                <div className="flex flex-col">
                  <label className="text-sm text-[#51946b] mb-2 font-medium">Frequency</label>
                  <select
                    value={subscription.frequency}
                    onChange={(e) => handleChange("frequency", e.target.value)}
                    className="h-12 px-4 rounded-xl bg-white border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option>Weekly</option>
                    <option>Bi-Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                {/* Shipping Address */}
                <div className="flex flex-col">
                  <label className="text-sm text-[#51946b] mb-2 font-medium">Shipping Address</label>
                  <input
                    type="text"
                    value={subscription.shippingAddress}
                    onChange={(e) => handleChange("shippingAddress", e.target.value)}
                    className="h-12 px-4 rounded-xl bg-white border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>

                {/* Payment Method */}
                <div className="flex flex-col">
                  <label className="text-sm text-[#51946b] mb-2 font-medium">Payment Method</label>
                  <input
                    type="text"
                    value={subscription.paymentMethod}
                    onChange={(e) => handleChange("paymentMethod", e.target.value)}
                    className="h-12 px-4 rounded-xl bg-white border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Update Button */}
            <div className="text-center">
              <button
                onClick={handleUpdate}
                className="h-12 px-8 bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Update Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
