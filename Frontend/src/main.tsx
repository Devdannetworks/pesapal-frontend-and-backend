import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        style: {
          background: "rgb(51 65 85)",
          color: "#fff",
        },
      }}
    ></Toaster>
    <App />
  </StrictMode>
);
