import React, { useRef, useEffect } from "react";
import "./AboutSection.css"; // Import CSS for better styling
import { useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const AboutSection = () => {
  /// Create a ref to the "about-content" section
  const aboutContentRef = useRef(null);
  const contactRef = useRef(null); // Reference for Contact Us section
  const location = useLocation(); // Get current locatio
  

  const scrollToAboutContent = () => {
    if (aboutContentRef.current) {
      aboutContentRef.current.scrollIntoView({
        behavior: "smooth", 
        block: "start",
      });
    }
  };

  // Scroll to Contact Us if URL contains "#contact-us"
  useEffect(() => {
    if (location.hash === "#contact-us" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]); // Run when location changes


  return (
    <div className="about-container">
      <div className="welcome">
        <p>
          <span className="font1">Welcome to </span>
          <span className="font2">Level 3D</span>
        </p>
        <p>
        Your ultimate destination for gaming! Founded by passionate gamers, we bring you the latest games, consoles, accessories, and collectibles, all in one place. Whether you're a casual player or a hardcore enthusiast, we’re here to fuel your adventures.        </p>
        <button onClick={scrollToAboutContent} className="about-btn">
          Learn More
        </button>
      </div>
      <div ref={aboutContentRef} className="about-content">
        <h1>About Us</h1>
        <p>
        Your ultimate destination for gaming! Founded by passionate gamers, we bring you the latest games, consoles, accessories, and collectibles, all in one place. Whether you're a casual player or a hardcore enthusiast, we’re here to fuel your adventures.          <br />
          <br />
          Our mission is simple: to deliver top-quality products, exceptional service, and an immersive 3D shopping experience. Join our growing community and explore the world of gaming like never before.
          </p>
      </div>

      {/* Contact Us Section */}
      <div id="contact-us" ref={contactRef} className="contact-section">
        <h2>CONTACT US</h2>
        <p>Stay updated with our latest products, news, and discounts</p>
        <div className="contact-form">
          <form>
          <h1>Send Message</h1>
          <input type="text" placeholder="Full Name" className="input-field"/><br/>
          <input type="email" placeholder="Email" className="input-field"/><br/>
          <textarea placeholder="Type Your Message" className="input-field"></textarea><br/>
          <button className="send-button">Send</button>
          </form>
        </div>
        

        <div className="about-footer">
        <h1>Follow us</h1>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>Copyright © 2025, LEVEL 3D | All Rights Reserved.</p>
        </div>
      </div>
  

    </div>
  );
};

export default AboutSection;
