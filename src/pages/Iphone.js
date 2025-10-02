// src/pages/IPhonePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function IPhone() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹99,999",
      image: "/images/iiphone.jpeg",
      ram: "6GB",
      storage: "128GB / 256GB / 512GB",
      battery: "3279mAh",
      camera: "12MP + 12MP | Front: 12MP",
      display: "6.1-inch Super Retina XDR OLED"
    },
    {
      id: 2,
      name: "iPhone 13 Pro Max",
      price: "₹1,09,999",
      image: "/images/max.jpeg",
      ram: "6GB",
      storage: "128GB / 256GB / 512GB / 1TB",
      battery: "4352mAh",
      camera: "12MP + 12MP + 12MP | Front: 12MP",
      display: "6.7-inch Super Retina XDR OLED"
    },
    {
      id: 3,
      name: "iPhone 13 Pro",
      price: "₹95,999",
      image: "/images/iPhone13Pro.jpeg",
      ram: "6GB",
      storage: "128GB / 256GB / 512GB / 1TB",
      battery: "3095mAh",
      camera: "12MP + 12MP + 12MP | Front: 12MP",
      display: "6.1-inch Super Retina XDR OLED"
    },
    {
      id: 4,
      name: "iPhone 13",
      price: "₹79,999",
      image: "/images/iPhone13.jpeg",
      ram: "4GB",
      storage: "128GB / 256GB / 512GB",
      battery: "3227mAh",
      camera: "12MP + 12MP | Front: 12MP",
      display: "6.1-inch Super Retina XDR OLED"
    },
    {
      id: 5,
      name: "iPhone 12 Pro Max",
      price: "₹89,999",
      image: "/images/iPhone12Pro.jpeg",
      ram: "6GB",
      storage: "128GB / 256GB / 512GB",
      battery: "3687mAh",
      camera: "12MP + 12MP + 12MP | Front: 12MP",
      display: "6.7-inch Super Retina XDR OLED"
    },
    {
      id: 6,
      name: "iPhone 12",
      price: "₹69,999",
      image: "/images/iPhone12.jpeg",
      ram: "4GB",
      storage: "64GB / 128GB / 256GB",
      battery: "2815mAh",
      camera: "12MP + 12MP | Front: 12MP",
      display: "6.1-inch Super Retina XDR OLED"
    },
    {
      id: 7,
      name: "iPhone SE (2022)",
      price: "₹39,999",
      image: "/images/iPhoneSE2.jpeg",
      ram: "4GB",
      storage: "64GB / 128GB / 256GB",
      battery: "2018mAh",
      camera: "12MP | Front: 7MP",
      display: "4.7-inch Retina HD"
    },
    {
      id: 8,
      name: "iPhone 11",
      price: "₹49,999",
      image: "/images/iPhone11.jpeg",
      ram: "4GB",
      storage: "64GB / 128GB / 256GB",
      battery: "3110mAh",
      camera: "12MP + 12MP | Front: 12MP",
      display: "6.1-inch Liquid Retina IPS LCD"
    }
  ];

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🍏 Apple iPhones</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`, { state: p })}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              cursor: "pointer"
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <h3 style={{ margin: "10px 0" }}>{p.name}</h3>
            <p style={{ fontWeight: "bold", color: "#1976d2" }}>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
