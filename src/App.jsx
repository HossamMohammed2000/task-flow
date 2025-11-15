// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Features from "./_Components/Features.jsx";
import Footer from "./_Components/Footer.jsx";
import Header from "./_Components/Header.jsx";
import Navbar from "./_Components/Navbar.jsx";
import Pricing from "./_Components/Pricing.jsx";
import Reviews from "./_Components/Reviews.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
