/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../src/assets/chef.svg"
import { AuthContext } from '../../contexts/AuthProvider';
const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const {user, logOut} = useContext(AuthContext);

    const handleShowDisplayName = () => {
        setShowProfile(false)
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
            })
    }
    return (
        <div className='mx-10 sm:mx-20'>
            <div className="sm:navbar bg-base-100 text-primaryColor font-bold py-5 flex flex-col sm:flex-row  gap-10 ">
                <div className="navbar-start">
                    <img className='w-10 mr-2' src={logo} alt="" />
                    <Link to="/" className="normal-case text-2xl">Chef Recipe Collection</Link>
                </div>
                <div className="navbar-center  flex flex-wrap gap-10 text-2xl ">
                    <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>home</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
                </div>
                <div className="navbar-center sm:navbar-end">
                    {
                        user ? (
                            <div className='flex gap-5 items-center'>
                                {
                                    showProfile && <p>{user.displayName}</p>
                                }
                                <img onMouseEnter={() => setShowProfile(!showProfile)} onMouseLeave={handleShowDisplayName} className={`w-12 rounded-full border-4 border-primaryColor`} src={user?.photoURL} alt="" />
                                <button onClick={handleLogOut} className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">log Out</button>
                            </div>
                        ) : (
                            <Link to="/login" className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;