import React from "react";
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
          Avinash Chauhan
        </h1>

        <h2 className="text-2xl sm:text-5xl font-bold text-[#8092b0]">
          I am a Full-Stack Developer specialising in Django.
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I am a perfectionist so I often get stuck in desgining in attempt to
          make everything perfect. Still I love to do Frontend and I follow
          React for that.
        </p>

        <div>
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
