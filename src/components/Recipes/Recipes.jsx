/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Recipes = ({ recipe }) => {
    console.log(recipe);
    const { recipeName, ingredients, cookingMethod, rating } = recipe
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;