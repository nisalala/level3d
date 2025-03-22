import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./AuthPage.css"; // Import external CSS
import bgvid from "../Assets/LoginBg.mp4";
import { useNavigate } from 'react-router-dom'; // Ensure this is present
import { useState } from "react";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

const handleLogIn=()=>{
    setIsLogin(true);
    navigate("/login");
}
  return (
    <div className="auth-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgvid} type="video/mp4" />
      </video>

      {/* Auth Box */}
      <div className="auth-box">
        <h1>Greetings, Explorer!</h1>
        {/* Toggle Login / Signup */}
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={handleLogIn}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="AuthForm">
          <input type="text" placeholder="Enter your Name" className="AuthInput" />
          <input type="text" placeholder="Enter your Username" className="AuthInput" />
          <input type="email" placeholder="Enter your email" className="AuthInput" />
          <input type="password" placeholder="Enter your password" className="AuthInput" />
          <input type="password" placeholder="Confirm your password" className="AuthInput" />
          
          <div className="terms">
            <input type="checkbox" id="terms" className="AuthInput" />
            <label htmlFor="terms">
              I agree to the <span className="underline">Terms of Use</span>
            </label>
          </div>

          <button className="AuthBtn" type="submit">Sign Up</button>
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

export default SignUpPage;
