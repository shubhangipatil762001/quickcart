import React from "react";
import { useNavigate } from "react-router-dom";

export default function Oppo() {
  const navigate = useNavigate();
  const products = [
  { 
    id: 1, 
    name: "Oppo Find X5 Pro", 
    price: "₹89,999", 
    image: "/images/op1.jpeg",
    ram: "12GB",
    storage: "256GB / 512GB",
    battery: "5000mAh",
    camera: "50MP (Wide) + 50MP (Ultra-wide) + 13MP (Telephoto) | Front: 32MP",
    display: "6.7-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 2, 
    name: "Oppo Reno8 Pro", 
    price: "₹45,999", 
    image: "/images/op2.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "50MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 32MP",
    display: "6.7-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 3, 
    name: "Oppo Reno8", 
    price: "₹29,999", 
    image: "/images/op3.jpeg",
    ram: "8GB",
    storage: "128GB",
    battery: "4500mAh",
    camera: "50MP (Wide) + 2MP (Macro) + 2MP (Depth) | Front: 32MP",
    display: "6.4-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 4, 
    name: "Oppo Reno7 Pro", 
    price: "₹38,999", 
    image: "/images/op4.jpeg",
    ram: "8GB / 12GB",
    storage: "256GB",
    battery: "4500mAh",
    camera: "50MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 32MP",
    display: "6.55-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 5, 
    name: "Oppo Reno7", 
    price: "₹27,999", 
    image: "/images/op5.jpeg",
    ram: "8GB",
    storage: "128GB",
    battery: "4500mAh",
    camera: "64MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 32MP",
    display: "6.43-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 6, 
    name: "Oppo F21 Pro", 
    price: "₹22,999", 
    image: "/images/op6.jpeg",
    ram: "8GB",
    storage: "128GB",
    battery: "4500mAh",
    camera: "64MP (Wide) + 2MP (Microlens) + 2MP (Depth) | Front: 32MP",
    display: "6.43-inch FHD+ AMOLED, 90Hz"
  },
  { 
    id: 7, 
    name: "Oppo A96", 
    price: "₹18,999", 
    image: "/images/op7.jpeg",
    ram: "8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "50MP (Wide) + 2MP (Depth) | Front: 16MP",
    display: "6.59-inch FHD+ IPS LCD, 90Hz"
  },
  { 
    id: 8, 
    name: "Oppo A76", 
    price: "₹15,499", 
    image: "/images/op8.jpeg",
    ram: "6GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "13MP (Wide) + 2MP (Depth) | Front: 8MP",
    display: "6.56-inch HD+ IPS LCD, 90Hz"
  }
];

    const handleProductClick = (product) => {
    navigate(`/oppo/${product.id}`, { state: product });
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Oppo Mobiles</h2>

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
