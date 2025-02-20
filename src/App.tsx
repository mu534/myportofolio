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
          <Project
            title="Game-hub"
            description="The game-hub is built using React and TypeScript, ensuring a robust and type-safe development environment. For styling and component design, it leverages Chakra UI, which provides a modular and customizable UI framework. This combination allows for a responsive, user-friendly interface with clean, organized game categories and features like sorting and filtering. The use of Chakra UI ensures a modern, visually appealing design while maintaining a seamless browsing experience across devices."
            imageUrl={Game}
          />
          <div>
            <Project
              title="E-commerce"
              description=" e-commerce website designed to offer users a smooth online shopping experience. Built with HTML, CSS, and JavaScript, it features a clean, responsive layout for browsing products, adding them to the cart, and completing purchases. With a focus on user-friendly navigation and performance, ShopMaster aims to make online shopping easy and enjoyable."
              imageUrl={ecommerce}
            />{" "}
            <Project
              title="calculater"
              description="calculator built with HTML, CSS, and JavaScript. Offering basic arithmetic functions, it provides a clean, intuitive interface for quick calculations. Whether you're doing simple math or solving everyday problems, it is designed for efficiency and ease of use."
              imageUrl={calculator}
            />
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
