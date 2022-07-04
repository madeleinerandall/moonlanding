import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.scss";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import ProductPage from "./ProductPage";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<ProductPage />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
