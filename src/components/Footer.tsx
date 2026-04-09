import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Camille Salles. Todos os direitos reservados.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/csalles2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/camille-salles-4585b4234/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
        <a href="https://www.instagram.com/c.salles2/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={18} /></a>
        <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><MessageCircle size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
