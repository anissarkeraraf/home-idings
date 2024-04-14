import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RiHome2Line } from "react-icons/ri";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/update'>Update Profile</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            {user && <li><NavLink to='/user'>User Profile</NavLink></li>}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center">

                    <Link to='/'><p className="text-3xl text-[#282828] flex">h<RiHome2Line className="block text-4xl"></RiHome2Line><span className="text-[#D6DE23]">idings</span></p></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-3">
                {user ?
                    <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || 'User name not found'}>
                        <div className="w-10 rounded-full border">
                            <img className="profile-img" alt="Profile" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                        </div>
                    </div>
                    : null
                }
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Log Out</button>
                        :
                        <Link to='/login'><button className="btn">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;
