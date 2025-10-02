import React from "react";

export default function Samsung() {
  const products = [
    { id: 1, name: "Samsung Galaxy S23 Ultra", price: "₹1,24,999", image: "/images/s1.jpg" },
    { id: 2, name: "Samsung Galaxy S23+", price: "₹94,999", image: "/images/s2.jpg" },
    { id: 3, name: "Samsung Galaxy S23", price: "₹74,999", image: "/images/s3.jpg" },
    { id: 4, name: "Samsung Galaxy Z Fold 5", price: "₹1,49,999", image: "/images/s4.jpg" },
    { id: 5, name: "Samsung Galaxy Z Flip 5", price: "₹99,999", image: "/images/s5.jpg" },
    { id: 6, name: "Samsung Galaxy S22 Ultra", price: "₹1,09,999", image: "/images/s6.jpg" },
    { id: 7, name: "Samsung Galaxy S21 FE", price: "₹54,999", image: "/images/s7.jpg" },
    { id: 8, name: "Samsung Galaxy A54", price: "₹38,999", image: "/images/s8.jpg" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Samsung Mobiles</h2>

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
