import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Results from "./components/Results.jsx";
import Platforms from "./components/Platforms.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import { trackVisit } from "./api/analytics.js";

export default function Site() {
  useEffect(() => {
    trackVisit();
  }, []);

  return (
    <>
      <Navbar />
      <motion.main className="site-motion" initial={{ opacity: 0, rotateX: -2, y: 18 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} exit={{ opacity: 0, rotateX: 2, y: -18 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <Hero />
        <Services />
        <Results />
        <Platforms />
        <Portfolio />
        <Testimonials />
        <ReviewForm />
        <CTA />
        <Footer />
      </motion.main>
    </>
  );
}
