import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground font-body text-lg mb-4 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium mb-6 text-foreground">
            Ayush Rupapara
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body font-light max-w-2xl mx-auto mb-8">
            Passionate Learner & Developer, building things.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:opacity-90 transition-opacity"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-border text-foreground rounded-full font-body font-medium hover:bg-muted transition-colors"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
