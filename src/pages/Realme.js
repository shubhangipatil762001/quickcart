import React from "react";

export default function Realme() {
  const products = [
    { id: 1, name: "Realme GT 2 Pro", price: "₹49,999", image: "/images/r1.jpeg" },
    { id: 2, name: "Realme GT Neo 3", price: "₹36,999", image: "/images/r2.jpeg" },
    { id: 3, name: "Realme 10 Pro+", price: "₹25,999", image: "/images/r3.jpeg" },
    { id: 4, name: "Realme 10 Pro", price: "₹18,999", image: "/images/r4.jpeg" },
    { id: 5, name: "Realme Narzo 50 Pro", price: "₹17,999", image: "/images/r5.jpeg" },
    { id: 6, name: "Realme Narzo 50", price: "₹15,999", image: "/images/r6.jpeg" },
    { id: 7, name: "Realme 9 Pro+", price: "₹22,999", image: "/images/r7.jpeg" },
    { id: 8, name: "Realme 9i", price: "₹13,999", image: "/images/r8.jpeg" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>⚡ Realme Mobiles</h2>

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
