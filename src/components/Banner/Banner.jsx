/* eslint-disable no-unused-vars */
import banner1 from "../../../public/images/1.jpeg"
import banner2 from "../../../public/images/2.jpeg"
import banner3 from "../../../public/images/3.jpeg"
import banner4 from "../../../public/images/4.jpeg"
import banner5 from "../../../public/images/5.jpeg"
import banner6 from "../../../public/images/6.jpeg"

const Banner = () => {
    
    return (
        <div className='flex justify-around items-center p-10'>
            <p className='w-80 sm:w-1/3 text-xl tracking-wider'>Welcome to our chef recipe website, where we bring the world of culinary excellence to your kitchen. Our mission is to inspire and empower home cooks to create delicious, restaurant-quality meals from the comfort of their own homes. With a focus on fresh, seasonal ingredients and innovative techniques, our collection of chef-inspired recipes offers something for every palate and occasion.</p>
            <div className="carousel carousel-center w-96 p-4 space-x-4 bg-primary-content rounded-box">
                <div className="carousel-item">
                    <img src={banner1} className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src={banner5} className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src={banner6} className="rounded-box h-96" />
                </div>
            </div>
        </div>
    );
};

export default Banner;