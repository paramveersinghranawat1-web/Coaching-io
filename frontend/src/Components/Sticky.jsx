import React, { useState } from "react";
import Form from "../Components/Form";

const Stick = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* ================= STICKY FLOATING BUTTONS ================= */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">

        {/* ENQUIRY BUTTON */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-orange-500 hover:bg-orange-600 text-black font-semibold 
          px-4 py-3 sm:px-6 sm:py-3 
          rounded-full shadow-xl 
          transition transform hover:-translate-y-1 hover:scale-105
          text-sm sm:text-base"
        >
          Enquiry
        </button>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/9116577185"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black border border-orange-500 
          px-4 py-3 sm:px-6 sm:py-3 
          rounded-full shadow-xl flex items-center gap-2 sm:gap-3
          hover:bg-orange-500 hover:text-black 
          transition transform hover:-translate-y-1 hover:scale-105"
        >
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="hidden sm:block text-white font-medium">
            WhatsApp
          </span>
        </a>

        {/* CALL BUTTON (MOBILE ONLY) */}
        <a
          href="tel:+919999999999"
          className="bg-black border border-orange-500 text-white 
          px-4 py-3 rounded-full shadow-xl 
          hover:bg-orange-500 hover:text-black 
          transition transform hover:-translate-y-1 hover:scale-105
          text-sm md:hidden text-center"
        >
          Call Now
        </a>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 
          border border-orange-500 rounded-3xl 
          p-6 sm:p-8 relative 
          w-full max-w-md shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 
              text-gray-400 hover:text-orange-400 
              text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-6">
              <span className="text-orange-400">Enquiry Form</span> 
            </h2>

            {/* FORM */}
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default Stick;
