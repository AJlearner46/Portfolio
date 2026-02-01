import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "🛒",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    image: "📋",
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates unique images using machine learning models.",
    tags: ["Python", "TensorFlow", "React"],
    image: "🎨",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "💼",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-medium text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
