import React from 'react';
import { Link } from 'react-router-dom';
import imgIcon from '../../../assets/icons/react.png';

const Navbar = () => {

    const navOptions = <>

        <li><Link to= '/'>Home</Link></li>
        <li><a>Our Service</a></li>
        <li><a>About </a></li>
    </>

    return (
        <>
            <div className="navbar fixed z-20 bg-opacity-30 max-w-screen-xl bg-base-100 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {navOptions}
                        </ul>
                    </div>
                    <img src={imgIcon} className='w-12 h-10' alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Jerin's Parlour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link  to="/login" className="btn btn-active btn-secondary">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;