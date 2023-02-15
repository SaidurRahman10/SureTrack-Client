import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
   
              <Link to='/'>
   <img className='w-auto ' src={logo} alt="" />
              </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="form-control">
  <input type="text" placeholder="Search" className="input input-bordered input-black bg-slate-400 bg-opacity-10 w-full px-10" />
    </div>
    
  </div>
  <div>
    
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;