import { FaVectorSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { Link } from "react-router-dom"
import { useState } from "react";


const FeaturedCards = ({ home }) => {


    const { image, price, area, location, status, segment_name, id } = home;
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };




    return (
        <div>
            <div className="card mb-5 bg-[#e9dbce] shadow-xl text-[#bc9874] hover:text-black transition duration-1000 ease-in-out hover:scale-110">
                <figure className=" pt-10">
                    <img src={image} alt="Shoes" className=" h-[250px] w-full " />

                </figure>
                <div className="card-body">
                    <h2 className="card-title "><a href="">{segment_name}</a></h2>
                    <hr className="pl-4 pr-4 mt-2 mb-2 opacity-60" />
                    <div className="flex justify-between mt-4">
                        <p className="flex"><FaVectorSquare className="text-xl mr-2 text-[#bc9874]"></FaVectorSquare>{area}</p>
                        <p className="flex"><IoPricetagsSharp className="text-xl mr-2 text-[#bc9874]"></IoPricetagsSharp>{price}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="flex"><FaLocationDot className="text-xl mr-2 text-[#bc9874]"></FaLocationDot> {location}</p>
                        <p className="flex"><GrStatusDisabledSmall className="text-xl mr-2 text-[#bc9874]"></GrStatusDisabledSmall>{status}</p>
                    </div>
                    <div className="card-actions mt-4">
                        <Link to={`/home/${id}`} className="btn border-none bg-[#ff6500] hover:bg-[#1C6861] text-white w-full">View Property</Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default FeaturedCards;