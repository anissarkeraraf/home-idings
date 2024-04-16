

const AllAgents = ({ agent }) => {

    const { name, image, specialty } = agent

    return (
        <div>
            <div className="card glass hover:text-[#BC986B]">
                <img className="h-[250px] py-5 transition duration-1000 ease-in-out hover:scale-110" src={image} alt="car!" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{specialty}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AllAgents;