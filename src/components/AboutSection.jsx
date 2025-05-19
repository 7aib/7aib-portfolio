import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-primary/20">
              <img
                alt="Web developer working"
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate Web Developer with a keen eye for detail
            </h3>

            <p className="text-foreground/80 mb-4">
              I'm a web developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 2+ years
              of experience in the field, I am always looking to improve my
              skills and stay up-to-date with the latest technologies.
            </p>

            <p className="text-foreground/80 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className="text-foreground/80">Zohaib Shamshad</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className="text-foreground/80">Zohaibrana03@gmail.com</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">From:</h4>
                <p className="text-foreground/80">Rawalpindi, Pakistan</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Experience:</h4>
                <p className="text-foreground/80">2+ Years</p>
              </div>
            </div>

            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
