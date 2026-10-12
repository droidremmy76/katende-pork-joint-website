import React from "react";
import { createRoot } from "react-dom/client";
import { Index } from "../src/pages/home";
import "../src/styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
