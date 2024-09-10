import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin,FaCode } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi';
import { SiLeetcode , SiCodingninjas } from "react-icons/si";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"

export default function Navbar() {

    // State for mobile and Web view of Navbar
  const [mob_nav, setNav] = useState(false);
  const handleClick = () => setNav(!mob_nav);

  return (
    <div className="fixed px-4 flex justify-between items-center h-[80px] bg-gray-900 text-white w-full ">
      {/* logo */}
      <div>
      <Link to="home"  smooth={true} duration={500}> 

      <img className="h-4" src={logo} alt="logo name" />
      
      </Link>
       
      </div>

      {/* menu */}
      <div>
        <ul className="hidden sm:flex gap-2">
          <li className="hover:text-pink-500"> 
            <Link to="about"  smooth={true} duration={500}> 
              About
            </Link> 
          </li>
          <li className="hover:text-pink-600"> 
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-pink-600 "> 
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-pink-600"> 
            <Link to="contacts" smooth={true}duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !mob_nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"> 
            <Link onClick={handleClick} to="home"  smooth={true} duration={500}> 
              Home
            </Link> 
          </li>
        <li className="py-6 text-4xl"> 
            <Link onClick={handleClick} to="about"  smooth={true} duration={500}> 
              About
            </Link> 
          </li>
          <li className="py-6 text-4xl"> 
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl"> 
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl"> 
            <Link onClick={handleClick} to="contacts" smooth={true}duration={500}>
              Contact
            </Link>
          </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!mob_nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Social Icons */}
      <div className="hidden sm:flex flex-col fixed top-[35%] left-0">
        <ul>

            {/* Linked In */}
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="https://www.linkedin.com/in/avinash-chauhan-8065291a6/" target="_blank">

              LinkedIn <FaLinkedin size={30} />

            </a>

          </li>

          {/* Github */}
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#171515]">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="https://github.com/Aviii24x7" target="_blank">

              GitHub <FaGithub size={30} />

            </a>

          </li>
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#237061]">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="mailto:chauhanavi737@gmail.com" target="_blank">

              Email <HiOutlineMail size={30} />

            </a>

          </li>
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#522c48]">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="https://drive.google.com/file/d/1mRqoODQycatJknUZDZiu7DYcYamidAEV/view?usp=sharing" target="_blank">

              Resume <BsFillPersonLinesFill size={30} />

            </a>

          </li>
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#1D1B4F]">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="https://leetcode.com/u/aviii24x7/" target="_blank">

              LeetCode <SiLeetcode size={30} />

            </a>

          </li>
          <li className="rounded w-[150px] h-[50px] flex justify-between items-center px-[11px] ml-[-100px] hover:ml-[-10px] duration-500 bg-[#3A544E]">
            <a className="flex justify-between items-center w-full text-gray-100 font-semibold" href="https://www.naukri.com/code360/profile/6173791e-cb6c-4fa9-8375-9284a18ba9e2" target="_blank">

              CodeStudio <FaCode  size={30} />

            </a>

          </li>
        </ul>
      </div>
    </div>
  );
}
