import React, { useEffect, useState } from 'react';
import '../../Utilites/Hover.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur shadow-md' : 'bg-transparent'}`}>
            <div className="navbar bg-base-100 px-5 font-Sora container mx-auto">
                
                <div className="navbar-start flex-3/4">
                    <div>
                        <a className="text-2xl md:text-4xl">
                            <span className='text-[#003EA4]'>Auction</span>
                            <span className='text-[#FFD337]'>Gallery</span>
                        </a>
                    </div>
                </div>

                <div className="navbar-center list-none lg:flex lg:gap-20 hidden text-xl bg-gray-500 px-20 py-5 rounded-full text-[#FFD337] font-semibold italic 
                hover-border">
                    <li><a className='hover'>Home</a></li>
                    <li><a className='hover'>Auctions</a></li>
                    <li><a className='hover'>Categories</a></li>
                    <li><a className='hover'>How to works</a></li>
                </div>

                <div className="navbar-end flex items-center gap-4">
                    {/* Notification Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle mr-2 bg-[#EBF0F5]"
                        >
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 md:w-8 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                                <span className="badge badge-primary indicator-item md:text-xs text-[11px] rounded-full md:w-5 md:h-5 w-0.5 h-3 flex items-center justify-center">
                                    8
                                </span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-50 mt-3 w-52 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Avatar Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User avatar" src="/src/assets/Ellipse 19.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-3 shadow"
                        >
                            <li><a className="block w-full text-center">Home</a></li>
                            <li><a className="block w-full text-center">Auctions</a></li>
                            <li><a className="block w-full text-center">Categories</a></li>
                            <li><a className="block w-full text-center">How it works</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
