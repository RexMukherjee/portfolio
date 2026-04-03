function Projects() {
  const projects = [
    {
      title: "JWT Authentication System",
      desc: "Secure authentication system built with Spring Boot and JWT. Includes login, registration, and protected APIs.",
      tech: ["Spring Boot", "JWT"],
      link: "https://github.com/RexMukherjee/spring-boot-jwt-authentication",
    },
    {
      title: "Movie Recommendation System",
      desc: "React-based app that fetches and displays personalized movie recommendations using external APIs.",
      tech: ["React", "API"],
      link: "https://github.com/RexMukherjee/Movie-Recommendation-System",
    },
    {
      title: "Weather App",
      desc: "Django-based weather application using OpenWeather API to show real-time weather data.",
      tech: ["Django", "API"],
      link: "https://github.com/RexMukherjee/Weather-App",
    },
    {
      title: "Notes API",
      desc: "RESTful API built with FastAPI and MongoDB supporting CRUD operations for note management.",
      tech: ["FastAPI", "MongoDB"],
      link: "https://github.com/RexMukherjee/Notes-app",
    },
  ];

  return (
    <div id="projects" className="px-6 py-24 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-blue-500/40 hover:-translate-y-2 hover:scale-[1.02] transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 text-xs text-blue-400">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white"
            >
              View Code →
            </a>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/RexMukherjee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition"
        >
          View More Projects →
        </a>
      </div>

    </div>
  );
}

export default Projects;