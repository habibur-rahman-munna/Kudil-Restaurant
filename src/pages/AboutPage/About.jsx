import React from 'react';
import CustomBtn from '../../Components/CustomBtn';
import img from "../../assets/blog2.jpg";

const About = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12"> 
        <div className="flex-1 text-center md:text-left"> 
          <h2 className="text-3xl md:text-4xl font-bold text-black">About Us</h2>
          <p className="mt-4 text-black text-lg leading-relaxed">
            We are a team of passionate developers and designers <br />
            committed to delivering top-notch digital solutions. <br />
            With years of experience, we bring your ideas to life <br />
            through modern design and innovative development
          </p>
          <CustomBtn link="/errorpage">about us</CustomBtn>
        </div>

        <div className="flex-1 mt-10 md:mt-0"> 
          <img src={img} alt="About Us" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;