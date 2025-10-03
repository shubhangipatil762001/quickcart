import React from "react";
import { useNavigate } from "react-router-dom";

export default function Realme() {
  const navigate = useNavigate();
 const products = [
  { 
    id: 1, 
    name: "Realme GT 2 Pro", 
    price: "₹49,999", 
    image: "/images/r1.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB / 512GB",
    battery: "5000mAh",
    camera: "50MP (Wide) + 50MP (Ultra-wide) + 3MP (Microscope) | Front: 32MP",
    display: "6.7-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 2, 
    name: "Realme GT Neo 3", 
    price: "₹36,999", 
    image: "/images/r2.jpeg",
    ram: "6GB / 8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4500mAh / 5000mAh (depending on variant)",
    camera: "50MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.7-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 3, 
    name: "Realme 10 Pro+", 
    price: "₹25,999", 
    image: "/images/r3.jpeg",
    ram: "6GB / 8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "108MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.7-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 4, 
    name: "Realme 10 Pro", 
    price: "₹18,999", 
    image: "/images/r4.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "108MP (Wide) + 2MP (Depth) | Front: 16MP",
    display: "6.6-inch FHD+ IPS LCD, 120Hz"
  },
  { 
    id: 5, 
    name: "Realme Narzo 50 Pro", 
    price: "₹17,999", 
    image: "/images/r5.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "48MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.4-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 6, 
    name: "Realme Narzo 50", 
    price: "₹15,999", 
    image: "/images/r6.jpeg",
    ram: "4GB / 6GB",
    storage: "64GB / 128GB",
    battery: "5000mAh",
    camera: "50MP (Wide) + 2MP (Macro) + 2MP (Depth) | Front: 16MP",
    display: "6.6-inch FHD+ IPS LCD, 120Hz"
  },
  { 
    id: 7, 
    name: "Realme 9 Pro+", 
    price: "₹22,999", 
    image: "/images/r7.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "50MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.4-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 8, 
    name: "Realme 9i", 
    price: "₹13,999", 
    image: "/images/r8.jpeg",
    ram: "4GB / 6GB",
    storage: "64GB / 128GB",
    battery: "5000mAh",
    camera: "50MP (Wide) + 2MP (Macro) + 2MP (Depth) | Front: 16MP",
    display: "6.6-inch FHD+ IPS LCD, 90Hz"
  }
];


    const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>⚡ Realme Mobiles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 products per row
        gap: "20px"
      }}>
        {products.map((p) => (
          <div key={p.id}
           onClick={() => navigate(`/product/${p.id}`, { state: p })}
          style={{
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
            
          </div>
        ))}
      </div>
    </div>
  );
}
