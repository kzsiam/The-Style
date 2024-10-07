import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className=''>
            <div className='flex gap-5 justify-end font-semibold mx-5'>
                <Link>Login</Link>
                <Link>Signup</Link>
                <Link>About</Link>
                <Link>Become a Seller</Link>
            </div>
            <div className="navbar bg-base-100 mt-2">
                <div className="navbar-start">
                    <Link to='/'>
                        <h1 className='lg:text-4xl text-2xl font-sans font-bold text-center'>Shop<span className='text-red-500 my-0.5'>Sphere</span></h1>
                    </Link>
                </div>
                <div className=''>
                    <div className="navbar-center lg:flex justify-between hidden">
                        <label className="input flex items-center lg:gap-5 bg-gray-200 pr-0">
                            <input type="text" className="lg:w-80 " placeholder="Search in ShopSphere" />
                            <button className='bg-zinc-950 px-6 py-3 rounded-r text-white'>search</button>
                        </label>
                    </div>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AiOutlineShoppingCart className='lg:text-3xl  text-2xl' />
                        </div>
                    </div>
                    <div className='mx-5 flex justify-center items-center'>

                    </div>
                </div>
            </div>

            <div className="navbar-center flex justify-center mt-5 lg:hidden">
                <label className="input flex items-center lg:gap-5 bg-gray-200 pr-0">
                    <input type="text" className="lg:w-80 " placeholder="Search in ShopSphere" />
                    <button className='bg-zinc-950 px-6 py-3 rounded-r text-white'>search</button>
                </label>
            </div>
        </div>
    );
};

export default Header;