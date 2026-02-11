import React from "react";
import { useParams } from "react-router-dom";
import Form from "../Components/Form";

/* ================= BOARD DATA ================= */
const boardData = {
  cbse: {
    title: "CBSE Coaching at Coaching.io",
    syllabus: [
      "NCERT-based curriculum",
      "Concept clarity & fundamentals",
      "Continuous assessment preparation",
    ],
    examPattern:
      "Board exams with internal assessments, theory + practical exams.",
    methodology: [
      "NCERT-focused teaching",
      "Regular tests & worksheets",
      "Doubt-solving sessions",
      "Board exam strategy",
    ],
    results: "95%+ success rate with top-performing students every year.",
  },

  icse: {
    title: "ICSE Coaching at Coaching.io",
    syllabus: [
      "Detailed & application-based syllabus",
      "Strong English & analytical focus",
      "In-depth subject coverage",
    ],
    examPattern:
      "Subject-wise exams with high emphasis on language and application.",
    methodology: [
      "Detailed explanations",
      "Answer-writing practice",
      "Frequent evaluations",
    ],
    results: "Consistent ICSE toppers with excellent board results.",
  },

  "state-board": {
    title: "State Board Coaching at Coaching.io",
    syllabus: [
      "State-approved textbooks",
      "Board-specific syllabus",
      "Exam-oriented preparation",
    ],
    examPattern:
      "State-level examinations with theory-based assessments.",
    methodology: [
      "Local board expertise",
      "Focused exam preparation",
      "Regular revision & tests",
    ],
    results: "Strong results across multiple state boards.",
  },
};

/* ================= COMPONENT ================= */
const Boards = () => {
  const { boardSlug } = useParams();
  const data = boardData[boardSlug];

  if (!data) {
    return (
      <h1 className="text-center text-2xl mt-20 text-white">
        Board Not Found
      </h1>
    );
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-orange-400 uppercase tracking-wider font-semibold">
            Board Programs
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            {data.title.split(" at ")[0]}  
            <span className="text-orange-400"> Coaching</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert coaching aligned with board-specific curriculum, exam patterns,
            and proven academic success strategies.
          </p>
        </div>

              </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* CARD */}
          {[
            {
              title: "Syllabus Structure",
              content: (
                <ul className="space-y-3 text-gray-300">
                  {data.syllabus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 bg-orange-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Exam Pattern",
              content: <p className="text-gray-300 leading-relaxed">{data.examPattern}</p>,
            },
            {
              title: "Teaching Methodology",
              content: (
                <ul className="space-y-3 text-gray-300">
                  {data.methodology.map((method, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 bg-orange-400 rounded-full"></span>
                      {method}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Results & Achievements",
              content: (
                <p className="text-gray-300 leading-relaxed">
                  {data.results}
                </p>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition shadow-lg hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                {card.title}
              </h3>
              {card.content}
            </div>
          ))}

        </div>
      </section>

      {/* ENQUIRY */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Enquire for <span className="text-orange-400">{data.title.split(" at ")[0]}</span>
          </h2>

          <p className="text-gray-300 mb-10">
            Talk to our academic experts and get a personalized coaching plan.
          </p>

          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/20 p-8 rounded-3xl">
            <Form />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Boards;
