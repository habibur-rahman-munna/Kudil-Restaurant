import React from 'react'

const Navmenu = () => {
  return (
    <>
      <ul className="flex space-x-6 items-center justify-center ml-32">
        <li><a href="/" className="text-white text-base font-medium hover:text-yellow-500">Home</a></li>
        <li><a href="/services" className="text-white text-base font-medium hover:text-yellow-500">Services</a></li>
        <li><a href="/about" className="text-white text-base font-medium hover:text-yellow-500">About</a></li>
        <li><a href="/contact" className="text-white text-base font-medium hover:text-yellow-500">Contact</a></li>
      </ul>
    </>
  )
}

export default Navmenu