import React, { useState } from "react";
import Form from "../Components/Form";

/* ================= GALLERY DATA ================= */
const galleryData = {

  all:[
     "/images/banner.png",
    "/images/classroom_2.png",
     "/images/banner.png",
    "/images/classroom_3.png",
    "/images/classroom_2.png",
     "/images/banner.png",
    "/images/classroom_2.png",
     "/images/activity_1.png",
    "/images/activity_2.png",
    "/images/activity_3.png",
    "/images/topper_1.png",
    "/images/topper_2.png",
    "/images/topper_3.png",
    "/images/online.jpg",
    "/images/online_2.jpg",
    "/images/online_3.jpg",
     "/images/event.png",
      "/images/event_2.png",
      "/images/event_3.png",
    
    
  ],

  classroom: [
    "/images/banner.png",
    "/images/classroom_3.png",
    "/images/classroom_2.png",
  ],
  activities: [
    "/images/activity_1.png",
    "/images/activity_2.png",
    "/images/activity_3.png",
  ],
  toppers: [
    "/images/topper_1.png",
    "/images/topper_2.png",
    "/images/topper_3.png",
  ],
  events: [
    "/images/event.png",
      "/images/event_2.png",
      "/images/event_3.png",
  ],
  online: [
    "/images/online.jpg",
    "/images/online_2.jpg",
    "/images/online_3.jpg",
  ],
};

const categories = [
   { key: "all", label: "All " },
  { key: "classroom", label: "Classroom Photos" },
  { key: "activities", label: "Student Activities" },
  { key: "toppers", label: "Toppers" },
  { key: "events", label: "Events" },
  { key: "online", label: "Online Teaching" },
];

/* ================= COMPONENT ================= */
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("classroom");

  return (
    <main className="bg-black text-white">


      {/* CATEGORY TABS */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                ${activeCategory === cat.key
                  ? "bg-orange-400 text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-orange-400 hover:text-black"}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* IMAGES */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData[activeCategory].map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`${activeCategory}-${i}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

   <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">

 
  <div className="relative max-w-6xl mx-auto px-6 text-center">

    {/* Tagline */}
    <span className="text-orange-400 uppercase tracking-widest font-semibold">
      Start Learning Today
    </span>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-white">
      Interested in <span className="text-orange-400">Coaching.io</span> Classes?
    </h2>

    {/* Description */}
    <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
      Book a free demo class or connect with our academic counselors
      to experience structured, result-oriented learning.
    </p>

    {/* Form Wrapper */}
    <div className="max-w-md sm:max-w-lg mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition">
      <Form />
    </div>

  </div>
</section>


    </main>
  );
};

export default Gallery;
