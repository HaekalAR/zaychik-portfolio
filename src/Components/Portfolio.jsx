import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div name="portfolio" className="bg-[#151515] w-full min-h-[40vh] pb-7">
            <div className="bg-[#2b2b2b]/30 border-[1px] border-[#545454]/60 rounded-3xl flex flex-col items-center justify-center gap-10 p-7 pb-10 mx-7 text-gray-200 text-center overflow-hidden">
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-2xl">Projects</h2>
                    <p className="text-[#b5b5b5]">My projects! or just one project so far...</p>
                </div>
                <div className="w-fit h-fit">
                    <div className="relative flex items-center justify-center h-full w-full hover:scale-[1.01] transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/30 hover:translate-y-[-1em] opacity-100 hover:opacity-80 group">
                        <img src="/tepa.png"
                            className="z-[1]  rounded-xl lg:w-[35em] lg:h-[20em] " />
                        <Link to="https://tepasystem.rf.gd" target="_blank" rel="noopener noreferrer" className="z-[2] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-1em] absolute top-[50%]  transition-all duration-700 border-gray-200 border-2 py-4 px-10 text-gray-200 font-semibold rounded-full bg-[#2b2b2b] hover:scale-[1.1]">
                            Visit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;