import React from "react";
import img4 from "../../assets/banner/c1.png";
import img2 from "../../assets/banner/c2.png";
import img3 from "../../assets/banner/c3.png";
import img1 from "../../assets/banner/c4.png";
import BannerItem from "./BannerItem";
import './Header.css'


const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
    // {
    //     image: img5,
    //     prev: 4,
    //     id: 5,
    //     next: 6
    // },
    // {
    //     image: img6,
    //     prev: 5,
    //     id: 6,
    //     next: 1
    // }
]

const Header = () => {
  return (
    <div className="">
    <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    </div>
  );
};

export default Header;
