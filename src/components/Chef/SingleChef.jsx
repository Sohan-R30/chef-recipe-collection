/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SingleChef = ({ singleChef }) => {
    const { ChefPicture, Likes, chefName, description, experience, recipes } = singleChef;
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl rounded-md">
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
                <div className='w-full bg-primaryColor text-white text-xl font-bold text-center py-3 rounded-t-lg'>
                    <button>View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;