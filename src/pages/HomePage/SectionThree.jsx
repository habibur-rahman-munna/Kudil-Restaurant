import React from 'react'
import img from "../../assets/home-image-1-1.jpg"
import CustomBtn from '../../Components/CustomBtn'

const SectionThree = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
     <div className="container px-5 py-24 mx-auto">
       <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center px-5">
       <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-52 object-cover object-center rounded pl-20" src={img}></img>
         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
           <h2 className="text-sm title-font text-gray-500 tracking-widest">Delicated</h2>
           <h1 className="text-gray-900 text-3xl font-medium mb-1">Our Services</h1>
           <p className="leading-relaxed text-justify w-50 ">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
           <CustomBtn link="/errorpage">view more</CustomBtn>
         </div>
       </div>
     </div>
   </section>
  )
}

export default SectionThree 