import { Award } from 'lucide-react';

const certificates = [
  {
    name: "AWS Knowledge Badge: Compute",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Developed knowledge of AWS Compute concepts and services with a focus on Amazon EC2.",
    technologies: ["Amazon Elastic Compute Cloud", "Amazon Web Services (AWS)", "AWS Cloud", "AWS Compute", "EC2"],
    link: "https://www.credly.com/badges/ef312aed-c010-4e8a-bbeb-32822ed4bae5/public_url"
  },
  {
    name: "AWS Knowledge Badge: Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.",
    technologies: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Compute", "AWS Storage", "AWS Networking", "AWS Database", "AWS Security", "AWS Architecture", "AWS Pricing", "AWS Support"],
    link: "https://www.credly.com/badges/88035b00-e4e4-4269-8659-f8c9fbb5ae18/public_url"
  },
  {
    name: "Disaster Risk Monitoring Using Satellite Imagery",
    issuer: "NVIDIA Deep Learning Institute",
    date: "2024",
    description: "Learned to use Machine Learning and Deep Learning techniques to monitor disaster risks using satellite imagery.",
    technologies: ["Machine Learning", "Deep Learning", "Computer Vision", "Artificial Intelligence", "Satellite Imagery"],
    link: "https://learn.nvidia.com/certificates?id=8JMEIulyTSG0EM900OWEiw"
  },
  {
    name: "Version Control",
    issuer: "Meta",
    date: "2023",
    description: "Learned to use version control systems to manage and collaborate on code projects.",
    technologies: ["Version Control", "Git", "Github", "Bash (Unix Shell)", "Web Development"],
    link: "https://coursera.org/share/580a9974979cc30eb8f3438b08200b2d"
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    date: "2023",
    description: "Learned to build interactive websites and web applications using JavaScript.",
    technologies: ["JavaScript", "Test-Driven Development", "Object-Oriented Programming (OOP)", "Front-End Web Development"],
    link: "https://www.coursera.org/account/accomplishments/verify/HMFBW2LGFZYM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Professional certifications and achievements.</p>
        </div>
        <div className="space-y-8">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    View Certificate
                    <Award className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}