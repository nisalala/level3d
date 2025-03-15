import React, { useState } from "react";
import "./ProductDetail.css";
import SearchAndCart from "./SearchAndCart";
import img1 from "./Assets/Wu1.png";
import img2 from "./Assets/Wu2.png";
import img3 from "./Assets/Wu3.png";
import img4 from "./Assets/Wu4.png";
import img5 from "./Assets/Wu5.png";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    username: "@sainamrzn",
    avatar: "./Assets/Avatar1.png", // Replace with actual image URL
    date: "7th February 2025",
    content: `A Mix between Souls and God of War
• Amazing graphics
• Smooth gameplay
• Good story, amazing anime-like cutscenes
• Invisible walls can be annoying. Especially in a game where 40% of shit is hidden :D`,
  },
  {
    id: 2,
    username: "@bleu",
    avatar: "./Assets/Avatar2.png",
    date: "21st January 2025",
    content: `A Mix between Souls and God of War
• Aaaamazing graphics
• Smooth gameplay
• Good story, amazing anime-like cutscenes
• Invisible walls can be annoying. Especially in a game where 40% of shit is hidden :D`,
  },
  {
    id: 3,
    username: "@slayer",
    avatar: "./Assets/Avatar3.png",
    date: "9th January 2025",
    content: `A Mix between Souls and God of War
• Amazing graphics
• Smooth gameplay
• Good story, amazing anime-like cutscenes
• Invisible walls can be annoying. Especially in a game where 40% of shit is hidden :D`,
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
            <img src="./Assets/like.png" alt="like" className="like" /> {likes}
          </button>
          <button onClick={() => setDislikes(dislikes + 1)} className="rvwbtn">
            <img src="./Assets/dislike.png" alt="dislike" className="dislike" />
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
    image: "./Assets/ymal1.png", // Replace with actual image
    price: "$1.19",
    oldPrice: "$41.99",
    discount: "-98%",
  },
  {
    id: 2,
    title: "Crysis Remastered Trilogy",
    image: "./Assets/ymal2.png",
    price: "$8.99",
    oldPrice: "$19.99",
    discount: "-55%",
  },
  {
    id: 3,
    title: "Terminator: Dark Fate - Defiance",
    image: "./Assets/ymal3.png",
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

      <img src="/Assets/WuKongBg.png" alt="wukong" className="productbgimg" />
      {/* Product Showcase */}
      <div className="product-showcase">
        <img src="/Assets/featurec1.png" alt="wukong" className="WuCharacter" />
        <div className="game-banner">
          <p className="game-price">$38</p>
          <button
            className="purchase-button1"
            onClick={() => navigate("/products")} // Replace with your target route
          >
            Purchase Now
          </button>
          <h1 className="game-title">Black Myth</h1>
          <h2>WU KONG</h2>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description">
        <img src="/Assets/Wu2.png" alt="WuKong" className="wu2" />
        <div className="description-text">
          <h2>Description</h2>
          <p className="upper">
            Black Myth: Wukong is an action RPG rooted in Chinese mythology. You
            shall set out as the Destined One to venture into the challenges and
            marvels ahead, to uncover the obscured truth beneath the veil of a
            glorious legend from the past.
          </p>

          <h3>Genres</h3>
          <p>Action | Adventure | RPG</p>

          <h3>Features</h3>
          <p>Cloud Saves | Controller Support | Single Player</p>
        </div>

        {/* Image Gallery */}
        <div className="gallery-container">
          <div className="main-image">
            <img src={images[selectedIndex]} alt="Selected" />
          </div>

          {/* Thumbnail Slider */}
          <div className="thumbnail-slider">
            <button
              type="button"
              className="nav-button left"
              onClick={prevImage}
            >
              &lt;
            </button>
            <div className="thumbnail-wrapper">
              {images
                .slice(startIndex, startIndex + visibleThumbnails)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + startIndex}`}
                    className={`thumbnail ${
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

      <div className="background-container">
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
      <div className="review-page">
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
