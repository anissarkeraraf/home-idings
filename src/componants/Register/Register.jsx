import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";





const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, photoURL } = data;
        createUser(email, password)
            .then(() => {
                toast.success('User register successfully');
                reset();
                navigate('/');

                updateUserProfile(name, photoURL)
                    .then(() => {
                        console.log('Update Profile')
                        toast.success('Update yoor profile successfully')
                    })

            })

            .catch(error => {
                console.log(error)
                toast.error('Register failed')
            })
    }








    return (
        <div>
            <Helmet>
                <title>Register | Home Idings</title>
            </Helmet>
            <div className="hero min-h-screen">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required
                                {...register("photoURL", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="flex relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                    {...register("password", { required: true })}
                                />
                                <span className="absolute left-72 top-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className="text-center">Already have an account? Please <Link to='/login' className="btn btn-link">Login</Link></p>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;

