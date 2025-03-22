import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./AuthPage.css"; // Import external CSS
import bgvid from "../Assets/LoginBg.mp4";
import { useNavigate } from 'react-router-dom'; // Ensure this is present


const LoginPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

const handleSignUp=()=>{
    setIsLogin(false);
    navigate("/signup");

}

  return (
    <div className="auth-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgvid} type="video/mp4" />
      </video>

      {/* Auth Box */}
      <div className="auth-box">
        <h1>Welcome Back, Explorer!</h1>
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="AuthForm">
          <input type="email" placeholder="Enter your email" className="AuthInput" />
          <input type="password" placeholder="Enter your password" className="AuthInput" />
          
          <button className="AuthBtn" type="submit">Login</button>
        </form>

        {/* Social Logins */}
        <p className="or-text">or</p>
        <div className="social-icons">
          <FaGoogle className="icon google" />
          <FaFacebook className="icon facebook" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
