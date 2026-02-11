import React from "react";
import { useParams } from "react-router-dom";
import Form from "../Components/Form";

/* ================= CLASS DATA ================= */
const classData = {
  "class-1": {
    title: "Class 1",
    overview: "Fun-based foundational learning focusing on reading, writing, and numbers.",
    subjects: ["English", "Mathematics", "EVS"],
    syllabus: ["Alphabets", "Basic Numbers", "Drawing & GK"],
    mode: "Online + Offline",
    schedule: "Monday to Friday | 1.5 Hours/day",
  },

  "class-2": {
    title: "Class 2",
    overview: "Strengthening basics with interactive learning and concept clarity.",
    subjects: ["English", "Mathematics", "EVS"],
    syllabus: ["Sentence Formation", "Addition & Subtraction", "Nature Studies"],
    mode: "Online + Offline",
    schedule: "Monday to Friday | 1.5 Hours/day",
  },

  "class-3": {
    title: "Class 3",
    overview: "Building confidence in academics with structured learning methods.",
    subjects: ["English", "Mathematics", "EVS"],
    syllabus: ["Grammar Basics", "Multiplication", "Living & Non-living"],
    mode: "Online + Offline",
    schedule: "Monday to Friday | 2 Hours/day",
  },

  "class-4": {
    title: "Class 4",
    overview: "Concept-based learning preparing students for higher classes.",
    subjects: ["English", "Mathematics", "EVS"],
    syllabus: ["Paragraph Writing", "Fractions", "Environmental Awareness"],
    mode: "Online + Offline",
    schedule: "Monday to Friday | 2 Hours/day",
  },

  "class-5": {
    title: "Class 5",
    overview: "Strong foundation before middle school with exam-oriented learning.",
    subjects: ["English", "Mathematics", "Science", "Social Science"],
    syllabus: ["Essay Writing", "Decimals", "Basic Science Concepts"],
    mode: "Online + Offline",
    schedule: "Monday to Friday | 2.5 Hours/day",
  },

  "class-6": {
    title: "Class 6",
    overview: "Concept clarity with focus on logic and analytical thinking.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    syllabus: ["Fractions", "Motion & Light", "Grammar"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 2 Hours/day",
  },

  "class-7": {
    title: "Class 7",
    overview: "Advanced concepts with regular testing and doubt-solving sessions.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    syllabus: ["Algebra Basics", "Heat & Energy", "Writing Skills"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 2.5 Hours/day",
  },

  "class-8": {
    title: "Class 8",
    overview: "Bridge between middle and high school with exam-focused learning.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    syllabus: ["Linear Equations", "Force & Pressure", "Grammar & Literature"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 3 Hours/day",
  },

  "class-9": {
    title: "Class 9",
    overview: "Strong base building for board examinations with concept mastery.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    syllabus: ["Polynomials", "Physics Fundamentals", "Biology Basics"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 3 Hours/day",
  },

  "class-10": {
    title: "Class 10",
    overview: "Board exam-focused preparation with tests, revisions, and mentoring.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    syllabus: ["Algebra", "Physics", "Chemistry", "Biology"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 3.5 Hours/day",
  },

  "class-11-science": {
    title: "Class 11 (Science)",
    overview: "In-depth preparation for board and competitive examinations.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    syllabus: ["Mechanics", "Chemical Bonding", "Trigonometry", "Cell Biology"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 4 Hours/day",
  },

  "class-11-commerce": {
    title: "Class 11 (Commerce)",
    overview: "Concept-driven commerce education with real-world applications.",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    syllabus: ["Basic Accounting", "Business Environment", "Microeconomics"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 3.5 Hours/day",
  },

  "class-12-science": {
    title: "Class 12 (Science)",
    overview: "Board and competitive exam preparation with intensive practice.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    syllabus: ["Electrostatics", "Organic Chemistry", "Calculus", "Genetics"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 4.5 Hours/day",
  },

  "class-12-commerce": {
    title: "Class 12 (Commerce)",
    overview: "Result-oriented coaching with complete board exam focus.",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    syllabus: ["Company Accounts", "Business Management", "Macroeconomics"],
    mode: "Online + Offline",
    schedule: "Monday to Saturday | 4 Hours/day",
  },
};



const Classes = () => {
  const { classSlug } = useParams();
  const data = classData[classSlug];

  if (!data) {
    return (
      <h1 className="text-center text-2xl mt-20 text-white">
        Class Not Found
      </h1>
    );
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
         

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            {data.title} <span className="text-orange-400">Coaching</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.overview}
          </p>
        </div>

      
      </section>

      {/* DETAILS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Subjects */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Subjects Covered
            </h3>
            <ul className="space-y-3 text-gray-300">
              {data.subjects.map((subject, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 bg-orange-400 rounded-full"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Mode */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Learning Mode
            </h3>
            <p className="text-gray-300 text-lg">{data.mode}</p>
          </div>

          {/* Syllabus */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Sample Syllabus
            </h3>
            <ul className="space-y-3 text-gray-300">
              {data.syllabus.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 bg-orange-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Class Schedule
            </h3>
            <p className="text-gray-300 text-lg">{data.schedule}</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Interested in <span className="text-orange-400">{data.title}</span>?
          </h2>

          <p className="text-gray-300 mb-10">
            Get expert guidance, demo classes, and a personalized learning plan.
          </p>

          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/20 p-8 rounded-3xl">
            <Form />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Classes;
