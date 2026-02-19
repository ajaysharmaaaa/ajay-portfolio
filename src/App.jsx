import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#C9D2E4] dark:bg-[#1A1A1A] text-black dark:text-white">
       <div className="max-w-[1440px] mx-auto">

      <Navbar />

      <section id="home" className=" pt-16 md:pt-24">
        <Hero />
      </section>

      <section id="about" className="pt-16 md:pt-24">
        <About />
      </section>

      <section id="services" className="pt-16 md:pt-24">
        <Services />
      </section>

      <section id="projects" className="pt-16 md:pt-24">
        <Projects />
      </section>

      <section id="contact" className="pt-16 md:pt-24">
        <Contact />
      </section>

      <Footer />
      </div>
    </div>
  );
}

export default App;
