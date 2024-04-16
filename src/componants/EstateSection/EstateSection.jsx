import { useLoaderData, useParams } from "react-router-dom";
import { FaAudioDescription, FaVectorSquare } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { GrStatusInfoSmall } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const EstateSection = () => {
    const details = useLoaderData();
    console.log(details)
    const { id } = useParams();
  
    const idInt = parseInt(id)
    
    const detail = details.find(detail => detail.id === idInt);

    const facilities = detail.facilities || [];
    return (
        <div>
            <Helmet>
                <title>Estate Details | Home Idings</title>
            </Helmet>
            <h2 className="text-5xl text-center mt-5 font-bold text-[#bc9874]">Estate Details</h2>
            <div className="flex mt-20 bg-[#F3F4F9] rounded-xl">
                <div className="lg:flex mb-5">
                    <img className="p-8 h-[400px] md:h-[800px] lg:h-[400px]" src={detail.image} alt="" />
                    <div className="p-5 lg:p-0">
                        <div className="pl-3 font-bold mt-10 mr-10">
                            <h2 className="text-4xl mb-4">{detail.estate_title}</h2>
                            <h2 className="text-2xl flex items-center"><MdApartment className="mr-2"></MdApartment>{detail.segment_name}</h2>
                        </div>
                        <p className="pl-3 text-xl mt-5 flex font-bold opacity-80 text-[#1C6861]"><FaAudioDescription className="mr-3 text-3xl"></FaAudioDescription>{detail.description}</p>
                        <div className="flex mt-5">
                            <p className="pl-3 text-2xl flex items-center"><IoIosPricetags className="mr-2"></IoIosPricetags>{detail.price}</p>
                            <p className="pl-10 text-2xl flex items-center"><GrStatusInfoSmall className="mr-2"></GrStatusInfoSmall>{detail.status}</p>
                        </div>
                        <div className="flex mt-5 mb-5">
                            <p className="pl-3 flex items-center text-2xl"><FaVectorSquare className="mr-2"></FaVectorSquare>{detail.area}</p>
                            <p className="pl-7 flex items-center text-2xl"><FaLocationDot className="mr-2"></FaLocationDot>{detail.location}</p>
                        </div>
                        <span className="text-2xl font-bold pl-3">Facilities:</span>
                        {facilities.map((facilitie, index) => (

                            <button key={index} className="text-[#ff6500] bg-[#F3F3F3] rounded-full pl-2 pr-3 pt-0 pb-0 ml-3">
                                #{facilitie}
                            </button>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EstateSection;