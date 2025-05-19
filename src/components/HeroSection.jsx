import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Zohaib Shamshad</span>
              <br />
              Web Developer
            </h1>

            <p className="text-xl text-foreground/80 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating clean, user-friendly applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={16} />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              <img
                alt="Professional web developer portrait"
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
