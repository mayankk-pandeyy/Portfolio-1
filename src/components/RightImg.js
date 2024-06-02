import screenshotImg from "../assets/projectScreenshot.svg"
import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


function RightImg(){
    return (
        <div>
           <div className="ml-[250px] font-poppins">
                <div className="text-[#9857D3] font-semibold">
                    Featured Poject
                </div>
                <div className="text-[#CCD6F6] text-2xl font-semibold">
                    Example Project
                </div>
            </div> 
            
            <div className="flex items-center w-full justify-end">
                {/* Left */}
                <div className="relative z-40">
                    <div className="text-[#CCD6F6] font-poppins text-sm">
                        A web app for visualizing personalized Spotify data. View your
                        <br></br>
                        top artists, top tracks, recently played tracks, and detailed audio
                        <br></br>
                        information about each track. Create and save new playlists of
                        <br></br>
                        recommended tracks based on your existing playlists and more.
                    </div>
                    <div className="w-[500px] h-[120px] bg-gradient-to-r from-[#290626] to-[#5E028F] rounded-3xl absolute -top-5 -left-3 -z-10"></div>
                    <div className="text-white pt-8 text-2xl flex gap-3">
                        <div className="cursor-pointer">
                            <BsLink45Deg />
                        </div>
                        <div className="cursor-pointer">
                            <FaGithub />
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="relative z-30">
                    <div>
                        <img src={screenshotImg} width={350}/>
                    </div>
                    <div className="w-[380px] h-[230px] bg-orange-500 absolute -top-3 -left-3 -z-20 rounded-r-2xl"></div>
                </div>
            </div>
        </div>
    );


}

export default RightImg;