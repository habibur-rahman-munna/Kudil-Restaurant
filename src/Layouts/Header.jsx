import React from 'react';
import {FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Navmenu from './../Components/Navmenu';


const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold uppercase border-b-2 border-white items-center"><a href="/">KUDIL</a></div>
        <nav>
          <Navmenu/>
        </nav>
        <div className="flex space-x-20 items-center list-none">
          <div className="book-a-table">
          <li> <a href="/errorpage"className="text-white font-medium text-base hover:text-yellow-500">Book A Table</a></li>
          </div>
          <div className="icons flex space-x-4 text-lg">
          <a href="https://www.facebook.com" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
          <a href="https://www.instagram.com" className="text-white hover:text-yellow-500"><FaInstagram /></a>
          <a href="https://www.youtube.com" className="text-white hover:text-yellow-500"><FaYoutube/></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

