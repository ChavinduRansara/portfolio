import { ArrowRight, Download } from "lucide-react";
import profileImage from "../assests/Profile.jpg";

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-32 pb-32 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col custom-lg:flex-row items-center justify-center custom-lg:justify-between gap-12">
          <div className="flex-1 space-y-8 text-center custom-lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Chavindu Ransara
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate full-stack developer crafting beautiful and
              functional web experiences. Specialized in React, Angular, Spring
              Boot, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center custom-lg:justify-start">
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
          <div className="flex-1 flex justify-center order-first custom-lg:order-none">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 md:w-60 md:h-60 custom-lg:w-96 custom-lg:h-96 rounded-full shadow-2xl dark:shadow-indigo-500/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
