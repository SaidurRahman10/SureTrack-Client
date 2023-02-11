import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer';
import Navbar from '../Page/Shared/Navbar';
import NavButtons from '../Page/Shared/NavButtons';




const Main = () => {
    return (
        <div className=''>
            <div className='mx-10'>
          <Navbar />
            </div>
          <NavButtons />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;