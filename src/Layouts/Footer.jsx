import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center mb-8">
        <div className="text-3xl font-bold capitalize border-b-2 border-white inline-block"><a href="/">Kudil</a></div>
          <div className='wpb_wrapper'>
            <input type="email"placeholder="Your Email Address"className="bg-transparent border border-gray-500 text-white p-2 rounded-l w-64 placeholder-gray-400 focus:outline-none rounded mr-2"/>
            <button className="bg-transparent text-white p-2 rounded-r">&#10148;</button>
          </div>
        </div>

        <div className="border-t border-gray-700 my-10 mx-5"></div>

        <div className="grid grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className='text-gray-400 '>Eight Avenue 385,<br/>Newyork</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-1">Open Timing</h3>
            <div className="border-b border-gray-600 w-16 mx-auto mb-2"></div>
            <p className='text-gray-400'>Monday - Friday</p>
            <p className="text-yellow-500">7 am - 10 pm</p>
            <p className='text-gray-400'>(Breakfast, Lunch, Dinner)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 hover:text-yellow-500"><span className='text-gray-400 mr-2'>E-mail :</span><a href="mailto:example@example.com">example@example.com</a></p>
            <p className="text-gray-400 hover:text-yellow-500"><span className='text-gray-400 mr-2'>phone :</span><a href="tel:01310203040">01310203040</a></p>
          </div>
        </div>

        <div className="mt-10 text-gray-400 text-base capitalize">
          &copy; 2024 habibur rahman munna. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

