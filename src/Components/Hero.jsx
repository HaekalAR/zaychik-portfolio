import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import Greetings from './Greetings';

const Hero = () => {
    return (
        <div name="hero" className="relative bg-[#151515] min-h-[90vh] w-full flex flex-col gap-7 items-center justify-center px-7">
            <title>Haekal is Online! | Zaychik</title>
            <div className='z-[3] min-w-[40%] max-w-[95%] h-fit py-2 px-7 border-[1px] border-[#545454]/60  rounded-full bg-[#2b2b2b] fixed top-10'>
                <ul className='flex lg:gap-2 md:gap-4 gap-4 text-gray-200 items-center justify-around '>
                    <Scroll to="hero" smooth={true} className='py-2 lg:px-6 md:px-6 px-0 md:rounded-full lg:rounded-full cursor-pointer hover:text-white lg:hover:bg-[#151515] md:hover:bg-[#151515] transition-all duration-300 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-200 ease-in-out'>Home</p>
                        <p className='absolute translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Home</p>
                    </Scroll>
                    <Scroll to='portfolio' smooth={true} offset={-120} className='py-2 lg:px-6 md:px-6 px-0 cursor-pointer md:rounded-full lg:rounded-full hover:text-white lg:hover:bg-[#151515] md:hover:bg-[#151515] transition-all duration-300 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-200 ease-in-out'>Projects</p>
                        <p className='absolute translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Projects</p>
                    </Scroll>
                    <Scroll to='about' smooth={true} className='cursor-pointer py-2 lg:px-6 md:px-6 px-0 md:rounded-full lg:rounded-full hover:text-white lg:hover:bg-[#151515] md:hover:bg-[#151515] transition-all duration-300 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-200 ease-in-out'>About</p>
                        <p className='absolute translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>About</p>
                    </Scroll>
                    <Link to='/blog' className='py-2 lg:px-6 md:px-6 px-0 md:rounded-full lg:rounded-full hover:text-white lg:hover:bg-[#151515] md:hover:bg-[#151515] transition-all duration-300 group overflow-hidden relative'>
                        <p className='group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-200 ease-in-out'>Blog</p>
                        <p className='absolute translate-y-10 group-hover:translate-y-[-25px] transition-all duration-200 ease-in-out'>Blog</p>
                    </Link>
                </ul>
            </div>
            <div className="z-[2] flex flex-col gap-7 text-center w-full items-center">
                <div className='border-[1px] border-[#545454]/90 text-center w-fit py-2 px-7 rounded-full'>
                    <p className='text-gray-400'>
                        This <span className='text-[red]/80'>weby</span> is still on development
                    </p>
                </div>
                <h1 className="text-5xl text-white font-[900]">
                    Zaychik
                </h1>
                <h3 className="text-center font-bold text-[#676767] text-md">
                    Haekal Abdillah Ramadhan
                </h3>
                <h1 className='text-center text-lg inline text-gray-200 lg:mx-20 md:mx-10'>
                    <Greetings /> Indonesian frontend website developer here! You can call me Haekal, and i&lsquo;m a student from Indonesia. <span className='lg:inline md:inline hidden'>Honestly, i don&lsquo;t know what to say here, so take a good look on this goofy-ahh website!</span>
                </h1>
            </div>
            <div>
                <Scroll to="portfolio" smooth={true} className='cursor-pointer bg-transparent border-gray-200 border-2 py-2 px-7 text-gray-200 font-semibold rounded-full hover:bg-gray-200 hover:text-[#151515] transition-all duration-300'>
                    Read more
                </Scroll>
            </div>
        </div>
    )
}

export default Hero;