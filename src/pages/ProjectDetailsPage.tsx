import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project]);

  const handleBackToProjects = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project]);

  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={handleBackToProjects}
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          {project.details && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Project Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                {project.details}
              </p>
            </div>
          )}
          {project.pdf && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Project Documentation
              </h2>
              <iframe
                src={project.pdf}
                title="Project Documentation"
                className="w-full h-[600px] border rounded-lg"
              ></iframe>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={20} className="mr-2" />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
