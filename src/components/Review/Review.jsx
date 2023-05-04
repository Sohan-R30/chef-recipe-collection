/* eslint-disable no-unused-vars */
import React from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const reviews = [
         { customerId: 1, customerName: "Alice", rating:4.4, review: "The food was excellent! My compliments to the chef." },
         { customerId: 2, customerName: "Bob", rating:4.7, review: "The service was great, and the dishes were beautifully presented. Would definitely come back." }, 
         { customerId: 3, customerName: "Charlie", rating:4.2, review: "The flavors were well-balanced, and the ingredients tasted fresh. Highly recommend this restaurant." }, 
         { customerId: 4, customerName: "David", rating:4.9, review: "I was impressed with the creativity of the menu and the quality of the dishes. A great experience overall." }, 
         { customerId: 5, customerName: "Emily", rating:4.6, review: "The chef really knows how to bring out the best in each ingredient. One of the best meals I've had in a long time." }, 
         { customerId: 6, customerName: "Frank", rating:4.5, review: "The portions were generous, and the food was delicious. Can't wait to come back." }, 
         { customerId: 7, customerName: "Grace", rating:4.4, review: "The chef's attention to detail was evident in every dish. Truly a feast for the senses." }, 
         { customerId: 8, customerName: "Henry", rating:4.9, review: "The service was top-notch, and the chef's recommendations were spot-on. A memorable dining experience." }, 
         { customerId: 9, customerName: "Isabella", rating:4.3, review: "The presentation of the dishes was stunning, and the flavors were even better. A must-visit restaurant." }, 
         { customerId: 10, customerName: "Jack", rating:4.2, review: "The chef's skill and creativity really shone through in every dish. Can't wait to see what they come up with next." }
        ]

    return (
        <div>
            <div className=" py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='text-center text-3xl mb-10'>
                        <h2>Review</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            See our customer reviews
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        {
                            reviews.map(singleReview => <SingleReview reviews={singleReview} key={singleReview.id}></SingleReview>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;