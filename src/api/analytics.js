import api from "./client.js";

// Fire-and-forget tracking calls — never block the UI or throw if the
// backend/DB isn't reachable.
export const trackVisit = (page = window.location.pathname) => {
  api.post("/analytics/visit", { page }).catch(() => {});
};

export const trackResumeDownload = () => {
  api.post("/analytics/resume-download").catch(() => {});
};

export const trackProjectClick = (project) => {
  api.post("/analytics/project-click", { project }).catch(() => {});
};
