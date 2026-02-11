import { useState } from "react";

const Form = ({ source = "popup" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    board: "",
    mode: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      setLoading(false);
      return;
    }

   // EMAIL REQUIRED CHECK
if (!formData.email) {
  alert("Email is required");
  setLoading(false);
  return;
}

// EMAIL FORMAT CHECK
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  alert("Please enter a valid email address");
  setLoading(false);
  return;
}


    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          timestamp: new Date(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Enquiry submitted successfully ");

      setFormData({
        name: "",
        phone: "",
        email: "",
        className: "",
        board: "",
        mode: "",
        city: "",
        message: "",
      });
    } catch (error) {
      alert(error.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
  <form onSubmit={handleSubmit} className="space-y-3">

  {/* Name */}
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Full Name"
    required
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  />

  {/* Phone */}
  <input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Mobile Number"
    required
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  />

  {/* Email */}
  <input
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  />

  {/* Class */}
  <select
    name="className"
    value={formData.className}
    onChange={handleChange}
    required
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-gray-300 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  >
    <option value="">Select Class</option>
    {[...Array(12)].map((_, i) => (
      <option key={i} value={`Class ${i + 1}`} className="text-black">
        Class {i + 1}
      </option>
    ))}
  </select>

  {/* Board */}
  <select
    name="board"
    value={formData.board}
    onChange={handleChange}
    required
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-gray-300 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  >
    <option value="">Select Board</option>
    <option className="text-black">CBSE</option>
    <option className="text-black">ICSE</option>
    <option className="text-black">State Board</option>
  </select>

  {/* Mode */}
  <select
    name="mode"
    value={formData.mode}
    onChange={handleChange}
    required
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-gray-300 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  >
    <option value="">Learning Mode</option>
    <option className="text-black">Online</option>
    <option className="text-black">Offline</option>
  </select>

  {/* City */}
  <input
    name="city"
    value={formData.city}
    onChange={handleChange}
    placeholder="City"
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  />

  {/* Message */}
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    className="w-full bg-black/40 border border-white/20 px-3 py-2.5 rounded-lg text-xs text-white placeholder-gray-400 h-20 resize-none focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
  />

  {/* Submit */}
  <button
    type="submit"
    disabled={loading}
    className="w-full bg-orange-600 text-black py-2.5 rounded-xl font-bold text-xs tracking-wide hover:scale-[1.02] transition-all disabled:opacity-60"
  >
    {loading ? "Submitting..." : "Submit Enquiry"}
  </button>

  <p className="text-[10px] text-gray-400 text-center">
    We respect your privacy. No spam.
  </p>

</form>

  );
};

export default Form;
