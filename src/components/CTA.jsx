import React from 'react'


import Button from './Button'

const CTA = () => {
  return (
    <div>
        <div className={`flex justify-center items-center md:mx-16 mx-6 md:px-16 px-6 md:py-12 py-4 md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
                <h3 className='font-poppins font-semibold md:text-[48px] text-[40px] text-white md:leading-[76.8px] leading-[66.8px] w-full'>Let’s try our service now!</h3>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <Button styles={`mt-10`} />
            </div>
        </div>
    </div>
  )
}

export default CTA