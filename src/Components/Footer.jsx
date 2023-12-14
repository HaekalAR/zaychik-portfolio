import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="h-fit w-full flex flex-col items-center justify-center bg-[#2b2b2b] ">
            <div className="flex flex-col gap-4 pt-10 pb-6">
                <div className="flex gap-4 items-center justify-center">
                    <Link
                        to="https://www.instagram.com/haekal.a.r/"
                        target="_blank"
                        rel="noopener norefferer"
                        className="bg-gray-200 p-2 rounded-full hover:text-red-500 shadow-lg hover:shadow-red-500/40 transition-all duration-200 lg:text-2xl md:text-xl text-md">
                        <FaInstagram />
                    </Link>
                    <Link
                        to="https://www.youtube.com/@ZaychikCiel"
                        target="_blank"
                        rel="noopener norefferer"
                        className="bg-gray-200 p-2 rounded-full hover:text-red-600 shadow-lg hover:shadow-red-600/40 transition-all duration-200 lg:text-2xl md:text-xl text-md">
                        <FaYoutube />
                    </Link>
                    <Link
                        to="https://github.com/HaekalAR"
                        target="_blank"
                        rel="noopener norefferer"
                        className="bg-gray-200 p-2 rounded-full hover:text-[#000000] shadow-lg hover:shadow-black/40 transition-all duration-200 lg:text-2xl md:text-xl text-md">
                        <FaGithub />
                    </Link>
                </div>
                <div className="flex gap-7 text-md text-gray-400">
                    <Scroll to="hero" smooth={true} className=' cursor-pointer hover:text-white  transition-all duration-100 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] lg:text-md md:text-md text-sm group-hover:opacity-0 transition-all duration-200 ease-in-out'>Home</p>
                        <p className='absolute lg:text-md md:text-md text-sm translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Home</p>
                    </Scroll>
                    <Scroll to='portfolio' smooth={true} offset={-120} className='cursor-pointer  hover:text-white  transition-all duration-100 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] lg:text-md md:text-md text-sm group-hover:opacity-0 transition-all duration-200 ease-in-out'>Projects</p>
                        <p className='absolute lg:text-md md:text-md text-sm translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Projects</p>
                    </Scroll>
                    <Scroll to='about' smooth={true} className='cursor-pointer  hover:text-white  transition-all duration-100 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] lg:text-md md:text-md text-sm group-hover:opacity-0 transition-all duration-200 ease-in-out'>About</p>
                        <p className='absolute lg:text-md md:text-md text-sm translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>About</p>
                    </Scroll>
                    <Link to='/blog' className=' hover:text-white  transition-all duration-100 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] lg:text-md md:text-md text-sm group-hover:opacity-0 transition-all duration-200 ease-in-out'>Blog</p>
                        <p className='absolute lg:text-md md:text-md text-sm translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Blog</p>
                    </Link>
                </div>
            </div>
            <div className="bg-[#151515] w-full text-center p-4 text-gray-200 lg:text-md md:text-md text-sm">
                <p>
                    &copy; Copyright 2023 Zaychik
                </p>
            </div>
        </div>
    )
}

export default Footer;