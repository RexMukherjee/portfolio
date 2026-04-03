import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile-rudra.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div id="home" className="relative flex items-center justify-center min-h-[90vh] px-4 sm:px-6">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* LEFT SIDE */}
        <div>

          {/* Intro */}
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
            <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
              Rudranil
            </span>
          </h1>

          {/* Typewriter */}
          <div className="mb-4">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "React & Django Developer",
                1500,
                "Backend with FastAPI",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 max-w-lg leading-relaxed text-sm sm:text-base">
            I build modern, scalable web applications with clean UI and efficient backend systems.
          </p>

          {/* Status */}
          <p className="text-green-400 text-sm mb-4">
            ● Open to opportunities
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#projects">
              <button className="bg-blue-500 hover:bg-blue-600 px-5 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="border border-gray-500 hover:bg-gray-800 px-5 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Contact Me
              </button>
            </a>

            <a
              href="/RudranilMukherjee_CV.pdf"
              target="_blank"
              className="px-5 sm:px-6 py-2 border border-blue-500 text-blue-400 rounded-lg text-sm sm:text-base hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-lg sm:text-xl">
            <a
              href="https://github.com/RexMukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rudranil-mukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center relative mt-10 md:mt-0 group">

          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 
            bg-blue-500/30 blur-3xl rounded-full 
            opacity-60 group-hover:opacity-100 
            transition duration-500">
          </div>

          {/* Image with fade */}
          <img
            src={profile}
            alt="Rudranil"
            className="relative 
              w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 
              object-cover rounded-2xl 
              transition duration-500 
              group-hover:scale-105 group-hover:-translate-y-1
              [mask-image:linear-gradient(to_bottom,black_70%,transparent)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
          />
        </div>

      </div>

      {/* Scroll Indicator (hide on small screens) */}
      <div className="hidden sm:block absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        ↓ Scroll
      </div>
    </div>
  );
}

export default Hero;