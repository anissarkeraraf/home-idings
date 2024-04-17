import { FaSearch, FaWallet } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 mx-auto lg:mx-0 lg:gap-10 mb-20">

                <div data-aos="fade-up" data-aos-duration='1000' className="card bg-base-100 border-solid border-4 hover:border-[#bc9874] mt-16">
                    <div className="card-body">
                        <p className="mx-auto border-solid border-4 h-20 w-20 md:h-14 md:w-20 lg:h-14 rounded-full hover:border-[#bc9874]">
                            <FaLocationDot className="text-4xl mx-auto mt-4"></FaLocationDot>
                        </p>
                        <h2 className="card-title mx-auto mt-3">Various Locations</h2>
                        <p className="text-center">We have lots of properties in various locations available for purchase.</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration='1000' className="card bg-base-100 border-solid border-4 hover:border-[#bc9874] mt-16">
                    <div className="card-body">
                        <div className="mx-auto border-solid border-4 w-20 h-20 rounded-full hover:border-[#bc9874]">
                            <FaWallet className="text-4xl mx-auto mt-4"></FaWallet>
                        </div>
                        <h2 className="card-title mx-auto mt-3">No Commission</h2>
                        <p className="text-center">Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration='1000' className="card bg-base-100 border-solid border-4 hover:border-[#bc9874] mt-16">
                    <div className="card-body">
                        <div className="mx-auto border-solid border-4 w-20 h-20 rounded-full hover:border-[#bc9874]">
                            <FaSearch className="text-4xl mx-auto mt-4"></FaSearch>
                        </div>
                        <h2 className="mx-auto card-title mt-3">View Apartments</h2>
                        <p className="text-center">View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Card;
