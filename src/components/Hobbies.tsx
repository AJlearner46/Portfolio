import { motion } from "framer-motion";
import { Camera, Music, Book, Gamepad2, Plane, Coffee } from "lucide-react";

const hobbiesData = [
  { name: "Photography", icon: Camera, description: "Capturing moments and exploring visual storytelling" },
  { name: "Music", icon: Music, description: "Playing guitar and discovering new genres" },
  { name: "Reading", icon: Book, description: "Diving into sci-fi novels and tech books" },
  { name: "Gaming", icon: Gamepad2, description: "Strategy games and indie adventures" },
  { name: "Travel", icon: Plane, description: "Exploring new cultures and cuisines" },
  { name: "Coffee", icon: Coffee, description: "Brewing and tasting specialty coffees" },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hobbies & Interests</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <hobby.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-2">
                {hobby.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
