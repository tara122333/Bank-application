import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-wrap mb-6 md:mb-20 lg:flex-row lg:justify-between w-full'>
       <div className='flex justify-start items-center m-3'>
            <h2 className='font-poppins font-semibold text-[30.89px] md:text-[40.89px] leading-[43.16px] md:leading-[53.16px] text-white'>3800+</h2>
            <p className='font-poppins font-normal md:text-[20.45px] text-[15.45px] md:leading-[26.58px] leading-[21.58px] text-gradient ml-3'>USER ACTIVE</p>
        </div> 
       <div className='flex justify-start items-center m-3'>
            <h2 className='font-poppins font-semibold text-[30.89px] md:text-[40.89px] leading-[43.16px] md:leading-[53.16px] text-white'>230+</h2>
            <p className='font-poppins font-normal md:text-[20.45px] text-[15.45px] md:leading-[26.58px] leading-[21.58px] text-gradient ml-3'>TRUSTED BY COMPANY</p>
        </div> 
       <div className='flex justify-start items-center m-3'>
            <h2 className='font-poppins font-semibold text-[30.89px] md:text-[40.89px] leading-[43.16px] md:leading-[53.16px] text-white'>$230M+</h2>
            <p className='font-poppins font-normal md:text-[20.45px] text-[15.45px] md:leading-[26.58px] leading-[21.58px] text-gradient ml-3'>TRANSACTION</p>
        </div> 
    </div>
  )
}

export default Stats