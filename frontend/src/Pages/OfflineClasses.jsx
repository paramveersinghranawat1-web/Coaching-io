import React from "react";
import  Form from "../Components/Form"
const OfflineClasses = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
{/* OFFLINE CLASSES */}
<section className="bg-black w-full py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: Content */}
    <div className="text-white space-y-6 fade-on-scroll translate-y-6 transition-all duration-700">
      <span className="text-orange-400 font-semibold tracking-wide uppercase">
        Offline Learning
      </span>

      <h1 className="text-4xl md:text-5xl font-extrabold">
        Experience Classroom Learning with <span className="text-orange-400">Coaching.io</span>
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Experience classroom learning with expert teachers, modern infrastructure, and focused student attention.
      </p>

      <ul className="space-y-3 text-gray-200 text-sm">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
          Interactive Classroom Sessions
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
          Experienced Teachers Across All Subjects
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
          Modern Classrooms & Learning Resources
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
          Focused Attention on Every Student
        </li>
      </ul>


    </div>

    {/* RIGHT: Image */}
    <div className="relative w-full h-96 md:h-[400px] fade-on-scroll translate-y-6 transition-all duration-700">
      <img
        src="/images/banner.png"
        alt="Offline Classes"
        className="w-full h-full object-cover rounded-3xl shadow-xl"
      />
    </div>

  </div>
</section>


    {/* CLASSROOM INFRASTRUCTURE */}
<section className="bg-black py-24 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
      Classroom <span className="text-orange-400">Infrastructure</span>
    </h2>

    {/* Features Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        { text: "Smart classrooms with digital boards", icon: "🖥️" },
        { text: "Air-conditioned, comfortable seating", icon: "❄️" },
        { text: "Small batch size for personal attention", icon: "👨‍🏫" },
        { text: "CCTV monitored premises", icon: "📹" },
        { text: "Quiet and focused learning environment", icon: "🤫" },
        { text: "Power backup & Wi-Fi facility", icon: "⚡📶" },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <p className="text-gray-200 font-medium">{item.text}</p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* BRANCH LOCATIONS */}
<section className="bg-black py-24 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
      Our <span className="text-orange-400">Branch Locations</span>
    </h2>

    {/* Branch Cards Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">

      {[
        {
          name: "Main Branch",
          address: "Near City Center, Main Road\nCoaching.io Campus",
          icon: "🏢",
        },
        {
          name: "North Branch",
          address: "Near Bus Stand\nCoaching.io North Wing",
          icon: "🚌",
        },
        {
          name: "South Branch",
          address: "Near Railway Station\nCoaching.io South Wing",
          icon: "🚉",
        },
      ].map((branch, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-5xl mb-4">{branch.icon}</div>
          <h4 className="text-xl font-semibold text-orange-400 mb-2">{branch.name}</h4>
          <p className="text-gray-200 whitespace-pre-line">{branch.address}</p>
        </div>
      ))}

    </div>
  </div>
</section>


{/* FACILITIES */}
<section className="bg-black py-24 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
      Our <span className="text-orange-400">Facilities</span>
    </h2>

    {/* Facilities Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: "📚", title: "Library & Reference Books" },
        { icon: "📝", title: "Printed Study Material" },
        { icon: "📊", title: "Regular Tests & Assessments" },
        { icon: "❓", title: "Doubt-Solving Sessions" },
        { icon: "👨‍👩‍👧‍👦", title: "Parent-Teacher Meetings" },
        { icon: "🎯", title: "Career Guidance" },
        { icon: "📋", title: "Attendance Monitoring" },
        { icon: "🛡️", title: "Safe & Secure Campus" },
      ].map((facility, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{facility.icon}</div>
          <p className="text-gray-200 font-semibold">{facility.title}</p>
        </div>
      ))}
    </div>

  </div>
</section>


   {/* OFFLINE BATCHES */}
<section className="bg-black py-24 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
      Our <span className="text-orange-400">Offline Batches</span>
    </h2>

    {/* Batch Cards */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      
      {[
        { title: "Morning Batch", time: "8:00 AM – 11:00 AM", icon: "🌅" },
        { title: "Afternoon Batch", time: "1:00 PM – 4:00 PM", icon: "🌞" },
        { title: "Evening Batch", time: "5:00 PM – 8:00 PM", icon: "🌇" },
      ].map((batch, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-5xl mb-4">{batch.icon}</div>
          <h4 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
            {batch.title}
          </h4>
          <p className="text-gray-300">{batch.time}</p>
        </div>
      ))}

    </div>

  </div>
</section>

   {/* STUDY MATERIAL */}
<section className="bg-black py-24 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
      Our <span className="text-orange-400">Study Material</span>
    </h2>

    {/* Material Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          title: "Printed Notes",
          description:
            "Comprehensive printed notes prepared by expert faculty based on CBSE, ICSE, and State Board syllabus.",
          icon: "📚",
        },
        {
          title: "Practice Sheets & Tests",
          description:
            "Weekly practice sheets, test papers, and revision modules for continuous assessment.",
          icon: "📝",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">
            {item.title}
          </h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}

    </div>
  </div>
</section>


  {/* ONLINE DEMO FORM */}
<section className="py-20 bg-black relative overflow-hidden">

  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* Badge */}
    <span className="text-orange-400 uppercase tracking-widest font-semibold">
      Free Demo Class
    </span>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
      Book a <span className="text-orange-400">Free Offline Demo</span>
    </h2>

    {/* Subtext */}
    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
      Experience our teaching methodology, interact with expert faculty,
      and understand how we help students achieve academic excellence.
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

export default OfflineClasses;
