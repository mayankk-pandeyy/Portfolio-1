import avatar from "../assets/image 1.png"
import ellipse from "../assets/Ellipse 5.png"
import wbg from "../assets/Ellipse 3.svg"
import pbg from "../assets/Gradient.svg"
import arrow from "../assets/Arrow.png"

function Hero(){

    return(
        <div className="w-[100vw] mt-20">
            <div className="w-8/12 mx-auto flex items-center">
                {/* Left */}
                <div>
                    <div className="relative">
                        <img src={pbg} />
                        <div className="absolute top-20 left-16">
                            <img src={wbg} />
                        </div>
                        <div className="absolute top-20 left-28">
                            <img src={avatar} />
                        </div>

                        <div className="flex absolute top-0 left-52 w-full">
                            <div>
                                <img src={arrow} />
                            </div>
                            <div className="text-white font-preahvihear absolute top-4 left-28">
                                Hello! I am <span className="text-[#7127BA]">Mayank Pandey</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="text-white font-preahvihear flex flex-col gap-2">
                    <div className="text-lg underline">
                        A Designer who
                    </div>
                    <div className="text-5xl relative">
                        Judges a book
                        <br></br>
                        by its <span className="text-[#7127BA]">cover</span>...
                        <div className="absolute top-10 left-32 scale-90">
                            <img src={ellipse} />
                        </div>
                    </div>
                    <div className="text-sm">
                        Because if the cover does not impress you what else can?
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Hero;