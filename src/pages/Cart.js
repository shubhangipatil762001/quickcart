import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get product from state (for now from ProductDetails → Add to Cart)
  const cartItem = location.state;

  if (!cartItem) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>🛒 Your cart is empty</h2>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      
      {/* Back to Shopping */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          backgroundColor: "#f8f8f8",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
          marginBottom: "20px"
        }}
      >
        ⬅ Continue Shopping
      </button>

      <h2 style={{ marginBottom: "20px" }}>My Cart</h2>

      {/* Cart Item Container */}
      <div style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        
        {/* Product Image */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={cartItem.image}
            alt={cartItem.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              padding: "10px"
            }}
          />
        </div>

        {/* Product Details */}
        <div style={{ flex: "2" }}>
          <h3 style={{ marginBottom: "10px" }}>{cartItem.name}</h3>
          <p style={{ fontSize: "18px", color: "#1976d2", fontWeight: "bold" }}>
            {cartItem.price}
          </p>
          <p><b>RAM:</b> {cartItem.ram}</p>
          <p><b>Storage:</b> {cartItem.storage}</p>
          <p><b>Battery:</b> {cartItem.battery}</p>

          {/* Action Buttons */}
          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <button
              style={{
                padding: "10px 20px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                backgroundColor: "#f0f0f0",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#fb641b",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
