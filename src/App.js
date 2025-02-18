import logo from './logo.svg';
import './App.css';
import React from 'react';
import AuthPage from './Components/AuthPage/AuthPage';
import NavigationBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import ProductPage from "./Components/ProductPage";
import ContactUs from './Components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from './Components/SearchResult';
import ProductDetail from './Components/ProductDetail';


function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page always starts from the top */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/auth" element={<AuthPage />} /> 
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product" element={<ProductDetail />} />  
        {/* <Route path="/cart" element={<CartPage />} /> */}

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;