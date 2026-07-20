import axios from "axios";

const productionApiUrl = "https://alijaved-backend-me537jv1j-hassan-noors-projects.vercel.app/api";
const defaultApiUrl = import.meta.env.PROD
  ? productionApiUrl
  : (import.meta.env.VITE_API_URL || "http://localhost:5000/api");

// Separate axios instance that always attaches the admin key header,
// read fresh from localStorage on every request.
const adminApi = axios.create({
  baseURL: defaultApiUrl,
});

adminApi.interceptors.request.use((config) => {
  const key = localStorage.getItem("adminKey");
  if (key) config.headers["x-admin-key"] = key;
  return config;
});

export default adminApi;
