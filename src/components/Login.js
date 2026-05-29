import React, { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) return alert("Enter valid email");
    if (password.length < 6) return alert("Password min 6 chars");

    localStorage.setItem("user", email);
    setUser(email);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Sign In</h2>

        {/* EMAIL */}
        <div className="input-group">
          <span className="icon">📧</span>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="login-footer">
          New user? <span>Create account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;