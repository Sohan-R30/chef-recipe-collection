/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefWithRecipe = () => {
    const [shortBio, setShortBio] = useState(false);

    const chefWithRecipe = useLoaderData();
    const { ChefPicture, chefName, description, experience, recipes, Likes,} = chefWithRecipe;
    return (
        <div className='my-20'>
            <div className='flex justify-center items-center gap-40'>
                <div>
                    <img className='w-96 rounded-full' src={ChefPicture} alt={chefName} />
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Chef Name : {chefName}</h2>
                            <p>{chefName} short bio .......</p>
                            <p className='text-gray-500'>{shortBio ? description : description.slice(0, 250)} <span onClick={() => setShortBio(!shortBio)} className='cursor-pointer text-blue-600'>{shortBio || "...."}</span></p>
                            <div className='text-xl font-bold'>
                                <p>Experience : {experience}</p>
                                <p>Likes : {Likes}</p>
                            </div>
                            <p>Number of Recipes : {recipes.length}</p>
                        
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center justify-items-center   gap-20 my-20 max-w-7xl mx-auto'>
                {
                    recipes && recipes.map((recipe,index) => <Recipes recipe={recipe} key={index}></Recipes>)
                }
            </div>
        </div>
    );
};

export default ChefWithRecipe;