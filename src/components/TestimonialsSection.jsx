
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Smith',
      role: 'Product Manager at TechCorp',
      content: 'Working with this developer was a fantastic experience. They delivered the project on time and exceeded our expectations with their attention to detail and creative solutions.',
      avatar: 'person1'
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Founder of StartupX',
      content: 'I was impressed by the quality of work and professionalism. The developer understood our requirements perfectly and implemented everything with great care.',
      avatar: 'person2'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'The website redesign completely transformed our online presence. We\'ve received numerous compliments on the new design and functionality.',
      avatar: 'person3'
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/30 p-6 rounded-lg relative card-hover"
            >
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-2 rounded-full">
                <Quote size={24} />
              </div>
              
              <p className="text-foreground/80 mb-6 pt-4">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  alt={`${testimonial.name} avatar`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
