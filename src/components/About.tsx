import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "C++", "Java", "C", "R", "Matlab"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "FastAPI", "React", "SpringBoot", "LangChain", "LangGraph", "CrewAI", "Git", "Docker", "Tableau"]
  },
  {
    category: "Core Concepts",
    skills: ["Machine Learning", "Generative AI", "LLMs", "Deep Learning", "Data Structures & Algorithms", "RAG", "Vibe Coding"]
  },
  {
    category: "Data & Systems",
    skills: ["Data Analysis", "Data Visualization", "DBMS"]
  }
];

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              I'm an AI engineer obsessed with building intelligent systems. With a deep foundation in mathematics and data science, I turn problems into 
              elegant AI solutions.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              My sweet spot? Taking cutting-edge AI concepts and translating them into production-ready 
              applications. Whether it's fine-tuning language models, designing intelligent agents, or 
              architecting data pipelines that hum, I'm driven by the challenge of making AI accessible 
              and impactful.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              When I'm not excercising with transformers or optimizing model inference, you'll find me 
              diving into the latest research papers, experimenting with new frameworks, or vibecoding gigs.
            </p>
            {/* <div className="flex flex-wrap gap-3 pt-4">
              {["Generative AI", "LLMs", "Machine Learning", "Python", "Vibe Coding","Data Science", "AI Agents", "Deep Learning", "Mathematics"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <h3 className="text-2xl font-display font-medium text-foreground mb-8">Skills & Expertise</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-sm font-display font-semibold text-primary mb-3 uppercase tracking-wide">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-body hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
