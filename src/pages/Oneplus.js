import React from "react";

export default function OnePlus() {
  const products = [
    { id: 1, name: "OnePlus 11 5G", price: "₹56,999", image: "/images/o1.jpeg" },
    { id: 2, name: "OnePlus 11R 5G", price: "₹39,999", image: "/images/o2.jpeg" },
    { id: 3, name: "OnePlus Nord 3 5G", price: "₹33,999", image: "/images/o3.jpeg" },
    { id: 4, name: "OnePlus Nord CE 3 5G", price: "₹26,999", image: "/images/o4.jpeg" },
    { id: 5, name: "OnePlus Nord CE 2 Lite", price: "₹18,999", image: "/images/o5.jpeg" },
    { id: 6, name: "OnePlus 10 Pro", price: "₹61,999", image: "/images/o6.jpeg" },
    { id: 7, name: "OnePlus 9 Pro", price: "₹49,999", image: "/images/o7.jpeg" },
    { id: 8, name: "OnePlus 8T", price: "₹42,999", image: "/images/o8.jpeg" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🔥 OnePlus Mobiles</h2>

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
