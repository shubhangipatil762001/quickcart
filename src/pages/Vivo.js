import React from "react";
import { useNavigate } from "react-router-dom";

export default function Vivo() {
  const navigate = useNavigate();
  const products = [
  { 
    id: 1, 
    name: "Vivo X80 Pro", 
    price: "₹79,999", 
    image: "/images/v1.jpeg",
    ram: "12GB",
    storage: "256GB",
    battery: "4700mAh",
    camera: "50MP + 48MP + 12MP + 8MP | Front: 32MP",
    display: "6.78-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 2, 
    name: "Vivo X80", 
    price: "₹54,999", 
    image: "/images/v2.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "50MP + 12MP + 12MP | Front: 32MP",
    display: "6.78-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 3, 
    name: "Vivo V25 Pro", 
    price: "₹35,999", 
    image: "/images/v3.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4830mAh",
    camera: "64MP + 8MP + 2MP | Front: 32MP",
    display: "6.56-inch AMOLED, 120Hz"
  },
  { 
    id: 4, 
    name: "Vivo V25", 
    price: "₹28,999", 
    image: "/images/v4.jpeg",
    ram: "8GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "64MP + 8MP + 2MP | Front: 50MP",
    display: "6.44-inch AMOLED, 90Hz"
  },
  { 
    id: 5, 
    name: "Vivo Y35", 
    price: "₹18,499", 
    image: "/images/v5.jpeg",
    ram: "8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "50MP + 2MP + 2MP | Front: 16MP",
    display: "6.58-inch FHD+ LCD, 90Hz"
  },
  { 
    id: 6, 
    name: "Vivo Y22", 
    price: "₹14,499", 
    image: "/images/v6.jpeg",
    ram: "4GB / 6GB",
    storage: "64GB / 128GB",
    battery: "5000mAh",
    camera: "50MP + 2MP | Front: 8MP",
    display: "6.55-inch HD+ LCD"
  },
  { 
    id: 7, 
    name: "Vivo T1 Pro", 
    price: "₹23,999", 
    image: "/images/v7.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB",
    battery: "4700mAh",
    camera: "64MP + 8MP + 2MP | Front: 16MP",
    display: "6.44-inch AMOLED, 120Hz"
  },
  { 
    id: 8, 
    name: "Vivo T1", 
    price: "₹16,999", 
    image: "/images/v8.jpeg",
    ram: "4GB / 6GB / 8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "50MP + 2MP + 2MP | Front: 16MP",
    display: "6.58-inch FHD+ LCD, 120Hz"
  }
];


   const handleProductClick = (product) => {
     navigate(`/product/${product.id}`, { state: product });
   }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Vivo Mobiles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 per row
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
