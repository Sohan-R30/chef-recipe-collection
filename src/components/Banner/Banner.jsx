/* eslint-disable no-unused-vars */
import banner1 from "/images/1.jpeg"
import banner2 from "/images/2.jpeg"
import banner3 from "/images/3.jpeg"
import banner4 from "/images/4.jpeg"
import banner5 from "/images/5.jpeg"
import banner6 from "/images/6.jpeg"

const Banner = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:justify-around items-center p-10 max-w-7xl mx-auto'>
            <p className='  text-xl tracking-wider'> <span className="text-primaryColor text-2xl">Welcome</span> to our chef recipe website, where we bring the world of culinary excellence to your kitchen. Our mission is to inspire and empower home cooks to create delicious, restaurant-quality meals from the comfort of their own homes. With a focus on fresh, seasonal ingredients and innovative techniques, our collection of chef-inspired recipes offers something for every palate and occasion.</p>
            <div className="hidden sm:block">
                <div className="carousel  carousel-center w-96 p-4 space-x-4 bg-primary-content rounded-box mx-10">
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
            <div className="sm:hidden sm:w-72 mx-auto carousel mt-20 rounded-box">
                <div className="carousel-item w-full">
                    <img src={banner1} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={banner2} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={banner3} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={banner4} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={banner5} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={banner6} className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
            </div>
        </div>
    );
};

export default Banner;