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
      <main className="min-h-screen pr-9  bg-gray-900 ">
        <NavBar />

        {/* Portfolio Grid Section */}

        <div className=" ">
          <Home />
        </div>

        <div className=" ">
          <About />
        </div>
        <div>
          <h1 className=" text-center text-pink-400 p-6 font-inter text-3xl font-bold ">
            {" "}
            Projects i built recently
          </h1>
          <Project title="Game-hub" imageUrl={Game} />
          <div>
            <Project title="E-commerce" imageUrl={ecommerce} />{" "}
            <Project title="calculater" imageUrl={calculator} />
          </div>
        </div>
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
