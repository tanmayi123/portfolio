// Simple hash-based router for a vanilla JS SPA
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Experience from "./routes/experience.js";
import Projects from "./routes/projects.js";
import Skills from "./routes/skills.js";
import Contact from "./routes/contact.js";

const routes = {
  "/": Home,
  "/home": Home,
  "/about": About,
  "/experience": Experience,
  "/projects": Projects,
  "/skills": Skills,
  "/contact": Contact,
};

const app = document.getElementById("app");

function render(Component) {
  app.innerHTML = "";
  app.appendChild(Component());
  window.scrollTo({ top: 0, behavior: "instant" });
}

function parseLocation() {
  const hash = location.hash || "#/home";
  const path = hash.slice(1); // remove '#'
  return path;
}

function router() {
  const path = parseLocation();
  const Component = routes[path] || Home; // fallback
  render(Component);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
