import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  imageUrl: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  tools?: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  imageUrl,
  description,
  githubLink,
  demoLink,
  tools,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl w-full max-w-4xl mx-auto border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
      {/* Left: Project Image */}
      <div className="md:w-1/2 relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Right: Project Details */}
      <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0 flex flex-col justify-between">
        {/* Project Title */}
        <div className="flex justify-between items-center bg-gray-700/50 p-4 rounded-lg backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="flex space-x-4">
            {/* GitHub Link */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <FaGithub className="h-6 w-6 text-gray-300 transform transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </a>
            {/* Demo Link */}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <FaExternalLinkAlt className="h-5 w-5 text-gray-300 transform transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Demo
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-200 my-4 text-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tools?.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-xs rounded-full shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
