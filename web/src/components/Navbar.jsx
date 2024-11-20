'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBg(true);
            } else {
                setBg(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavbar = () => {
        setShowNav(!showNav)
    }

    return (
        <div className={`${bg ? 'bg-white' : 'bg-transparent'} w-full  transition-colors duration-300 fixed `}>
            <div className='mx-auto w-[80%] relative'>

                <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-4">
                    <div>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            width="170px"
                            className={`transition-all duration-300 ease-in-out drop-shadow-md ${bg ? 'hover:drop-shadow-[0_4px_20px_rgba(76,175,80,1)] ' : 'hover:drop-shadow-[0px_4px_20px_rgba(255,255,255,1)]'} rounded-lg"`}
                        />
                    </div>
                    <div className="flex  gap-4 text-xs sm:text-lg pt-0 md:pt-4 ">
                        <Link href='/' className={`bg-[#017d29] text-white rounded-full py-2 px-3 ${bg ? 'hover:border-2 border-[#017d29] hover:bg-white hover:text-[#017d29]' : ' hover:bg-white hover:text-[#017d29]'}`}>
                            Become a Buyer
                        </Link>
                        <Link href='/' className={`bg-[#017d29] text-white rounded-full py-2 px-3 ${bg ? 'hover:border-2 border-[#017d29] hover:bg-white hover:text-[#017d29]' : ' hover:bg-white hover:text-[#017d29]'}`}>
                            Become a Seller
                        </Link>
                        <Link href='/' className={`bg-[#017d29] text-white rounded-full py-2 px-3 ${bg ? 'hover:border-2 border-[#017d29] hover:bg-white hover:text-[#017d29]' : ' hover:bg-white hover:text-[#017d29]'}`}>
                            Rent
                        </Link>
                    </div>
                    <div className="md:hidden absolute top-[50px] right-0  p-2" onClick={handleNavbar}>
                        <span className={`block w-[30px] h-1 ${bg ? 'bg-black' : 'bg-white'} mb-1 rounded-full`}></span>
                        <span className={`block w-[30px] h-1 ${bg ? 'bg-black' : 'bg-white'} mb-1 rounded-full`}></span>
                        <span className={`block w-[30px] h-1 ${bg ? 'bg-black' : 'bg-white'} mb-1 rounded-full`}></span>
                    </div>



                </div>
                <div className={`${showNav ? 'fixed left-0 top-0 bg-white w-full sm:w-[90%] h-screen py-8 px-3 ' : 'relative md:flex flex-col md:flex-row  py-4'} ${bg?'border-t md:border-black':'border-t md:border-white'}`} >
                    <div className={`${showNav?'block absolute right-[30px] top-[30px]':'hidden'}`} onClick={handleNavbar}>
                        <ImCross  style={{ color:'#017d29',fontSize:'20px' }}/>
                    </div>
                    <ul className={`${showNav ? 'block' : 'hidden'} w-full md:flex  flex-col md:flex-row justify-around  mx-auto ${bg ? 'text-black gap-10 ' : 'text-[#017d29] md:text-white '}`}>
                        <Link href="/"><li className="hover:border-b-2 border-current p-2"><strong>HOME</strong></li></Link>
                        <Link href="/products"><li className="hover:border-b-2 border-current p-2"><strong>PRODUCTS</strong></li></Link>
                        <Link href="/seeds"><li className="hover:border-b-2 border-current p-2"><strong>SEEDS</strong></li></Link>
                        <Link href="/training"><li className="hover:border-b-2 border-current p-2"><strong>TRAINING</strong></li></Link>
                        <Link href="/about"><li className="hover:border-b-2 border-current p-2"><strong>ABOUT US</strong></li></Link>
                        <Link href="/contact"><li className="hover:border-b-2 border-current p-2"><strong>CONTACT US</strong></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
