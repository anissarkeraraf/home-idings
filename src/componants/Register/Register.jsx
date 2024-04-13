import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";





const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const notify = (message) => toast.success(message)
    const notifyError = (message) => toast.error(message);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form)
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password')
        console.log(name, email, photoURL, password);


        if (password.length < 6) {
            notifyError("Password should be at least 6 characters or longer");
            return;
        } else if (!/[A-Z]/.test(password)) {
            notifyError("Your password should contain at least one uppercase character");
            return;
        } else if (!/[a-z]/.test(password)) {
            notifyError("Your password should contain at least one lowercase character");
            return;
        }


        createUser(email, password, name, photoURL)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error.massege)
            })

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                notify("User Registered Successfully");
                return updateProfile(user, { displayName: name, photoURL: photoURL });
            })
            .catch(error => {
                console.log(error.message);
                notifyError('Already register with this email');
            });
    }


    return (
        <div>

            <div className="hero min-h-screen">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
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
                            <button onClick={notify} className="btn btn-primary">Register</button>
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

