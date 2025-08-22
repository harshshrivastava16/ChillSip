import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Our <span className="gradient-text-white">Story</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              At ChillSip, we believe in the power of simple, natural ingredients to enhance your well-being. 
              Our journey began with a desire to create a refreshing and healthy beverage that not only tastes 
              great but also offers numerous health benefits.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Mission Section */}
        <Section
          title="Our Mission"
          text="Our mission is to provide a natural and delicious way to stay hydrated and support your digestive health. We are committed to using only the highest quality, sustainably sourced ingredients and crafting our beverages with care. We strive to promote a balanced lifestyle and empower individuals to make healthier choices."
          icon={
            <svg className="w-8 h-8 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />

        {/* Team Section - Revealing Soon */}
        <div className="fade-in mb-16">
          <div className="text-center mb-12">
            <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#51946b] text-lg font-normal leading-normal max-w-2xl mx-auto">
              We're assembling an amazing team of passionate individuals dedicated to bringing you the best ChillSip experience.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#f8fbfa] to-[#e8f2ec] rounded-2xl border-2 border-dashed border-[#d1e6d9] p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[#39e079] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0e1a13] mb-4">Team Revealing Soon</h3>
              <p className="text-[#51946b] text-lg max-w-md mx-auto">
                We're excited to introduce our talented team members who are working behind the scenes to make ChillSip amazing!
              </p>
              <div className="mt-6 bg-[#39e079] text-white px-6 py-2 rounded-full text-sm font-bold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Sourcing Section */}
        <Section
          title="Sourcing & Quality"
          text="We carefully select our fennel seeds from trusted farms known for their sustainable practices and high-quality produce. Our mishri (rock sugar) is sourced from reputable suppliers who adhere to strict quality standards. We are committed to transparency and traceability in our sourcing, ensuring that every bottle of ChillSip meets our rigorous quality criteria."
          icon={
            <svg className="w-8 h-8 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />

        {/* Health Benefits Section */}
        <Section
          title="Health Benefits"
          text="ChillSip Fennel Mishri Water offers a range of health benefits, including improved digestion, reduced bloating, and a natural source of hydration. Fennel seeds are known for their carminative properties, which help to relieve gas and bloating. Mishri provides a natural and less refined alternative to processed sugars, offering a subtle sweetness without the negative health effects. Enjoy ChillSip as a refreshing and beneficial addition to your daily routine."
          icon={
            <svg className="w-8 h-8 text-[#39e079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
        />

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-[#39e079] to-[#2dc869] rounded-2xl p-12">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Join Our Journey
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Be part of our mission to bring natural, refreshing hydration to everyone. 
              Discover the ChillSip difference today.
            </p>
            <button className="bg-white text-[#39e079] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Section Component
function Section({ title, text, icon }) {
  return (
    <div className="fade-in mb-16">
      <div className="flex items-center gap-4 mb-8">
        {icon}
        <h2 className="text-[#0e1a13] text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h2>
      </div>
      <p className="text-[#51946b] text-lg leading-relaxed max-w-4xl">
        {text}
      </p>
    </div>
  );
}
