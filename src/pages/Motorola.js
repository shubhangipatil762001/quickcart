import React from "react";

export default function Motorola() {
  const products = [
    { id: 1, name: "Motorola Edge 40", price: "₹44,999", image: "/images/m1.jpeg" },
    { id: 2, name: "Motorola Edge 30 Ultra", price: "₹49,999", image: "/images/m2.jpeg" },
    { id: 3, name: "Motorola Edge 30 Neo", price: "₹34,999", image: "/images/m3.jpeg" },
    { id: 4, name: "Motorola G82", price: "₹18,999", image: "/images/m4.jpeg" },
    { id: 5, name: "Motorola G72", price: "₹15,999", image: "/images/m5.jpeg" },
    { id: 6, name: "Motorola G62", price: "₹12,999", image: "/images/m6.jpeg" },
    { id: 7, name: "Motorola G42", price: "₹11,499", image: "/images/m7.jpeg" },
    { id: 8, name: "Motorola G32", price: "₹9,999", image: "/images/m8.jpeg" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Motorola Mobiles</h2>

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
