import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import "./index.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Body />
      <Toaster />
      <Footer />
      {/* <Routes>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
