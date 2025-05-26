import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'ai-chat-app',
      title: 'AI Chat Application',
      description: 'Advanced chatbot with natural language processing capabilities.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'Node.js', 'OpenAI API'],
      github: '#',
      live: '#'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['Next.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 'data-dashboard',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis.',
      image: 'https://via.placeholder.com/400x250',
      tech: ['React', 'D3.js', 'Python'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={project.id + '-tech-' + techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
