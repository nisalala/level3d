// FeaturedSection.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedSection.css";
import Feature1 from "./Assets/feature1.png";
import Feature2 from "./Assets/feature2.png";
import Feature3 from "./Assets/feature3.png";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {

    const navigate = useNavigate(); // Initialize navigation function

  const featuredGames = [
    {
      title: "Black Myth: Wukong",
      price: "$38",
      sales: "10 million sales",
      imageUrl: Feature1, // Replace with actual image path
    character: "/Assets/featurec3.png"
    },
    {
        title: "Elden Rings",
        price: "$60",
        sales: "80 million sales",
        imageUrl: Feature2, // Replace with actual image path
        character: "/Assets/featurec1.png"
      },
      {
        title: "Call of Duty: Warzone 2.0",
        price: "$70",
        sales: "30.97 million sales",
        imageUrl: Feature3, // Replace with actual image path
        character: "/Assets/featurec2.png"
      },
    // Add more game objects as needed
  ];

  const sliderSettings = {
    dots: true, // Enables dots for navigation
    infinite: true, // Loop through slides
    speed: 500, // Speed of transition
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Show arrows for navigation
    autoplay: true, // Automatically transition between slides
    autoplaySpeed: 3000, // Set autoplay interval (in milliseconds)
  };
  

  return (
    <div className="featured-section">
      <h2>Featured</h2>
      <Slider {...sliderSettings}>
        {featuredGames.map((game, index) => (
          <div key={index} className="featured-item" 
          onClick={() => navigate("/product")} // Navigate to /product on click
            style={{ cursor: "pointer" }} // Show pointer cursor on hover
          >
            <img src={game.imageUrl} alt={game.title} className="featured-image" />
            <div className="featured-info">
            <img src={game.character} alt={game.title} className="character-image" />
              <h1>{game.title}</h1>
              <p>{game.price}</p>
              <p>{game.sales}</p>
              <button className="purchase-button">Purchase Now</button>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedSection;
