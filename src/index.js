import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./pages/Nav.js";
import "./index.css";
import "./mySass.scss";

export default function App() {
  return (
    <div className="nav">
      <Nav />
    </div>
  );
}

const container = document.getElementById("nav");
const root = ReactDOM.createRoot(container);
root.render(<App />);
