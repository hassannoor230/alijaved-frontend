import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Site from "./Site.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminProjects from "./admin/AdminProjects.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import AdminReviews from "./admin/AdminReviews.jsx";
import AdminContacts from "./admin/AdminContacts.jsx";

function AppRoutes() {
  const location = useLocation();
  return (
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Site />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="contacts" element={<AdminContacts />} />
        </Route>
      </Routes>
      </AnimatePresence>
  );
}

function App() {
  return (
    <MotionConfig transition={{ type: "tween", duration: 0.48, ease: [0.22, 1, 0.36, 1] }} reducedMotion="user">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
