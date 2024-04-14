import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// useEffect( () => {
//     document.title= 'About'
// },[])

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About | Home Idings</title>
            </Helmet>
            <div className="relative">

                <img src="https://i.ibb.co/mJn5GZ3/breadcrumbs-bg-01-1922x291.jpg" alt="" />
                <h2 className="absolute top-5 md:top-8 lg:top-16 left-[170px] md:left-[290px] lg:left-[490px] text-white font-semibold text-3xl md:text-5xl lg:text-5xl">About Us</h2>
            </div>


        </div>
    );
};

export default AboutUs;