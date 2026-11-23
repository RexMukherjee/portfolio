
function Projects() {
  const projects = [
    {
      title: "JobHunt - Full-Stack Job Discovery Platform",
      desc: "A full-stack job discovery platform featuring automated job scraping, keyword and location-based search, REST APIs, MongoDB storage and paginated job listings.",
      tech: ["Python", "FastAPI", "React", "TypeScript", "MongoDB", "BeautifulSoup"],
      link: "https://github.com/RexMukherjee/JobHunt",
      featured: true,
    },
    {
      title: "Spring Boot JWT Authentication System",
      desc: "Secure authentication system built with Spring Boot and JWT. Includes user registration, login, password hashing and protected API endpoints.",
      tech: ["Java", "Spring Boot", "JWT"],
      link: "https://github.com/RexMukherjee/spring-boot-jwt-authentication",
    },
    {
      title: "Real-Time Chat Application",
      desc: "Real-time messaging application supporting private chats, online user tracking, typing indicators and live message updates.",
      tech: ["React", "TypeScript", "Node.js", "Socket.IO", "MongoDB"],
      link: "https://github.com/RexMukherjee/chat-app-socketio-react",
    },
    {
      title: "Fuzzy Low-Light Image Enhancement",
      desc: "Unsupervised image enhancement system using fuzzy logic, adaptive gamma correction and CLAHE to improve brightness, contrast and color.",
      tech: ["Python", "OpenCV", "NumPy", "Fuzzy Logic"],
      link: "https://github.com/RexMukherjee/Fuzzy-Low-Light-Image-Enhancement",
    },
    {
      title: "Movie Recommendation System",
      desc: "React-based application integrating external APIs to fetch and display movie recommendations.",
      tech: ["React", "JavaScript", "REST API"],
      link: "https://github.com/RexMukherjee/Movie-Recommendation-System",
    },
    {
      title: "Notes API",
      desc: "RESTful API built with FastAPI and MongoDB supporting CRUD operations for note management.",
      tech: ["Python", "FastAPI", "MongoDB"],
      link: "https://github.com/RexMukherjee/Notes-app",
    },
  ];

  return (
    <div id="projects" className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-gray-900 border rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 ${
              project.featured
                ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
                : "border-gray-800"
            }`}
          >
            {project.featured && (
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">
                Featured Project
              </span>
            )}

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
            >
              View Code <span>↗</span>
            </a>
          </div>
        ))}

      </div>

      <div className="text-center mt-12">
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
