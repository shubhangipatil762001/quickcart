// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

export default function Home() {
  const bgImages = ["/bg1.jpeg", "/bg.jpeg", "/bg3.jpeg", "/bg4.jpeg"];
  const [bgIndex, setBgIndex] = useState(0);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Fetch brands from Firebase
  useEffect(() => {
    const brandRef = ref(database, "brands"); // 🔹 correct node
    const unsubscribe = onValue(brandRef, (snapshot) => {
      const data = snapshot.val();
      console.log("🔥 Firebase data:", data);
      if (data) {
        // Ensure each brand has id, name, logo
        const brandsArray = Object.values(data).map((b) => ({
          id: b.id,
          name: b.name,
          logo: b.logo
        }));
        setCompanies(brandsArray);
      } else {
        setCompanies([]);
      }
    });
    return () => unsubscribe();
  }, []);

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
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyItems: "center"
        }}
      >
        {companies.map((c) => (
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
              width: "200px",
              transition: "transform 0.2s"
            }}
          >
            <img
              src={c.logo} // 🔹 will now work
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
