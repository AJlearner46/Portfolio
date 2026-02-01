import { motion } from "framer-motion";

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
              I'm a passionate developer and designer with a love for creating 
              beautiful, functional digital experiences. With a background in 
              both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while sketching new ideas.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Figma", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div>
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
      </div>
    </section>
  );
};

export default About;
