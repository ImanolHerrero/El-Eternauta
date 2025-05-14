import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar01Page from "./components/navbar-01/navbar-01.tsx";
import Testimonial05 from "./components/testimonial-05/testimonial-05.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar01Page />
    <App />
    <Testimonial05 />
  </StrictMode>
);
