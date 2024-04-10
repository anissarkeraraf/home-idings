import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user authentication status

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout actions here
        setIsLoggedIn(false); // Update isLoggedIn state to reflect logout
    };

    // Navbar links JSX
    const navLinks = (
        <>
            <li><NavLink to='/' activeClassName="font-bold">Home</NavLink></li>
            <li><NavLink to='/update' activeClassName="font-bold">Update Profile</NavLink></li>
            {isLoggedIn && <li><NavLink to='/user' activeClassName="font-bold">User Profile</NavLink></li>}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* Navbar dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                {/* Logo and website name */}
                <div className="flex justify-center items-center">
                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/k1rDbGR/360-F-194382202-rc-GTFil2-M4f-Kd-PHvw-BQh-Ri-Atf53-YFidw.jpg" alt="" />
                    <Link to='/' className="btn btn-ghost text-xl">MYHOME</Link>
                </div>
            </div>
            {/* Navbar center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* Navbar end - Conditional rendering based on authentication status */}
            <div className="navbar-end space-x-3">
                {isLoggedIn ? (
                    <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* Display user image */}
                                <img className="profile-img" alt="User profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            {/* Show user name on hover */}
                            <div className="tooltip">Username</div>
                        </div>
                        {/* Logout button */}
                        <button onClick={handleLogout} className="btn btn-sm">Logout</button>
                    </>
                ) : (
                    <>
                        {/* Login and register buttons */}
                        <Link to='/login' className="btn btn-sm">Login</Link>
                        <Link to='/register' className="btn btn-sm">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
