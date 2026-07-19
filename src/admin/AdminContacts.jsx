import { useEffect, useState } from "react";
import adminApi from "../api/adminClient.js";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi
      .get("/contact")
      .then((res) => setContacts(res.data))
      .catch((err) => setError(err.response?.data?.message || "Could not load contacts. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="admin-page">
      <span className="eyebrow">Inbox</span>
      <h1 className="display">Contacts</h1>
      {loading && <p className="admin-muted">Loading contacts…</p>}
      {error && <p className="form-msg err">{error}</p>}
      {!loading && !error && (
        <div className="admin-project-list">
          {contacts.map((contact) => (
            <div key={contact._id} className="service-card">
              <b>{contact.name}</b>
              <span className="admin-muted"> · {new Date(contact.createdAt).toLocaleString()}</span>
              <p className="contact-email">{contact.email}</p>
              <p>{contact.message}</p>
            </div>
          ))}
          {!contacts.length && <p className="admin-muted">No contact messages yet.</p>}
        </div>
      )}
    </div>
  );
}
