import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const { addToCart } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
    // Add actual subscription logic here
  };

  const productSizes = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABmxDUbAL1bXreKW42pGR8p5mDBQqEc96z82wAamZ_Adp_o4FI8TWoZWJM5tZrQcLEWW5otEFtFK0PLwt9avw5tjFkkge7-zpoHK0sD6kYuk3YXQOIBfDLYkEaG-lHQf8OZBlEqovMRJiOi1SE2bCB_RKJQXsBfMTeVQimm_EEhafxAdP473xwFSOhZKi1DBWb6DkTczb1EzTT8ehOw15mzxOK1W4AwSsnmK2LnlwIstD3JxXwRmuaiH-rTxDw-KIFsvRaGH4QVLJq",
      size: "250ml"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoKE1KIpH3LdcBfpm-9ob5h7gzKyxOoFq6IhnOnYaGj1M9_cbFpPDgjrv3j987XlMOSJfr7dJ4Vr2i_bqZ42EmTYMYN1uvag0fX8LJbkxlANptTYWnd-sbbvHUPpbfccCH4IZLf6CvZKe1DW1avraTaZb5XlTuEQmLANjja3N6PmPleC0NJwYKpp8mELnDBjk4VnbHeeZz1uNq8xM-ut5Q5X9UK90AfbvUG7EYpvCTzHSYik_NPLkjQL4mUVDTXMPbMs_fwokASjma",
      size: "350ml"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJLVamoa7VMHwK01NR5ty3s8nv9gCGK33T19NxpO6YBwkGT7BgHl03ZIkfQ0D7NrMXF8UwAesY6VwahJany4CMvmY76jAmCtDucRcCH_X22q-RP3GSWK_95cIwj1HjyTOpkWDdnsdrgBL1xmfPeXqet-dNRu05rWOdHJ0Z-0CMlxp0RwWZwKv7WAgJmnI6tWmqIuaHs8nc8mSau1xjChN-xJHbqXs9HY0jWih6hODTEeMAF1fiMouHPual-OGieNlTYZlN2AmKDRZQ",
      size: "500ml"
    }
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"/>
        </svg>
      ),
      title: "Natural Ingredients",
      description: "Made with the finest fennel and mishri, free from artificial additives."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"/>
        </svg>
      ),
      title: "Pure Hydration",
      description: "Quench your thirst with our naturally refreshing and hydrating water."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"/>
        </svg>
      ),
      title: "Wellness Boost",
      description: "Enhance your well-being with the subtle sweetness and digestive benefits."
    }
  ];

  const testimonials = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxKBi4N9x-Q8e4rKmNtyiJLV7ZaYVPgbW5ozxLQaAfH1O_j4-WfVjeuYDdOHnfehj6beANTazXPbWxwy-v-nMrJ1Htt4o5JlBwPpZc-4XM_fmrHUGmeL28oXhR36wtm8p9beCHDOdd7VUwKLPRG6RHi4ZVMENVqf0dA4EofYq4nyDn20Ecfhb8KNXp59AyANqKw299Wrrh1uCrx9ZwU4Eg01vFxF2OSlv08NZyxn-iwt3sPbImYNRE8pUvCo0ZAq9gEclIn1chGI7p",
      name: "Sarah M.",
      quote: "ChillSip is my go-to drink for a refreshing and healthy hydration. Love the subtle sweetness!"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6V52urNUMyOobxTgyyBgSyt2uQsCeC36MZzg9yb5A8yrru_6R3j-TpGpbUqfKmxdTJi6-t_Q8MTxXIMGfr-CFpM4yi-ZD93dFZlEH5SlOOISm22ukThxJrV-Vq_B3a8kyWm7Ek-Voh3h7sqaIzI5VDoRzTjD7tnURPtVfyag2dxrq73kVdD3C2LYejj27IvbxJRjI665TFx5v7-f5WLnr4uMXhLU6csRfwr3wUPApRGKEM100hTsP5JugzJnVi9lNU5HtYChRb96F",
      name: "David L.",
      quote: "I appreciate the natural ingredients and the digestive benefits. It's a great alternative to sugary drinks."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPByAi9J3FF_Hh4ODV-TEmj2TFhK-GPSApFHpjI7WKvBmwYRjbOrvGmvjb1R6bKpGSVMgleHMlY3Ir6007SKDPWXO4bY6HQ5-HM1OtXQWR2EIuhDRk4PJ6S4CSH3-dxUFgL1vDoyRH51dHuVCBnikzkFi73OlYkG9VmxPt8zZ4ensCgp5aYuqwc328-okHyMfUknAmgRDhZ8YjtmEz8-Ir2Dh_7YrUXczDtbRa1wdYR9kqzLLp0J3WF8Up0LndNlRASyh32QfJM560",
      name: "Emily R.",
      quote: "The perfect drink for a hot day or after a workout. It's so refreshing and tastes amazing!"
    }
  ];

  const products = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyynbrgQyqATN6xrj6YOJ1ZY-G6LCzt5XhAnXZk3RYEqtm0kfC5nSOV8WIOVlkrp6IeSdEh6V6NnbN7B56ZGF3FLqkZMADJvQIXKnsDtc19KdDTAbulGm-ZuIlRFN-ZsLF5ci_evGuAnM7R-oT53TdupEQwiRgoXnOmFQkMi6GqAetrtSkXcqXS_IoTmrf75hS3r1VbixrOtmah-Te3VEJUfxbMkpLAbnqUMtAJU9R03afhQoSbvwpD1DF03_ZmqZwbMDH6wTXc7c2",
      name: "ChillSip ",
      description: "250 ml"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOY6dPYRQUTBchLH-D5M94HwlGTRl3k1JcTAerR0E-Joqewdutwnt9zt59EWSrSFyKb45V_mQQaPYBlBKWxkygt6UCpw4Ok4zSYe8YYKdPuM-E5zpnJkW6KuWfzwYbfdBDV9ncn0BcwiwkOnnqAP-vHqoVVu5LN5Z19DJRAXNeLvR2gsxENVBQQjMYwLyWIKJbvYxrnXdoSnnFGoVT_-QOUqFv2P3eaDd35OwzX8zosagmA5-8SVvpSagvFapHNcZHRQzOr7l5mawh",
      name: "mishrimist",
      description: "300ml"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmexLFtExCeksr5t95avnTJWEtzhbt0MNDvgh7PDdjS045Xte-LTlXkL1vejKl1YsvLH7xJ7fZC88CrW0991eDQMWBSTu_GsFXUQaCJi6eM3aIqUiHKP3a1kKHM2vPyHErWS5j2OyGQpiCaM0u5WgwYotEwGTQIJmC-cOE7xJZCO62vpqloNoNP_4p0xSXou1Zlbg4U7tFKH-8HPp0Lqft_uRu2bOpHIDv96pLesz247s7CiFcA-dq8fU5eHXKOW-4M-PdMi3_S_19",
      name: "lemonseed",
      description: "400ml"
    }
  ];

  const blogPosts = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjwp6x2XJs-Nb1cHfv5UWutNuWAh5xaxybbcqFSSgK7fxwCHFXFyVSmadWh88BQQ3maOlERyONVP_X49d33jfnbakIG2Xg6lD2iQrpmq2KPM6BNHeTrFfcF56_Z57guaS3aJta7_Xa8lQm4IETuIPkA0xiupsFHAkuozmuDzo7fwOsUvTz6uAcEk5b6HMTmpOy3Xb7aDkjzy8dsA4aejXvOVCVn1Gm_S8obVrCuoz8QVIIv13LqNVLsJT9-BdaNT84QYE97ZdJDCR2",
      title: "The Benefits of Fennel Mishri Water",
      description: "Discover the health benefits of fennel and mishri."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8TS1KRWsVt21RbfxCdYpTBTpOz_epZuaiNNyrCyZ2PxlX798IkMV7fOEXY5aO00rvVvK8yW4UaTn3scDaUtq0Hmao1H9W1LpgUHtJlgsvXvaXkEFWvu2kFC5iogCdJ3RrtfUlid662PWV8f5hiyjhTGsXbTjlO3H0UXZ0VUuvkEOta1FWKounpk3qy06xwAZL-CHA1MiHVa-wBjzlRvv28LKpOdCdnmTZ6fS-9nFW9uoiSjlYRIseQKP6p1pF8d40fTBZoPTunaRQ",
      title: "Stay Hydrated Naturally",
      description: "Tips for staying hydrated throughout the day."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE77HeH-JZp8fHXYSvlqVw0WRhAYSnUbUwUUIsu8C0Td_wTg1qIBowtobYp1pNZ8Zbye0JdtEGsDSG7AywwH5GFPZuXlEWwSNeUxJdwSaeDszyalKVzWaVd7qHfurV2Wwcnl1e35nRWPSXCBfCYNYWd8wRMr2E5sfggf8zCH-FDkViGMdaxRyGbH3BDmjyUeO4fxr8G2BSRdlfLowLaAL9Op43SWVIvMt9ez60JbisLPW54GZgjF6vUTAJ6qr76ezAsEwtYMjfySdj",
      title: "Wellness Tips for a Healthy Lifestyle",
      description: "Simple wellness tips to boost your overall health."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col gap-8 md:gap-12 items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0HPvbIf1Oq57KdrpYKWYXfqrQ9Fc31MkCf9qcXzhH0eWd-gpFZpe6tmsVN4p4YhN3_pfq1-GX24OlBRlwDcv2X7iqoA3HWgTnDWt169LXPuXhr4gi8rjKAuBMz9Y0QQgtgtYkeDJncaBnbB_IM3VKVg1F8s_zgWKhaVvb9nhkEqnz8LKi6NsUqj-e3EFMW2O9OoX076XQy1nsYmiAsrMMFNx05WM-kyR3P1Xl6Fsg6SbHeAyheJlwUD3RWl-vJ59NpjTVCsHKN3XX")`
          }}
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 backdrop-blur-sm fade-in">
            <div className="flex flex-col gap-4 md:gap-6 text-center">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                Quench Your Thirst, <span className="gradient-text">Naturally</span>
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                Experience the refreshing taste of ChillSip, crafted with pure fennel and mishri for optimal hydration and wellness.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/products"
                className="btn-primary flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Order Now</span>
              </Link>
              <Link
                to="/offers"
                className="btn-secondary flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300"
              >
                <span className="truncate">Special Offers</span>
                
              </Link>
            </div>

         
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Product Sizes Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Our Refreshing <span className="gradient-text">Sizes</span>
              </h2>
              <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
                Choose the perfect size for your hydration needs, from on-the-go convenience to family sharing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {productSizes.map((product, index) => (
                <div key={index} className="card-hover group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-[#f8fbfa] to-[#e8f2ec] border border-[#d1e6d9]">
                  <div
                    className="w-48 h-64 bg-center bg-no-repeat bg-cover rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <h3 className="text-[#0e1a13] text-xl font-bold mb-2">{product.size}</h3>
                  <p className="text-[#51946b] text-sm">Perfect for {product.size === '500ml' ? 'daily hydration' : product.size === '1L' ? 'workouts' : 'family use'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#f8fbfa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Experience the <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
                Discover the unique blend of taste and health benefits in every sip of ChillSip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {features.map((feature, index) => (
                <div key={index} className="card-hover group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#d1e6d9] shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#39e079] to-[#2dc869] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-[#0e1a13] text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[#51946b] text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
                Hear from our satisfied customers who have experienced the refreshing taste of ChillSip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-hover group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-[#f8fbfa] to-[#e8f2ec] border border-[#d1e6d9] hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-white ring-offset-2 ring-offset-[#f8fbfa]">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                  </div>
                  <h3 className="text-[#0e1a13] text-xl font-bold mb-4">{testimonial.name}</h3>
                  <p className="text-[#51946b] text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-b from-[#f8fbfa] to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Shop <span className="gradient-text">ChillSip</span>
              </h2>
              <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
                Choose from our premium selection of ChillSip products, perfect for every occasion.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {products.map((product, index) => (
                <div key={index} className="card-hover group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#d1e6d9] shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className="w-58 h-68 bg-center bg-no-repeat bg-cover rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <h3 className="text-[#0e1a13] text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-[#51946b] text-base mb-6">{product.description}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                From Our <span className="gradient-text">Blog</span>
              </h2>
              <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
                Discover wellness tips, hydration guides, and the latest insights from ChillSip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {blogPosts.map((post, index) => (
                <div key={index} className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fbfa] to-[#e8f2ec] border border-[#d1e6d9] hover:shadow-xl transition-all duration-300">
                  <div
                    className="w-full h-48 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-[#0e1a13] text-xl font-bold mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[#51946b] text-base leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#39e079] text-sm font-medium">Read More</span>
                      <svg className="w-5 h-5 text-[#39e079] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Stay <span className="gradient-text-white">Updated</span>
              </h2>
              <p className="text-white/90 text-lg font-normal leading-normal max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive offers, wellness tips, and the latest updates from ChillSip.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-6 py-4 rounded-full text-[#0e1a13] text-base font-normal leading-normal placeholder:text-[#51946b] bg-white border-2 border-transparent focus:border-[#39e079] focus:outline-none focus:ring-2 focus:ring-[#39e079]/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="btn-secondary flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform duration-300"
                >
                  <span className="truncate">Subscribe</span>
                </button>
              </div>
              <p className="text-white/80 text-sm text-center mt-4">
                By subscribing, you agree to receive marketing emails from ChillSip. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
