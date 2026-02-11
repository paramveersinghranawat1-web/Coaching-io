import React from "react";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <main className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"      >
        <div className="text-center px-6  rounded-3xl py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-orange-400">Coaching.io</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get in touch with us for admissions, demo classes, or any queries. 
            Our team is here to help you excel.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* BRANCHES */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-orange-400 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Our Branches</h3>
            <p className="text-gray-300 mb-3">📍 Main Branch: Jaipur, Rajasthan</p>
            <p className="text-gray-300 mb-3">📍 Branch 2: Jodhpur, Rajasthan</p>
            <p className="text-gray-300">📍 Branch 3: Online (PAN India)</p>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-orange-400 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-3">📞 Phone: +91 98765 43210</p>
            <p className="text-gray-300 mb-3">☎️ Support: +91 91234 56789</p>
            <p className="text-gray-300">📧 Email: support@coaching.io</p>
          </div>

          {/* WHATSAPP SUPPORT */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-orange-400 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">WhatsApp Support</h3>
            <p className="text-gray-300 mb-6">Chat with our admission team instantly.</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">
            Find Us on Map
          </h2>
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              title="Coaching.io Location"
              src="https://www.google.com/maps?q=Jaipur%20Rajasthan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-6">
            Send Us a Message
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Have any questions or want to book a demo class? Fill out the form below and our team will get back to you shortly.
          </p>
          <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <Form />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
