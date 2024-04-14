import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom"
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
            <h2 className="text-4xl text-center mt-20 mb-20">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    home.map(aHome => <FeaturedCards key={aHome.id} home={aHome}></FeaturedCards>)
                }
            </div>
        </div>
    );
};

export default Home;