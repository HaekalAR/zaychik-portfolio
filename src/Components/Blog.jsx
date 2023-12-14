import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-[#151515] gap-7 items-center justify-center">
            <title>Blog | Zaychik</title>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-200'>Blog is still in development</h1>
                <p className='text-md font-medium text-gray-400'>Thank you, and sorry for that i&lsquo;m just too lazy</p>
            </div>
            <Link to="/" smooth={true} className='cursor-pointer bg-transparent border-gray-200 border-2 py-2 px-7 text-gray-200 font-semibold rounded-full hover:bg-gray-200 hover:text-[#151515] transition-all duration-300'>
                Go back
            </Link>
        </div>
    )
}

export default Blog