// AuthPage.jsx
import React, { useState } from "react";
import "./AuthPage.css"; // Optional custom styles
import treeVideo from "../Assets/tree.mp4";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(`${isLogin ? "Login" : "Signup"} Data:`, data);
  };

  return (
    <div className="auth-page d-flex vh-100">
      {/* Left side: Video */}
      <div className="video-container col-6 p-0">
        <video
          src={treeVideo}
          className="w-100 h-100"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        ></video>
      </div>

      {/* Right side: Form */}
      <div className="form-container col-6 d-flex flex-column justify-content-center align-items-center">
        <div className="welcome">
          <p>Welcome to,</p>
          <h1>Level 3D</h1>
        </div>
        <div className="w-75">
          <div className="tabs">
            <button
              type="button"
              className={`tab-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              type="button"
              className={`tab-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control input-border"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control input-border"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control input-border"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control input-border"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button type="submit" className="btn w-100">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
