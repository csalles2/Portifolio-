import { motion } from "framer-motion";

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "TypeScript", "MySQL"];
const tools = ["VS Code", "Figma", "GitHub", "Render", "Vercel", "Automação com IA"];

const SkillBadge = ({ name, index }: { name: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
  >
    {name}
  </motion.span>
);

const Skills = () => {
  return (
    <section id="conhecimentos" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Conhecimentos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((t, i) => <SkillBadge key={t} name={t} index={i} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Ferramentas</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((t, i) => <SkillBadge key={t} name={t} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
