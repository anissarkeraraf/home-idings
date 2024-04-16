import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { Link, useLoaderData } from "react-router-dom"
import FeaturedCards from "../FeaturedCards/FeaturedCards";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const home = useLoaderData();
    console.log(home)

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Card></Card>
            <h2 className="text-5xl font-bold text-center mt-20 mb-24">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    home.slice(0, 3).map(aHome => <FeaturedCards key={aHome.id} home={aHome}></FeaturedCards>)
                }
            </div>
            <div className="card-actions mt-4">
                <Link to="/properties" className="mx-auto btn border-none bg-[#ff6500] hover:bg-[#1C6861] text-white duration-1000">Show All Properties</Link>
            </div>
        </div>
    );
};

export default Home;