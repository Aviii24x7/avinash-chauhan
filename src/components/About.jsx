import React from 'react'

export default function About() {
  return (

    <div name='about' className='pt-4 w-full h-full sm:h-screen pb-24 sm:pb-10 bg-gray-900 text-gray-100'>
    <div className='flex flex-col justify-center pt-5 items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='text-white text-left sm:text-right pb-8 pl-4'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 rounded-sm border-pink-600'>
             About
          </p>
        </div>
        {/* <div></div> */}
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-xl sm:text-right sm:text-3xl font-bold'>
            <p> Hello. I am Avinash Chauhan and I am a Software Developer. Currently, I am pursuing B.Tech. in Computer Science and Engineering from Central University of Haryana.</p>
          </div>
          <div>
            <p className='sm:text-lg text-sm'>I am extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to have growth oriented and challenging career where I can contribute my knowledge and skills to the organization and enhance my experience through continuous learning and teamwork. I believe in work smart enough that harder work seems easy.</p>  
          </div>
        </div>
    </div>
  </div>


  )
}
