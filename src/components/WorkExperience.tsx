import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const workExperienceData = [
  {
    title: "AI Engineer",
    company: "Tata Consultancy Services (TCS)",
    duration: "Aug 2025 - Present",
    type: "Full-time",
    description: "Developing intelligent workflows and agentic systems for ECM (Enterprise Content Management).",
    skills: ["Python", "Agentic AI", "LLMs", "Contract Intelligence", "AI Workflows"],
    highlights: [
      "Building agentic AI systems for contract intelligence",
      "Developing intelligent decision-making workflows",
      "Implementing Python-based AI solutions for enterprise applications"
    ]
  },
  // {
  //   title: "ILP Training - Full Stack Development",
  //   company: "Tata Consultancy Services (TCS)",
  //   duration: "Aug 2025 - Dec 2025",
  //   type: "Training Program",
  //   description: "Completed comprehensive TCS ILP training with hands-on exposure to full-stack technologies.",
  //   skills: ["Java", "SQL", "SpringBoot", "React", "Node.js"],
  //   highlights: [
  //     "Hands-on exposure to Java, SQL, and database design",
  //     "Built full-stack applications using SpringBoot and React",
  //     "Collaborated on team-based technical projects",
  //     "Developed professional and business communication skills"
  //   ]
  // },
  {
    title: "Freelance - RAG Chatbot Developer",
    company: "Self-Employed",
    duration: "jun 2025 - Aug 2025",
    type: "Freelance",
    description: "Developed a RAG-based chatbot application for healthcare platform APIs.",
    skills: ["RAG", "LangChain", "Vector Database", "Healthcare APIs", "Python"],
    highlights: [
      "Built a healthcare retrieval-augmented assistant integrating live APIs and structured retrieval."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {workExperienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Left Column - Meta Info */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {experience.company}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-semibold">
                    {experience.type}
                  </span>
                </div>

                {/* Right Column - Description */}
                <div className="md:col-span-3">
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-display font-semibold text-foreground mb-2">
                      Key Contributions:
                    </h4>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
