import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Email", icon: Mail, url: "mailto:hello@example.com" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-body">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 font-body mt-2">
              Designed & Built with ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
