import { Mail, Linkedin, Github } from "lucide-react";
import mudasir from "../assets/mudasir.png";

const skills = [
  { name: "React", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "TailwindCSS", level: 80 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 85 },
];

export default function Portfolio() {
  return (
    <div
      id="Home"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col lg:flex-row items-center justify-center p-4 md:p-6 gap-6"
    >
      {/* Sidebar */}
      <aside className="w-full lg:w-80 bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl p-6 flex flex-col items-center transition-all duration-300">
        <img
          src={mudasir}
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-500 hover:border-purple-400 transition-colors duration-300"
        />
        <h2 className="text-xl md:text-2xl font-semibold mt-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Mudasir Najimudin
        </h2>
        <p className="text-sm text-gray-300">Web Developer</p>
        <p className="text-xs md:text-sm text-gray-400 text-center mt-2 leading-relaxed">
          Frontend developer specializing in React.js and TypeScript. I craft
          dynamic, responsive web apps with clean code and a passion for
          problem-solving.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Mail className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudassir-najimuddin-127064328"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
          </a>
          <a
            href="https://github.com/mu534"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Github className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:flex-1 p-6 bg-gray-800/50 rounded-xl shadow-xl flex flex-col justify-center transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Hello there.. 👋
        </h1>
        <h2 className="text-lg md:text-xl text-purple-400 mt-1">
          Welcome to My Portfolio!
        </h2>

        {/* Education & Experience */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-200">
            Education & Experience
          </h3>
          <div className="mt-2 p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300">
            <p className="text-purple-400 text-sm md:text-base">
              Madda Walabu University
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              Bachelor of Computer Science
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-200">Top Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <p className="text-xs md:text-sm text-gray-300">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
