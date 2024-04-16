import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(localStorage.getItem('name') || user?.displayName || ""); 
    const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || user?.photoURL || "");

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('photoURL', photoURL);
    }, [name, photoURL]);

    const handleSave = () => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                setName("");
                setPhotoURL("");
                localStorage.removeItem('name');
                localStorage.removeItem('photoURL');
                console.log("Profile successfully updated:", { displayName: name, photoURL: photoURL });
                toast.success("You have successfully updated your profile");
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Update Profile || HomeIdings</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Your Profile</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">fullName</span>
                                </label>
                                <input type="text" placeholder="fullName" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" placeholder="photoURL" className="input input-bordered" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required /> 
                            </div>
                            <div className="form-control mt-6">
                                <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;
