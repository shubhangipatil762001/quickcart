import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state; // we passed product from Oppo.js

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: "20px", padding: "10px 15px", cursor: "pointer" }}
      >
        ⬅ Back
      </button>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: "300px", height: "300px", objectFit: "contain" }} 
        />

        {/* Product Details */}
        <div>
          <h1>{product.name}</h1>
          <h2 style={{ color: "#1976d2" }}>{product.price}</h2>
          <p><b>RAM:</b> {product.ram}</p>
          <p><b>Storage:</b> {product.storage}</p>
          <p><b>Battery:</b> {product.battery}</p>
          <p><b>Camera:</b> {product.camera}</p>
          <p><b>Display:</b> {product.display}</p>

          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff5722",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
