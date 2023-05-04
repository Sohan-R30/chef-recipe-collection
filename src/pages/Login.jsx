/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const {signIn,googleSignIn,gitHubSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const googleSignInUser = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const gitHubSignInUser = result.user;
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='my-10'>
            <div className='text-center text-3xl mb-10'>
                <h2>Please Login</h2>
            </div>
            <div className="w-full sm:w-2/4 mx-auto">
                <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                    <div className="card-body w-2/3 mx-auto">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                            </div>
                            <p className='text-red-500 mt-2'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn bg-primaryColor border-none hover:bg-[#4b7bec]">login</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSingIn} className="btn bg-[#FBBC05] border-none hover:bg-[#7e7149]">Google Sign-in</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGithubSignIn} className="btn bg-black border-none hover:bg-[#4f4d4d]">GitHub Sign-in</button>
                        </div>
                        <p className='text-center my-5'>New User ? Please <Link to='/registration' className='text-primaryColor'>Registration Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;