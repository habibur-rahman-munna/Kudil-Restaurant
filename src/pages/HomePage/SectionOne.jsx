import React from "react";
import img from "../../assets/hero.jpg"
import CustomBtn from "../../Components/CustomBtn"

const SectionOne = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{backgroundImage: `url(${window.origin + img})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h3 className="text-xl md:text-2xl font-light mb-4"> Welcome to Our Restaurant</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fine Dining & Exquisite Cuisine</h1>
        <p className="text-base md:text-lg font-light mb-8">Experience the best meals crafted by our top chefs, since 1952.</p>
        <CustomBtn link="/errorpage">read more</CustomBtn>
      </div>
    </div>
  );
};

export default SectionOne;

