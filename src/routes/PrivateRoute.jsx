/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"
    if (loading) {
        return (
            <div className='flex justify-center mt-10'>
                <ColorRing
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        )
    }
    
    if (user) {
        return children
    }
    return (
        <Navigate state={{ from: location }} to="/login" replace></Navigate>
    );
};

export default PrivateRoute;