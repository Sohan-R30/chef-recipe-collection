/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className=' min-h-[calc(100vh-400px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;