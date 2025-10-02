// src/pages/Signup.js
import React, { useState } from "react";
import { auth } from "../firebase"; // adjust path if needed
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!gender) {
      setError("Please select your gender");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(`Signup successful! Welcome, ${userCredential.user.email}`);
      // Optional: save name, gender, address to Firestore if needed
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSignup}>
        <h2 style={styles.title}>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

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

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ ...styles.input, height: 80, resize: "none" }}
        />

        <button type="submit" style={styles.button}>
          Signup
        </button>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "10px",
    background: "#f1f5f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    padding: 30,
    borderRadius: 10,
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
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
    marginTop: 10,
  },
  success: {
    color: "green",
    fontSize: 14,
    marginTop: 10,
  },
};
