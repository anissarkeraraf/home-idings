import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);

    // Initialize name and photoURL from local storage or user data
    const [name, setName] = useState(() => localStorage.getItem('name') || user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(() => localStorage.getItem('photoURL') || user?.photoURL || "");

    useEffect(() => {
        // Update local storage when name or photoURL changes
        localStorage.setItem('name', name);
        localStorage.setItem('photoURL', photoURL);
    }, [name, photoURL]);

    useEffect(() => {
        // Update local storage when user changes
        localStorage.setItem('name', user?.displayName || '');
        localStorage.setItem('photoURL', user?.photoURL || '');
    }, [user]);

    const handleSave = () => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                toast.success("You have successfully updated your profile");
                setName("");
                setPhotoURL("");
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
                        <h1 data-aos='fade-up' data-aos-duration='1000' className="text-5xl font-bold">Update Your Profile</h1>
                        <p data-aos='fade-down' data-aos-duration='1000' className="py-6">You can update your profile if you want. You can change your name and profile picture.</p>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000' className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
