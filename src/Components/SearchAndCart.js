import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchAndCart.css";
import { useLocation } from "react-router-dom";
const products = [
  { id: "ps", name: "PlayStation 5", price: "$499", image: "/Assets/ps.png" },
  { id: 2, name: "Fortnite", price: "Free", image: "/Assets/image1.png" },
  { id: 3, name: "Minecraft", price: "$30", image: "/Assets/image2.png" },
  { id: 4, name: "GTA V", price: "$29.99", image: "/Assets/image7.png" },
  { id: 5, name: "League of Legends", price: "Free", image: "/Assets/image3.png" },
  { id: 6, name: "God of War", price: "$60", image: "/Assets/image1.png" },
  { id: 7, name: "Spiderman 2", price: "$70", image: "/Assets/image5.png" },
  { id: 8, name: "Baldur's Gate 3", price: "$60", image: "/Assets/image6.png" },
  { id: 9, name: "Elden Rings", price: "$80", image: "/Assets/image8.png" },
  
];

const SearchAndCart = () => {

    const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products based on search input
    if (value.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  const handleSelectProduct = (product) => {
    setSearchTerm(""); // Clear input after selection
    setFilteredProducts([]); // Hide suggestions
    navigate(`/product/${product.id}`); // Navigate to product detail page
  };

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
            value={searchTerm}
          onChange={handleSearchChange}
          />

{/* Dropdown Suggestions */}
{filteredProducts.length > 0 && (
          <div className="search-dropdown">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-suggestion"
                onClick={() => handleSelectProduct(product)}
              >
                <img src={product.image} alt={product.name} className="search-img" />
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
            ))}
          </div>
        )}

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
