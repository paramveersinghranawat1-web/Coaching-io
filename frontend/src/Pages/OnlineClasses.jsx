import React from "react";
import Form from "../Components/Form"

const OnlineClasses = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
 <section className="relative bg-black w-full py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

    {/* LEFT: Content */}
    <div className="text-white space-y-6 fade-on-scroll translate-y-6 transition-all duration-700">

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Learn Anytime, Anywhere with <span className="text-orange-400">Coaching.io</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
        Join live & recorded classes from expert educators. Flexible schedules, interactive sessions, and personalized guidance for every student from Class 1 to 12.
      </p>

      {/* Key Highlights */}
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {[
          "Expert Faculty Across All Subjects",
          "Recorded Sessions for Flexible Learning",
          "Regular Assessments & Feedback",
          "Personalized Academic Guidance"
        ].map((point, i) => (
          <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-orange-400 transition">
            <span className="mt-1 h-3 w-3 bg-orange-400 rounded-full flex-shrink-0"></span>
            <p className="text-gray-200 text-sm">{point}</p>
          </div>
        ))}
      </div>


    </div>

    <div className="relative w-full h-96 md:h-[500px] fade-on-scroll translate-y-6 transition-all duration-700">
      <img
        src="/images/online_2.jpg"
        alt="Online Classes"
        className="w-full h-full object-cover rounded-3xl shadow-2xl" />
          </div>
  </div>

</section>



  {/* FEATURES */}
<section className="py-24 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Key <span className="text-orange-400">Features</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Everything you need for effective online learning — live classes, recorded access, study material, and easy-to-use technology.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* LIVE CLASSES */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">🎥</div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400">
          Live Online Classes
        </h3>
        <p className="text-gray-300 text-sm">
          Interactive live classes with real-time doubt solving and teacher interaction. Stay connected no matter where you are.
        </p>
      </div>

      {/* RECORDED ACCESS */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400">
          Recorded Class Access
        </h3>
        <p className="text-gray-300 text-sm">
          Missed a session? Access recorded lectures anytime for flexible revision and self-paced learning.
        </p>
      </div>

      {/* DIGITAL MATERIAL */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">📄</div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400">
          Digital Study Material
        </h3>
        <p className="text-gray-300 text-sm">
          PDF notes, worksheets, practice tests, and revision material to ensure thorough preparation.
        </p>
      </div>

      {/* TECH REQUIREMENTS */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">💻</div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400">
          Tech Requirements
        </h3>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          <li>Smartphone / Laptop / Tablet</li>
          <li>Stable Internet Connection</li>
          <li>Headphones (recommended)</li>
          <li>Zoom / Google Meet access</li>
        </ul>
      </div>

    </div>
  </div>
</section>


  {/* BATCH TIMINGS */}
<section className="py-24 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Online <span className="text-orange-400">Batch Timings</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Flexible batch schedules designed to suit every student’s routine. Choose your preferred time and start learning today.
      </p>
    </div>

    {/* Batch Cards */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 fade-on-scroll translate-y-6 transition-all duration-700">

      {/* Morning Batch */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">🌅</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400">
          Morning Batch
        </h3>
        <p className="text-gray-300 text-lg">
          7:00 AM – 9:00 AM
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Start your day with fresh learning and interactive sessions.
        </p>
      </div>

      {/* Evening Batch */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">🌇</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400">
          Evening Batch
        </h3>
        <p className="text-gray-300 text-lg">
          4:00 PM – 6:00 PM
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Perfect for after-school learning with expert guidance.
        </p>
      </div>

      {/* Weekend Batch */}
      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
        <div className="text-4xl mb-4">🗓️</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400">
          Weekend Batch
        </h3>
        <p className="text-gray-300 text-lg">
          Saturday & Sunday
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Focused weekend sessions for revision, doubt clearing, and extra practice.
        </p>
      </div>

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
      Book a <span className="text-orange-400">Free Online Demo</span>
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

export default OnlineClasses;
