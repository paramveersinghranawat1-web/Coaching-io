import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Classes from "./Pages/Classes";
import Boards from "./Pages/Boards";
import OnlineClasses from "./Pages/OnlineClasses";
import OfflineClasses from "./Pages/OfflineClasses";
import Faculty from "./Pages/Faculty";
import Gallery from "./Pages/Gallery";
import Testimonials from "./Pages/Testimonials";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Sticky from "./Components/Sticky";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <Header />
      <Sticky />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/class/:classSlug" element={<Classes />} />
        <Route path="/boards/:boardSlug" element={<Boards />} />
        <Route path="/online-classes" element={<OnlineClasses />} />
        <Route path="/offline-classes" element={<OfflineClasses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
