import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root_1"));

root.render(
  <StrictMode>
    <div>demo_1</div>
  </StrictMode>
);

root.render(
  <StrictMode>
    <div>demo_2</div>
  </StrictMode>
);
