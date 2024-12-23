import React from 'react';
import Image from '../../assets/three-img-parallax.webp';
import CustomBtn from '../../Components/CustomBtn';

const SectionFour = () => {
  return (
    <section className="relative overflow-hidden">
      <img src={Image} alt="image" className='w-full h-full object-cover bg-black bg-opacity-100' /> 
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold p-4 rounded-md capitalize">
          Welcome to Our Gallery
        </h1>
        <p className='text-white text-lg	text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio velit culpa<br></br> corrupti expedita asperiores distinctio officiis! Corporis fugiat quo quod ullam veritatis<br></br> itaque, neque assumenda molestiae veniam necessitatibus! Totam, repellendus!</p>
        <div className="flex space-x-4 mt-6"> 
          <CustomBtn link='/errorpage'>view more</CustomBtn>
          <CustomBtn link='/errorpage'>order now</CustomBtn>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;