import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Senior Frontend Developer',
    period: '2021 - Present',
    description: 'Led the development of multiple high-impact web applications, improving user engagement by 40%.',
    technologies: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    company: 'Digital Solutions Inc',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained various client projects, focusing on scalable architecture and performance optimization.',
    technologies: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    company: 'StartUp Hub',
    position: 'Junior Developer',
    period: '2018 - 2019',
    description: 'Contributed to the development of innovative web applications and learned modern development practices.',
    technologies: ['JavaScript', 'Vue.js', 'Express'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors">
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
                      <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
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