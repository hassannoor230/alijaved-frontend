import { useEffect, useState } from "react";
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

  useEffect(() => {
    api
      .get("/testimonials")
      .then((res) => {
        if (res.data && res.data.length) setTestimonials(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
          <div className="testi-grid">
            {testimonials.map((t) => (
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
          </div>
        )}
      </div>
    </section>
  );
}
