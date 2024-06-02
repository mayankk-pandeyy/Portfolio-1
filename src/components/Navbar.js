import logo from "../assets/Logo.svg"

function Navbar(){

    return (
        <div className="bg-[#1A0B2E] w-[100vw] h-[80px]">
            <div className="w-8/12 mx-auto flex justify-between items-center pt-4">
                {/* Left */}
                <div>
                    <img src={logo} />
                </div>



                {/* Right */}
                <div className="text-white flex w-1/2 justify-between font-Font-Jakarta">
                    <div className="cursor-pointer">
                        Home
                    </div>

                    <div className="cursor-pointer">
                        About
                    </div>

                    <div className="cursor-pointer">
                        Projects
                    </div>

                    <div className="cursor-pointer">
                        Contact Me
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;