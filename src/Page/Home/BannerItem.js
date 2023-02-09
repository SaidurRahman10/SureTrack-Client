import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, next, prev } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex  justify-start gap-6 ml-5  transform -translate-y-1/2  top-1/4 text-white">
        <div className="">
          <h1 className="text-6xl text-start">
            Find the Car You Want, <br /> Your Way
          </h1>
          <p className="text-start text-3xl mt-8">
            Then, build your deal to fit your needs.
          </p>
          <p className="w-1/2 text-start mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae repudiandae recusandae quaerat nobis voluptatem!
          </p>
        </div>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
