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
    <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 mx-auto border border-gray-700">
      {/* Left: Project Image */}
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="w-full rounded-md" />
      </div>

      {/* Right: Project Details */}
      <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
        {/* Project Title */}
        <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
          <h2 className="text-lg font-bold text-gray-200">{title}</h2>
          <div className="flex space-x-3">
            {/* GitHub Link */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 text-gray-300 hover:text-gray-400" />
            </a>
            {/* Demo Link */}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="h-5 w-5 text-gray-300 hover:text-gray-400" />
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-300 my-4 text-sm">{description}</p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tools?.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
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
