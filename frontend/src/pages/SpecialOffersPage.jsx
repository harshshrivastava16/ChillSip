import React from "react";
import { Link } from "react-router-dom";

// Reusable promo card component
const PromoCard = ({ title, description, cta, imgUrl, discount, tag }) => {
  return (
    <div className="card-hover group relative bg-white rounded-3xl p-8 border-2 border-[#d1e6d9] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute -top-4 -right-4 z-10">
          <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6">
            {discount} OFF!
          </div>
        </div>
      )}
      
      {/* Tag */}
      {tag && (
        <div className="absolute -top-3 -left-3 z-10">
          <div className="bg-gradient-to-r from-[#39e079] to-[#2dc869] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {tag}
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl mb-6">
        <div
          className="w-full h-60 bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="text-[#0e1a13] text-2xl font-bold leading-tight tracking-[-0.015em] group-hover:text-[#2dc869] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#51946b] text-base leading-relaxed flex-1">
          {description}
        </p>
        <Link
          to="/products"
          className="btn-primary w-full cursor-pointer items-center justify-center rounded-full h-14 px-8 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-[#2dc869] group-hover:to-[#39e079]"
        >
          <span>{cta}</span>
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const SpecialOffersPage = () => {
  const promos = [
    {
      title: "Bundle & Save",
      description:
        "Get 15% off when you purchase a bundle of 6 bottles. Mix and match your favorite flavors! Perfect for stocking up and trying new combinations.",
      cta: "Shop Bundles",
      discount: "15%",
      tag: "Popular",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqRdPu7TXlzg8MWj7QAud0oTnVU9Z2t2FUtmB2oq5IvixohbJiiyJAM_zeS6L45Im9jG3AVPYfwJM_kxkesuc5KVWt8CXSjlQrNPBgnzCi5Wfl8KQx_0gHiuucHKSccSrj8HOeUdHqdwcJMBF3YF2WEveIDXO-i59Y4PNd28E6EQ24-tmqXXXaaBF0B4rgyVHTgZ9XujrqY0l-uoOE_1gFmzBO8Ry_ivOw7iFrhDYv3MAPGNhS6zSuWfvXe7YjfEQGV1XPmG7uvpB9",
    },
    {
      title: "First-Time Buyer Discount",
      description:
        "Enjoy 10% off your first order. Use code WELCOME10 at checkout. Start your ChillSip journey with this exclusive welcome offer!",
      cta: "Get Started",
      discount: "10%",
      tag: "New",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqUaVrxcvvKYOFSSrE2FbldO4MNtUaF-6kUcaggUZ51RoPz8RKnutJmGWGMnblysj2iyHR16UGNjBAL3s9J6OAXf47lhTQDlB9lnf7dzMXF0c0vM5RKuX5cI8tjlM4wRRz2uulzPRvl96GRQsKrRvCglHsKuOMMb9v79G-V0wE_eVcVkMu3trtPYrc-Kghktn1y5QfTk9ps6m1PQOtT6z9DuwFBwlOqVpH_OgKhqJGUZwg1jxFCJsrC4PEzKgtq1yKPbo3-ROnRUk1",
    },
    {
      title: "Seasonal Flavor Sale",
      description:
        "Our limited-edition Summer Breeze flavor is now 20% off. While supplies last! Experience the refreshing taste of summer in every sip.",
      cta: "Try Summer Breeze",
      discount: "20%",
      tag: "Limited",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEfwhAozM_Tofr-4dlkvnl70Ofd6eEdBDq4LY9MPFInfJ7hOo_n-Xv8fgrAnREx9PQiz2u7hA5vqvqnwTfyqpRaPKIf2K3GM0jD6oE6Qae-hIdR2R9jONMhiy9kWTSnibDxasjqcc6c-IFxVkS7ll-gqFJZm9wnE5AIX5GfOEhSB14liiA-nkpaC6UadSeHh7lbTN6Wau9PPIDygwbiCrseHbNzv7ZwnLHTH351uAdiTRIcgSj9mikJW-Fvty-tYbFDPFXo7t5V8F",
    },
    {
      title: "Free Shipping",
      description:
        "Get free shipping on orders over ₹500. Stock up on your favorite Fennel Mishri Water and enjoy hassle-free delivery right to your doorstep!",
      cta: "Shop Now",
      tag: "Free",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDimJsVPHVJpCYCxa9pc2ZuPTaFpiDIm1wuMsgH7B2cb3TprJfVzNaHqdxzpca4vr4f0bOmGbrFDKlgVnfM_Y4aqHaSb1GN2XNTpB9cwlhk3xojBOZV94uN9BQwRUR5CQbhcmrGNaVlxfTAxSA5FiBOKWsTRtAdd-_ss9Vwr5Ykj_1J19S0o2RzYAeUV0KowbsiChQ-l-CFALyP8KUAgqMzygGEiGwz4JSsuiiwNjkErkHjnxSy6geHZ_lfrmk4zW8TmeJcz-WW8aPg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f8f4] via-[#e0f0e8] to-[#c8e2d4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              🎁
            </div>
          </div>
          <h1 className="text-[#0e1a13] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.02em] mb-6">
            Exclusive <span className="gradient-text">Special Offers</span>
          </h1>
          <p className="text-[#51946b] text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Discover incredible deals and promotions crafted just for you. Limited time offers to enhance your ChillSip experience!
          </p>
          <div className="flex items-center justify-center gap-4 text-[#51946b] text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#39e079] rounded-full animate-pulse"></div>
              <span>Limited Time Only</span>
            </div>
            <div className="w-1 h-1 bg-[#51946b] rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse"></div>
              <span>Exclusive Deals</span>
            </div>
          </div>
        </div>
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 stagger-animation">
          {promos.map((promo, idx) => (
            <PromoCard key={idx} {...promo} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in">
          <div className="bg-gradient-to-r from-[#39e079] to-[#2dc869] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Ready to Save Big?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on these amazing offers. Shop now and experience the refreshing taste of ChillSip at incredible prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="btn-secondary flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300 bg-white hover:bg-gray-50"
              >
                <span>View All Products</span>
              </Link>
              <Link
                to="/"
                className="btn-primary flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300 bg-transparent border-2 border-white hover:bg-white hover:text-[#0e1a13]"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersPage;
