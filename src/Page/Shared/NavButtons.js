import React from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const menuItems = (
    <>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase  hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Cars</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase hover:border-t-2 border-blue-400 pt-1 hover:pt-0 ">
        <Link>Bikes</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Scooters</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase md:hidden lg:block hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Electric Zone</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase  md:hidden lg:block hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Used Bikes</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase md:hidden lg:block hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Used Cars</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase md:hidden lg:block hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>Sell Bikes</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link to='/appointment'>Appointment</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase md:hidden lg:block hover:border-t-2 border-blue-400 pt-1 hover:pt-0">
        <Link>News & Reviews</Link>{" "}
      </li>
      <li className="my-1 text-xs text-gray-700 font-semibold md:mx-4 md:my-0 hover:text-indigo-500 px-1 uppercase hover:border-t-2 border-blue-400 pt-1 hover:pt-0 ">
        <Link>More</Link>{" "}
      </li>
    
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box flex flex-wrap"
            >
              <div className="flex flex-col md:flex-row md:mx-6">
                {menuItems}
              </div>
            </ul>
          </div>
        </div>
        <div className="navbar  hidden lg:flex justify-start border-t-2">
          <ul className=" menu-horizontal px-1">
            <div className="flex flex-col md:flex-row md:mx-6">{menuItems}</div>
            <div className="flex justify-center md:block">
              <a
                className="relative text-gray-700 hover:text-gray-600"
                href="#"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
