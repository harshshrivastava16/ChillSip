import React from "react";

const BlogPage = () => {
  const posts = [
    {
      title: "The Refreshing Benefits of Fennel Mishri Water",
      desc: "Discover how fennel mishri water can enhance your daily hydration and overall wellness.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
      category: "Wellness",
      date: "Dec 15, 2023"
    },
    {
      title: "Stay Hydrated with ChillSip: Tips and Tricks",
      desc: "Practical advice to maintain optimal hydration levels with ChillSip.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
      category: "Hydration",
      date: "Dec 12, 2023"
    },
    {
      title: "Fennel Mishri Water Recipes for Every Season",
      desc: "Creative and delicious recipes to enjoy fennel mishri water in various ways.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "Recipes",
      date: "Dec 10, 2023"
    },
    {
      title: "The Science Behind Fennel Mishri Water's Wellness Properties",
      desc: "A deep dive into the scientific research supporting the health benefits of fennel mishri water.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "Science",
      date: "Dec 8, 2023"
    },
    {
      title: "ChillSip: Your Daily Dose of Natural Hydration",
      desc: "Make ChillSip a part of your daily routine for a refreshing and healthy hydration boost.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
      category: "Lifestyle",
      date: "Dec 5, 2023"
    },
    {
      title: "Exploring the Cultural Significance of Fennel Mishri Water",
      desc: "Learn about the historical and cultural roots of fennel mishri water.",
      image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=300&fit=crop",
      category: "Culture",
      date: "Dec 3, 2023"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbfa] via-[#e8f2ec] to-[#d1e6d9]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#39e079] to-[#2dc869]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
              ChillSip <span className="gradient-text-white">Blog</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              Explore articles on wellness, hydration, and the incredible benefits of fennel mishri water.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Search and Filters */}
        <div className="fade-in mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <label className="flex w-full h-14">
                <div className="flex flex-1 items-center rounded-2xl bg-white border border-[#d1e6d9] px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-[#39e079] mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search articles..."
                    className="w-full bg-transparent focus:outline-none text-[#0e1a13] placeholder-[#51946b]"
                  />
                </div>
              </label>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {["All", "Wellness", "Hydration", "Recipes", "Science", "Lifestyle", "Culture"].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full bg-white border border-[#d1e6d9] text-sm font-medium text-[#0e1a13] hover:bg-[#39e079] hover:text-white hover:border-[#39e079] transition-all duration-300"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {posts.map((post, index) => (
            <article key={index} className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#d1e6d9] hover:shadow-xl transition-all duration-300">
              {/* Post Image */}
              <div className="relative h-48 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#39e079] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#51946b] text-sm font-medium">{post.date}</span>
                </div>
                
                <h3 className="text-[#0e1a13] text-xl font-bold mb-3 leading-tight group-hover:text-[#39e079] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[#51946b] text-base leading-relaxed mb-4 flex-1">
                  {post.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#d1e6d9]">
                  <span className="text-[#39e079] text-sm font-medium">Read More</span>
                  <svg className="w-4 h-4 text-[#39e079] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="fade-in mt-16 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded-full bg-[#39e079] text-white font-bold flex items-center justify-center hover:scale-110 transition-transform duration-300">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-[#d1e6d9] text-[#0e1a13] flex items-center justify-center hover:bg-[#39e079] hover:text-white hover:border-[#39e079] transition-all duration-300">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-[#d1e6d9] text-[#0e1a13] flex items-center justify-center hover:bg-[#39e079] hover:text-white hover:border-[#39e079] transition-all duration-300">
            3
          </button>
          <button className="px-4 h-10 rounded-full bg-white border border-[#d1e6d9] text-[#0e1a13] flex items-center justify-center gap-2 hover:bg-[#39e079] hover:text-white hover:border-[#39e079] transition-all duration-300">
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="fade-in mt-20 bg-gradient-to-r from-[#39e079] to-[#2dc869] rounded-2xl p-12 text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest articles and updates about ChillSip delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="h-12 px-8 bg-white text-[#39e079] rounded-full font-bold hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
