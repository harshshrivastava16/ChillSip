import React from "react";

// Reusable promo card component
const PromoCard = ({ title, description, cta, imgUrl }) => {
  return (
    <div className="card-hover group bg-white rounded-2xl p-6 border border-[#d1e6d9] shadow-lg hover:shadow-xl transition-all duration-300">
      <div
        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[#0e1a13] text-xl font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h3>
        <p className="text-[#51946b] text-base leading-relaxed flex-1">
          {description}
        </p>
        <button className="btn-primary w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300">
          <span>{cta}</span>
        </button>
      </div>
    </div>
  );
};

const Promotions = () => {
  const promos = [
    {
      title: "Bundle & Save",
      description:
        "Get 15% off when you purchase a bundle of 6 bottles. Mix and match your favorite flavors!",
      cta: "Shop Bundles",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqRdPu7TXlzg8MWj7QAud0oTnVU9Z2t2FUtmB2oq5IvixohbJiiyJAM_zeS6L45Im9jG3AVPYfwJM_kxkesuc5KVWt8CXSjlQrNPBgnzCi5Wfl8KQx_0gHiuucHKSccSrj8HOeUdHqdwcJMBF3YF2WEveIDXO-i59Y4PNd28E6EQ24-tmqXXXaaBF0B4rgyVHTgZ9XujrqY0l-uoOE_1gFmzBO8Ry_ivOw7iFrhDYv3MAPGNhS6zSuWfvXe7YjfEQGV1XPmG7uvpB9",
    },
    {
      title: "First-Time Buyer Discount",
      description:
        "Enjoy 10% off your first order. Use code WELCOME10 at checkout.",
      cta: "Shop Now",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqUaVrxcvvKYOFSSrE2FbldO4MNtUaF-6kUcaggUZ51RoPz8RKnutJmGWGMnblysj2iyHR16UGNjBAL3s9J6OAXf47lhTQDlB9lnf7dzMXF0c0vM5RKuX5cI8tjlM4wRRz2uulzPRvl96GRQsKrRvCglHsKuOMMb9v79G-V0wE_eVcVkMu3trtPYrc-Kghktn1y5QfTk9ps6m1PQOtT6z9DuwFBwlOqVpH_OgKhqJGUZwg1jxFCJsrC4PEzKgtq1yKPbo3-ROnRUk1",
    },
    {
      title: "Seasonal Flavor Sale",
      description:
        "Our limited-edition Summer Breeze flavor is now 20% off. While supplies last!",
      cta: "Shop Summer Breeze",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAhEfwhAozM_Tofr-4dlkvnl70Ofd6eEdBDq4LY9MPFInfJ7hOo_n-Xv8fgrAnREx9PQiz2u7hA5vqvqnwTfyqpRaPKIf2K3GM0jD6oE6Qae-hIdR2R9jONMhiy9kWTSnibDxasjqcc6c-IFxVkS7ll-gqFJZm9wnE5AIX5GfOEhSB14liiA-nkpaC6UadSeHh7lbTN6Wau9PPIDygwbiCrseHbNzv7ZwnLHTH351uAdiTRIcgSj9mikJW-Fvty-tYbFDPFXo7t5V8F",
    },
    {
      title: "Free Shipping",
      description:
        "Get free shipping on orders over ₹500. Stock up on your favorite Fennel Mishri Water!",
      cta: "Shop Now",
      imgUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDimJsVPHVJpCYCxa9pc2ZuPTaFpiDIm1wuMsgH7B2cb3TprJfVzNaHqdxzpca4vr4f0bOmGbrFDKlgVnfM_Y4aqHaSb1GN2XNTpB9cwlhk3xojBOZV94uN9BQwRUR5CQbhcmrGNaVlxfTAxSA5FiBOKWsTRtAdd-_ss9Vwr5Ykj_1J19S0o2RzYAeUV0KowbsiChQ-l-CFALyP8KUAgqMzygGEiGwz4JSsuiiwNjkErkHjnxSy6geHZ_lfrmk4zW8TmeJczWWL8aPg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            Current <span className="gradient-text">Promotions</span>
          </h2>
          <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
            Discover amazing deals and promotions on our refreshing ChillSip products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
          {promos.map((promo, idx) => (
            <PromoCard key={idx} {...promo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
