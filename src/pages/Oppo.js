import React from "react";

export default function Oppo() {
  const products = [
    { id: 1, name: "Oppo Find X5 Pro", price: "₹89,999", image: "/images/op1.jpeg" },
    { id: 2, name: "Oppo Reno8 Pro", price: "₹45,999", image: "/images/op2.jpeg" },
    { id: 3, name: "Oppo Reno8", price: "₹29,999", image: "/images/op3.jpeg" },
    { id: 4, name: "Oppo Reno7 Pro", price: "₹38,999", image: "/images/op4.jpeg" },
    { id: 5, name: "Oppo Reno7", price: "₹27,999", image: "/images/op5.jpeg" },
    { id: 6, name: "Oppo F21 Pro", price: "₹22,999", image: "/images/op6.jpeg" },
    { id: 7, name: "Oppo A96", price: "₹18,999", image: "/images/op7.jpeg" },
    { id: 8, name: "Oppo A76", price: "₹15,499", image: "/images/op8.jpeg" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Oppo Mobiles</h2>

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
