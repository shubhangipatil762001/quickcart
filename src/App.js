import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Search from "./pages/Search";
import Iphone from "./pages/Iphone";
import Samsung from "./pages/Samsung";
import Oneplus from "./pages/Oneplus";
import Xiaomi from "./pages/Xiaomi";
import Realme from "./pages/Realme";
import Vivo from "./pages/Vivo";
import Oppo from "./pages/Oppo";
import Motorola from "./pages/Motorola";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="Samsung" element={<Samsung />} />
        <Route path="Oneplus" element={<Oneplus />} />
        <Route path="xiaomi" element={<Xiaomi />} />
        <Route path="realme" element={<Realme />} />
        <Route path="Vivo" element={<Vivo />} />
        <Route path="Oppo" element={<Oppo />} />
        <Route path="Motorola" element={<Motorola />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
