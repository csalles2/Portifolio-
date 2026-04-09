import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectLoja from "@/assets/e-commerce.png";
import projectClinica from "@/assets/Clinica.png";
import projectHotel from "@/assets/hotelaria.jpg";
import projectAdvocacia from "@/assets/site-advocacia.png";
import projectTechstore from "@/assets/Tech Store.png";
import projectHamburgueria from "@/assets/smash-house.png";

const projects = [
  { title: "Loja de Roupas", desc: "Loja virtual moderna com animações e design responsivo", url: "https://csalles2.github.io/Loja-Virtual/", img: projectLoja },
  { title: "Hotel de Alto Padrão", desc: "Se hospede no Serra Vista, Hotel de alto padrão", url: "https://csalles2.github.io/Hotelaria-site/", img: projectHotel },
  { title: "Clinica Odontológica", desc: "Clinica Odontológica, deixe seu sorriso mais radiante! ", url: "https://csalles2.github.io/Clinica-Odontologica/", img: projectClinica },
  { title: "Advocacia", desc: "Soluções jurídicas seguras, com transparência e dedicação ao cliente", url: "https://advocacia-green-tau.vercel.app", img: projectAdvocacia },
  { title: "Tech Store", desc: "As melhores ofertas em eletrônicos você encontra aqui!", url: "https://csalles2.github.io/Sitemagus/", img: projectTechstore },
  { title: "Hamburgueria", desc: "A melhor da cidade Smash House, faça já o seu pedido", url: "https://hamburgueria-wheat.vercel.app", img: projectHamburgueria },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Meus <span className="text-gradient">Projetos</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-card-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
