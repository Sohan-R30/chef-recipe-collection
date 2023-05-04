/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleReview = ({ reviews }) => {
    const { customerName, review, rating} = reviews;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl border-b pb-2">{customerName}</h2>
                <p className='pt-2'>{review}</p>
                <div className='flex items-center'>
                        <p className='text-xl'>ratings : </p>
                        <Rating 
                        style={{ maxWidth: 150 }} 
                        value={rating} 
                        readOnly
                        />
                        {rating}
                    </div>
            </div>
        </div>
    );
};

export default SingleReview;