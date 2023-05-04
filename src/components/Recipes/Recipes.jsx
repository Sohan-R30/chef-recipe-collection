/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import Rating from 'react-rating';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false);
    console.log(recipe);
    const { recipeName, ingredients, cookingMethod, rating } = recipe;


    const handleFavourite = () => {
        setFavourite(true);
        toast.success("Added to Favourite");
    }
    return (
        <div>
            <div className="card bg-[#dff9fb] text-black h-[850px]">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl py-10">Recipe Names : {recipeName}</h2>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        <div className='border w-80 p-5'>
                            <p className='text-xl font-bold pb-5'>Cooking Method ...</p>
                            {
                                cookingMethod && cookingMethod.map((cookingMethod, index) => <p key={index}>{cookingMethod.slice(0, 35)} ...</p>)
                            }
                        </div>
                        <div className='border w-80 p-5'>
                            <p className='text-xl font-bold pb-5'>Ingredients ...</p>
                            {
                                ingredients && ingredients.map((ingredient, index) => <p key={index}>{ingredient.slice(0, 35)}</p>)
                            }
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-xl'>ratings : </p>
                        <Rating 
                        style={{ maxWidth: 150 }} 
                        value={rating} 
                        readOnly
                        />
                        {rating}
                    </div>
                    <div className="card-actions justify-end">
                        <div className="my-5">
                            <button onClick={handleFavourite} className={`btn w-full bg-primaryColor  border-none hover:bg-[#4b7bec] text-white`} disabled={favourite}>Add to favourite</button>
                        </div>
                    </div>
                </div>
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

export default Recipes;