import React from "react";

export default function Vivo() {
  const products = [
    { id: 1, name: "Vivo X80 Pro", price: "₹79,999", image: "/images/v1.jpeg" },
    { id: 2, name: "Vivo X80", price: "₹54,999", image: "/images/v2.jpeg" },
    { id: 3, name: "Vivo V25 Pro", price: "₹35,999", image: "/images/v3.jpeg" },
    { id: 4, name: "Vivo V25", price: "₹28,999", image: "/images/v4.jpeg" },
    { id: 5, name: "Vivo Y35", price: "₹18,499", image: "/images/v5.jpeg" },
    { id: 6, name: "Vivo Y22", price: "₹14,499", image: "/images/v6.jpeg" },
    { id: 7, name: "Vivo T1 Pro", price: "₹23,999", image: "/images/v7.jpeg" },
    { id: 8, name: "Vivo T1", price: "₹16,999", image: "/images/v8.jpeg" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Vivo Mobiles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 per row
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
