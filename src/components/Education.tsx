import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    year: "2021 - 2023",
    description: "Specialized in Software Engineering and AI/ML. Graduated with honors.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    year: "2017 - 2021",
    description: "Foundation in programming, algorithms, and system design.",
  },
  {
    degree: "High School Diploma",
    institution: "Central High School",
    year: "2015 - 2017",
    description: "Focus on Mathematics and Computer Science.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                <div className="timeline-dot" style={{ top: "8px" }} />
                
                <div className={`bg-card p-6 rounded-xl border border-border ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-body font-medium">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground font-body mb-3">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
