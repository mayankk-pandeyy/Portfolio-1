import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook } from "react-icons/fa";


function Desc(){

    return (
        <div className="w-[100vw] mt-6">
            <div className='text-white w-8/12 mx-auto'>
                <div className='flex gap-3 text-4xl font-preahvihear'>
                    <div>
                        I'm a
                    </div>
                    <div className='text-orange-400'>
                        <Typewriter 
                            words={['MERN Stack Developer.', 'Frontend Developer.', 'YouTuber.', 'Software Engineer.']}
                            loop={5}
                            cursor
                        />
                    </div>
                </div>

                <div className='font-preahvihear flex gap-2'>
                    Currently, I'm a Software Engineer at <span className='text-[#1877F2] flex items-center gap-1'><FaFacebook /> <span>Facebook,</span></span>
                </div>

                <div className='mt-16 font-preahvihear leading-8 text-xl'>
                    A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                    <br></br>
                    I make meaningful and delightful digital products that create an equilibrium
                    <br></br>
                    between user needs and business goals.
                </div>
            </div>
        </div>
    );


}

export default Desc;