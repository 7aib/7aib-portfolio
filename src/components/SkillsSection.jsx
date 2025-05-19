import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Smartphone } from "lucide-react";
import SkillCard from "@/components/SkillCard";

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code size={36} />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.",
    },
    {
      icon: <Database size={36} />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express, and database integration.",
    },
    {
      icon: <Layout size={36} />,
      title: "UI/UX Design",
      description:
        "Designing intuitive user experiences and visually appealing interfaces that engage users.",
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications using React Native and other modern frameworks.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here are the main areas I specialize in:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I Work With
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "JavaScript",
              "React",
              "Python",
              "Django",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "PostgreSQL",
              "GraphQL",
              "REST APIs",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-secondary/20 rounded-lg p-4 text-center card-hover"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
