import React from 'react'


import { send, shield, star  } from "../assets";

//componenta
import Button from './Button'
import FeatureCard from './FeatureCard'

const Business = () => {
  return (
    <div id="features" className='flex flex-col lg:flex-row md:py-16 py-6'>
        <div className='flex-1 flex justify-center items-start flex-col'>
            <div>
                <h3 className='font-poppins font-semibold md:text-[48px] text-[40px] text-white md:leading-[76.8px] leading-[66.8px] w-full'>You do the business, we’ll handle the money.</h3>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            </div>
            <div>
                <Button styles={`mt-10`} />
            </div>
        </div>
        <div className='flex-1 flex  md:ml-10 ml-0 md:mt-0 mt-10 justify-center items-center flex-col relative'>
            <FeatureCard img={star} head="Rewards" title="The best credit cards offer some tantalizing combinations of promotions and prizes"/>
            <FeatureCard img={shield} head="100% Secured" title="We take proactive steps make sure your information and transactions are secure."/>
            <FeatureCard img={send} head="Balance Transfer" title="A balance transfer credit card can save you a lot of money in interest charges."/>
        </div>
    </div>
  )
}

export default Business