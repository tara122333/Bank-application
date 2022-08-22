import React from 'react'


// assest
import { discount, robot } from "../assets";
import GetStart from './GetStart';


const Hero = () => {
  return (
    <>
            <div id="home" className='flex flex-col md:py-16 py-6 lg:flex-row w-full'>
                <div className='flex-1 flex flex-col px-6 lg:px-16 items-start'>
                    <div className='flex items-center px-3 py-2 rounded-lg mb-2 bg-discount-gradient lg:w-96'>
                        <div className="w-[32px] h-[32px]">
                            <img src={discount} alt="discount" className='w-full h-full'/>
                        </div>
                        <div className='ml-2 font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]'>
                            <span className="text-white">20%</span> Discount For
                            <span className="text-white"> 1 Month</span> Account
                        </div>
                    </div>
                    

                    <div className='flex gap-2 justify-between items-center w-full'>
                        <h1 className='flex-1 font-poppins font-semibold text-white text-[52px] leading-[75px] md:text-[72px] md:leading-[100.8px]'>
                            The Next <br className='md:block hidden'/>
                            <span className="text-gradient">Generation</span>
                        </h1>
                        <div className={`lg:flex hidden md:mr-4 mr-0`}>
                            <GetStart />
                        </div>
                    </div>
                    <h1 className='font-poppins font-semibold text-white text-[52px] leading-[75px] md:leading-[100.8px] md:text-[68px]'>
                        Payment Method.
                    </h1>
                    <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                        Our team of experts uses a methodology to identify the credit cards
                        most likely to fit your needs. We examine annual percentage rates,
                        annual fees.
                    </p>
                </div>



                <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
                    <div className='relative z-[5] w-[100%] h-[100%]'>
                        <img src={robot} alt="robot" className='w-full h-full'/>
                    </div>
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className={`md:hidden flex justify-center items-center`}>
                    <GetStart />
                </div>
            </div>
    </>
  )
}

export default Hero