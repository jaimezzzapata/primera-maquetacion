import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Body />
    <Footer />
  </StrictMode>
);
