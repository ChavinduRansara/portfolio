import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ChatWidget from './components/chat/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Chavindu Ransara. All rights reserved.</p>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}

export default App;