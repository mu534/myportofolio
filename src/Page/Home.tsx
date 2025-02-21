import { Mail, Linkedin, Github } from "lucide-react";
import mudasir from "../assets/mudasir.png";

const skills = [
  { name: "React", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "tailwindcss", level: 80 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 85 },
];

export default function Portfolio() {
  return (
    <div
      id="Home"
      className="flex flex-col  lg:flex-row min-h-screen bg-gray-900 text-white pl-7"
    >
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-6  bg-gray-800   flex flex-col items-center shadow-lg ">
        <img
          src={mudasir}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-purple-500"
        />

        <h2 className="text-center text-xl font-semibold mt-4 text-purple-400">
          Mudasir Najimudin
        </h2>
        <p className="text-center text-sm text-gray-400">web developer</p>
        <p className="text-center text-sm text-gray-400">
          {" "}
          I’m a frontend developer specializing in React.js and TypeScript, with
          experience building dynamic and responsive web applications. I focus
          on clean code, performance optimization, and creating seamless digital
          experiences. Passionate about problem-solving, I’m committed to
          continuous learning in the ever-evolving web development field.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudassir-najimuddin-127064328"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://github.com/mu534"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-gray-400 hover:text-white" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-8 h-auto lg:h-screen flex flex-col justify-center overflow-auto">
        <h1 className="text-3xl font-bold">Hello there.. &#128075;</h1>
        <h2 className="text-xl text-purple-400">Welcome to My Portfolio!</h2>

        {/* Education & Experience */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold">Education & Experience</h3>
          <div className="mt-2 p-4 border border-gray-700 rounded-md">
            <p className="text-purple-400">madda walabu university</p>
            <p className="text-sm text-gray-400">
              Bachelor of Computer Science
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold">Top Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="mt-2 ">
                <p className="text-sm ">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full   h-2.5">
                  <div
                    className="bg-purple-500 h-2.5 rounded-full  "
                    style={{ width: `${skill.level}% ` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
