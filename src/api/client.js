import axios from "axios";

const defaultApiUrl = import.meta.env.PROD
  ? "https://backendalijaved.vercel.app/api"
  : "http://localhost:5000/api";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || defaultApiUrl,
});

export default api;
