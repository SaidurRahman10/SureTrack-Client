import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
import "./Navbar.css";
import { FaSun, FaRegMoon } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const sun = <FaSun className="h-5 w-5 " />;
  const moon = <FaRegMoon  className="h-5 w-5 " />;

  const handelLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };


  const [theme, setTheme] = useState('Light');
  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
 
 

  return (
    <div className="">
      <div className="navbar  ">
        <div className="navbar-start">
          <Link to="/">
            <img className="w-auto " src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-black bg-slate-400 bg-opacity-10 w-full px-10"
            />
          </div>
        </div>
        <div></div>
        <div className="navbar-end">
          <div className="mr-5">
          <div className={theme}>
     
      <button className="bg-transparent border rounded-full p-1 " onClick={toggleTheme}>
        
     
      { theme === 'Light' ? moon :  sun}
      </button>
      
    </div>
          </div>
          <div className="flex gap-6">
            <div className="hidden md:block">
              {user?.photoURL ? (
                <img
                  className=" rounded-full"
                  style={{ height: "50px" }}
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              ) : (
                <FaUser
                  className="mt-2 w-10 h-8"
                  title={user?.displayName}
                ></FaUser>
              )}
            </div>
            <div className="mt-1">
              {user?.uid ? (
                <button
                  onClick={handelLogout}
                  type="button"
                  className=" hidden md:block text-white font-bold  bg-sky-600 rounded-lg text-base px-8 py-2 text-center mr-2 mb-2"
                >
                  LOGOUT
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className=" hidden md:block border border-[#24193f] text-white  font-bold  bg-[#22183B]  rounded-lg text-base px-8 py-2  text-center mr-2 mb-2 hover:text-[#22183B] hover:bg-transparent duration-300 transition  "
                  >
                    LOGIN 
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
