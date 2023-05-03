/* eslint-disable no-unused-vars */
import React from 'react';


const ContactUs = () => {
    return (
        <div className='mt-40'>
            <div className='text-center text-3xl mb-10'>
                <h2>Contact With Our Chefs</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter the chef name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className='input input-bordered h-40' name="" id="" cols="30" rows="10" placeholder='Write your message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">Sent Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;