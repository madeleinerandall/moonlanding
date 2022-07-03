import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import "./index.scss";
import Header from "./Header";
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Body />
      {/* <Routes>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
