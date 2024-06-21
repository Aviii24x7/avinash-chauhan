import {HiOutlinePhone} from 'react-icons/hi'
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi';
import {FaInstagram} from 'react-icons/fa';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import logo from "../assets/logo.png"
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-900 w-full h-full py-20 text-gray-200 text-2xl'>

        <div className='flex flex-col items-center gap-6 justify-between '>

        {/* icons */}
            <a className=" text-[#ff2312] hover:border-pink-500 hover:shadow-sm hover:shadow-pink-200   mb-6 active:scale-95 flex gap-3 px-12 sm:px-28 py-3 border rounded" href="avinash-chauhan/src/assets/__Avinash_Resume.pdf" download="Resume-Avinash" type="application/pdf">
            <button>Download Resume </button>
            <button> <BsFillPersonLinesFill />   </button>
            </a>
            
            <div className='pb-4 flex max-w-[1000px]: justify-between gap-8 items-center'>
                <a className='hover:scale-110 hover:animate-bounce' href="tel:+4733378901"><HiOutlinePhone /></a>
                <a className='hover:scale-110 hover:animate-bounce' href="mailto:chauhanavi737@gmail.com" target='_blank'><HiOutlineMail /></a>
                <a className='hover:scale-110 hover:animate-bounce' href="https://github.com/Aviii24x7" target='_blank'><FaGithub /></a>
                <a className='hover:scale-110 hover:animate-bounce' href="https://www.linkedin.com/in/avinash-chauhan-8065291a6/" target='_blank'><FaLinkedin /></a>
                <a className='hover:scale-110 hover:animate-bounce' href="https://www.instagram.com/aviii24x7/" target='_blank'><FaInstagram /></a>
                <a className='hover:scale-110 hover:animate-bounce' href="https://www.facebook.com/420aviiiChauhaN/" target='_blank'><BiLogoFacebookCircle /></a>
               

            </div>
        <img className=" sm:h-5 h-3" src={logo} alt="logo" />
            <div className='font-thin font-mono text-sm'>
            Copyright © 2023 Avinash Chauhan
            </div>
        </div>

    </div>
  )
}
