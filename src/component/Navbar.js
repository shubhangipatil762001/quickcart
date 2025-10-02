// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1976d2",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100
    }}>
      {/* Logo */}
      <div>
        <Link 
          to="/" 
          style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "20px" }}
        >
          QuickCart 
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "5px 10px",
              borderRadius: "5px 0 0 5px",
              border: "none",
              outline: "none"
            }}
          />
          <button type="submit" style={{
            padding: "5px 10px",
            borderRadius: "0 5px 5px 0",
            border: "none",
            backgroundColor: "#f0c14b",
            cursor: "pointer"
          }}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
