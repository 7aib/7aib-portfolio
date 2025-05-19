import React from "react";

export const projectsData = [
  {
    id: 1,
    title: "Stammer.ai",
    description:
      "A white label AI saas. Building a platform that allows users to create their own AI-powered chatbots for various applications, including customer support, lead generation, and more.",
    image: (
      <img
        alt="E-commerce website screenshot"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1601598851547-4302969d0614"
      />
    ),
    tags: ["Python", "Django", "OPENAI", "Stripe"],
    liveUrl: "https://stammer.ai",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: (
      <img
        alt="Task management app interface"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7"
      />
    ),
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/yourusername/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
    image: (
      <img
        alt="Portfolio website design"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1613640990758-9b8d478f37af"
      />
    ),
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather application that provides current conditions and forecasts for locations worldwide.",
    image: (
      <img
        alt="Weather app interface"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1532548722196-f7143b65060f"
      />
    ),
    tags: ["JavaScript", "API Integration", "CSS3"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather",
    featured: false,
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "An application that helps users discover recipes based on available ingredients and dietary preferences.",
    image: (
      <img
        alt="Recipe finder app screenshot"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525760270690-f7e1ebe64723"
      />
    ),
    tags: ["React", "API Integration", "Styled Components"],
    liveUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/yourusername/recipes",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A mobile-responsive application for tracking workouts, progress, and fitness goals.",
    image: (
      <img
        alt="Fitness tracker app interface"
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1532288744908-b37abee2ed71"
      />
    ),
    tags: ["React Native", "Firebase", "Chart.js"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness",
    featured: false,
  },
];
