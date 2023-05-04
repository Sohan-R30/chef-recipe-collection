/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../src/assets/chef.svg"
const Header = () => {
    return (
        <>
            <div className="sm:navbar bg-base-100 text-primaryColor font-bold py-5 flex flex-col sm:flex-row  gap-10 px-10">
                <div className="navbar-start">
                    <img className='w-10 mr-2' src={logo} alt="" />
                    <Link to="/" className="normal-case text-2xl">Chef Recipe Collection</Link>
                </div>
                <div className="navbar-center  flex flex-wrap gap-10 text-2xl ">
                    <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>home</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
                </div>
                <div className="navbar-center sm:navbar-end">
                    <a className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">login</a>
                </div>
            </div>
        </>
    );
};

export default Header;