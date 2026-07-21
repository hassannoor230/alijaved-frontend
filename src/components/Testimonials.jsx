import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api/client.js";

const fallbackTestimonials = [
  {
    _id: "1",
    initials: "AK",
    name: "Ayesha Khan",
    role: "Founder, Glow Skincare",
    quote: "Amazing experience — our sales grew by 300% within three months of running his Meta ad strategy.",
  },
  {
    _id: "2",
    initials: "BA",
    name: "Bilal Ahmed",
    role: "CEO, Urban Wear",
    quote: "He truly understands performance marketing — clear communication and results you can actually measure.",
  },
  {
    _id: "3",
    initials: "SM",
    name: "Sara Malik",
    role: "Marketing Manager, Real Estate Co.",
    quote: "Professional, dedicated and completely results-driven. Highly recommended for any brand serious about growth.",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    api
      .get("/testimonials")
      .then((res) => {
        if (res.data && res.data.length) setTestimonials(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const getCurrentSlideItems = () => {
    const start = currentIndex * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="display">What Clients Say About Me</h2>
          <p>Real feedback from brands I've worked with</p>
        </div>
        {loading ? (
          <div className="loading-row">Loading testimonials…</div>
        ) : (
          <div className="testi-carousel">
            <div className="carousel-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="carousel-slide"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {getCurrentSlideItems().map((t) => (
                    <div className="testi-card" key={t._id}>
                      <span className="quote-mark">"</span>
                      <p>{t.quote}</p>
                      <div className="testi-person">
                        <div className="avatar">{t.initials}</div>
                        <div>
                          <b>{t.name}</b>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <div className="carousel-indicators">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="carousel-btn next-btn"
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
