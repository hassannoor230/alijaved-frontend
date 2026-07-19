import { useEffect, useState } from "react";
import adminApi from "../api/adminClient.js";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    setError("");
    return adminApi
      .get("/testimonials/all")
      .then((res) => setReviews(res.data))
      .catch((err) => setError(err.response?.data?.message || "Could not load reviews. Please try again."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id, status) => {
    setError("");
    try {
      await adminApi.patch(`/testimonials/${id}/status`, { status });
      await load();
    } catch (err) {
      setError(err.response?.data?.message || "Could not update this review.");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    setError("");
    try {
      await adminApi.delete(`/testimonials/${id}`);
      setReviews((current) => current.filter((review) => review._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Could not delete this review.");
    }
  };

  return (
    <div className="admin-page">
      <span className="eyebrow">Approval Queue</span>
      <h1 className="display">Reviews</h1>
      {loading && <p className="admin-muted">Loading reviews…</p>}
      {error && <p className="form-msg err">{error}</p>}
      {!loading && !error && (
        <div className="testi-grid">
          {reviews.map((review) => (
            <div className="testi-card" key={review._id}>
              <p>{review.quote}</p>
              <b>{review.name}</b>
              <span className="admin-muted"> · {review.role} · {review.status}</span>
              <div className="admin-actions">
                {review.status !== "approved" && <button className="btn btn-primary" onClick={() => updateStatus(review._id, "approved")}>Approve</button>}
                <button className="btn btn-ghost" onClick={() => updateStatus(review._id, "rejected")}>Reject</button>
                <button className="btn btn-ghost" onClick={() => remove(review._id)}>Delete</button>
              </div>
            </div>
          ))}
          {!reviews.length && <p className="admin-muted">No reviews yet.</p>}
        </div>
      )}
    </div>
  );
}
