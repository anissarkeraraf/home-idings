import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FeaturedCards from "../FeaturedCards/FeaturedCards";

const Properties = () => {
    const homes = useLoaderData(); 
    console.log(homes);

    return (
        <div>
            <Helmet>
                <title>Properties</title>
            </Helmet>
            <h2 className="text-5xl font-bold text-center mt-20 mb-20">All Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {homes.map(aHome => (
                    <FeaturedCards key={aHome.id} home={aHome} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
