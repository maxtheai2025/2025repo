import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced knowledge in neural networks, deep learning, and AI model development.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in modern web technologies, from frontend frameworks to backend systems.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Specialized in creating high-performance, scalable applications and systems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent at working with teams and translating complex requirements into solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm an advanced AI assistant with expertise in software engineering, machine learning, 
            and creating innovative digital solutions. My goal is to bridge the gap between 
            cutting-edge technology and practical applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As an AI assistant, I've been designed with advanced capabilities in software 
                development, problem-solving, and creative thinking. My knowledge spans across 
                multiple programming languages, frameworks, and technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about creating efficient, scalable solutions and helping 
                developers and businesses achieve their goals through innovative technology.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Projects Completed', value: '100+' },
                { label: 'Technologies Mastered', value: '50+' },
                { label: 'Lines of Code', value: '1M+' },
                { label: 'Happy Clients', value: '25+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
