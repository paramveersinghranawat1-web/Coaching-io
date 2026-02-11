import React from "react";
import { Link } from "react-router-dom";
import Form from "../Components/Form"

const Courses = () => {
  const courseCategories = [
    {
      title: "Foundation Courses",
      subtitle: "Class 1 – 5",
      description:
        "A strong academic base focusing on concept clarity, curiosity building, and confidence development at an early stage.",
      points: [
        "Concept-based learning",
        "Interactive classroom sessions",
        "Personal attention & mentoring",
        "Regular worksheets & assessments",
      ],
      courses: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    },
    {
      title: "Middle School Programs",
      subtitle: "Class 6 – 8",
      description:
        "Structured programs to strengthen fundamentals, analytical thinking, and prepare students for higher classes.",
      points: [
        "NCERT-focused syllabus",
        "Weekly doubt sessions",
        "Skill & logic development",
        "Continuous performance tracking",
      ],
      courses: ["Class 6", "Class 7", "Class 8"],
    },
    {
      title: "High School Programs",
      subtitle: "Class 9 – 10",
      description:
        "Board-focused teaching with intensive practice, revision cycles, and exam-oriented strategies.",
      points: [
        "Board exam preparation",
        "Regular tests & analysis",
        "One-to-one doubt solving",
        "Time management techniques",
      ],
      courses: ["Class 9", "Class 10"],
    },
    {
      title: "Senior Secondary Subjects",
      subtitle: "Class 11 – 12",
      description:
        "Advanced subject mastery for Science and Commerce streams with expert guidance.",
      points: [
        "Experienced subject faculty",
        "Concept + numerical focus",
        "Competitive exam readiness",
        "Career-oriented mentoring",
      ],
      courses: [
        "Class 11 Science",
        "Class 11 Commerce",
        "Class 12 Science",
        "Class 12 Commerce",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-orange-400">Courses</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive coaching programs from Class 1 to 12, designed to
            build strong fundamentals, exam confidence, and academic excellence.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {courseCategories.map((category, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-14 items-center"
            >
              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block text-orange-400 font-semibold tracking-wide mb-2">
                  {category.subtitle}
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  {category.title}
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3 mb-8">
                  {category.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <span className="h-2 w-2 bg-orange-400 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block bg-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition"
                >
                  Enquire Now
                </Link>
              </div>

              {/* RIGHT COURSE BOXES */}
              <div className="grid sm:grid-cols-2 gap-6">
                {category.courses.map((course, i) => (
                  <div
                    key={i}
                    className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur hover:border-orange-400 transition group"
                  >
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
                      {course}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Expert faculty, structured syllabus, and regular evaluations.
                    </p>

                    <Link
                      to={`/class/${course.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-semibold text-orange-400 hover:underline"
                    >
                      View Details 
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Confused about the right course?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our academic counselors will help you choose the perfect program based
          on your goals and current level.
        </p>

        {/* Form Wrapper */}
    <div className="max-w-md sm:max-w-lg mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition">
      <Form />
    </div>
      </section>
    </div>
  );
};

export default Courses;
