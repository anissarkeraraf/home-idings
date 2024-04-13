import { useLoaderData, useParams } from "react-router-dom";


const EstateSection = () => {
    const details = useLoaderData();
    console.log(details)
    const { id } = useParams();
    // console.log (typeof id)
    const idInt = parseInt(id)
    // console.log(typeof idInt)
    const detail = details.find(detail => detail.id === idInt);

    return (
        <div>
            <h2 className="text-5xl text-center mt-5 font-bold text-[#bc9874]">Estate Details</h2>
            <div className="mt-20">
                <div className="">
                    <img src={detail.image} alt="" />
                    <h2 className="text-4xl">{detail.estate_title}</h2>
                </div>
                <div className="">
                    <p>{id}</p>
                </div>
            </div>
        </div>
    );
};

export default EstateSection;