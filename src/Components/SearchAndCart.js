import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchAndCart.css";
import { useLocation } from "react-router-dom";


const SearchAndCart = () => {
    const location = useLocation();
  const navigate = useNavigate();

   // Determine if the user is on the products page
 const isProductPage = location.pathname === "/product";

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchInput.value.trim();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={`search-cart-container ${isProductPage ? "product-navbar" : ""}`}>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            name="searchInput"
            placeholder="Search Products"
            className="search-input"
          />
        </div>
      </form>

      {/* Cart Icon */}
      <div className="cart-icon" onClick={() => navigate("/cart")}>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default SearchAndCart;
