/* eslint-disable no-unused-vars */
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaAndroid, FaChrome, FaSpotify, FaFigma } from "react-icons/fa6";
import { SiTailwindcss, SiRepublicofgamers, SiVisualstudiocode, SiNotion } from "react-icons/si";

const TechStack = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-4 border-[#545454]/60 border-[1px] lg:p-7 md:p-7 py-4 px-6 rounded-md gap-7 place-items-center">
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem]  flex flex-col items-center justify-center text-gray-200 hover:text-[#e34c26] transition-all duration-100">
                    <FaHtml5 />
                    <p className="text-[12px] font-semibold">HTML5</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#2965f1]">
                    <FaCss3Alt />
                    <p className="text-[12px] font-medium">CSS</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#F0DB4F]">
                    <FaJs />
                    <p className="text-[12px] font-medium">JS</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#8993be]">
                    <FaPhp />
                    <p className="text-[12px] font-medium">PHP</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#61DBFB]">
                    <FaReact />
                    <p className="text-[12px] font-medium">React</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#3490dc] ">
                    <SiTailwindcss />
                    <p className="text-[12px] font-medium">Tailwind</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#F05340] ">
                    <FaLaravel />
                    <p className="text-[12px] font-medium">Laravel</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#F1502F] ">
                    <FaGitAlt />
                    <p className="text-[12px] font-medium">Git</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#1d1b1b] ">
                    <FaGithub />
                    <p className="text-[12px] font-medium">Github</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#0078d7] ">
                    <SiVisualstudiocode />
                    <p className="text-[12px] font-medium">VSCode</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-md flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#1d1b1b] ">
                    <SiNotion />
                    <p className="text-[12px] font-medium">Notion</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[red] " title="red because chrome is evil">
                    <FaChrome />
                    <p className="text-[12px] font-medium">Chrome</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#1d1b1b] ">
                    <FaFigma />
                    <p className="text-[12px] font-medium">Figma</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#1DB954] ">
                    <FaSpotify />
                    <p className="text-[12px] font-medium">Spotify</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#78C257] ">
                    <FaAndroid />
                    <p className="text-[12px] font-medium">Tecno</p>
                </div>
                <div className="lg:text-4xl md:text-3xl bg-[#545454]/60 rounded-md lg:h-24 lg:w-24 md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] flex flex-col items-center justify-center text-gray-200 transition-all duration-100 hover:text-[#DE272C] ">
                    <SiRepublicofgamers />
                    <p className="text-[12px] font-medium">ROG</p>
                </div>
            </div>
        </div>
    )
}

export default TechStack;