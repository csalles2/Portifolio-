import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Desenvolvedora Fullstack
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Camille <span className="text-gradient">Salles</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Criando experiências digitais modernas, responsivas e com design profissional.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/csalles2" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/camille-salles-4585b4234/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/c.salles2/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <MessageCircle size={20} />
            </a>
          </div>
          <a href="#projetos" className="inline-block mt-8 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Ver Projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-border">
              <img src={profileImg} alt="Camille Salles" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
