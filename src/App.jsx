import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Home */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Project />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;