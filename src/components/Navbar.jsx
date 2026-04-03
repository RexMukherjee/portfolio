import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative flex justify-between items-center px-6 md:px-8 py-4 border-b border-gray-800 sticky top-0 bg-black/70 backdrop-blur-xl z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]">
        Rudranil.dev
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm">

        {["home", "about", "projects"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative group transition ${
              active === item ? "text-blue-400" : "hover:text-blue-400"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            {/* underline */}
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                active === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}

        {/* CTA */}
        <a
          href="#contact"
          className="bg-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 transition shadow-lg shadow-blue-500/20"
        >
          Hire Me
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
      >
        <span
          className={`w-6 h-[2px] bg-white absolute transition-all duration-300 ${
            menuOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white absolute transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-white absolute transition-all duration-300 ${
            menuOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {["home", "about", "projects"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`transition ${
              active === item ? "text-blue-400" : "hover:text-blue-400"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;