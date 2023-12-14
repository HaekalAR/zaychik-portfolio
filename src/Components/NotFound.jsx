import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-[#151515] w-screen h-screen flex flex-col items-center justify-center gap-4">
            <title>Page Not Found | Zaychik</title>
            <div className="text-center text-gray-200">
                <h1 className="pb-2 text-3xl font-bold">Oh man, looks like your URL is off ☝️😔.</h1>
                <p className="text-gray-400">Give it another check, or you can go back to the Homepage.</p>
            </div>
            <div className="pt-4">
                <Link to="/" smooth={true} className='cursor-pointer bg-transparent border-gray-200 border-2 py-2 px-7 text-gray-200 font-semibold rounded-full hover:bg-gray-200 hover:text-[#151515] transition-all duration-300'>
                    Go back
                </Link>
            </div>
        </div>
    )
}

export default NotFound;