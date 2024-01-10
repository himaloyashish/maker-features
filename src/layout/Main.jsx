import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../page/Home/Home';
import About from '../page/About/About';


const Main = () => {
    return (
        <div>
            <nav>Navbar</nav>
            <div className='d-flex w-100  m-auto '>
                <div className='w-25 '>
                    <Home></Home>
                </div>
                <div className='w-50 d-flex  align-items-center justify-content-center '>
                    <Outlet ></Outlet>
                </div>
                <div className='w-25 '>
                    <About></About>
                </div>
            </div>
            <footer>footer</footer>
        </div>
    );
};

export default Main;