import React from "react";
import { useNavigate } from "react-router-dom";

export default function OnePlus() {
  const navigate = useNavigate();
  const products = [
  { 
    id: 1, 
    name: "OnePlus 11 5G", 
    price: "₹56,999", 
    image: "/images/o1.jpeg",
    ram: "8GB / 16GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 48MP + 32MP | Front: 16MP",
    display: "6.7-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 2, 
    name: "OnePlus 11R 5G", 
    price: "₹39,999", 
    image: "/images/o2.jpeg",
    ram: "8GB / 16GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.74-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 3, 
    name: "OnePlus Nord 3 5G", 
    price: "₹33,999", 
    image: "/images/o3.jpeg",
    ram: "8GB / 16GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.74-inch AMOLED, 120Hz"
  },
  { 
    id: 4, 
    name: "OnePlus Nord CE 3 5G", 
    price: "₹26,999", 
    image: "/images/o4.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.7-inch AMOLED, 120Hz"
  },
  { 
    id: 5, 
    name: "OnePlus Nord CE 2 Lite", 
    price: "₹18,999", 
    image: "/images/o5.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "64MP + 2MP + 2MP | Front: 16MP",
    display: "6.59-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 6, 
    name: "OnePlus 10 Pro", 
    price: "₹61,999", 
    image: "/images/o6.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "48MP + 50MP + 8MP | Front: 32MP",
    display: "6.7-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 7, 
    name: "OnePlus 9 Pro", 
    price: "₹49,999", 
    image: "/images/o7.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "48MP + 50MP + 8MP + 2MP | Front: 16MP",
    display: "6.7-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 8, 
    name: "OnePlus 8T", 
    price: "₹42,999", 
    image: "/images/o8.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "48MP + 16MP + 5MP + 2MP | Front: 16MP",
    display: "6.55-inch FHD+ AMOLED, 120Hz"
  }
];



    const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🔥 OnePlus Mobiles</h2>

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
