/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import error404 from "../../assets/404.jpg"
const Error = () => {
    const {error,status,statusText} = useRouteError();
    return (
        <div className='h-screen font-extrabold flex flex-col justify-center items-center'>
            <p className="mb-10 text-center text-7xl">Opps!! <br /> Something Wrong!</p>
            <img className='w-80' src={error404} alt="" />
            <p className='text-2xl'><span>{status} - <span>{statusText}</span></span></p>
            <p className='text-secondaryColor text-xl my-5'>{error.message}</p>
            <Link to="/">
                <button className='w-full bg-primaryColor hover:bg-[#4b7bec] text-white text-xl font-bold text-center p-3 rounded-lg'>Go To HomePage</button>
            </Link>
        </div>
    );
};

export default Error;