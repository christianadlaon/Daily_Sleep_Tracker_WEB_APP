import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import "../styles/Signup.css"; // Import styles

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // GSAP Animation Reference
  const signupBoxRef = useRef(null);

  useEffect(() => {
    gsap.from(signupBoxRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/signup", { username, password });
      setMessage("Signup successful! Please log in.");
    } catch (error) {
      setMessage(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      {/* Floating "Zzz" Elements */}
      <span className="zzz" style={{ top: "10%", left: "20%", animationDuration: "6s" }}>Zzz...</span>
      <span className="zzz" style={{ top: "40%", left: "80%", animationDuration: "7s" }}>Zzz...</span>
      <span className="zzz" style={{ top: "70%", left: "50%", animationDuration: "5s" }}>Zzz...</span>
      <span className="zzz" style={{ top: "20%", left: "60%", animationDuration: "8s" }}>Zzz...</span>

      {/* Signup Box with Animation */}
      <div className="signup-box" ref={signupBoxRef}>
        <h1 className="signup-title">Create an Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        {message && (
          <p className={`signup-message ${message.includes("failed") ? "error" : "success"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
