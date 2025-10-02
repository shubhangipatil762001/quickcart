import React from "react";

export default function Xiaomi() {
  const products = [
    { id: 1, name: "Xiaomi 13 Pro", price: "₹79,999", image: "/images/x1.jpeg" },
    { id: 2, name: "Xiaomi 12 Pro", price: "₹55,999", image: "/images/x2.jpeg" },
    { id: 3, name: "Xiaomi 11T Pro 5G", price: "₹39,999", image: "/images/x3.jpeg" },
    { id: 4, name: "Xiaomi Mi 11X Pro", price: "₹34,999", image: "/images/x4.jpeg" },
    { id: 5, name: "Redmi Note 12 Pro+", price: "₹29,999", image: "/images/x5.jpeg" },
    { id: 6, name: "Redmi Note 12 Pro", price: "₹24,999", image: "/images/x6.jpeg" },
    { id: 7, name: "Redmi Note 11 Pro+", price: "₹21,999", image: "/images/x7.jpeg" },
    { id: 8, name: "Redmi Note 10 Pro", price: "₹18,999", image: "/images/x8.jpeg" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Xiaomi / Redmi Mobiles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 products per row
        gap: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
          }}>
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <h3 style={{ margin: "10px 0" }}>{p.name}</h3>
            <p style={{ fontWeight: "bold", color: "#1976d2" }}>{p.price}</p>
            <button style={{
              marginTop: "10px",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#1976d2",
              color: "white",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
