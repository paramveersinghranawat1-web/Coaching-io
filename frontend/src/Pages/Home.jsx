import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      $(".fade-on-scroll").each(function () {
        const top = $(this).offset().top;
        const scroll = $(window).scrollTop() + $(window).height();
        if (scroll > top + 100) $(this).addClass("opacity-100 translate-y-0");
      });
    };
    $(window).on("scroll", handleScroll);
    handleScroll();
    return () => $(window).off("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showPopup) $(".popup").fadeIn();
  }, [showPopup]);

  return (
    <main className=" font-sans relative overflow-hidden ">

      {/* HERO SECTION */}
 <section className="relative w-full min-h-[650px] bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden py-20">
  <div className="relative max-w-7xl mx-auto px-6 z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          
          data-aos="fade-right"
     data-aos-duration="3000"
        >
          Book Your <span className="text-orange-400">Free Demo Class</span>
        </h1>

        <p className="mt-6 text-white text-lg max-w-lg"
           data-aos="fade-right"
     data-aos-duration="2000"
        >
          Personalized coaching for Classes 1-12.  
          Expert teachers, smart learning & proven results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-orange-600 px-8 py-3 rounded-full font-semibold text-white shadow-xl hover:scale-105 transition"
          >
            Book Free Demo
          </button>

          <Link
            to="/courses"
            className=" text-white bg-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition shadow"
          >
            View Courses
          </Link>
        </div>
      </div>


      <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-2xl "
         
         data-aos="fade-left"
       data-aos-duration="4000"
      
      >
        <div className=" space-y-6">

         
          {[
            "/images/offline_3.png",
            
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Coaching"
              className="w-full rounded-xl"
            />
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



      {/* COURSES OVERVIEW */}
     <section className="  py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      Courses for Classes 1-12
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="bg-white/10  border border-orange-900/20 rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
        >
           {/* images */}
          <div className="relative h-40    flex items-center justify-center">
            <span className="text-6xl font-bold text-white opacity-20">
              {i + 1}
            </span>
          </div>
          
          {/* Content Section */}
          <div className="p-6">
            <h3 className="font-semibold text-lg text-white mb-2">
              Class {i + 1}
            </h3>
            <p className="text-sm text-white mb-4">
              Complete syllabus coaching
            </p>
            
            {/* Button */}
            <Link
              to={`/class/class-${i + 1}`}
              className="inline-block w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 px-2 rounded-full transition-colors duration-200"
            >
              View Course
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* BOARDS */}
<section className="  py-20   bg-gradient-to-r from-gray-900 via-black to-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center text white">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      Boards We Teach
    </h2>

    <div className="flex flex-col md:flex-row justify-center gap-8">
      {["CBSE", "ICSE", "State Board"].map((board) => (
        <div
          key={board}
          className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
        >
          

          {/* Title */}
          <h3 className="text-2xl font-bold text-white">
            {board}
          </h3>

          {/* Description */}
          <p className="text-white mt-3 text-sm">
            Complete syllabus coverage with exam-focused teaching methods for{" "}
            <span className="font-semibold">{board}</span> students.
          </p>

          {/* Highlights */}
          <ul className="mt-4 space-y-2 text-sm text-white text-left">
            <li>• Concept-based learning</li>
            <li>• Board exam pattern mastery</li>
            <li>• Regular tests & revisions</li>
          </ul>

          {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
        

          <Link
          to={`/boards/cbse`}
            className=" text-white bg-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition shadow"
          >
           Know more
          </Link>
        </div>
          
        </div>
      ))}
    </div>
  </div>
</section>



  {/* ONLINE CLASSES  */}
<section className="  bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold">
        Online Classes at <span className="text-orange-400">Coaching.io</span>
      </h2>
      <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
        Attend live classes from home with complete digital learning support.
      </p>
    </div>

    {/* Top Features */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
      {[
        "Live Interactive Online Classes",
        "Recorded Class Access Anytime",
        "Digital Study Material & Notes",
      ].map((item) => (
        <div
          key={item}
          className="bg-white/10 border border-orange-500/30 p-6 rounded-2xl text-center shadow hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
        >
          {item}
        </div>
      ))}
    </div>

    {/* Bottom Info Row */}
    <div className="grid md:grid-cols-3 gap-8 items-start">

      {/* Tech */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">
          Tech Requirements
        </h4>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Mobile / Laptop</li>
          <li>• Stable Internet</li>
          <li>• Zoom / Google Meet</li>
        </ul>
      </div>

      {/* Timings */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">
          Batch Timings
        </h4>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Morning: 9-11 AM</li>
          <li>• Evening: 4-6 PM</li>
          <li>• Night: 7-9 PM</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-white/10 p-6 rounded-2xl border border-green-500/40 text-center">
        <h4 className="text-lg font-semibold mb-3">
          Want to Experience Online Class?
        </h4>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-orange-600 px-6 py-2 rounded-full font-semibold text-white hover:scale-105 transition"
        >
          Book Online Demo
        </button>
      </div>

    </div>
  </div>
</section>



{/* OFFLINE CLASSES */}
<section className=" bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold">
        Offline Classes at <span className="text-orange-400">Coaching.io</span>
      </h2>
      <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
        Learn in a disciplined classroom environment with expert faculty and personal guidance.
      </p>
    </div>

    {/* Top Features */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
      {[
        "Experienced Faculty",
        "Modern Classroom Infrastructure",
        "Regular Tests & Doubt Sessions",
      ].map((item) => (
        <div
          key={item}
          className="bg-white/10 border border-orange-500/30 p-6 rounded-2xl text-center shadow hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
        >
          {item}
        </div>
      ))}
    </div>

    {/* Bottom Info Row */}
    <div className="grid md:grid-cols-3 gap-8 items-start">

      {/* Environment */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">
          Classroom Environment
        </h4>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Limited students per batch</li>
          <li>• Focused & disciplined learning</li>
          <li>• Daily doubt resolution</li>
        </ul>
      </div>

      {/* Timings */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">
          Batch Timings
        </h4>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Morning: 8-11 AM</li>
          <li>• Afternoon: 12-3 PM</li>
          <li>• Evening: 4-7 PM</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-white/10 p-6 rounded-2xl border border-green-500/40 text-center">
        <h4 className="text-lg font-semibold mb-3">
          Want to Visit Our Classroom?
        </h4>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-orange-600 px-6 py-2 rounded-full font-semibold text-white hover:scale-105 transition"
        >
          Book Offline Demo
        </button>
      </div>

    </div>
  </div>
</section>



{/* ACHIEVEMENTS & TOPPERS */}
<section className=" bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        Our Achievements & Top Performers
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Consistent results year after year with top board ranks, high percentages, and student success stories.
      </p>
    </div>

    {/* Achievement Stats */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {[
        { value: "500+", label: "Successful Students" },
        { value: "95%+", label: "Average Results" },
        { value: "50+", label: "Board Toppers" },
        { value: "10+", label: "Years of Excellence" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm shadow-lg hover:scale-105 transition"
        >
          <h3 className="text-4xl font-bold text-orange-400">{stat.value}</h3>
          <p className="mt-2 text-gray-200 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Toppers Cards */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

      {[
        {
          name: "Arti Verma",
          score: "98%",
          year: "Board Exam 2025",
          image: "/images/topper_1.png",
        },
        {
          name: "Kunal Singh",
          score: "97%",
          year: "Board Exam 2025",
          image: "/images/topper_2.png",
        },
        {
          name: "Aditya Sharma",
          score: "96%",
          year: "Board Exam 2025",
          image: "/images/topper_3.png",
        },
      ].map((topper) => (
        <div
          key={topper.name}
          className="bg-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          {/* Image */}
          <div className="relative h-60 md:h-64 w-full overflow-hidden">
            <img
              src={topper.image}
              alt={topper.name}
              className="h-full w-full object-cover object-top transition duration-500 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h4 className="text-xl font-bold">{topper.name}</h4>
            <p className="text-orange-400 text-lg font-semibold mt-1">{topper.score}</p>
            <p className="text-gray-300 text-sm mt-1">{topper.year}</p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>



 {/* TESTIMONIALS */}
<section className="  bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">
        What Our Students Say
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Hear from our toppers and achievers about their experience at Coaching.io. 
        Discover how our online and offline coaching has shaped their academic journey.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">

      {[
        {
          quote: "The teaching methodology is amazing and helped me score high in exams.",
          name: "Priya Verma",
          class: "Class 12 - CBSE",
          avatar: "/images/topper_1.png",
        },
        {
          quote: "Excellent faculty and consistent support. Highly recommend Coaching.io.",
          name: "Aditya sharma",
          class: "Class 11 - ICSE",
          avatar: "/images/topper_3.png",
        },
        {
          quote: "Personal attention and doubt sessions made learning easy and effective.",
          name: "Kunal Singh",
          class: "Class 10 - State Board",
          avatar: "/images/topper_2.png",
        },
      ].map((item) => (
        <div
          key={item.name}
          className="bg-white/10 backdrop-blur-md  p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <div className="w-80 h-80 mb-4  overflow-hidden ">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Quote */}
          <p className="text-gray-200 italic mb-4">&quot;{item.quote}&quot;</p>

          {/* Name & Class */}
          <h4 className="text-xl font-bold text-white">{item.name}</h4>
          <p className="text-gray-300 text-sm">{item.class}</p>

         
        
        </div>
      ))}

    </div>
  </div>
</section>



   {/* FACULTY PREVIEW */}
<section className="  bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">
        Meet Our Expert Faculty
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Our dedicated teachers are subject specialists with years of experience guiding students to top scores. Get to know the people shaping your success.
      </p>
    </div>

    {/* Faculty Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

      {[
        {
          name: "Dr. Arjun Mehta",
          subject: "Mathematics",
          experience: "10+ Years",
          avatar: "/images/faculty.jpeg",
          badge: "Senior Faculty"
        },
        {
          name: "Mrs. Rina Sharma",
          subject: "Science",
          experience: "8+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Expert Teacher"
        },
        {
          name: "Mr. Vikram Singh",
          subject: "English",
          experience: "12+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Senior Faculty"
        },
        {
          name: "Ms. Pooja Verma",
          subject: "Social Studies",
          experience: "7+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Subject Specialist"
        },
        {
          name: "Mr. Rahul Khanna",
          subject: "Computer Science",
          experience: "9+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Expert Teacher"
        },
        {
          name: "Mrs. Anita Joshi",
          subject: "Hindi",
          experience: "11+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Senior Faculty"
        },
        {
          name: "Mr. Sameer Agarwal",
          subject: "Mathematics",
          experience: "6+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "Expert Teacher"
        },
        {
          name: "Ms. Neha Gupta",
          subject: "Science",
          experience: "5+ Years",
          avatar: "/images/faculty_2.jpg",
          badge: "English Specialist"
        },
      ].map((faculty, i) => (
        <div
          key={i}
          className="  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
        >
          {/* Avatar */}
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={faculty.avatar}
              alt={faculty.name}
              className="h-full w-full object-cover object-top transition duration-500 hover:scale-110"
            />
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {faculty.badge}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 ">
            <h4 className="text-xl font-bold text-white">{faculty.name}</h4>
            <p className="text-gray-300 text-sm mt-1">{faculty.subject}</p>
            <p className="text-gray-400 text-xs mt-1">{faculty.experience} Experience</p>

        
         
          </div>
        </div>
      ))}

    </div>
  </div>
</section>


   {/* gallery */}
<section className=" transition-all duration-700 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">
        Our Gallery
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        A glimpse into our classrooms, activities, events, and student achievements.
      </p>
    </div>

    {/* Gallery images*/}
    <div className="grid sm:grid-cols-2 sm:items-center md:grid-cols-4 lg:grid-cols-5 gap-6">
      {[
        "/images/activity_1.png",
        "/images/activity_2.png",
        "/images/activity_3.png",
        "/images/banner.png",
        "/images/cbse.jpg",
        "/images/classroom_2.png",
        "/images/topper_1.png",
        "/images/topper_2.png",
        "/images/topper_3.png",
        "/images/faculty.jpeg",
        "/images/faculty_2.jpg",
        "/images/icse.jpg",
        "/images/online.jpg",
        "/images/online_2.jpg",
        "/images/online_3.jpg",
       
      ].map((img, i) => (
        <div
          key={i}
          className="relative w-60 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
        >
          <img
            src={img}
            alt={`Gallery ${i + 1}`}
            className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
          />

          
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link className="bg-[#F97316] px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
             to={"/gallery"}    
      >
        Explore Full Gallery
      </Link>
    </div>

  </div>
</section>


   {/* FAQS */}
<section className=" transition-all duration-700 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Answers to the most common queries about our online and offline classes, enrollment, and coaching process.
      </p>
    </div>

    {/* FAQ Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          question: "What is the duration of classes?",
          answer: "Each class lasts 60-90 minutes depending on the syllabus and topic coverage."
        },
        {
          question: "Are classes online or offline?",
          answer: "We offer both online and offline classes. Students can choose based on convenience."
        },
        {
          question: "How to enroll?",
          answer: "You can enroll by booking a free demo through our website or contacting the institute directly."
        },
        {
          question: "What boards do you cover?",
          answer: "We cover CBSE, ICSE, and State Boards with a comprehensive syllabus and exam-oriented teaching."
        },
        {
          question: "Do you provide study material?",
          answer: "Yes, all students receive digital and printed study materials, notes, and practice papers."
        },
        {
          question: "Are doubt clearing sessions available?",
          answer: "Yes, regular doubt clearing sessions are conducted both online and offline."
        },
      ].map((faq, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
        >
          <h3 className="font-semibold text-lg text-white mb-2">{faq.question}</h3>
          <p className="text-gray-200 text-sm">{faq.answer}</p>
        </div>
      ))}
    </div>

    
    <div className="text-center mt-12">
      <Link className="bg-orange-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
            to={"/contact"}
      >
        Contact Us for More Queries
        
      </Link>
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

{/* CONTACT FORM */}
<section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
  
  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Heading */}
    <span className="text-orange-400 uppercase tracking-wider font-semibold">
      Contact Us
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white">
      Let’s Start Your <span className="text-orange-400">Learning Journey</span>
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
      Have questions about classes, boards, or admissions?  
      Fill out the form and our academic counselors will contact you shortly.
    </p>

    {/* Form  */}
    <div className="max-w-md sm:max-w-lg mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl">
      <Form />
    </div>

  </div>
</section>


    </main>
  );
};

export default Home;
