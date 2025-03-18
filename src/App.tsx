import Home from "./Page/Home";
import NavBar from "./components/NavBar";
import Game from "../src/assets/Game.png";
import ecommerce from "../src/assets/Ecommerece.png";
import wsi from "../src/assets/wsi.png";
import Airesume from "../src/assets/Airesume.png";
import Project from "./Page/Project";
import ContactForm from "./Page/ContactForm";
import About from "./Page/About";
import Footer from "./Page/Footer";

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <NavBar />

        {/* Sections */}
        <div>
          <Home />
        </div>

        <div>
          <About />
        </div>

        {/* Projects Section */}
        <section id="Project" className="py-12">
          <h1 className="text-center text-pink-400 p-6 font-inter text-3xl font-bold">
            Projects I Built Recently
          </h1>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-0  md:grid-cols-0 gap-8">
              <Project
                title="WSI Analyzer"
                imageUrl={wsi}
                description="A web-based tool that processes and analyzes Whole Slide Images (WSI). It provides insights into complex image data, making it useful for research and analysis in medical or scientific fields."
                githubLink="https://github.com/mu534/wsi-analyzer.git"
                demoLink="https://wsi-analyzer-ya29.vercel.app"
              />
              <Project
                title="Airesume"
                imageUrl={Airesume}
                description=" An AI-powered tool designed to help users create professional resumes with ease. It simplifies the resume-building process by generating well-structured content. Ideal for job seekers looking to enhance their profiles."
                githubLink="https://github.com/mu534/AI-Powered-Resume-Builder.git"
                demoLink="https://ai-powered-resume-builder-two.vercel.app"
              />{" "}
              <Project
                title="Game-hub"
                imageUrl={Game}
                description=" A platform that showcases various games with an engaging user interface. It serves as a central place for exploring and accessing different gaming experiences. Ideal for gamers looking for entertainment."
                githubLink="https://github.com/mu534/game-hub.git"
                demoLink="https://yourdemo.com/game-hub"
              />
              <Project
                title="E-commerce"
                imageUrl={ecommerce}
                description="An online shopping platform that offers a smooth and interactive experience for buying and selling products. It features a clean layout, making it easy for users to browse and purchase items."
                githubLink="https://github.com/mu534/ecommerce.git"
                demoLink="https://yourdemo.com/e-commerce"
              />
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <div>
          <ContactForm />
        </div>

        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
