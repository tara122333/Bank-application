import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className='flex flex-row p-6 rounded-[20px] feature-card gap-3'>
        <div className={`w-52 h-20 lg:w-24 rounded-full flex bg-dimBlue items-center justify-center`}>
            <div className='flex justify-center items-center'>
                <img src={props.img} alt="card" className='w-full h-full'/>
            </div>
        </div>
        <div>
            <h2 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
                {
                    props.head
                }
            </h2>
            <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px]`}>
                {
                    props.title
                }
            </p>
        </div>
    </div>
  )
}

export default FeatureCard