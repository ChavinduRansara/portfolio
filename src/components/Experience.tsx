import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'CodeGen International (Pvt) Ltd',
    companyURL : 'https://codegen.co.uk/',
    position: 'Software Engineer Internship',
    period: 'Dec 2023 - Jun 2024',
    description: 'Completed a full-stack development internship at CodeGen International, contributing to a client project and gaining experience in agile methodologies and modern web technologies.',
    technologies: ['Angular', 'Spring Boot', 'Oracle SQL Developer'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pt-32 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey in tech.</p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                      <a href={exp.companyURL} className="text-indigo-600 dark:text-indigo-400 underline">{exp.company}</a>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 text-justify dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}