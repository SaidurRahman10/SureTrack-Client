import React from 'react';
import { Link } from 'react-router-dom';
import errorBanner from '../../assets/404.png'

const ErrorPage = () => {
    return (
      <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${errorBanner})` }}
    >
      <div className="hero-overlay "></div>
           
<section className="bg-transparent  py-[220px]  ">
   <div className="container">
      <div className="flex ">
         <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] text-center">
               <h2
                  className="
                  font-bold
                  text-white
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  "
                  >
                  404 !
               </h2>
               <h4
                  className="text-white font-semibold   mb-3"
                  >
                  Oops! That page can’t be found
               </h4>
               <p className="text-xl text-white mb-8 font-bold">
                 The page you are looking for it maybe not created .  <br />
                 <span className='text-3xl '>OR</span> <br />
                  The page you are looking for it maybe Deleted  !!!
               </p>
             <Link className="
                  text-base
                  font-semibold
                  text-white
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  hover:bg-white hover:text-black
                  transition
                  " to='/'>Go to Home</Link>
            </div>
         </div>
      </div>
   </div>
   <div
      className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
      >
      <div
         className="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
         ></div>
      <div className="w-1/3 h-full flex">
         <div
            className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
            ></div>
         <div
            className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
            ></div>
      </div>
      <div
         className="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
         ></div>
   </div>
</section>



        </div>
    );
};

export default ErrorPage;