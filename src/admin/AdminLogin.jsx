import { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminApi from "../api/adminClient.js";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChecking(true);
    setError("");
    localStorage.setItem("adminKey", key);
    try {
      // Any admin-protected endpoint works as a verification ping
      await adminApi.get("/analytics/summary");
      navigate("/admin/dashboard");
    } catch (err) {
      localStorage.removeItem("adminKey");
      setError(err.response?.data?.message || "Invalid admin key or server unreachable.");
    } finally {
      setChecking(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(1200px 600px at 85% -10%, rgba(230,20,31,0.16), transparent 60%), var(--bg)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="service-card"
        style={{ width: 360, display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div className="logo" style={{ fontSize: 20 }}>
          ALI<span className="dot">.</span>ECOM <span className="logo-sub">ADMIN</span>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13.5 }}>
          Enter your admin key to access the dashboard.
        </p>
        <input
          type="password"
          placeholder="Admin key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
          style={{
            background: "var(--panel-2)",
            border: "1px solid var(--line)",
            borderRadius: 9,
            padding: "11px 14px",
            color: "#fff",
            fontSize: 13.5,
            outline: "none",
          }}
        />
        <button type="submit" className="btn btn-primary" disabled={checking}>
          {checking ? "Checking…" : "Log In →"}
        </button>
        {error && <div className="form-msg err">{error}</div>}
      </form>
    </div>
  );
}
