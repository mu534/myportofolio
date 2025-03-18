import React from "react";
import mudasirAbout from "../assets/mudasirAbout.png";
import Resume from "../assets/resume.pdf";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
  FaGit,
} from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section id="About" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Profile Image */}
        <div className="w-full md:w-3/4 lg:w-1/2 flex justify-center">
          <div className="relative bg-gray-800 p-4 rounded-2xl shadow-lg border border-purple-500 backdrop-blur-md">
            <img
              src={mudasirAbout}
              alt="Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-lg object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Right Section: About Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-purple-400">About Me</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Hello! I'm{" "}
            <span className="text-purple-400 font-semibold">Mudasir</span>, a
            skilled frontend developer specializing in React.js, TypeScript, and
            Tailwind CSS. I focus on creating modern, responsive web
            applications with a strong emphasis on UI/UX. Currently, I'm
            expanding my expertise to become a full-stack developer.
          </p>

          {/* Technologies Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-400">
              Technologies I Use
            </h3>
            <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 justify-center">
              <FaReact className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <SiTypescript className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaNodeJs className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <SiMongodb className="text-green-400 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaDatabase className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaGithub className="text-gray-300 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaGit className="text-red-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaHtml5 className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaCss3 className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
              <FaJs className="text-yellow-500 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition duration-300" />
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href={Resume} // Replace with your resume file path
              download
              className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
