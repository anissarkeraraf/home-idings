
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaInstagram } from "react-icons/fa";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {



    const provider = new GoogleAuthProvider();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            toast.success("Login successful");
        })
        .catch(error => {
            console.log(error.massege)
            toast.error("Login failed");
        })
    }

    const handleGoogleSign = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)
            toast.success("Login successful");
        })
        .catch(error => {
            console.log(error.massege)
            toast.error("Login failed");
        })
    }


    return (

        <div>

            <div className="hero min-h-screen">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                    required />
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account? Please <Link to='/register' className="btn btn-link">Register</Link></p>

                    <div className="mx-auto mb-4">
                        <button onClick={handleGoogleSign} className="btn bg-[#E75854] px-10"><FaGoogle className="text-2xl"></FaGoogle></button>
                        <button className="btn bg-[#f78245] px-10"><FaInstagram className="text-2xl"></FaInstagram></button>
                    </div>
                </div>

            </div>
             <ToastContainer />
        </div>
    );
};

export default Login;