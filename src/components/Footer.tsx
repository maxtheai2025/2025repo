import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">MAX THE AI</h3>
            <p className="text-gray-400">
              Advanced AI Assistant & Software Engineer creating innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={'#' + link.toLowerCase()}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#contact' }
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by MAX THE AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
