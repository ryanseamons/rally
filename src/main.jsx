import React from "react";
import { createRoot } from "react-dom/client";
import Rally from "./Rally.js";
import "./styles.css";
createRoot(document.getElementById("root")).render(<Rally />);

// Offline support in production builds only; see public/sw.js.
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
