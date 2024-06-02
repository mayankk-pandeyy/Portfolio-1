import LeftImg from "./LeftImg";
import RightImg from "./RightImg";


function Project(){

    return(
        <div className="w-[100vw] mt-20">
            <div className="w-9/12 mx-auto">
                <div className="text-white font-preahvihear text-4xl">
                    Projects
                </div>

                <div className="flex flex-col gap-14 pb-10">
                    <RightImg/>
                    <LeftImg/>
                    <RightImg/>
                    <LeftImg/>
                </div>
            </div>
        </div>
    );


}

export default Project;