import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Ensure this is present
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Import external CSS for styling
import { useLocation } from "react-router-dom"; // Import useLocation


const NavigationBar = () => {
    
    const navigate = useNavigate();  // Initialize the navigate function
    const location = useLocation();  // Get the current URL

 // Check if the user is on the Auth Page
 const isAuthPage = location.pathname === "/auth";


 //about us ma xa va fixed aru ma absolute
 let navbarPosition = (location.pathname === "/about" || location.pathname === "/contact-us") ? "fixed" : "absolute";


  // Handle the login button click
  const handleLoginClick = () => {
    // You can add login logic here if necessary

    // After login, navigate to the AuthPage
    navigate("/auth");
  };

  

  return (
    <Navbar expand="lg" className={`custom-navbar ${navbarPosition}`} >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          LEVEL 3D
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to="/"
              className="nav-link-custom"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#a0a0a0",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="nav-link-custom"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#a0a0a0",
              })}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link-custom"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#a0a0a0",
              })}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us#contact-us"
              className="nav-link-custom"
              onClick={() => window.scrollTo(0, 0)}
              style={({ isActive }) => ({
                color: isActive ? "white" : "#a0a0a0",
              })}
            >
              Contact Us
            </NavLink>
          </Nav>
          <Button
                        variant="info"
                        className={`login-button ${isAuthPage ? "active" : ""}`} // Add active class when on Auth Page
                        onClick={handleLoginClick}
                    >
                        Login
                    </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
