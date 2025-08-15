import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "SpendSmart - Personal Finance Tracker",
      description:
        "A full-featured personal finance app built with Next.js, TypeScript, and MongoDB. Users can create budgets, track expenses, visualize spending timelines with Recharts, and receive financial advice via OpenAI integration.",
      image:
        "/register_background.jpeg",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Recharts",
        "OpenAI API",
        "Tailwind CSS",
      ],
      liveUrl: "https://spend-smart-lime.vercel.app/",
      githubUrl: "https://github.com/Kavya-76/SpendSmart",
      featured: true,
    },
    {
      title: "Code Collab - Online Code Editor",
      description:
        "A real-time collaborative code editor using Monaco Editor and Judge0 API. Built for team coding, it supports live syncing, multi-language execution, and a seamless developer experience.",
      image:
        "/code-collab.png",
      technologies: [
        "React",
        "Node.js",
        "Socket.IO",
        "Monaco Editor",
        "Judge0 API",
      ],
      liveUrl: "https://codecollab-1wq6.onrender.com/",
      githubUrl: "https://github.com/Kavya-76/CodeCollab",
      featured: false,
    },
    {
      title: "NetSecML",
      description:
        "A modular machine learning solution for phishing detection in network security, featuring robust data pipelines and multiple models like Decision Tree, Random Forest, Gradient Boosting, and Logistic Regression. Built for extensibility and production, it includes advanced logging, exception handling, and MongoDB/Docker integration for scalable threat detection.",
      image:
        "/NetSecML.png",
      technologies: [
        "Python",
        "MongoDB",
        "Scikit-learn",
        "Numpy & Pandas",
        "Docker",
        "Github Actions",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Kavya-76/Network-Security-ML",
      featured: false,
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with cart functionality, admin panel, and user authentication. Built with the MERN stack, it offers a seamless shopping experience and secure order management.",
      image:
        "/e-commerce.png",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Bootstrap",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Kavya-76/ECommerce-Website",
      featured: false,
    },
    {
      title: "Library Management System",
      description:
        "A web application to manage library operations including user registration, fine calculation for late submissions, and a book review and rating system. Built with the MERN stack.",
      image:
        "/lms.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      liveUrl: "#",
      githubUrl:
        "https://github.com/Kavya-76/Library-Management-System-Website",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.featured ? "lg:flex" : ""}`}>
                <div className={`${project.featured ? "lg:w-1/2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div
                  className={`p-6 ${
                    project.featured
                      ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button variant="default" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
