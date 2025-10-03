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
import Cart from "./pages/Cart";


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
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/oneplus" element={<Oneplus />} />
          <Route path="/xiaomi" element={<Xiaomi />} />
          <Route path="/realme" element={<Realme />} />
          <Route path="/vivo" element={<Vivo />} />
          <Route path="/oppo" element={<Oppo />} />
          <Route path="/motorola" element={<Motorola />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
  
  );
}

export default App;
