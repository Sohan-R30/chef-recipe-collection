/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../utils/firebase/firebase.config';


const Registration = () => {
    const [error, setError] = useState("")
    const {createUser} = useContext(AuthContext);

    const auth = getAuth(app)
    const navigate =useNavigate();

    const handleRegister = even => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError("")

        if(password.lenght < 6){
            setError("password can not less than 6 characters")
            return
        }
        createUser(email,password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                navigate(-1)

            })
            .catch(error => {
                setError(error.message);
            })
        
       
    }
    return (
        <div className='my-10'>
            <div className='text-center text-3xl mb-10'>
                <h2>Please Registration</h2>
            </div>
                <div className="w-full sm:w-2/4 mx-auto">
                    <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                        <div className="card-body w-2/3 mx-auto">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="Your Picutre Url"  className="input input-bordered"  />
                                </div>
                                <p className='text-red-500 mt-2'>{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">Registration</button>
                                </div>
                                
                            </form>
                            <p className='text-center my-5'>Already A User ? Please <Link to='/login' className='text-primaryColor'>Login Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Registration;