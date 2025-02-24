import { Github } from "lucide-react";
import React from "react";

interface ProjectProps {
  title: string;
  imageUrl: string;
  techs?: string[]; // Optional prop for technologies used
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, techs = [] }) => {
  return (
    <div className="border border-gray-700 bg-gray-800 px-6 py-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
      {/* Title and GitHub icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-purple-500 font-inter text-2xl font-bold">
          {title}
        </h2>
        <a
          href="https://github.com/mu534"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <Github className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Project Image */}
      <div className="mb-4">
        <img
          alt={title}
          src={imageUrl}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Footer Section - Tech Used */}
      <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
        <span className="font-semibold">Tech Used:</span>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-2 py-1 rounded-lg text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
