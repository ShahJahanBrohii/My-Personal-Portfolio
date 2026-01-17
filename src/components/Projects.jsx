import React from 'react';
import { Brain, Code2, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard'; 


const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: 'BloodLink',
      description: 'AI-powered blood donor matching system utilizing machine learning algorithms to connect donors with recipients in real-time, optimizing compatibility and reducing search time.',
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'ML'],
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/shahjahanbrohii/bloodlink',
      demo: null
    },
    {
      icon: Code2,
      title: 'Dental Cavity Detection',
      description: 'Advanced computer vision system using YOLO architecture for real-time dental cavity detection. Trained on custom dataset with 95%+ accuracy for early diagnosis.',
      tech: ['Python', 'YOLO', 'OpenCV', 'Deep Learning'],
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/shahjahanbrohii/dental-cavity-detection',
      demo: null
    },
    {
      icon: Brain,
      title: 'Neural Style Transfer',
      description: 'Implementation of artistic style transfer using VGG19 neural network. Transform images by applying artistic styles from famous paintings using deep learning.',
      tech: ['Python', 'TensorFlow', 'VGG19', 'CNN'],
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/shahjahanbrohii/neural-style-transfer',
      demo: null
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        icon={Briefcase} 
        title="Featured Projects" 
        subtitle="// Innovative solutions at scale"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects