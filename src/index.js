import { routes } from "./routes.js";
import "./pages/index.js";
import "./components/index.js";

const root = document.getElementById("root");
root.innerHTML = routes[window.location.pathname.replace("index.html", "")];

// Override `onpopstate` to update the page when user navigates backwards.
window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname.replace("index.html", "")];
};
