import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About Coaching.io", link: "/about" },
    {
      name: "Classes 1-12",
      dropdown: [
        ...Array.from({ length: 10 }, (_, i) => ({
          name: `Class ${i + 1}`,
          link: `/class/class-${i + 1}`,
        })),
        { name: "Class 11 Science", link: "/class/class-11-science" },
        { name: "Class 11 Commerce", link: "/class/class-11-commerce" },
        { name: "Class 12 Science", link: "/class/class-12-science" },
        { name: "Class 12 Commerce", link: "/class/class-12-commerce" },
      ],
    },
    {
      name: "Boards",
      dropdown: [
        { name: "CBSE", link: "/boards/cbse" },
        { name: "ICSE", link: "/boards/icse" },
        { name: "State Board", link: "/boards/state-board" },
      ],
    },
    { name: "Online Classes", link: "/online-classes" },
    { name: "Offline Classes", link: "/offline-classes" },
    { name: "Faculty", link: "/faculty" },
    { name: "Gallery", link: "/gallery" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto  px-6 flex items-center justify-between h-20">

          {/* LOGO */}
          <h1 className="text-2xl font-extrabold text-white hover:text-orange-400 transition">
            <Link to="/">Coaching.io</Link>
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menu.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.link || "#"}
                  className="text-sm font-medium text-gray-300 hover:text-orange-400 transition relative"
                >
                  {item.name}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </Link>

                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-black/90 backdrop-blur-md border border-orange-500/30 rounded-xl shadow-2xl overflow-hidden">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        to={drop.link}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <button
            onClick={() => setShowForm(true)}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
          >
            Enquiry
          </button>

          {/* MOBILE ICON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-2xl text-white hover:text-orange-400 transition"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden bg-black border-t border-white/10 px-6 py-4 space-y-3">
            {menu.map((item, index) => (
              <div key={index}>
                {!item.dropdown ? (
                  <Link
                    to={item.link}
                    className="block py-2 text-gray-300 hover:text-orange-400 transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left py-2 text-gray-300 hover:text-orange-400 transition"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                    </button>

                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            to={drop.link}
                            className="block text-sm py-1 text-gray-400 hover:text-orange-400 transition"
                            onClick={() => setMobileMenu(false)}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <button
              onClick={() => {
                setShowForm(true);
                setMobileMenu(false);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black py-2 rounded-full font-semibold shadow-lg transition"
            >
              Enquiry
            </button>
          </div>
        )}
      </header>

      {/* POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-500 rounded-3xl p-6 relative shadow-2xl">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-orange-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="text-orange-400">Enquiry Form</span> Form
            </h2>

            <Form />
          </div>
        </div>
      )}
    </>
  );
}
