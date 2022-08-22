import React from 'react'

import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <div id="product" className='flex flex-col lg:flex-row-reverse'>
        <div className='flex-1 flex justify-center items-start flex-col'>
            <div>
                <h3 className='font-poppins font-semibold md:text-[48px] text-[40px] text-white md:leading-[76.8px] leading-[66.8px] w-full'>Easily control your billing &invoicing
                </h3>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodioaenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <div className='w-40 h-40'>
                    <img src={apple} alt="bill" className='w-full h-full object-contain'/>
                </div>
                <div className='w-40 h-40'>
                    <img src={google} alt="bill" className='w-full h-full object-contain'/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
            <div className='relative z-[5]'>
                <img src={bill} alt="bill" className='w-full h-full'/>
            </div>
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
    </div>
  )
}

export default Billing