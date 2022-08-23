import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi';

const GetStart = () => {
  return (
    <>
        <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
            <div className='flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] rounded-full'>
                <div className='flex justify-center items-center gap-1'>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <FiArrowUpRight className='text-white text-3xl'/>
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default GetStart