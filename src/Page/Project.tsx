import { Github } from "lucide-react";
import React from "react";

interface ProjectProps {
  title: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl }) => {
  return (
    <div className="border border-gray-600 px-3 py-6 rounded-lg max-w-lg mx-auto mb-6 ml-6 mr-6">
      <h2 className="text-purple-500 font-inter text-3xl font-bold text-center mb-4">
        {title}
      </h2>
      <div className="p-0 mb-4">
        <img
          alt={title}
          src={imageUrl}
          className="w-full h-34 object-contain rounded-md"
        />
      </div>
      <div className="flex justify-center mt-4 pb-2">
        <a
          href="https://github.com/mu534"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center p-2 bg-purple-700 rounded-lg hover:bg-purple-700 transition duration-300">
            <Github className="w-8 h-8 text-white" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
