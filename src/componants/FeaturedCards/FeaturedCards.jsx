import { FaVectorSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { GrStatusDisabledSmall } from "react-icons/gr";


const FeaturedCards = ({ home }) => {

    const { image, estate_title, price, area,location,status,button_text } = home;

  

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#bc9874] hover:text-white"><a href="">{estate_title}</a></h2>
                <hr className="pl-4 pr-4 mt-2 mb-2 opacity-60" />
                <div className="flex justify-between mt-4">
                    <p className="flex"><FaVectorSquare className="text-xl mr-2"></FaVectorSquare>{area}</p>
                    <p className="flex"><IoPricetagsSharp className="text-xl mr-2"></IoPricetagsSharp>{price}</p>
                </div>
                <div className="flex justify-between mt-4">
                    <p className="flex"><FaLocationDot className="text-xl mr-2"></FaLocationDot> {location}</p>
                    <p className="flex"><GrStatusDisabledSmall className="text-xl mr-2"></GrStatusDisabledSmall>{status}</p>
                </div>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary w-full">{button_text}</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCards;