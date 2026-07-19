import axios from "axios";

const defaultApiUrl = import.meta.env.PROD
  ? "/api"
  : "http://localhost:5000/api";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || defaultApiUrl,
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
