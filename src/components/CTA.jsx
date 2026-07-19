import { useState } from "react";
import api from "../api/client.js";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await api.post("/contact", form);
      setStatus({ type: "ok", text: res.data.message || "Message sent — thank you!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err.response?.data?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band">
          <div>
            <span className="eyebrow">Let's Grow Your Brand Together</span>
            <h3 className="display">Ready to Scale Your Business?</h3>
            <p>Let's build campaigns that bring more leads, more sales and real growth for your brand.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell me about your brand and goals"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Sending…" : "Let's Work Together →"}
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
