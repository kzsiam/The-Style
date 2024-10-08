import React from 'react';
import Header from '../SharedPages/Header/Header';
import Footer from '../SharedPages/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
            
        </div>

    );
};

export default Main;