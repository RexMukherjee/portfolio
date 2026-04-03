function About() {
  return (
    <div id="about" className="px-6 py-24 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
        About Me
      </h2>

      {/* Name */}
      <p className="text-blue-400 mb-6 text-sm tracking-widest uppercase font-semibold">
        Rudranil Mukherjee
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-blue-500 mb-6"></div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            I'm a Full Stack Developer currently pursuing B.Tech in Information Technology. 
            I enjoy building modern, scalable web applications with clean UI and efficient backend systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            I have experience working with React, Django, FastAPI, and Spring Boot, and have built multiple projects 
            including authentication systems, REST APIs, and real-time applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            I also completed industrial training in React where I developed dynamic applications using REST APIs 
            and worked with Git in an Agile environment.
          </p>

          {/* Tech Stack */}
          <h3 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "React", "Django", "FastAPI", "Spring Boot",
              "JavaScript", "Python", "Java", "MongoDB", "SQL"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition duration-300">

          <h3 className="text-xl font-semibold mb-4 text-white">
            Quick Info
          </h3>

          <ul className="text-gray-400 space-y-3 text-sm">
            <li>💻 Full Stack Developer</li>
            <li>🎓 B.Tech IT (2022–2026)</li>
            <li>📍 Kolkata, West Bengal, India</li>
            <li>⚡ Built multiple full-stack projects</li>
            <li>🚀 Open to internships & opportunities</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default About;