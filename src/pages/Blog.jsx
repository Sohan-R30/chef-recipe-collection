/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='text-center text-3xl my-10 '>
            <h2 className='mb-5'>Our Blogs here..</h2>
            <div className='text-justify border-2 w-3/4 mx-auto m-10 p-10 rounded-lg break-words'>
                <div>
                    <p className='text-2xl font-bold'>1. Tell us the differences between uncontrolled and controlled components.</p>
                    <p className='text-secondaryColor pl-4'>
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>2. How to validate React props using PropTypes</p>
                    <p className='text-secondaryColor pl-4'>
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>3. Tell us the difference between nodejs and express js.</p>
                    <p className='text-secondaryColor pl-4'>

                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>4. What is a custom hook, and why will you create a custom hook?</p>
                    <p className='text-secondaryColor pl-4'>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;