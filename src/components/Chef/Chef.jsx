/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';
import { InfinitySpin } from 'react-loader-spinner'

const Chef = () => {
    const [chef, setChef] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);
        fetch("https://chef-recipe-collection-server-side-sohan-r30.vercel.app/")
            .then(res => res.json())
            .then(data => {
                setChef(data)
                setIsloading(false)
            })
    }, [])
    console.log(chef);
    return (
        <div className='my-40'>
            <div className='text-center text-3xl mb-10'>
                <h2>Our Chefs</h2>
                {
                    isLoading && (
                        <div className='flex justify-center'>
                        <InfinitySpin
                                width='200'
                                color="#70a1ff"
                            />
                    </div> 
                    )
                }
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10'>
               {
                   chef && chef.map(singleChef => <SingleChef singleChef={singleChef} key={singleChef._id}></SingleChef>)
               }
            </div>
        </div>
    );
};

export default Chef;


