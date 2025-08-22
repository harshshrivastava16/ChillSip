import React, { useState } from "react";

export default function UserAccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdate = () => {
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              My <span className="gradient-text-white">Account</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Manage your ChillSip profile, orders, and preferences in one place.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          {/* Tabs */}
          <div className="card-hover bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg mb-8">
            <div className="flex flex-wrap gap-6 border-b border-[#d1e6d9] pb-6">
              {[
                { id: "profile", label: "Profile Information" },
                { id: "orders", label: "Order History" },
                { id: "subscriptions", label: "Subscriptions" },
                { id: "settings", label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white shadow-lg"
                      : "bg-[#f8fbfa] text-[#51946b] hover:bg-[#e8f2ec] hover:text-[#0e1a13]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "profile" && (
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-6">
                  Profile Details
                </h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-sm text-[#51946b] mb-2 font-medium">Name</label>
                    <input
                      className="h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-sm text-[#51946b] mb-2 font-medium">Email</label>
                    <input
                      className="h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="text-sm text-[#51946b] mb-2 font-medium">Phone Number</label>
                    <input
                      className="h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col">
                    <label className="text-sm text-[#51946b] mb-2 font-medium">Address</label>
                    <input
                      className="h-12 px-4 rounded-xl bg-[#f8fbfa] border border-[#d1e6d9] focus:outline-none focus:ring-2 focus:ring-[#39e079] focus:border-transparent transition-all duration-300 text-lg"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                    />
                  </div>

                  {/* Update Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleUpdate}
                      className="h-12 px-8 bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-4">Order History</h2>
                <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-[#51946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-[#51946b] text-lg">
                    You don't have any orders yet.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "subscriptions" && (
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-4">Subscriptions</h2>
                <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-[#51946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[#51946b] text-lg">
                    No active subscriptions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-[#0e1a13] mb-4">Settings</h2>
                <div className="card-hover bg-[#f8fbfa] rounded-2xl p-6 border border-[#d1e6d9] text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-[#51946b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[#51946b] text-lg">
                    Account settings will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
