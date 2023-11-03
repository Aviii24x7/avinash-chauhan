import React from "react";
import myBlog from "../assets/myblog.png";


import {projects} from "../data/data.js";


export default function Projects() {

const works = projects;

  return (
    <div name="projects" className="w-full pb-5 text-gray-300 bg-gray-900">

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 rounded-sm border-pink-600">
            Projects
          </p>
          <p className="py-6 text-lg">
            // Check out the projects I made
          </p>
        </div>
        
{/* container */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">


{/* grid Effects */}

{ works.map((project) => {
    return <div className="px-6 pt-5" key={project.key}>            
        
          <div
          style={{ backgroundImage: `url(${project.img})` }} 
          className=" shadow-lg h-full shadow-blue-950 group container rounded-md flex justify-center text-center items-center mx-auto content-div"
        >
          {/* hover effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              {project.name}
            </span>
            <div className="pt-8 text-center">
              {/* {if()} */}
              <a href={project.demo}>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>

              <a href= {project.github}>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>

          </div>

        </div>      

        </div>

          })
        }




        </div>
      </div>
    </div>
  );
}
