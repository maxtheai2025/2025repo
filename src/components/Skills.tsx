import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 92 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenAI APIs', level: 95 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS/Azure', level: 80 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + '%' }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1), duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Technologies' },
              { number: '100+', label: 'Projects' },
              { number: '5+', label: 'Years Experience' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
