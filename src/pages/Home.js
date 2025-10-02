// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // Background images (slideshow साठी)
  const bgImages = [
    "/bg1.jpeg",
    "/bg.jpeg",
    "/bg3.jpeg",
    "/bg4.jpeg"
  ];

  const [bgIndex, setBgIndex] = useState(0);

  // दर 5 सेकंदांनी background बदलेल
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const navigate = useNavigate();

  // फक्त Companies दाखवण्यासाठी list
  const companies = [
    { id: "iphone", name: "Apple iPhone", logo: "/apple.jpeg" },
    { id: "samsung", name: "Samsung", logo: "/s23.jpeg" },
    { id: "oneplus", name: "OnePlus", logo: "/oneplus.jpeg" },
    { id: "xiaomi", name: "Xiaomi", logo: "/Xi12.jpeg" },
    { id: "realme", name: "Realme", logo: "/Realme.jpeg" },
    { id: "vivo", name: "Vivo", logo: "/Vivo.jpeg" },
    { id: "oppo", name: "Oppo", logo: "/Oppo1.jpeg" },
    { id: "motorola", name: "Motorola", logo: "/motorola.jpeg" }
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20px",
        overflow: "hidden"
      }}
    >
      {/* Background slideshow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          filter: "blur(8px) brightness(0.6)",
          zIndex: -1
        }}
      />

      <h2 style={{ marginBottom: "20px", color: "white", textAlign: "center" }}>
        Select Mobile Brand 📱
      </h2>

      {/* Companies Grid */}
      <div
          style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // फिक्स्ड 4 columns
        gap: "20px",
        justifyItems: "center" // cards center मध्ये
      }}
      >
        
           { companies.map((c) => (
      <div
          key={c.id}
          onClick={() => navigate(`/${c.id}`)}
          style={{
             border: "1px solid #ddd",
             borderRadius: "10px",
             padding: "15px",
             textAlign: "center",
             boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
             background: "white",
             cursor: "pointer",
             width: "200px", // uniform width
             transition: "transform 0.2s"
          }}
       >
             <img
                src={c.logo}
                alt={c.name}
                style={{ width: "150px", height: "150px", objectFit: "contain" }}
             />
                <h3 style={{ marginTop: "10px" }}>{c.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
