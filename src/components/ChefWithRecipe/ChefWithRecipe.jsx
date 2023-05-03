/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipes from '../Recipes/Recipes';

const ChefWithRecipe = () => {
    const [shortBio, setShortBio] = useState(false);
    const [favourite, setFavourite] = useState(false);

    const handleFavourite = () => {
        setFavourite(true);
        toast.success("Added to Favourite");
    }

    const chefWithRecipe = useLoaderData();
    console.log(chefWithRecipe);
    const { ChefPicture, chefName, description, experience, recipes, Likes, _id } = chefWithRecipe;
    console.log(recipes)
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
                            <div className=" ">
                                <button onClick={handleFavourite} className={`btn w-full bg-primaryColor  border-none hover:bg-[#4b7bec] text-white`} disabled={favourite}>Add to favourite</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-20 my-20 max-w-7xl mx-auto'>
                {
                    recipes && recipes.map((recipe,index) => <Recipes recipe={recipe} key={index}></Recipes>)
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default ChefWithRecipe;