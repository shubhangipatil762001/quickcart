import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Background images for slideshow
  const bgImages = [
    "/bg1.jpeg",
    "/bg4.jpeg",
    "/bg.jpeg",
    "/bg4.jpeg",
    "/Xi12.jpeg",
    "/iphone14Pro.jpeg",
    "/s23.jpeg",
  ];
  const [bgIndex, setBgIndex] = useState(0);

  // Change background every 5 seconds
  useEffect(() => {
  const interval = setInterval(() => {
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, [bgImages.length]); // ✅ include dependency

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful! 🚀");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      {/* Background Slideshow */}
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
          zIndex: -1,
        }}
      />

      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.title}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    position: "relative", // slideshow साठी
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    padding: 30,
    borderRadius: 10,
    background: "rgba(255,255,255,0.95)", // थोडं transparent background
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    zIndex: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },
  input: {
    padding: 12,
    margin: "10px 0",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
  },
  button: {
    padding: 12,
    marginTop: 10,
    borderRadius: 5,
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
};
