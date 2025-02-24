import Home from "./Page/Home";
import NavBar from "./components/NavBar";
import Game from "../src/assets/Game.png";
import ecommerce from "../src/assets/Ecommerece.png";
import calculator from "../src/assets/calculater.png";

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
        <section className="py-12">
          <h1 className="text-center text-pink-400 p-6 font-inter text-3xl font-bold">
            Projects I Built Recently
          </h1>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Project title="Game-hub" imageUrl={Game} />
              <Project title="E-commerce" imageUrl={ecommerce} />
              <Project title="Calculator" imageUrl={calculator} />
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
