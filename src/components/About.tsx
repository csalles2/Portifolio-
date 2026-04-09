import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Desenvolvimento Fullstack", desc: "Sites modernos com HTML, CSS, JavaScript, React e TypeScript" },
  { icon: Palette, title: "Design Responsivo", desc: "Interfaces elegantes que se adaptam a qualquer dispositivo" },
  { icon: Rocket, title: "Performance", desc: "Aplicações rápidas, otimizadas e com ótima experiência do usuário" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Sobre <span className="text-gradient">Mim</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl ring-2 ring-border">
              <img src={profileImg} alt="Camille Salles" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Camille Salles
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou desenvolvedora fullstack apaixonada por criar experiências digitais incríveis. 
              Com experiência em tecnologias front-end e back-end, transformo ideias em 
              projetos funcionais e visualmente atraentes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Minha jornada na programação me levou a desenvolver diversos projetos, desde 
              lojas virtuais até aplicações web completas. Busco sempre aprender novas 
              tecnologias e aprimorar minhas habilidades para entregar soluções de alta qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que um bom design aliado a um código limpo e eficiente é a chave para 
              criar produtos digitais que realmente fazem a diferença.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
