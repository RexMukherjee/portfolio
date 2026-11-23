
function About() {
  const skills = [
    "Python",
    "Java",
    "React",
    "TypeScript",
    "FastAPI",
    "Django",
    "Spring Boot",
    "Node.js",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Git"
  ];

  return (
    <div id="about" className="px-6 py-24 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
        About Me
      </h2>

      <p className="text-blue-400 mb-6 text-sm tracking-widest uppercase font-semibold">
        Rudranil Mukherjee
      </p>

      <div className="w-16 h-[2px] bg-blue-500 mb-6"></div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
            I'm a Software Developer with a background in Information Technology
            and a strong interest in full-stack and backend development.
            I enjoy turning ideas into functional applications, building
            efficient backend systems, and creating clean, user-friendly
            interfaces.
          </p>

          <p className="text-gray-400 leading-relaxed mb-5 text-sm md:text-base">
            My experience includes working with Python, Java, React,
            FastAPI, Django, and Spring Boot. I've developed projects
            involving REST APIs, authentication systems, real-time
            communication, web scraping, and database integration using
            MongoDB and MySQL.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            I'm always interested in exploring new technologies, improving
            my problem-solving skills, and building projects that challenge
            me to learn something new. I'm currently looking forward to
            opportunities where I can contribute, collaborate, and grow
            as a developer.
          </p>

          {/* Tech Stack */}
          <h3 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 rounded-lg text-sm
                hover:bg-blue-500 hover:shadow-lg
                hover:shadow-blue-500/30 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6
        shadow-lg hover:shadow-blue-500/30 transition duration-300">

          <h3 className="text-xl font-semibold mb-5 text-white">
            Quick Info
          </h3>

          <ul className="text-gray-400 space-y-4 text-sm">
            <li>💻 Software Developer</li>
            <li>🎓 B.Tech in Information Technology</li>
            <li>📍 Kolkata, West Bengal, India</li>
            <li>⚙️ Full-Stack & Backend Development</li>
            <li>🗄️ Database Design & API Development</li>
            <li>🚀 Open to Software Development Opportunities</li>
          </ul>

          <div className="mt-7 pt-5 border-t border-gray-800">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
              Currently Exploring
            </p>
            <p className="text-blue-400 text-sm">
              Backend Engineering • System Design • Game Development
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
