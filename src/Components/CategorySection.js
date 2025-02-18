import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CategorySection.css";
import ProductCard from "./ProductCard";
import sampleImg from "./Assets/image.png";

const CategorySection = ({ title }) => {
  return (
    <div className="category-section">
      <h2>{title}</h2>
      <Swiper slidesPerView={3} spaceBetween={10} className="category-swiper">
        <SwiperSlide><ProductCard image={sampleImg} title="Game 1" price="59.99" /></SwiperSlide>
        <SwiperSlide><ProductCard image={sampleImg} title="Game 2" price="49.99" /></SwiperSlide>
        <SwiperSlide><ProductCard image={sampleImg} title="Game 3" price="39.99" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySection;
