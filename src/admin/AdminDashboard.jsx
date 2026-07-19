import { useEffect, useState } from "react";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import adminApi from "../api/adminClient.js";

export default function AdminDashboard() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { adminApi.get("/analytics/summary").then((res) => setSummary(res.data)).catch((err) => setError(err.response?.data?.message || "Failed to load dashboard.")); }, []);
  return <div className="admin-page"><span className="eyebrow">Overview</span><h1 className="display">Dashboard</h1>{error && <p className="form-msg err">{error}</p>}<div className="services-grid admin-stats"><div className="service-card"><h3>{summary?.totalVisits ?? 0}</h3><p>Total website visits</p></div><div className="service-card"><h3>{summary?.totalResumeDownloads ?? 0}</h3><p>Resume downloads</p></div><div className="service-card"><h3>{summary?.topProjects?.reduce((total, item) => total + item.clicks, 0) ?? 0}</h3><p>Project detail views</p></div></div><div className="services-grid admin-charts"><div className="service-card"><h3>Monthly Visits</h3><ResponsiveContainer width="100%" height={260}><LineChart data={summary?.monthlyVisits ?? []}><CartesianGrid stroke="#2a1616" strokeDasharray="3 3" /><XAxis dataKey="month" stroke="#6e5f5d" /><YAxis stroke="#6e5f5d" /><Tooltip /><Line type="monotone" dataKey="visits" stroke="#ff3b3b" strokeWidth={2.5} /></LineChart></ResponsiveContainer></div><div className="service-card"><h3>Top Projects</h3><ResponsiveContainer width="100%" height={260}><BarChart data={summary?.topProjects ?? []}><CartesianGrid stroke="#2a1616" strokeDasharray="3 3" /><XAxis dataKey="project" stroke="#6e5f5d" /><YAxis stroke="#6e5f5d" /><Tooltip /><Bar dataKey="clicks" fill="#ff3b3b" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></div></div></div>;
}
