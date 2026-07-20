import { NavLink, useNavigate, useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();
  const logout = () => { localStorage.removeItem("adminKey"); navigate("/admin"); };
  const links = [["/admin/dashboard", "Overview"], ["/admin/projects", "Projects"], ["/admin/reviews", "Reviews"], ["/admin/contacts", "Contacts"]];
  return <div className="admin-shell"><motion.aside className="admin-sidebar" initial={{ x: -42, opacity: 0, rotateY: -10 }} animate={{ x: 0, opacity: 1, rotateY: 0 }} exit={{ x: -26, opacity: 0, rotateY: -6 }} transition={{ duration: 0.5, ease: "easeOut" }}><div className="logo" style={{ fontSize: 20 }}>ALI<span className="dot">.</span>ECOM <span className="logo-sub">ADMIN PANEL</span></div><nav>{links.map(([to, label], index) => <motion.div key={to} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + index * 0.07 }}><NavLink to={to} className={({ isActive }) => `admin-nav-link${isActive ? " active" : ""}`}>{label}</NavLink></motion.div>)}</nav><button className="btn btn-ghost admin-logout" onClick={logout}>Log out</button></motion.aside><main className="admin-content"><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0, x: 20, rotateY: 3 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: -20, rotateY: -3 }} transition={{ duration: 0.32, ease: "easeOut" }}>{outlet}</motion.div></AnimatePresence></main></div>;
}
