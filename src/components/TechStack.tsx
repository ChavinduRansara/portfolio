import { useState } from 'react';
import java from '../assets/tech/Java.svg';
import angular from '../assets/tech/angular.svg';
import cpp from '../assets/tech/cpp.svg';
import express from '../assets/tech/Express.svg';
import flutter from '../assets/tech/Flutter.svg';
import html from '../assets/tech/HTML5.svg';
import javascript from '../assets/tech/JavaScript.svg';
import mysql from '../assets/tech/MySQL.svg';
import nodejs from '../assets/tech/Node.js.svg';
import oracle from '../assets/tech/Oracle.svg';
import postgresql from '../assets/tech/PostgresSQL.svg';
import python from '../assets/tech/Python.svg';
import react from '../assets/tech/React.svg';
import spring from '../assets/tech/spring-boot.svg';
import tailwind from '../assets/tech/Tailwind CSS.svg';

interface Technology {
  name: string;
  icon: string;
  category: 'languages' | 'frontend' | 'backend' | 'mobile' | 'database';
}

const technologies: Technology[] = [
  // Programming Languages
  { name: 'Java', icon: java, category: 'languages' },
  { name: 'Python', icon: python, category: 'languages' },
  { name: 'C++', icon: cpp, category: 'languages' },
  { name: 'JavaScript', icon: javascript, category: 'languages' },
  
  // Frontend
  { name: 'React', icon: react, category: 'frontend' },
  { name: 'Angular', icon: angular, category: 'frontend' },
  { name: 'HTML', icon: html, category: 'frontend' },
  { name: 'Tailwind CSS', icon: tailwind, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: nodejs, category: 'backend' },
  { name: 'Spring Boot', icon: spring, category: 'backend' },
  { name: 'Express', icon: express, category: 'backend' },
  
  // Mobile
  { name: 'Flutter', icon: flutter, category: 'mobile' },

  // Databases
  { name: 'MySQL', icon: mysql, category: 'database' },
  { name: 'PostgreSQL', icon: postgresql, category: 'database' },
  { name: 'Oracle', icon: oracle, category: 'database' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech stack" className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {['all', 'languages', 'frontend', 'backend', 'mobile', 'database'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-center">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm md:text-base text-gray-900 dark:text-white font-medium text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}