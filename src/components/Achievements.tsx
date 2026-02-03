import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const achievementsData = [
  {
    title: "Amazon ML Challenge",
    year: "2025",
    icon: Trophy,
    description: "Secured a rank 60 out of 75000+ participants, where we developed an entity extractor.",
  },
  {
    title: "GATE Qualified in DA",
    year: "2025",
    icon: Medal,
    description: "Qualified GATE exam in Data science and Artificial Intelligence.",
  },
  {
    title: "Kaggle Expert",
    year: "2024",
    organization: "Kaggle",
    icon: Star,
    description: "Achieved Kaggle Expert status in data science Notebooks and competitions.",
  },
  {
    title: "Amazon ML Summer School",
    year: "2024",
    icon: Star,
    description: "Completed intensive training on machine learning and AI applications.",
  },
  {
    title: "JEE Main",
    year: "2021",
    icon: Medal,
    description: "secured AIR 13907 in JEE Main exam out of 12 Lakh+ students.",
  },
  {
    title: "HSC Board Exam Rank",
    year: "2018",
    icon: Medal,
    description: "Secured 10th rank out of 10Lakh+ students in Gujarat State HSC Board Exam.",
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
