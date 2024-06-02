import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact(){
    return(
        <div className="w-[100vw] mt-20 pb-10">
            <div className="w-9/12 mx-auto">
                <div className="text-white font-preahvihear text-4xl">
                    Contact Me
                </div>

                <div className="text-white w-[80%] mx-auto font-preahvihear mt-10">
                    I'm currently looking to join a cross-functional team that values improving people's lives
                    <br></br>
                    through accessible design. or have a project in mind? Let's connect.
                    <br></br>
                    <br></br>
                    mayankp7781@gmail.com
                </div>

                <div className="text-white w-[80%] mx-auto flex text-2xl gap-6 mt-10">
                    <div className="cursor-pointer">
                        <FaLinkedin />
                    </div>
                    <div className="cursor-pointer">
                        <FaGithub />
                    </div>
                    <div className="cursor-pointer">
                        <SiLeetcode />
                    </div>
                </div>
            </div>
        </div>
    );



}

export default Contact;