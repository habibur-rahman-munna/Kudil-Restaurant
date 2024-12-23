import React from 'react';
import CustomBtn from '../../Components/CustomBtn';
import imgOne from "../../assets/gallery4-640x480.jpg"
import imgTwo from "../../assets/gallery6-640x480.jpg"
import imgThree from "../../assets/gallery3-640x480.jpg"
import imgFour from "../../assets/gallery1-640x480.jpg"
import imgFive from "../../assets/gallery2-640x480.jpg"
import imgSix from "../../assets/gallery5-640x480.jpg"

const SectionFive = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center items-center">
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgOne} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgTwo} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgThree} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgFour} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgFive} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-52 rounded w-full object-cover object-center mb-6"src={imgSix} alt="content"/>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <CustomBtn link='/errorpage'>red more</CustomBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
