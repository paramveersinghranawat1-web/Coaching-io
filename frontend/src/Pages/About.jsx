import React ,{useState,useEffect} from 'react'
import Form from "../Components/Form"
import $ from "jquery";


const About = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    useEffect(() => {
    if (showPopup) $(".popup").fadeIn();
  }, [showPopup]);

  return (
    <div>
      {/* HERO SECTION */}
<section className="transition-all duration-700 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 items-center ">

    <div className="text-white flex flex-col gap-6"
       
    >
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
    About    <span className='text-orange-400'>Coaching.io</span> 
  </h1>

 <p className="max-w-xl text-lg md:text-xl leading-relaxed text-gray-200">
  Empowering students from Class 1 to 12 with quality education,
  expert faculty, and proven results. At Coaching.io, we focus on
  conceptual clarity, personalized mentoring, and consistent
  academic growth to help every student achieve their full potential.
</p>



  
</div>


     {/* image */}
      <div
        className="w-full h-[320px] md:h-[380px] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/images/banner.png')",
        }}

          
      
      />
    </div>
  </div>
</section>


    {/* INSTITUTE HISTORY */}
<section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Our <span className="text-orange-400">Journey</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        From a small classroom to a trusted coaching institute shaping thousands of futures.
      </p>
    </div>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-12 items-stretch">

      {/* LEFT – STORY CARD */}
      <div className="fade-on-scroll translate-y-6 transition-all duration-700 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">
          How Coaching.io Started
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          Coaching.io was founded with a simple but powerful vision — to make
          quality education accessible, affordable, and effective for every
          student. What began as a small classroom initiative has grown into a
          multi-board coaching institute delivering results year after year.
        </p>

        <p className="mt-4 text-gray-400 text-sm">
          Today, we proudly support students from <span className="text-white font-semibold">Class 1 to 12</span> through
          both <span className="text-white font-semibold">online</span> and
          <span className="text-white font-semibold"> offline</span> learning models.
        </p>
      </div>

      {/* RIGHT – HIGHLIGHTS */}
      <div className="fade-on-scroll translate-y-6 transition-all duration-700 grid sm:grid-cols-2 gap-6">

        {[
          {
            title: "Student-First Approach",
            desc: "Personal attention and result-oriented teaching",
          },
          {
            title: "Classes 1–12",
            desc: "Complete academic coverage across grades",
          },
          {
            title: "Online & Offline",
            desc: "Flexible learning modes for every student",
          },
          {
            title: "Board-Focused Prep",
            desc: "CBSE, ICSE & State Board expertise",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h4 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


    {/* MISSION • VISION • VALUES */}
<section className="py-28 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Our <span className="text-orange-400">Purpose</span>
      </h2>
      <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
        What drives Coaching.io every single day — our commitment to students,
        academic excellence, and long-term success through clarity, discipline,
        and the right guidance.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10 fade-on-scroll translate-y-6 transition-all duration-700">

      {/* Mission */}
      <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <div className="text-5xl mb-6">🎯</div>

        <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition mb-4">
          Our Mission
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          To deliver structured, result-oriented education that strengthens
          academic foundations and builds confidence in every student.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 text-left max-w-xs mx-auto">
          <li>• Concept clarity over rote learning</li>
          <li>• Regular assessments & feedback</li>
          <li>• Personalized mentoring</li>
        </ul>
      </div>

      {/* Vision */}
      <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <div className="text-5xl mb-6">🚀</div>

        <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition mb-4">
          Our Vision
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          To become India’s most trusted coaching platform for school education,
          known for consistent results and student success stories.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 text-left max-w-xs mx-auto">
          <li>• Nationwide student reach</li>
          <li>• Online & offline excellence</li>
          <li>• Technology-driven learning</li>
        </ul>
      </div>

      {/* Values */}
      <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3">
        <div className="text-5xl mb-6">💎</div>

        <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition mb-4">
          Our Values
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The principles that define how we teach, mentor, and support students
          throughout their academic journey.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 text-left max-w-xs mx-auto">
          <li>• Integrity & transparency</li>
          <li>• Discipline & consistency</li>
          <li>• Student-first mindset</li>
        </ul>
      </div>

    </div>

  </div>
</section>


   
{/* WHY CHOOSE US */}
<section className="py-28 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
        Why Students & Parents <br />
        <span className="text-orange-400">Choose Coaching.io</span>
      </h2>

      <p className="mt-6 text-gray-300 text-lg max-w-xl">
        At Coaching.io, we don’t just teach — we mentor, guide, and prepare
        students for long-term academic success with a structured,
        student-first approach.
      </p>

      <ul className="mt-10 space-y-4 text-gray-300 text-base">
        <li className="flex items-start gap-3">
          <span className="text-orange-400 text-xl">✔</span>
          Result-focused learning with strong conceptual clarity
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400 text-xl">✔</span>
          Continuous monitoring, feedback, and improvement
        </li>
        <li className="flex items-start gap-3">
          <span className="text-orange-400 text-xl">✔</span>
          Trusted by hundreds of parents across boards
        </li>
      </ul>

      <button 
            onClick={() => setShowPopup(true)}
      className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-full font-semibold text-white shadow-xl hover:scale-105 transition"
      >
        Book Free Demo Class
      </button>
    </div>

    {/* RIGHT FEATURE GRID */}
    <div className="grid sm:grid-cols-2 gap-8 fade-on-scroll translate-y-6 transition-all duration-700">

      {[
        {
          title: "Experienced Faculty",
          desc: "Highly qualified teachers with years of board exam expertise.",
          icon: "👨‍🏫",
        },
        {
          title: "Personal Attention",
          desc: "Small batch sizes ensure every student gets individual focus.",
          icon: "🎯",
        },
        {
          title: "Regular Assessments",
          desc: "Weekly tests, performance analysis, and progress tracking.",
          icon: "📊",
        },
        {
          title: "Board-Oriented Teaching",
          desc: "Strictly aligned with CBSE, ICSE & State Board patterns.",
          icon: "📘",
        },
        {
          title: "Doubt Clearing Sessions",
          desc: "Dedicated doubt classes for concept reinforcement.",
          icon: "❓",
        },
        {
          title: "Online + Offline Support",
          desc: "Flexible learning modes to suit every student.",
          icon: "💻",
        },
        {
          title: "Affordable Fees",
          desc: "High-quality education at parent-friendly pricing.",
          icon: "💰",
        },
        {
          title: "Proven Results",
          desc: "Consistent top scores and board exam success stories.",
          icon: "🏆",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <div className="text-3xl mb-4">{item.icon}</div>

          <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>



   {/* EXPERIENCE STATS */}
<section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Our <span className="text-orange-400">Experience</span> in Numbers
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        A decade of excellence, trust, and proven academic success.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-on-scroll translate-y-6 transition-all duration-700">
      {[
        { value: "10+", label: "Years of Experience" },
        { value: "5000+", label: "Students Mentored" },
        { value: "100+", label: "Top Board Results" },
        { value: "30+", label: "Expert Faculty Members" },
      ].map((stat, i) => (
        <div
          key={i}
          className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white group-hover:text-orange-400 transition">
            {stat.value}
          </h3>
          <p className="mt-3 text-gray-300 text-lg">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


   {/* DIRECTOR MESSAGE */}
<section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Director's <span className="text-orange-400">Message</span>
      </h2>
      <p className="mt-4 text-gray-300">
        A vision that drives our commitment to student success
      </p>
    </div>

    {/* Message Card */}
    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl fade-on-scroll translate-y-6 transition-all duration-700">

      {/* Quote Mark */}
      <span className="absolute -top-8 left-8 text-7xl text-orange-400 opacity-20 font-serif">
        “
      </span>

      <p className="text-lg md:text-xl leading-relaxed text-gray-200">
        At <span className="font-semibold text-white">Coaching.io</span>, we believe every
        student has the potential to excel. Our responsibility is to guide,
        mentor, and support them with the right academic environment.
        <br /><br />
        Success is not an accident — it is the result of discipline,
        consistency, and the right guidance.
      </p>

      {/* Director Info */}
      <div className="mt-10 text-right">
        <p className="text-xl font-semibold text-white">
          Founder & Director
        </p>
        <p className="text-orange-400 font-medium text-lg">
          Coaching.io
        </p>
      </div>
    </div>

  </div>
</section>


{/* FACULTY PREVIEW */}
<section className="py-28 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 fade-on-scroll translate-y-6 transition-all duration-700">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Learn From Our <span className="text-orange-400">Expert Faculty</span>
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
        Our teachers are subject specialists with years of experience in
        board-focused teaching and student mentoring.
      </p>
    </div>

    {/* Faculty Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 fade-on-scroll translate-y-6 transition-all duration-700">

      {[
        {
          name: "Dr. Arjun Mehta",
          subject: "Mathematics",
          experience: "10+ Years Experience",
          image: "/images/faculty.jpeg",
          badge: "Senior Faculty",
        },
        {
          name: "Mrs. Rina Sharma",
          subject: "Science",
          experience: "8+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Expert Teacher",
        },
        {
          name: "Mr. Vikram Singh",
          subject: "English",
          experience: "12+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Senior Faculty",
        },
        {
          name: "Ms. Pooja Verma",
          subject: "Social Studies",
          experience: "7+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Subject Specialist",
        },
        {
          name: "Mr. Rahul Khanna",
          subject: "Computer Science",
          experience: "9+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Expert Teacher",
        },
        {
          name: "Mrs. Anita Joshi",
          subject: "Hindi",
          experience: "11+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Senior Faculty",
        },
        {
          name: "Mr. Sameer Agarwal",
          subject: "Mathematics",
          experience: "6+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Expert Teacher",
        },
        {
          name: "Ms. Neha Gupta",
          subject: "Science",
          experience: "5+ Years Experience",
          image: "/images/faculty_2.jpg",
          badge: "Subject Specialist",
        },
      ].map((faculty, i) => (
        <div
          key={i}
          className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
            />

            {/* Badge */}
            <span className="absolute top-4 left-4 bg-orange-400 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
              {faculty.badge}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-white group-hover:text-[#e4c590] transition">
              {faculty.name}
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              {faculty.subject}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {faculty.experience}
            </p>

          
          </div>
        </div>
      ))}
    </div>

   

  </div>
</section>



   {/* CONTACT FORM */}
<section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">

  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Section Label */}
    <span className="text-orange-400 uppercase tracking-widest font-semibold">
      Contact Us
    </span>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white">
      Get in <span className="text-orange-400">Touch</span>
    </h2>

    {/* Subtext */}
    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
      Have questions about classes, boards, or admissions?  
      Our academic counselors are here to guide you.
    </p>

    {/* Form Wrapper */}
    <div className="max-w-md sm:max-w-lg mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition">
      <Form />
    </div>

  </div>
</section>

  
      {/* POPUP FORM */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-500 rounded-3xl p-6 relative shadow-2xl">
            <button
              onClick={() => { $(".popup").fadeOut(); setShowPopup(false); }}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-700 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="text-orange-400">Enquiry Form</span> 
            </h2>
            <Form/>
          </div>
        </div>
      )}

    </div>
  )
}

export default About
