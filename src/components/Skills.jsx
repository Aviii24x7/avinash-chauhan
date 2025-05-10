import React from 'react';


import { skills } from '../data/data';



export default function Skills() {

const theskills = skills;

  return (


    <div name="skills" className='bg-gray-900 text-gray-300 pt-5 pb-5 w-full'>
        {/* container */}
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col w-full h-full sm:items-start'>
            <div className=''>
            <p className='text-3xl  py-3 font-bold inline border-b-4 rounded-sm border-pink-600 sm:text-4xl '>Skills</p>
            <p className='pt-8 pb-4 text-lg'>//These are the Technologies I have worked with </p>
            </div>

<div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 text-center gap-8 py-8'>

{
    theskills.map((skill_item) => {
        return <div key={skill_item.key}>
        <div className='p-4 sm:max-h-[150px] max-h-[120px] shadow-md shadow-blue-950 hover:scale-110 duration-500'>
        <img className='sm:w-20 w-12 mx-auto' src={skill_item.img} alt="python icon" />
        <h3 className='my-2'>{skill_item.name}</h3>
    </div>
    </div>
    })
}
            
                
            </div>
        </div>

    </div>
  )
}
