"use client"
'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'; // Assuming Next.js for theme switching
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactMe: React.FC = () => {
  const { theme } = useTheme(); // Next.js theme switcher hook
  const [mounted,setMounted]=useState(false);

  useEffect(()=>{
    setMounted(true);
  },[])

  if(!mounted)return null;
  return (
    <div className={`flex flex-col items-center justify-center h-[24rem] ${theme === 'dark' ? 'bg-transparent  text-white' : 'bg-transparent text-black'}`}>
      <motion.h1
        className=" mb-4 text-black dark:text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        | Let's Connect |
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          href="mailto:mekalanavyanthyadav2003@gmail.com"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Mail className="h-8 w-8 mb-2 text-red-800" />
          <span>Email</span>
        </motion.a>

        <motion.a
          href="https://github.com/Navyanth03/"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white dar rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Github className="h-8 w-8 mb-2 text-gray-700" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/m-navyanth-bb475b288/"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Linkedin className="h-8 w-8 mb-2 text-blue-700" />
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ContactMe;
