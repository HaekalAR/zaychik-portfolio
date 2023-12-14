import TechStack from "./TechStack";

const About = () => {
    return (
        <div id="about" className="bg-[#151515] min-h-[80vh] w-full flex flex-col items-center justify-around p-7">
            <div className="text-gray-200 text-2xl font-semibold pb-2 mb-6 border-b-2 border-[#545454]/60">
                About me
            </div>
            <div className="lg:flex flex-row w-full">
                <div className="lg:w-1/2 md:w-full flex flex-col items-center justify-center gap-10 lg:pb-0 pb-10">
                    <div>
                        <img src="public/Beeg.jpeg" title="nice profile photo" alt="pfp" className="h-44 w-44 rounded-full" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl text-white font-bold">
                            Haekal Abdillah Ramadhan
                        </h1>
                        <p className="pb-7 text-sm text-[#b5b5b5] font-medium italic">
                            Frontend, Gamer, Creep weeb
                        </p>
                        <div>
                            <p className="text-gray-200 lg:mx-10 md:mx-7 mx-2 text-justify">
                                Hey, folks! So, here&#39;s the scoop: I&#39;m a Frontend Programmer who loves tinkering with HTML, CSS, JavaScript, React.js, and Tailwind CSS to whip up some cool websites. When I&#39;m not busy experimenting with code, you&#39;ll catch me engrossed in anime or diving into manga.

                                But that&#39;s not all, bro. I&#39;m into games with gripping stories too. And when I need a breather, I groove to music from utaite or Vocaloid. Somehow, those tunes help me tidy up my creative ideas. Thanks for swinging by my bio, guys!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 md:w-full h-full">
                    <TechStack />
                </div>
            </div>
        </div>
    );
}

export default About;
