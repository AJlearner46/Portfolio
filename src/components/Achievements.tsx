import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const achievementsData = [
  {
    title: "Best Innovation Award",
    organization: "Tech Conference 2023",
    year: "2023",
    icon: Trophy,
    description: "Recognized for developing an innovative AI-powered accessibility tool.",
  },
  {
    title: "Open Source Contributor",
    organization: "Major OSS Project",
    year: "2022",
    icon: Star,
    description: "Contributed significant features to a popular open-source framework.",
  },
  {
    title: "Hackathon Winner",
    organization: "Global Hack 2022",
    year: "2022",
    icon: Award,
    description: "First place for building a sustainable energy monitoring platform.",
  },
  {
    title: "Dean's List",
    organization: "University of Technology",
    year: "2021",
    icon: Medal,
    description: "Maintained top academic performance throughout the program.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-background rounded-2xl border border-border"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <achievement.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary font-body font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-lg font-display font-medium text-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-2">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
