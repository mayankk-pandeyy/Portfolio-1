import figma from "../assets/figma.svg"
import react from "../assets/react.svg"
import css from "../assets/css.svg"
import node from "../assets/nodejs.svg"
import redux from "../assets/redux.svg"
import javascript from "../assets/javascript.svg"
import html from "../assets/html.svg"
import xd from "../assets/adobexd.svg"
import next from "../assets/nextjs.svg"
import g from "../assets/g.svg"
import ai from "../assets/ai.svg"
import express from "../assets/express.svg"
import mongo from "../assets/mongo.svg"
import skills from "../assets/Skills.svg"


function Skills(){

    return(
        <div className="w-[100vw] mt-20">
            <div className="w-9/12 mx-auto">
                <div className="text-white font-preahvihear text-4xl">
                    Skills
                </div>

                <div className="text-white font-preahvihear text-center mt-6">
                    <div>
                        I'm currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team
                        <br></br>
                        that values improving people's lives through accessible design 
                    </div>

                    {/* Icons */}
                    <div className="w-full mt-10">
                        <div className="flex w-[40%] justify-between mx-auto">
                            <div className="cursor-pointer hover:animate-pulse">
                                <img src={figma} />
                            </div>

                            <div className="cursor-pointer hover:animate-spin">
                                <img src={react} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={css} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={node} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={redux} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={javascript} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={html} />
                            </div>
                        </div>

                        <div className="flex w-[35%] justify-between mx-auto mt-4">
                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={xd} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={next} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={g} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={ai} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={express} />
                            </div>

                            <div className="cursor-pointer hover:animate-bounce">
                                <img src={mongo} />
                            </div>
                        </div>
                    </div>

                    <div className="w-[60%] mx-auto">
                        <img src={skills}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Skills;