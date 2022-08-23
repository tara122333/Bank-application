import React from 'react'

import { card } from "../assets";

import Button from './Button'
const CardDeal = () => {
  return (
    <div id="features" className='flex flex-col lg:flex-row md:py-16 py-6'>
        <div className='flex-1 flex justify-center items-start flex-col'>
            <div>
                <h3 className='font-poppins font-semibold md:text-[48px] text-[40px] text-white md:leading-[76.8px] leading-[66.8px] w-full'>Find a better card deal in few easy steps.</h3>

                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            </div>
            <div>
                <Button styles={`mt-10`} />
            </div>
        </div>
        <div className='flex-1 flex  md:ml-10 ml-0 md:mt-0 mt-10 justify-center items-center flex-col relative'>
            <img src={card} alt="card"  className='w-full h-full'/>
        </div>
    </div>
  )
}

export default CardDeal