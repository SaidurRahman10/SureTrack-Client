import React from "react";
import { FaCarAlt,FaBiking } from 'react-icons/fa';

const BannerItem = ({ slide }) => {
  const { image, id, next, prev } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img  src={image} alt="" className="w-full rounded-xl " />
      </div>
      <div className="absolute flex  justify-start gap-6 ml-5  transform -translate-y-1/2 top-[10rem] md:top-2/4   text-white">
        <div className="">
          <h1 className="lg:text-6xl md:text-3xl text-2xl text-start font-bold">
            Find the Car You Want, <br /> Your Way
          </h1>
          <p className="text-start lg:text-3xl text-lg mt-2 md:mt-8">
            Then, build your deal to fit your needs.
          </p>
          <p className="w-1/2 text-start mt-4 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae repudiandae recusandae quaerat 
          </p>
        </div>
      </div>
      <div className="absolute flex gap-8 justify-start transform -translate-y-1/2 w-2/5 left-6 lg:top-3/4 md:top-[28rem] ">
        <button className="flex items-center hover:px-10 duration-300 transform bg-gradient-to-bl from-green-300 via-green-700 to-cyan-600 hover:bg-transparent text-white px-3 rounded-md py-2 font-bold text-sm"><span className="flex gap-2">BUY BIKE <FaBiking className="h-4 w-5" /></span></button>
        <button className="text-white px-3 py-3 text-sm hidden md:block bg-gradient-to-b from-cyan-900  via-slate-800 to-blue-300 hover:px-10 duration-300 transform font-bold rounded-md"> <span className="flex gap-2">BUY CAR<FaCarAlt className="h-5 w-5" /></span> </button> 
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn  btn-circle mr-5 bg-gradient-to-r  hover:bg-gradient-to-l from-gray-200 via-stone-500 to-emerald-700 border-0 transform duration-300">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-gradient-to-r from-blue-300 via-stone-800 to-teal-300 hover:bg-gradient-to-l  border-0 transform duration-300">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
