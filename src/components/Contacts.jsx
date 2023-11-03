import React from 'react'

export default function Contacts() {
  return (
    <div name="contacts" className='w-full h-screen pt-20 bg-gray-900 flex justify-center items-center p-4'>
        <form action="https://getform.io/f/060ac79c-f1f6-43d3-b580-c2457b5fbaf3" method='POST' className='flex flex-col max-w-[1000px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 rounded-sm border-pink-600'>
                    Contact Me
                </p>
                <p className='text-gray-300 py-6'>// Submit the form below or shoot me an Email</p>
            </div>
            <input className='bg-[#ccd6f6]  placeholder:text-gray-700 placeholder:font-semibold placeholder:pl-2 placeholder:font-mono  pb-2' type="text" placeholder='Name' name='name' />
            <input className=' my-4 placeholder:text-gray-700 p-2 placeholder:font-semibold placeholder:font-mono bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] placeholder:text-gray-700 placeholder:font-semibold placeholder:font-mono p-2' name="message" rows="10" placeholder='Your Message' ></textarea>
            <button className=' text-white border-2 rounded-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto flex items-center'>Let's Collab</button>
        </form>

    </div>
  )
}
