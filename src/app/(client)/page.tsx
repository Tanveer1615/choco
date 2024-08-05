import React from "react";
import About from "./_components/about";
import Header from "./_components/header";
import Hero from "./_components/hero";
import SpecialProducts from "./_components/specialProducts";
import Products from "./_components/products";
import NewsLetter from "./_components/newletter";
import Footer from "./_components/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SpecialProducts />
      <About />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
