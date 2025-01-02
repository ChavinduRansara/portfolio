import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-24 pb-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Chavindu Ransara
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate full-stack developer crafting beautiful and
              functional web experiences. Specialized in React, Angular, Spring Boot, Node.js, and
              modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Let's talk
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-600 dark:text-gray-300 transition-colors"
              >
                View my work
              </a>
              <a
                href="/path/to/your/cv.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-600 dark:text-gray-300 transition-colors"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              // src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600"
              src="/assests/images/Profile.jpg"
              alt="Profile"
              className="rounded-full shadow-2xl dark:shadow-indigo-500/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
