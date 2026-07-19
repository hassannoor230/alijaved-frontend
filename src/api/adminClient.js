import axios from "axios";

const defaultApiUrl = import.meta.env.PROD
  ? "https://alijaved-backend.vercel.app/api"
  : "http://localhost:5000/api";

// Separate axios instance that always attaches the admin key header,
// read fresh from localStorage on every request.
const adminApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || defaultApiUrl,
});

adminApi.interceptors.request.use((config) => {
  const key = localStorage.getItem("adminKey");
  if (key) config.headers["x-admin-key"] = key;
  return config;
});

export default adminApi;
