import React from "react";
import { useNavigate } from "react-router-dom";
export default function Samsung() {
  const navigate = useNavigate();

  const details = [
  { 
    id: 1, 
    name: "Samsung Galaxy S23 Ultra", 
    price: "₹1,24,999", 
    image: "/images/s1.jpg",
    ram: "12GB",
    storage: "256GB / 512GB / 1TB",
    battery: "5000mAh",
    camera: "200MP + 12MP + 10MP + 10MP | Front: 12MP",
    display: "6.8-inch QHD+ Dynamic AMOLED 2X, 120Hz"
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S23+", 
    price: "₹94,999", 
    image: "/images/s2.jpg",
    ram: "8GB",
    storage: "256GB / 512GB",
    battery: "4700mAh",
    camera: "50MP + 12MP + 10MP | Front: 12MP",
    display: "6.6-inch FHD+ Dynamic AMOLED 2X, 120Hz"
  },
  { 
    id: 3, 
    name: "Samsung Galaxy S23", 
    price: "₹74,999", 
    image: "/images/s3.jpg",
    ram: "8GB",
    storage: "128GB / 256GB / 512GB",
    battery: "3900mAh",
    camera: "50MP + 12MP + 10MP | Front: 12MP",
    display: "6.1-inch FHD+ Dynamic AMOLED 2X, 120Hz"
  },
  { 
    id: 4, 
    name: "Samsung Galaxy Z Fold 5", 
    price: "₹1,49,999", 
    image: "/images/s4.jpg",
    ram: "12GB",
    storage: "256GB / 512GB / 1TB",
    battery: "4400mAh",
    camera: "50MP + 12MP + 10MP | Front: 10MP + 4MP (under display)",
    display: "7.6-inch QXGA+ AMOLED (main) + 6.2-inch HD+ AMOLED cover"
  },
  { 
    id: 5, 
    name: "Samsung Galaxy Z Flip 5", 
    price: "₹99,999", 
    image: "/images/s5.jpg",
    ram: "8GB",
    storage: "256GB / 512GB",
    battery: "3700mAh",
    camera: "12MP + 12MP | Front: 10MP",
    display: "6.7-inch FHD+ AMOLED (main) + 3.4-inch cover display"
  },
  { 
    id: 6, 
    name: "Samsung Galaxy S22 Ultra", 
    price: "₹1,09,999", 
    image: "/images/s6.jpg",
    ram: "12GB",
    storage: "256GB / 512GB / 1TB",
    battery: "5000mAh",
    camera: "108MP + 12MP + 10MP + 10MP | Front: 40MP",
    display: "6.8-inch QHD+ Dynamic AMOLED 2X, 120Hz"
  },
  { 
    id: 7, 
    name: "Samsung Galaxy S21 FE", 
    price: "₹54,999", 
    image: "/images/s7.jpg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "4500mAh",
    camera: "12MP + 12MP + 8MP | Front: 32MP",
    display: "6.4-inch FHD+ Dynamic AMOLED 2X, 120Hz"
  },
  { 
    id: 8, 
    name: "Samsung Galaxy A54", 
    price: "₹38,999", 
    image: "/images/s8.jpg",
    ram: "6GB / 8GB",
    storage: "128GB / 256GB",
    battery: "5000mAh",
    camera: "50MP + 12MP + 5MP | Front: 32MP",
    display: "6.4-inch FHD+ Super AMOLED, 120Hz"
  }
];

   const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };



  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📱 Samsung Mobiles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 products per row
        gap: "20px"
      }}>
        {details.map((d) => (
          <div key={d.id} 
          onClick={() => navigate(`/product/${d.id}`, { state: d })}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
          }}>
            <img
              src={d.image}
              alt={d.name}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <h3 style={{ margin: "10px 0" }}>{d.name}</h3>
            <p style={{ fontWeight: "bold", color: "#1976d2" }}>{d.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
