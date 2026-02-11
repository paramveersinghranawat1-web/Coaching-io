import React from "react";
import Form from "../Components/Form";

/* ================= FACULTY DATA ================= */
const facultyData = [
  {
    name: "Mr. Rajesh Sharma",
    photo: "/images/faculty.jpeg",
    qualification: "M.Sc Physics",
    subjects: "Physics, Mathematics",
    experience: "12 years",
    achievements: "Author of 3 reference books",
  },
  {
    name: "Ms. Priya Verma",
    photo: "/images/faculty.jpeg",
    qualification: "M.A English",
    subjects: "English, Communication Skills",
    experience: "10 years",
    achievements: "CBSE toppers’ mentor",
  },
  {
    name: "Mr. Ankit Singh",
    photo: "/images/faculty.jpeg",
    qualification: "M.Com, MBA",
    subjects: "Accountancy, Commerce",
    experience: "15 years",
    achievements: "National level commerce competition winner",
  },
  {
    name: "Ms. Kavita Mehta",
    photo: "/images/faculty.jpeg",
    qualification: "B.Ed, M.Sc Chemistry",
    subjects: "Chemistry, Biology",
    experience: "11 years",
    achievements: "Published research papers in Chemistry",
  },
  {
    name: "Mr. Suresh Patel",
    photo: "/images/faculty.jpeg",
    qualification: "M.A History",
    subjects: "History, Social Science",
    experience: "13 years",
    achievements: "Organized history workshops for students",
  },
  {
    name: "Ms. Anjali Rao",
    photo: "/images/faculty.jpeg",
    qualification: "M.Sc Mathematics",
    subjects: "Mathematics, Logical Reasoning",
    experience: "9 years",
    achievements: "State-level mathematics competition trainer",
  },
];


const Faculty = () => {
  return (
    <main className="bg-gray-50">

      {/* HERO - optional */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          {/* LEFT: Text */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-orange-400 font-semibold tracking-wide uppercase">
              Our Educators
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              Meet the <span className="text-orange-400">Expert Faculty</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Learn from highly experienced educators dedicated to nurturing every student’s potential. Our faculty brings innovative teaching methods, personalized guidance, and proven results across all subjects and classes.
            </p>

            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
                Experienced & Certified Teachers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
                Subject Specialists for Class 1 to 12
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
                Personalized Academic Mentorship
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 bg-orange-400 rounded-full"></span>
                Innovative & Interactive Teaching Methods
              </li>
            </ul>

          
          </div>

       
          <div className="md:w-1/2 relative h-80 md:h-[400px]">
            <img
              src="/images/faculty.jpeg"
              alt="Our Faculty"
              className="w-full h-full object-cover  rounded-3xl shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-black/40 to-transparent rounded-3xl pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* FACULTY CARDS */}
      <section className="py-20 bg-black text-white" id="faculty">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-400">
                  {faculty.name}
                </h3>
                <p className="text-gray-300 mb-1">
                  <strong>Qualification:</strong> {faculty.qualification}
                </p>
                <p className="text-gray-300 mb-1">
                  <strong>Subjects:</strong> {faculty.subjects}
                </p>
                <p className="text-gray-300 mb-1">
                  <strong>Experience:</strong> {faculty.experience}
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Achievements:</strong> {faculty.achievements}
                </p>

               
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA / ENQUIRY */}
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">

 
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* Section Tag */}
    <span className="text-orange-400 uppercase tracking-widest font-semibold">
      Expert Guidance
    </span>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-white">
      Connect With Our <span className="text-orange-400">Faculty</span>
    </h2>

    {/* Subtext */}
    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
      Speak directly with our experienced educators to understand teaching methods,
      subject strategies, and personalized academic mentoring.
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

export default Faculty;
