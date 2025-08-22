import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "ChillSip 500ml Bottle",
      desc: "Perfect for on-the-go hydration. Enjoy the crisp, refreshing taste of ChillSip in a convenient 500ml bottle.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxuAJ9Bf5aa-bK6YdqwQd3N09T9MipNmSXFSbPO0IHK3zWSiVGcja_lNUa8qE9PM81h56DXpzmf8sgAJiJLviyXjc6LS5KcLglscX2QVc2nNlMiX8DJidNGSeUZUMWYFvZfDDxgM23zAzQivXgM4RH-LeZJ1FG8RH5x04ucosRPhWpMCnwbBzjkcUG3QyYAiKXfHdTgyzzKmfD-3v3bWn1A4T1psf-V5ptXe_S8tJiqE4Uu-L94ULiMQXE_xXo6kmNPImFZySO24Zj",
      price: 300,
      size: "500ml"
    },
    {
      id: 2,
      title: "ChillSip 1 Liter Bottle",
      desc: "Stay refreshed throughout the day with our larger 1-liter bottle. Ideal for sharing or keeping at your desk.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMT8NysEyH-5HGChatiFfbJWl2s-sP4rDyFqIJEyerdILf05Rd1OS9lkMYSWFnYoBbcoPCIKcdrOKUMlJ3hqNwmpWsJu6mBGgGstvetcHiayyZFcOeWiB9Ylb32vvxm0nxY_HWG0Mo-_9Z5Nlh2F21RfQz-zJvYBc15wcVvQQRANQwGZyVWcu8GFDII34WqnLuAGn7UNzqIAPHtRoosZHZ4gG4laVm9du3wCzb5XMxMDNFWuoP7xd8hV2QjmMTMFNNdsT8NHSNRfX6",
      price: 480,
      size: "1 Liter"
    },
    {
      id: 3,
      title: "ChillSip 6-Pack (500ml)",
      desc: "Stock up on your favorite ChillSip with our 6-pack of 500ml bottles. Great for families or frequent drinkers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD03mwqiL8FbQSx_l335CYhH3UC9f5GsoJgJ1KC0-Phj8gp-wfiB9vrrl2rQ1cxEBJ6i5v2VseXlJYb-pYfVgw4suaxRbPhf1a6EGGuG3xwTSav3J81YSYEh28jA7yEsdcp1pDKxrQAJdt-nD4AJ3kzU_Qg2ALlBDlYBSHAXyYKtwud7uq4QIoOZ9zBsnsGVnbmjDyXNzdW7Edi0Flp2di8OxcmYINgY_AAExLbB8vlwpkAdwVcDaMnxWKowokOAE7bO3eq5mBxxJ1i",
      price: 1680,
      size: "6 x 500ml"
    },
    {
      id: 4,
      title: "ChillSip 12-Pack (500ml)",
      desc: "Never run out of ChillSip with our 12-pack of 500ml bottles. Perfect for parties or long-term supply.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrcIhPgaqEQgazpKHvz4Jd7f5T3VNtO4NHSnREIZlnWRec7OQC_mBIJIhknr9zMQoaxyJRh6lfWqSzG23Df-SEjrMoVO5fElnFNnovSU2H6ghtI7SC28brzoZsF7VHyZKYAK9RodgxSRVZI_8p-tTzBaCBs1fbyvlOGMxYpk62GBOKWPCs5oLLyxHPKtnV7_J35MUspEUrlA2mDucBBg7fBNaoqsq4NMVlfDWy_0-Pwob0L3lao9zOeLZYb2gB717dIojAcI37pK4q",
      price: 3000,
      size: "12 x 500ml"
    },
    {
      id: 5,
      title: "ChillSip 4-Pack (1 Liter)",
      desc: "Enjoy the convenience of our 4-pack of 1-liter bottles. Ideal for larger gatherings or stocking up for the week.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2io5xxdvU-uTOTGVTdhdvV4oZD52eKyZy_K-lZ3X30oXZQmihe5FbSi9nsjiiYVShgigNRnnRY1xBQQbzrWqqBebQ3Cw_lAMkmBvvPHxbSvysYIgeMPh2Gvyfk6POkCJHV7dcVH-7rzDf799sVwyn3FFLnJPmoUewP_UKpjfAI_EKB2VoPN8Y2WYZNsi7qW58cwSkeyqi72LRxYIvhyn8LnVNJOkxeC6sTHluy2CbQBraZottdVPip4MQaxyHwTjD7MZ-2A_PTcHx",
      price: 1800,
      size: "4 x 1 Liter"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Our <span className="gradient-text-white">Products</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Discover the refreshing taste of ChillSip Fennel Mishri Water in various sizes and packages. 
              Perfect hydration for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Shop <span className="gradient-text">ChillSip</span>
            </h2>
            <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
              Choose from our premium selection of ChillSip products, perfect for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {products.map((product) => (
              <div key={product.id} className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fbfa] to-[#e8f2ec] border border-[#d1e6d9] hover:shadow-xl transition-all duration-300">
                {/* Product Image */}
                <div className="relative h-64 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.img})` }}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#39e079] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.size}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#0e1a13] text-xl font-bold mb-3 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-[#51946b] text-base leading-relaxed mb-4 flex-1">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#0e1a13] text-2xl font-bold">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary w-full flex items-center justify-center rounded-full h-12 px-6 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300"
                  >
                    <span className="truncate">Add to Cart</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-[#f8fbfa] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Complete <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
              Transparent pricing for all our ChillSip products. Find the perfect option for your hydration needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d1e6d9]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#39e079] to-[#2dc869]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Size</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d1e6d9]">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-[#f8fbfa] transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-[#0e1a13]">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#51946b]">
                        {product.size}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#39e079]">
                        ₹{product.price.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in">
            <p className="text-[#51946b] text-lg mb-6">
              Ready to experience the refreshing taste of ChillSip?
            </p>
            <Link
              to="/cart"
              className="btn-primary inline-flex items-center justify-center rounded-full h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300"
            >
              View Cart
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
