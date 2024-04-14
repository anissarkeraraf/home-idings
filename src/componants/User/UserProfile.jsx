import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <h2 className="text-4xl">This is User Profile</h2>
        </div>
    );
};

export default UserProfile;