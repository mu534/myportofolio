// components/Project.tsx
import { Github } from "lucide-react";
import React from "react";

interface ProjectProps {
  title: string;
  // description: string;

  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  // description,

  imageUrl,
}) => {
  return (
    <>
      <div
        id="Project"
        className="flex items-start border p-2 m-6 border-purple-600"
      >
        <img
          alt={title}
          src={imageUrl}
          className="w-32 h-32 object-cover mr-2" // Adjust the size of the image and margin between image and text
        />
        <div>
          <h2 className=" text-purple-500 font-inter text-3xl font-bold">
            {title}
          </h2>
          {/* <p className="text-white font-inter text-lg  font-light">
            {description}
          </p> */}
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="https://github.com/mu534"
              target="_blank"
              rel="noopener noreferrer"
              className="object-cover mr-7"
            >
              <Github className="w-8 h-8 mt-4 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
