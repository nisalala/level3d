import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HeroSection.css";  // Import styles

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="text-center text-white">
        <h1>Welcome to <span className="highlight">Level 3D</span></h1>
        <p>Your ultimate destination for gaming! We bring you the latest games, consoles, accessories, and collectibles.</p>
        <Button variant="primary" size="lg">Learn More</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
