import React, { useState } from "react";

export default function HelpCenterPage() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const faqs = [
    { question: "What are the ingredients in ChillSip?", answer: "ChillSip is made from natural herbs, green tea extract, and calming adaptogens." },
    { question: "How should I store ChillSip?", answer: "Store in a cool, dry place away from direct sunlight." },
    { question: "Is ChillSip suitable for all ages?", answer: "ChillSip is recommended for ages 12 and above. Consult a doctor for younger children." },
  ];

  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message submitted: ${message}`);
    setMessage("");
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f8fcf8]" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e7f3e7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e1b0e]">
            <h2 className="text-lg font-bold">ChillSip</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium text-[#0e1b0e]" href="#">Shop</a>
              <a className="text-sm font-medium text-[#0e1b0e]" href="#">Our Story</a>
              <a className="text-sm font-medium text-[#0e1b0e]" href="#">Benefits</a>
              <a className="text-sm font-medium text-[#0e1b0e]" href="#">Reviews</a>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[32px] font-bold px-4">How can we help you?</h1>

            {/* Search */}
            <div className="px-4 py-3">
              <input
                type="text"
                placeholder="Search for answers"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border-none bg-[#e7f3e7] px-4 py-2 text-[#0e1b0e] placeholder:text-[#4e974e]"
              />
            </div>

            {/* FAQs */}
            <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Frequently Asked Questions</h2>
            <div className="flex flex-col p-4 gap-3">
              {filteredFaqs.map((faq, index) => (
                <details key={index} className="rounded-lg border border-[#d0e7d0] bg-[#f8fcf8] p-3">
                  <summary className="cursor-pointer text-sm font-medium text-[#0e1b0e]">
                    {faq.question}
                  </summary>
                  <p className="text-sm text-[#4e974e] pt-2">{faq.answer}</p>
                </details>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="text-sm text-[#4e974e]">No results found.</p>
              )}
            </div>

            {/* Contact */}
            <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Contact Us</h2>
            <p className="text-base text-[#0e1b0e] px-4">
              If you have any other questions or need further assistance, please reach out:
            </p>

            <div className="px-4 py-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-[#d0e7d0] bg-[#f8fcf8] p-3 text-[#0e1b0e] placeholder:text-[#4e974e] min-h-[100px]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#17cf17] text-[#0e1b0e] font-bold px-4 py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
