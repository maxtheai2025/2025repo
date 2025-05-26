import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading AI development projects and implementing machine learning solutions.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2022 - 2023',
      description: 'Developed scalable web applications using modern technologies.'
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built and maintained various software systems and applications.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
              <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
