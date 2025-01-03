import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Header from '../components/Header';
import ChatWidget from '../components/chat/ChatWidget';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <main>
        <Header/>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Chavindu Ransara. All rights reserved.</p>
        </div>
      </footer>
      <ChatWidget />
    </>
  );
}