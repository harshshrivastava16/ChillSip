import React from "react";

const faqs = [
  {
    question: "What are the key benefits of Fennel Mishri Water?",
    answer: "Fennel Mishri Water aids digestion, refreshes breath, and provides a natural cooling effect for the body.",
  },
  {
    question: "How does ChillSip ensure the quality of its ingredients?",
    answer: "We source our ingredients from trusted farms and suppliers, and every batch undergoes strict quality checks.",
  },
  {
    question: "Is ChillSip suitable for all age groups?",
    answer: "Yes, ChillSip is crafted with natural ingredients, making it safe and refreshing for all ages.",
  },
  {
    question: "How should I store ChillSip?",
    answer: "Keep ChillSip in a cool, dry place away from direct sunlight. Refrigeration after opening is recommended.",
  },
  {
    question: "What is the shelf life of ChillSip?",
    answer: "ChillSip has a shelf life of 12 months from the date of manufacturing.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              Frequently Asked <span className="gradient-text-white">Questions</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Find answers to common questions about ChillSip, our products, and how we can help you stay refreshed and healthy.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="fade-in">
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-hover group bg-white rounded-2xl p-8 border border-[#d1e6d9] shadow-lg hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6">
                    <h3 className="text-xl font-bold text-[#0e1a13] group-open:text-[#39e079] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="text-[#39e079] transform group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <p className="text-[#51946b] text-base leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="fade-in mt-16 text-center">
            <div className="bg-gradient-to-r from-[#39e079] to-[#2dc869] rounded-2xl p-12">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Our support team is here to help you with any additional questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@chillsip.com"
                  className="h-12 px-8 bg-white text-[#39e079] rounded-full font-bold hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                >
                  Email Support
                </a>
                <a
                  href="tel:+15551234567"
                  className="h-12 px-8 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#39e079] transition-all duration-300 flex items-center justify-center"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
