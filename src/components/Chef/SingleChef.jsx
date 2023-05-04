/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const SingleChef = ({ singleChef }) => {
    const { ChefPicture, Likes, chefName, experience, recipes, _id } = singleChef;
    return (
        <LazyLoad height={800}>
            <div>
                <div className="card  sm:w-96 bg-base-100 shadow-xl rounded-md">
                    <figure>
                        <img className='w-80 h-96 rounded-md' src={ChefPicture} alt={chefName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{chefName}</h2>
                        <p>Experience : {experience}</p>
                        <div className='flex justify-around'>
                            <p>Number of Recipes : {recipes?.length}</p>
                            <p>Likes : {Likes}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/chef/${_id}`}><button className='w-full bg-primaryColor hover:bg-[#4b7bec] text-white text-xl font-bold text-center py-3 rounded-t-lg'>View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </LazyLoad>
    );
};

export default SingleChef;