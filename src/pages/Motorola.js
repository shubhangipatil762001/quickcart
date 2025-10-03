import React from "react";
import { useNavigate } from "react-router-dom";

export default function Motorola() {
  const navigate  = useNavigate();
  const products = [
  { 
    id: 1, 
    name: "Motorola Edge 40", 
    price: "₹44,999", 
    image: "/images/m1.jpeg",
    ram: "8GB",
    storage: "128GB / 256GB",
    battery: "4400mAh",
    camera: "50MP (Wide) + 13MP (Ultra-wide) | Front: 32MP",
    display: "6.55-inch FHD+ pOLED, 144Hz"
  },
  { 
    id: 2, 
    name: "Motorola Edge 30 Ultra", 
    price: "₹49,999", 
    image: "/images/m2.jpeg",
    ram: "8GB / 12GB",
    storage: "128GB / 256GB / 512GB",
    battery: "4610mAh",
    camera: "200MP (Wide) + 50MP (Ultra-wide) + 12MP (Telephoto) | Front: 60MP",
    display: "6.67-inch FHD+ pOLED, 144Hz"
  },
  { 
    id: 3, 
    name: "Motorola Edge 30 Neo", 
    price: "₹34,999", 
    image: "/images/m3.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "4020mAh",
    camera: "64MP (Wide) + 13MP (Ultra-wide) | Front: 32MP",
    display: "6.28-inch FHD+ pOLED, 120Hz"
  },
  { 
    id: 4, 
    name: "Motorola G82", 
    price: "₹18,999", 
    image: "/images/m4.jpeg",
    ram: "6GB / 8GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "50MP (OIS) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.6-inch FHD+ pOLED, 120Hz"
  },
  { 
    id: 5, 
    name: "Motorola G72", 
    price: "₹15,999", 
    image: "/images/m5.jpeg",
    ram: "6GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "108MP (Wide) + 8MP (Ultra-wide) + 2MP (Macro) | Front: 16MP",
    display: "6.6-inch FHD+ pOLED, 120Hz"
  },
  { 
    id: 6, 
    name: "Motorola G62", 
    price: "₹12,999", 
    image: "/images/m6.jpeg",
    ram: "4GB / 6GB",
    storage: "128GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.5-inch FHD+ IPS LCD, 120Hz"
  },
  { 
    id: 7, 
    name: "Motorola G42", 
    price: "₹11,499", 
    image: "/images/m7.jpeg",
    ram: "4GB",
    storage: "64GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.4-inch FHD+ AMOLED, 60Hz"
  },
  { 
    id: 8, 
    name: "Motorola G32", 
    price: "₹9,999", 
    image: "/images/m8.jpeg",
    ram: "4GB / 6GB",
    storage: "64GB / 128GB",
    battery: "5000mAh",
    camera: "50MP + 8MP + 2MP | Front: 16MP",
    display: "6.5-inch FHD+ IPS LCD, 90Hz"
  }
];

   const handleproductClick = (product) => 
   {
    navigate('/productdetails/' + product.id, {state:product})
   }
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Motorola Mobiles</h2>

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
