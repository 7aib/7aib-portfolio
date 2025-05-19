
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, BookOpen, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const experiences = [
    {
      period: '2020 - Present',
      role: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      description: 'Leading the frontend development team, implementing new features, and optimizing performance for the company\'s main product.'
    },
    {
      period: '2018 - 2020',
      role: 'Web Developer',
      company: 'Digital Agency XYZ',
      description: 'Developed responsive websites and web applications for various clients across different industries.'
    },
    {
      period: '2016 - 2018',
      role: 'Junior Developer',
      company: 'Startup Studio',
      description: 'Assisted in the development of web applications and gained experience in modern frontend frameworks.'
    }
  ];

  const education = [
    {
      period: '2012 - 2016',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      description: 'Focused on web development, algorithms, and software engineering principles.'
    },
    {
      period: '2018',
      degree: 'Advanced Web Development Certification',
      institution: 'Online Academy',
      description: 'Specialized training in modern JavaScript frameworks and responsive design.'
    }
  ];

  const funFacts = [
    {
      icon: <Coffee size={36} />,
      title: '500+',
      description: 'Cups of coffee'
    },
    {
      icon: <Award size={36} />,
      title: '20+',
      description: 'Completed projects'
    },
    {
      icon: <BookOpen size={36} />,
      title: '100+',
      description: 'Hours of learning'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me as a developer.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border border-primary/20">
              <img  alt="Developer portrait" className="w-full h-auto" src="https://images.unsplash.com/photo-1529661197280-63dc545366c8" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              I'm <span className="gradient-text">Your Name</span>, a Web Developer
            </h2>
            
            <p className="text-foreground/80 mb-4">
              I'm a passionate web developer with a strong focus on creating clean, efficient, and user-friendly websites and applications. With over 5 years of experience in the industry, I've had the opportunity to work on a wide range of projects, from small business websites to complex web applications.
            </p>
            
            <p className="text-foreground/80 mb-6">
              My approach to development combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className="text-foreground/80">Your Name</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className="text-foreground/80">your.email@example.com</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">From:</h4>
                <p className="text-foreground/80">Your Location</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Experience:</h4>
                <p className="text-foreground/80">5+ Years</p>
              </div>
            </div>
            
            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-secondary/30 p-6 rounded-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-foreground/90 mb-3">{exp.company}</h4>
                <p className="text-foreground/70">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-secondary/30 p-6 rounded-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-lg text-foreground/90 mb-3">{edu.institution}</h4>
                <p className="text-foreground/70">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Fun Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="bg-secondary/30 p-6 rounded-lg text-center card-hover">
                <div className="text-primary mb-4 flex justify-center">
                  {fact.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{fact.title}</h3>
                <p className="text-foreground/70">{fact.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
