import React from 'react'

import FeedbackCard from './FeedbackCard'

import { people01, people02, people03 } from "../assets";


const Testimonials = () => {
    const feedback = [
        {
          id: "feedback-1",
          content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
          name: "Herman Jensen",
          title: "Founder & Leader",
          img: people01,
        },
        {
          id: "feedback-2",
          content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
          name: "Steve Mark",
          title: "Founder & Leader",
          img: people02,
        },
        {
          id: "feedback-3",
          content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
          name: "Kenn Gallagher",
          title: "Founder & Leader",
          img: people03,
        },
      ];

  return (
    <div id="clients" className={`md:py-16 py-6 flex justify-center itece flex-col relative `}>
        <div className='flex-1'>
            <div className='flex-1 absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col md:mb-16 mb-6 relative z-[1]'>
                <h3 className='flex-1 font-poppins font-semibold md:text-[48px] text-[40px] text-white md:leading-[76.8px] leading-[66.8px] w-full'>What People are <br className="md:block hidden" /> saying about us</h3>
                <p className={`flwx-1 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}> Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        <div className="flex flex-wrap lg:justify-start justify-center w-full feedback-container relative z-[1]">
            {
                feedback.map((item)=>(
                    <FeedbackCard {...item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials