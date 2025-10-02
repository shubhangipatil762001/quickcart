import React from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q"); // ?q=... मधून value घेते

  // Demo products (dummy data)
  const products = [
    { id: 1, name: "Apple iPhone 14", category: "mobile" },
    { id: 2, name: "Samsung Galaxy S23", category: "mobile" },
    { id: 3, name: "Sony Headphones", category: "electronics" },
    { id: 4, name: "Nike Running Shoes", category: "fashion" },
  ];

  // filter केलेले products
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes((query || "").toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Search Results for:{" "}
        <span style={{ color: "#1976d2" }}>{query}</span>
      </h2>

      {filtered.length > 0 ? (
        <ul style={{ marginTop: "20px" }}>
          {filtered.map(item => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} ({item.category})
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "20px", color: "gray" }}>
          No products found for "{query}"
        </p>
      )}
    </div>
  );
}
