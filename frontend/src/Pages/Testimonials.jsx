import React from "react";

/* ================= TESTIMONIAL DATA ================= */
const testimonialsData = [
  {
    name: "Rohit Sharma",
    role: "Parent",
    feedback: "Coaching.io faculty are amazing! My child improved significantly in just 3 months.",
    rating: 5,
    type: "text",
  },
  {
    name: "Sneha Verma",
    role: "Student",
    feedback: "The online classes are interactive and easy to follow. I scored 95% in my exams!",
    rating: 5,
    type: "text",
  },
  {
    name: "Parent Video",
    role: "Parent",
    video: "/assets/testimonial1.mp4",
    type: "video",
  },
  {
    name: "Student Video",
    role: "Student",
    video: "/assets/testimonial2.mp4",
    type: "video",
  },
  {
    name: "Ankit Singh",
    role: "Student",
    feedback: "Friendly teachers and helpful staff. The classroom environment is very motivating.",
    rating: 4,
    type: "text",
  },
];

/* ================= COMPONENT ================= */
const Testimonials = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="bg-green-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Testimonials
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Hear from our students and parents about their experience at Coaching.io.
          </p>
        </div>
      </section>

      {/* TEXT TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Parent & Student Feedback
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonialsData.filter(t => t.type === "text").map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-gray-700 mb-3">"{t.feedback}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-green-900">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                  <div className="flex space-x-1 text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Video Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonialsData.filter(t => t.type === "video").map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <video controls className="w-full h-64 object-cover">
                  <source src={t.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-green-900">{t.role}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / ENQUIRY */}
      <section className="bg-green-950 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Coaching.io and Achieve Excellence
          </h2>

          <form className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
            <input className="border p-3 rounded" placeholder="Your Name" />
            <input className="border p-3 rounded" placeholder="Phone" />
            <input className="border p-3 rounded" placeholder="Email" />
            <input className="border p-3 rounded" placeholder="Class (1–12)" />
            <textarea
              className="border p-3 rounded md:col-span-2"
              placeholder="Message"
              rows="4"
            ></textarea>
            <button className="md:col-span-2 bg-[#E4C590] py-3 rounded font-semibold hover:bg-[#d4b37b] transition">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

    </main>
  );
};

export default Testimonials;
