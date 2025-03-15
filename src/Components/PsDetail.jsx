import React, { useState } from "react";
import "./ProductDetail.css";
import "./PsDetail.css";
import SearchAndCart from "./SearchAndCart";
import img1 from "./Assets/ps1.png";
import img2 from "./Assets/ps2.png";
import img3 from "./Assets/ps3.png";
import img4 from "./Assets/ps4.png";
import img5 from "./Assets/ps5.png";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    username: "@nisu",
    avatar: "/Assets/Avatar2.png", // Replace with actual image URL
    date: "7th February 2025",
    content: `Now, after spending two weeks with the PS5 Pro, I'm happy to say the console has mostly been worth the hype. Yes, the $700 asking price is pretty steep. But if you're looking for the best console experience possible, the PS5 Pro delivers the goods thanks to its powerful performance and graphical prowess.`,
  },
  {
    id: 2,
    username: "@sainamrzn",
    avatar: "/Assets/Avatar1.png",
    date: "21st January 2025",
    content: `A Mix between Souls and God of War
• Aaaamazing graphics
• Smooth gameplay
• Good story, amazing anime-like cutscenes
• Invisible walls can be annoying. Especially in a game where 40% of shit is hidden :D`,
  },
  {
    id: 3,
    username: "@mastermind",
    avatar: "/Assets/Avatar3.png",
    date: "9th January 2025",
    content: `It's the best way to experience the PS5's large library of must-play games and the current pinnacle of console gaming.`,
  },
];

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="review-card">
      <div className="middlereview">
        <div className="review-header">
          <img src={review.avatar} alt="Avatar" className="avatar" />
          <p className="username">{review.username}</p>
        </div>

        <p className="review-content">{review.content}</p>
      </div>
      <div className="review-footer">
        <span className="review-date">{review.date}</span>
        <div className="review-actions">
          <span>Useful?</span>
          <button onClick={() => setLikes(likes + 1)} className="rvwbtn">
            <img src="/Assets/like.png" alt="like" className="like" /> {likes}
          </button>
          <button onClick={() => setDislikes(dislikes + 1)} className="rvwbtn">
            <img src="/Assets/dislike.png" alt="dislike" className="dislike" />
          </button>
        </div>
      </div>
    </div>
  );
};

// SIMIALR PRODUCTSSSS-------

const products = [
  {
    id: 1,
    title: "Outlast 2",
    image: "/Assets/ymal1.png", // Replace with actual image
    price: "$1.19",
    oldPrice: "$41.99",
    discount: "-98%",
  },
  {
    id: 2,
    title: "Crysis Remastered Trilogy",
    image: "/Assets/ymal2.png",
    price: "$8.99",
    oldPrice: "$19.99",
    discount: "-55%",
  },
  {
    id: 3,
    title: "Terminator: Dark Fate - Defiance",
    image: "/Assets/ymal3.png",
    price: "$9.66",
    oldPrice: "$12.89",
    discount: "-25%",
  },
];

const SimilarProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-overlay">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-pricing">
          <span className="new-price">{product.price}</span>
          <span className="old-price">{product.oldPrice}</span>
        </div>
        <div className="discount-badge">{product.discount}</div>
        <br />
        <button className="purchase-btn" onClick={() => navigate("/products")}>
          Purchase Now
        </button>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const images = [img1, img2, img3, img4, img5];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = 4; // Only show 4 at a time

  // Function to move to the next image
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);

    // Shift the thumbnail list when needed
    if (selectedIndex >= startIndex + visibleThumbnails - 1) {
      setStartIndex((prev) =>
        Math.min(prev + 1, images.length - visibleThumbnails)
      );
    }
  };

  // Function to move to the previous image
  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

    // Shift the thumbnail list when needed
    if (selectedIndex <= startIndex) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Function to change the main image by clicking a thumbnail
  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const ratingsData = {
    averageRating: 4.0,
    totalRatings: 167,
    breakdown: [
      { stars: 5, count: 115 },
      { stars: 4, count: 27 },
      { stars: 3, count: 12 },
      { stars: 2, count: 7 },
      { stars: 1, count: 6 },
    ],
  };

  const navigate = useNavigate();

  return (
    <div>
      
      <SearchAndCart />

      <img src="/Assets/PsBg.png" alt="wukong" className="productbgimg" />
      {/* Product Showcase */}
      <div className="product-showcase">
        <img src="/Assets/ps.png" alt="wukong" className="ps" />
        <div className="ps-banner">
          <p className="game-price">$699.99 <img src="/Assets/cart.png" alt="wukong" className="cart"  onClick={() => navigate("/cart")}/></p>
          
          <button
            className="ps-purchase-button"
            onClick={() => navigate("/products")} // Replace with your target route
          >
            Purchase Now
          </button>
          <img src="/Assets/pslogo.png" alt="wukong" className="pslogo" />
        </div>
      </div>

      {/* Product Description */}
      <div className="ps-product-description">
        <img src="/Assets/ps2.png" alt="WuKong" className="ps2" />
        <div className="description-text">
          <h2>Description</h2>
          <p className="upper">
          The PS5® console* unleashes new gaming possibilities that you never anticipated.<br/>Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible <br/>PlayStation® games.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="ps-gallery-container">
          <div className="main-ps-image">
            <img src={images[selectedIndex]} alt="Selected" />
          </div>

          {/* Thumbnail Slider */}
          <div className="ps-thumbnail-slider">
            <button
              type="button"
              className="nav-button left"
              onClick={prevImage}
            >
              &lt;
            </button>
            <div className="ps-thumbnail-wrapper">
              {images
                .slice(startIndex, startIndex + visibleThumbnails)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`ps-Thumbnail ${index + startIndex}`}
                    className={`ps-thumbnail ${
                      selectedIndex === index + startIndex ? "active" : ""
                    }`}
                    onClick={() => handleThumbnailClick(index + startIndex)}
                  />
                ))}
            </div>
            <button
              type="button"
              className="nav-button right"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* -------------RATING--------------- */}

      <div className="ps-background-container">
        <div className="overlay">
          <div className="mainratings">
            <div className="rating-title">
              {ratingsData.averageRating}
              <span className="rating-fraction">/ 5</span>
            </div>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`star ${
                    index < ratingsData.averageRating ? "" : "gray"
                  }`}
                >
                  <img
                    src={
                      index < ratingsData.averageRating
                        ? "/Assets/FullStar.png"
                        : "/Assets/EmptyStar.png"
                    }
                    alt={`Star ${index + 1}`}
                    className="star-image"
                  />
                </span>
              ))}
            </div>
            <div className="rating-count">
              {ratingsData.totalRatings} Ratings
            </div>
          </div>

          <div className="sideratings">
            {ratingsData.breakdown.map((item) => (
              <div key={item.stars} className="rating-breakdown">
                {[...Array(5)].map((_, index) => (
                  // Fill stars based on the breakdown logic
                  <img
                    key={index}
                    src={
                      index < item.stars
                        ? "/Assets/FullStar.png"
                        : "/Assets/EmptyStar.png"
                    }
                    alt={`Star ${index + 1}`}
                    className="star-image2"
                  />
                ))}
                <div className="rating-bar-container">
                  <div
                    className="rating-bar"
                    style={{
                      width: `${
                        (item.count / ratingsData.totalRatings) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="rating-count-small">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEW-------- */}
      <div className="ps-review-page">
        <h1 className="title">Product Reviews</h1>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* YOU MAY ALSO LIKE */}

      <div className="similar-products-section">
        <h2 className="section-title">You may also like</h2>
        <div className="products-container">
          {products.map((product) => (
            <SimilarProductCard key={product.id} product={product} />
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
