import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "InjurySense - Injury Assessment System",
    description: "Multi-agent system for external injury assessment, Instead of giving direct answers, the system gathers evidence, checks medical literature, and produces structured analysis with confidence levels.",
    tags: ["CrewAI", "Agentic AI", "PubMed", "Streamlit", "Vision AI"],
    image: "🏥",
    github: "https://github.com/AJlearner46/InjurySense-AI",
  },
  {
    title: "Image Caption Generator",
    description: "Vision-language model combining ViT visual encoder with GPT-2 text decoder. Interactive Gradio interface with beam search inference deployed on Hugging Face Spaces.",
    tags: ["PyTorch", "ViT", "GPT-2", "Huggingface", "Gradio"],
    image: "🎨",
    github: "https://huggingface.co/spaces/ayushrupapara/vit-gpt2-image-captioner",
  },
  {
    title: "Agentic AI Trip Planner",
    description: "Multi-agent system for intelligent travel planning. Generates personalized itineraries, expense breakdowns, and destination insights via prompt-driven LLM workflows with real-time API integration.",
    tags: ["LangGraph", "FastAPI", "LLM", "Streamlit", "Multi-Agent"],
    image: "✈️",
    github: "https://github.com/AJlearner46/AI_Trip_Planner",
  },
  {
    title: "Reliable RAG-Based Q&A System",
    description: "Advanced question-answering agent with dynamic routing, hallucination detection, fallback management, and web search integration for reliable contextual answers.",
    tags: ["RAG", "Langchain", "Vector DB", "LLM", "LangGraph"],
    image: "🤖",
    github: "https://github.com/AJlearner46/Advanced-Graph-Based-RAG-Agent",
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

                {/* <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div> */}
              <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
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
