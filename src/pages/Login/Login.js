import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faFacebook } from '@fortawesome/free-brands-svg-icons';
import  { faGoogle } from '@fortawesome/free-brands-svg-icons';



const Login = () => {
    return (
        <div>

            <div className="py-2 max-w-screen-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="Confirm Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Al ready Account <Link to='/'>Login</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-center items-center'>
                <p className='text-center'>--------------------or------------------</p>
                <div className='flex justify-center items-center my-4'>
                    <button className="btn ">
                    <FontAwesomeIcon icon= {faFacebook} />
                        Continue With Facebook
                    </button>
                </div>
                <div className='flex justify-center items-center my-4 '>
                    <button className="btn ">
                    <FontAwesomeIcon  icon= {faGoogle} />
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;