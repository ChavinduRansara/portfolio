import { Project } from '../components/projects/types';
import sarImage from '../assets/sar.png';
import shuttleImage from '../assets/shuttle.png';
import agricurImage from '../assets/agricur.png';
import speedImage from '../assets/speed.jpeg';

  
  export const projects: Project[] = [
    {
      id: 1,
      slug: 'sar-change-detection',
      title: 'Real Time Change Detection Using SAR Images and GPU Parallel Programming',
      description: 'Final Year Project',
      details: "This group project, completing by a team of three, focuses on developing an advanced system for detecting changes in SAR images. The project leverages CUDA-based GPU acceleration to enable real-time processing, employing techniques such as Gaussian blurring, unsharp masking, and Otsu's thresholding to reduce speckle noise and enhance image quality. Advanced change detection algorithms identify terrain alterations and unauthorized activities with precision, addressing challenges like noise, alignment, and scalability. The project demonstrates the team's expertise in image processing, GPU programming, and collaborative problem-solving, with applications in surveillance, disaster management, and environmental monitoring.",
      image: sarImage,
      tags: ['CUDA', 'Open CV', 'C++'],
      pdf: 'https://drive.google.com/file/d/1M6Hmn0fJ_II75l5BOdU_WP0i_BmS922J/preview'
    },
    {
      id: 2,
      slug: 'shuttle-app',
      title: 'Shuttle Office Transport Managment Mobile App',
      description: 'A Flutter-based mobile app that automates office transport scheduling, offering real-time bus tracking, automated notifications, and a streamlined user experience. Built with Firebase backend to enhance reliability and efficiency.',
      image: shuttleImage,
      tags: ['Flutter', 'Firebase'],
      github: 'https://github.com',
    },
    {
      id: 3,
      slug: 'e-commerce-platform',
      title: 'Agricur E-Commerce Platform',
      description: 'A digital platform connecting farmers, buyers, and couriers, enabling secure transactions, real-time communication, and efficient agricultural trading. Built with React, Node.js, and PostgreSQL, it promotes market accessibility and sustainability.',
      image: agricurImage,
      tags: ['React.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/orgs/Agricur/repositories',
      live: 'https://youtu.be/1dH1I_nsSAc?si=MqkUomvg2ZeLlwf6',
    },
    {
        id: 4,
        slug: 'speed-tracker',
        title: 'Speed Tracker Web Application',
        description: 'A Next.js-based web application that measures and tracks travel speed in real-time, designed for public transport users. Features include live speed updates, distance calculation, metric/imperial unit toggle, and a visual speed history graph using Recharts.',
        image: speedImage,
        tags: ['Next.js', 'Tailwind CSS'],
        github: 'https://github.com/ChavinduRansara/speed-tracker',
        live: 'https://starlit-genie-ba9db1.netlify.app/',
      },
  ];