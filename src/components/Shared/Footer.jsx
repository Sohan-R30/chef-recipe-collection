/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='text-center py-10 text-2xl text-white bg-primaryColor relative'>
            <Link to="/"><h2 className='tracking-widest border-b pb-4'>Chef Recipe Collection</h2></Link>
            <div className='flex flex-wrap sm:flex-nowrap justify-around gap-20 py-12'>
                <div>
                    <h4 className='border-b pb-2'>Contact Us</h4>
                    <div className='text-lg my-2'>
                        <p>Dhaka, Mohammadpur</p>
                        <p>Phone: 015123135322</p>
                    </div>
                </div>
                <div>
                    <h4 className='border-b pb-2'>INFORMATION</h4>
                    <div className='text-lg my-2'>
                        <p>About us</p>
                        <p>Terms & Condition</p>
                    </div>
                </div>
                <div>
                    <h4 className='border-b pb-2'>Social Media</h4>
                    <div className='text-lg flex gap-5 my-2 cursor-pointer'>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaLinkedin/>
                            <FaGithub/>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-1/3'>
                <p className='text-xl tracking-widest'>Copyright &copy; all rights are reserved</p>
            </div>
        </div>
    );
};

export default Footer;