import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaSquare } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import AllAgents from "./allAgents/AllAgents";

// useEffect( () => {
//     document.title= 'About'
// },[])

const AboutUs = () => {

    const agents = useLoaderData();
    console.log(agents)

    return (
        <div>
            <div>
                <Helmet>
                    <title>About | Home Idings</title>
                </Helmet>
                <div className="relative">

                    <img data-aos="flip-left" data-aos-duration='1000' src="https://i.ibb.co/mJn5GZ3/breadcrumbs-bg-01-1922x291.jpg" alt="" />
                    <h2 data-aos='fade-up' data-aos-duration='1000' className="absolute top-5 md:top-8 lg:top-16 left-[170px] md:left-[290px] lg:left-[490px] text-white font-semibold text-3xl md:text-5xl lg:text-5xl">About Us</h2>
                </div>

                <div className="lg:flex mt-10 lg:mt-20">
                    <div data-aos='fade-up' data-aos-duration='1000' className="lg:w-1/2 lg:mr-10">
                        <img className="lg:h-full rounded-lg" src="https://i.ibb.co/gzhxFCG/700a2d87fd2337d341b7549f72231c9fb07835e6-2880x1400.webp" alt="" />
                    </div>
                    <div className="lg:w-1/2 bg-[#31323c] mt-10 lg:mt-0 rounded-lg">
                        <h2 data-aos='fade-up' data-aos-duration='1000' className="text-4xl pt-4 lg:pt-0 md:text-5xl lg:text-5xl text-white md:pl-28 pl-12">Experience since 1999</h2>
                        <hr className="mr-12 ml-12 mt-5" />
                        <div data-aos='fade-up' data-aos-duration='1000' className="text-white p-5">
                            <h2 className=""></h2>
                            <div role="tablist" className="tabs tabs-lifted">
                                <input type="radio" name="my_tabs_2" role="tab" className="tab font-semibold text-[#BC986B] duration-700 hover:text-[#ABABAF] bg-[#31323c]" aria-label="OurGoal" />
                                <div role="tabpanel" className="tab-content bg-[#31323c] p-6  text-white">We have been working since 1999 to be sure you are getting the best HomeIdings service possible. <br /> <br />

                                    HomeIdings aims to unite HomeIdings brokers to provide their clients and partners with the top-notch level of brokerage services throughout the USA.</div>


                                <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold text-[#BC986B] duration-700 hover:text-[#ABABAF]" aria-label="AboutUs" checked />
                                <div role="tabpanel" className="tab-content bg-[#31323c] p-6">
                                    <p>HomeIdings is a full-service, luxury HomeIdings brokerage company representing clients worldwide.</p>

                                    <p className="flex mt-10">
                                        <h1 className="flex items-center mr-[170px]"><FaSquare className="mr-2 text-[#FDDE52] text-sm"></FaSquare>More Listings</h1>
                                        <h1 className="flex items-center"><FaSquare className="mr-2 text-[#FDDE52] text-sm"></FaSquare>Top Rated Agents</h1>
                                    </p>
                                    <p className="flex mt-5">
                                        <h1 className="flex items-center mr-20"><FaSquare className="mr-2 text-[#FDDE52] text-sm"></FaSquare>Property for Rent and Sale</h1>
                                        <h1 className="flex"><FaSquare className="mr-2 text-sm text-[#FDDE52]"></FaSquare>Home Estimates</h1>
                                    </p>
                                </div>

                                <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold text-[#BC986B] duration-700 hover:text-[#ABABAF]" aria-label="OurMission" />
                                <div role="tabpanel" className="tab-content bg-[#31323c] p-6">Our mission is to be the most successful HomeIdings firm in the local states and beyond. <br /><br />

                                    HomeIdings incorporates proven, professional state of-the-art techniques specializing in the marketing, listing and selling of new and resale luxury homes.</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-20">
                    <h2 data-aos='fade-up' data-aos-duration='1000' className="text-6xl font-sans mb-20">Our Agents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            agents.map(agent => <AllAgents key={agent.id} agent={agent}></AllAgents>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;