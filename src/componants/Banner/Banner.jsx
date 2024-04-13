import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative">
            <div className="carousel w-full mt-16 rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gjg03rX/house-isolated-field-1.jpg" className="w-full h-56 lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-4xl text-red-700">❮</a>
                        <a href="#slide2" className="text-4xl text-red-700">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8X8gFY7/house-isolated-field.jpg" className="w-full h-56 lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-4xl text-red-700">❮</a>
                        <a href="#slide3" className="text-4xl text-red-700">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/N9sCN5c/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" className="w-full h-56 lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-4xl text-red-700">❮</a>
                        <a href="#slide4" className="text-4xl text-red-700">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8jN4csx/3d-electric-car-building.jpg" className="w-full h-56  lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-4xl text-red-700">❮</a>
                        <a href="#slide1" className="text-4xl text-red-700">❯</a>
                    </div>
                </div>

            </div>
            <div className="absolute bottom-20 lg:bottom-[150px] left-24 md:left-64 lg:left-[250px]">
                <div>
                    <p className="text-3xl lg:text-6xl text-orange-500 font-bold">Bangla Town<span className="text-red-700">Connects</span></p>
                    <p className="text-orange-500 font-bold text-lg lg:text-xl lg:mt-4 ml-3 lg:ml-32">Your Dream House
                        Latest Project</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;