import React from 'react';
import img from "../../assets/parallax-img-1.jpg"
import CustomBtn from '../../Components/CustomBtn';

function SectionSix() {
  return (
    <section className="bg-black text-white py-16 px-16 justify-center items-center relative w-full"> 
      <div  className=" text-center h-96" 
        style={{backgroundImage: `url(${window.origin + img})`,backgroundSize: 'cover', backgroundPosition: 'center',opacity: 0.6,}} >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-bold text-white outline-dashed px-52 py-4 outline-yellow-400 outline-6 mb-4 capitalize">25% Discount</h1>
          <p className="text-lg text-white capitalize">for Family Parties | Coupon 015</p>
          <CustomBtn link="/errorpage">Read More</CustomBtn> 
        </div>
      </div>
    </section>
  );
}

export default SectionSix;




