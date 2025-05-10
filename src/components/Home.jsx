// import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div name="home" className="bg-gray-900 h-screen w-full">

      <div className="max-w-[1000px] h-full mx-auto px-16 flex flex-col justify-center text-white">

        <p className="text-pink-400 ">
          Hi, My name is 
        </p>

        <h1 className="text-3xl sm:text-6xl font-bold text-[#xxd6f6] ">
          Avinash Chauhan,
        </h1>

        <h2 className="text-2xl sm:text-5xl font-bold text-[#8092b0]">
        A Software Developer, currently engineering Scalable Backend Solutions.
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          With a strong foundation in backend technologies, I also have a growing passion for frontend development, This site is a reflection of my journey in balancing backend strength with frontend finesse.
        </p>

        <div className="flex items-start space-x-5">
        <Link to="experience" smooth={true} duration={500}>
        <button className="text-white border-2 group rounded-lg px-6 py-3 my-2 flex items-center justify-between hover:border-pink-300 hover:shadow-sm hover:shadow-pink-200 active:scale-95">
            Experience
            <HiArrowCircleRight className="ml-3 group-hover:rotate-90 text-2xl duration-700" />
          </button>
            </Link>
        <Link to="projects" smooth={true} duration={500}>
        <button className="text-white border-2 group rounded-lg px-6 py-3 my-2 flex items-center justify-between hover:border-pink-300 hover:shadow-sm hover:shadow-pink-200 active:scale-95">
            See Projects
            <HiArrowCircleRight className="ml-3 group-hover:rotate-90 text-2xl duration-700" />
          </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
}
