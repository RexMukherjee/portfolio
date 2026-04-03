import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar/>
      <Hero/>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12"></div>
      <About/>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12"></div>
      <Projects/>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12"></div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;