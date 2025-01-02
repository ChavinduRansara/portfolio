import ProjectList from './projects/ProjectList';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work that I'm proud of.</p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
}