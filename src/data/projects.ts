import { Project } from '../components/projects/types';
  
  export const projects: Project[] = [
    {
      id: 1,
      slug: 'ecommerce-platform',
      title: 'Real Time Change Detection Using SAR Images and GPU Parallel Programming',
      description: 'Final Year Project',
      details: "This group project, completing by a team of three, focuses on developing an advanced system for detecting changes in SAR images. The project leverages CUDA-based GPU acceleration to enable real-time processing, employing techniques such as Gaussian blurring, unsharp masking, and Otsu's thresholding to reduce speckle noise and enhance image quality. Advanced change detection algorithms identify terrain alterations and unauthorized activities with precision, addressing challenges like noise, alignment, and scalability. The project demonstrates the team's expertise in image processing, GPU programming, and collaborative problem-solving, with applications in surveillance, disaster management, and environmental monitoring.",
      image: '/assests/images/sar.png',
      tags: ['CUDA', 'Open CV', 'C++'],
      pdf: 'https://drive.google.com/file/d/1M6Hmn0fJ_II75l5BOdU_WP0i_BmS922J/preview'
    },
    {
      id: 2,
      slug: 'task-management',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      details: 'This task management app enables teams to collaborate effectively with features like real-time updates, task assignments, due dates, priority levels, and project organization. It includes a notification system and detailed activity logs.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      slug: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'An AI-powered application that generates various types of content.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500',
      tags: ['Next.js', 'OpenAI', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];