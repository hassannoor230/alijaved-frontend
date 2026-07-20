import axios from "axios";

// Use the backend's public Vercel URL in production. Routing requests through
// the frontend's /api rewrite can trigger Vercel deployment protection (401)
// before Express receives the public request.
const productionApiUrl = "https://alijaved-backend.vercel.app/api";
const defaultApiUrl = import.meta.env.PROD
  ? productionApiUrl
  : (import.meta.env.VITE_API_URL || "http://localhost:5000/api");

const api = axios.create({
  baseURL: defaultApiUrl,
});

// All public writes have simple, flat fields. Encode them as form data so the
// browser can send them cross-origin without an OPTIONS preflight request.
// This avoids a Vercel routing issue where OPTIONS never reaches Express.
api.interceptors.request.use((config) => {
  const method = config.method?.toLowerCase();
  const isPlainObject = config.data && Object.prototype.toString.call(config.data) === "[object Object]";

  if (["post", "put", "patch"].includes(method) && isPlainObject) {
    const formData = new URLSearchParams();
    Object.entries(config.data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) formData.set(key, String(value));
    });
    config.data = formData.toString();
    config.headers.setContentType("application/x-www-form-urlencoded");
  }

  return config;
});

export default api;
