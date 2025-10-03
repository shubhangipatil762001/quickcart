import React from "react";
import { useNavigate } from "react-router-dom";

export default function Xiaomi() {
  const navigate = useNavigate();

  const products = [
  { 
    id: 1, 
    name: "Xiaomi 13 Pro", 
    price: "₹79,999", 
    image: "/images/x1.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB / 512GB",
    battery: "4820mAh",
    camera: "50MP (Wide) + 50MP (Telephoto) + 50MP (Ultra-wide) | Front: 32MP",
    display: "6.73-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 2, 
    name: "Xiaomi 12 Pro", 
    price: "₹55,999", 
    image: "/images/x2.jpeg",
    ram: "8GB / 12GB",
    storage: "256GB",
    battery: "4600mAh",
    camera: "50MP (Wide) + 50MP (Telephoto) + 50MP (Ultra-wide) | Front: 32MP",
    display: "6.73-inch QHD+ AMOLED, 120Hz"
  },
  { 
    id: 3, 
    name: "Xiaomi 11T Pro 5G", 
    price: "₹39,999", 
    image: "/images/x3.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "108MP + 8MP + 5MP | Front: 16MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 4, 
    name: "Xiaomi Mi 11X Pro", 
    price: "₹34,999", 
    image: "/images/x4.jpeg",
    ram: "8GB",
    storage: "128GB / 256GB",
    battery: "4520mAh",
    camera: "108MP + 8MP + 5MP | Front: 20MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 5, 
    name: "Redmi Note 12 Pro+", 
    price: "₹29,999", 
    image: "/images/x5.jpeg",
    ram: "6GB / 8GB / 12GB",
    storage: "128GB / 256GB",
    battery: "4980mAh",
    camera: "200MP + 8MP + 2MP | Front: 16MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 6, 
    name: "Redmi Note 12 Pro", 
    price: "₹24,999", 
    image: "/images/x6.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 7, 
    name: "Redmi Note 11 Pro+", 
    price: "₹21,999", 
    image: "/images/x7.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "108MP + 8MP + 2MP | Front: 16MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  },
  { 
    id: 8, 
    name: "Redmi Note 10 Pro", 
    price: "₹18,999", 
    image: "/images/x8.jpeg",
    ram: "6GB / 8GB",
    storage: "64GB / 128GB",
    battery: "5020mAh",
    camera: "64MP + 8MP + 5MP + 2MP | Front: 16MP",
    display: "6.67-inch FHD+ AMOLED, 120Hz"
  }
];

   const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Xiaomi / Redmi Mobiles</h2>

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
