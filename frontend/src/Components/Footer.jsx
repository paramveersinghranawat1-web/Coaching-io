import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    alert(`Subscribed successfully with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold text-orange-500 tracking-wide">
              Coaching.io
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Trusted coaching for Classes 1–12. <br />
              CBSE, ICSE & State Board. <br />
              Online & Offline learning with expert faculty.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-orange-400">Courses</Link></li>
              <li><Link to="/faculty" className="hover:text-orange-400">Faculty</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4 uppercase">
              Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-orange-400">Class 1–5</Link></li>
              <li><Link to="/courses" className="hover:text-orange-400">Class 6–8</Link></li>
              <li><Link to="/courses" className="hover:text-orange-400">Class 9–10</Link></li>
              <li><Link to="/courses" className="hover:text-orange-400">Class 11–12</Link></li>
              <li><Link to="/online-classes" className="hover:text-orange-400">Online Classes</Link></li>
              <li><Link to="/offline-classes" className="hover:text-orange-400">Offline Classes</Link></li>
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Jaipur, Rajasthan</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ info@coaching.io</li>
            </ul>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2 border border-gray-700 rounded-lg overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-black text-gray-200 focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-orange-500 text-black font-semibold hover:bg-orange-600 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Coaching.io — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
