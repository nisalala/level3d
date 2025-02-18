import React from "react";
import { useState } from "react";
import NavigationBar from "./NavBar";
import FeaturedSection from "./FeaturedSection";
import CategorySection from "./CategorySection";
import Footer from "./Footer";
import "./ProductPage.css";
import SearchAndCart from "./SearchAndCart";

const SwipableSection = ({ title, items }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 4; // Number of visible items at once

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, items.length - visibleItems));
  };

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="swipable-section">
      <div className="swipe-container">
        <div className="navsection">
          <h2 className="section2-title">{title}</h2>
          <div>
            {startIndex > 0 && (
              <button className="pnav-button left" onClick={prev}>
                &lt;
              </button>
            )}
            {startIndex + visibleItems < items.length && (
              <button className="pnav-button right" onClick={next}>
                &gt;
              </button>
            )}
          </div>
        </div>
        <div className="items-wrapper">
          {items.slice(startIndex, startIndex + visibleItems).map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <button className="cart-button"><i className="fas fa-shopping-cart"></i></button>
              <div className="card-details">
                <h3 className="card-title">{item.title}</h3>
                <div className="purchasebottom">
                <p
                  className="card-price"
                  style={{ color: item.price === "Free" ? "red" : "#4caf50" }}
                >
                  {item.price}
                </p>
                {item.discount && (
                  <p className="card-discount">{item.discount}</p>
                )}
                <button className="ppurchase-button">Purchase Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const mostPopular = [
    { id: 1, title: "Fortnite", image: "./Assets/image1.png", price: "Free" },
    { id: 2, title: "Minecraft", image: "./Assets/image2.png", price: "$30" },
    {
      id: 3,
      title: "League of Legends",
      image: "./Assets/image3.png",
      price: "Free",
    },
    {
      id: 4,
      title: "God of War Ragnarök",
      image: "./Assets/image4.png",
      price: "$60",
    },
    { id: 5, title: "Fortnite", image: "./Assets/image5.png", price: "Free" },
    { id: 6, title: "Minecraft", image: "./Assets/image6.png", price: "$30" },
    {
      id: 7,
      title: "League of Legends",
      image: "./Assets/image7.png",
      price: "Free",
    },
    {
      id: 8,
      title: "God of War Ragnarök",
      image: "./Assets/image8.png",
      price: "$60",
    },
  ];

  const topReleases = [
    {
      id: 1,
      title: "EA SPORTS FC™ 25",
      image: ".Assets/image5.png",
      price: "$69.99",
    },
    { id: 2, title: "TankHead", image: ".Assets/image6.png", price: "$14.99" },
    {
      id: 3,
      title: "Kingdom Come: Deliverance II",
      image: "./Assets/image7.png",
      price: "$44.99",
    },
    {
      id: 4,
      title: "Farming Simulator 25",
      image: "./Assets/image8.png",
      price: "$32.99",
    },
    // Add remaining items...
  ];

  const exclusiveOffers = [
    {
      id: 1,
      title: "Mortal Kombat™ 1: Khaos Reigns",
      image: ".Assets/image9.png",
      price: "$39.99",
      discount: "-68%",
    },
    {
      id: 2,
      title: "Outlast 2",
      image: ".Assets/image10.png",
      price: "$1.19",
      discount: "-88%",
    },
  ];

  return (
    <div className="product-page">
      <SearchAndCart />
      <FeaturedSection />
      <SwipableSection title="Most Popular" items={mostPopular} />
      <SwipableSection title="Top New Releases" items={topReleases} />
      <SwipableSection title="Exclusive Offers" items={exclusiveOffers} />
      <Footer />
    </div>
  );
};

export default ProductPage;
