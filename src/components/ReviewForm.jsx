import { useState } from "react";
import api from "../api/client.js";

export default function ReviewForm() {
  const [form, setForm] = useState({ name: "", role: "", quote: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await api.post("/testimonials", form);
      setStatus({ type: "ok", text: res.data.message || "Thanks — your review is pending approval." });
      setForm({ name: "", role: "", quote: "" });
    } catch (err) {
      setStatus({ type: "err", text: err.response?.data?.message || "Failed to submit review." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="leave-review" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="service-card" style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="eyebrow" style={{ marginBottom: 14 }}>Worked With Me?</span>
          <h3 style={{ fontSize: 20, margin: "12px 0 6px" }}>Leave a Review</h3>
          <p style={{ color: "var(--muted)", fontSize: 13.5, marginBottom: 18 }}>
            Reviews are checked before going live, so it may take a little while to appear.
          </p>
          <form className="contact-form" onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Your role & company (e.g. Founder, Glow Skincare)"
              value={form.role}
              onChange={handleChange}
              required
            />
            <textarea
              name="quote"
              placeholder="Your review"
              value={form.quote}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Submitting…" : "Submit Review"}
            </button>
            {status.text && (
              <div className={`form-msg ${status.type === "ok" ? "ok" : "err"}`}>{status.text}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
