import React from "react";
import myBlog from "../assets/myblog.png";
import { projects } from "../data/data.js";

export default function Projects() {
  const works = projects;

  return (
    <div name="projects" className="w-full pb-12 text-gray-300 bg-gray-900 pt-[100px]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 rounded-sm border-pink-600">
            Projects
          </p>
          <p className="py-6 text-lg">// Check out the projects I made</p>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          {works.map((project) => (
            <div className="px-6 pt-5" key={project.key}>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div
                  style={{ backgroundImage: `url(${project.img})` }}
                  className="bg-cover bg-center h-64"
                >
                </div>
                <div className="p-6 flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-pink-600">
                    {project.name}
                  </h3>
                  <div className="text-sm text-gray-300">
                    {project.desc.split('\n').map((line, index) => (
                      <ul>
                        <li key={index}>{line}</li>
                      </ul>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-2 m-2 bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition duration-300">
                        Demo
                      </button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-2 m-2 bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition duration-300">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
