import Weather from "./Weather";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);
