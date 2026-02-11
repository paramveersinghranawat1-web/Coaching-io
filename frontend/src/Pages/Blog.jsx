import React from "react";
import Form from "../Components/Form";

const blogPosts = [
  {
    title: "Top Strategies for Board Exam Preparation",
    category: "Board Exam",
    date: "2025-12-01",
    excerpt:
      "Learn the most effective techniques to score high in board exams, including time management, revision strategies, and exam mindset.",
    link: "/blog/board-exam-preparation",
  },
  {
    title: "Study Strategies for Students",
    category: "Study Tips",
    date: "2025-11-20",
    excerpt:
      "Boost your learning efficiency with proven study strategies. Learn how to organize notes, manage time, and retain information effectively.",
    link: "/blog/study-strategies",
  },
  {
    title: "Productivity Tips for Students",
    category: "Productivity",
    date: "2025-11-10",
    excerpt:
      "Maximize your daily productivity with these simple yet powerful habits, including focus techniques and avoiding distractions.",
    link: "/blog/productivity-tips",
  },
  {
    title: "Coaching.io Announcements",
    category: "Announcements",
    date: "2025-12-15",
    excerpt:
      "Stay updated with the latest announcements from Coaching.io, including new batches, events, and educational updates.",
    link: "/blog/coachingio-announcements",
  },
];

const Blog = () => {
  return (
    <main className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">

      {/* HERO SECTION */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Our <span className="text-orange-400">Blog Posts</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Stay updated with tips, strategies, and latest announcements from Coaching.io. Explore our expert insights for students and parents.
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-orange-400 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="p-6">
                {/* Category */}
                <p className="text-orange-400 font-semibold text-sm mb-2 uppercase tracking-wide">
                  {post.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white hover:text-orange-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                {/* Date */}
                <p className="text-gray-500 text-sm mb-4">Published on: {post.date}</p>

                {/* Read More */}
                <a
                  href={post.link}
                  className="inline-block text-orange-400 font-semibold hover:text-white transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

     <section className="py-28 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden text-center">


  <div className="relative max-w-3xl mx-auto px-6">

    {/* Tag */}
    <span className="text-orange-400 uppercase tracking-widest font-semibold">
      Stay Updated
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6">
      Want More <span className="text-orange-400">Tips & Updates?</span>
    </h2>

    {/* Description */}
    <p className="text-gray-300 mb-10 text-lg leading-relaxed">
      Join our exclusive mailing list and receive expert guidance,
      smart study strategies, exam tips, and coaching updates
      directly in your inbox.
    </p>

    {/* Form Wrapper */}
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition">
      <Form />
    </div>

  </div>
</section>


    </main>
  );
};

export default Blog;
