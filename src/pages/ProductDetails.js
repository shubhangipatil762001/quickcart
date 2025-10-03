import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  const handleAddToCart = () => {
    navigate("/cart", { state: product }); // ✅ Cart page ला navigate + product पाठवणे
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "20px" }}>
      
      {/* Back Button */}
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
        ⬅ Back
      </button>

      {/* Main Container */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1000px",
        margin: "0 auto",
        gap: "40px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        
        {/* Left: Product Image */}
        <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "contain",
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#f9f9f9"
            }}
          />
        </div>

        {/* Right: Product Info */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>{product.name}</h1>
          <h2 style={{ fontSize: "22px", color: "#1976d2", marginBottom: "20px" }}>{product.price}</h2>

          <div style={{
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            padding: "15px 0",
            marginBottom: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Key Specifications</h3>
            <p><b>RAM:</b> {product.ram}</p>
            <p><b>Storage:</b> {product.storage}</p>
            <p><b>Battery:</b> {product.battery}</p>
            <p><b>Camera:</b> {product.camera}</p>
            <p><b>Display:</b> {product.display}</p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            {/* Add to Cart */}
            <button
              style={{
                flex: 1,
                padding: "15px 0",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#fb641b",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "background 0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#e55a12"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#fb641b"}
              onClick={handleAddToCart} // ✅ Click event added
            >
              🛒 Add to Cart
            </button>

            {/* Buy Now */}
            <button
              style={{
                flex: 1,
                padding: "15px 0",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#ff9f00",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "background 0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#e68a00"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#ff9f00"}
            >
              💳 Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
