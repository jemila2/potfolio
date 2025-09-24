import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Laundry website",
      description: "A full-featured online website that handles Admin, customers, employees.",
      image: "https://tse1.mm.bing.net/th/id/OIP.Lc_StxfDjMTTp_SMenWBlgHaEt?pid=Api&P=0&h=220",
      tags: ["react", "node", "mongodb", "tailwind"],
      category: "fullstack",
      link: "https://jemila2.github.io/client2/"
    },
    {
      id: 2,
      title: "Task Management App",
      description: " You need more than just a notepard? A productivity application for managing tasks and projects with team collaboration.",
      image: "http://www.designeatrepeat.com/wp-content/uploads/To-Do-List_Printable.jpg",
      tags: ["react", "tailwind"],
      category: "frontend",
      link: "https://jemila2.github.io/mytodolist/"
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Real-time weather information with forecasts and interactive maps.",
      image: "https://tse2.mm.bing.net/th/id/OIP.wxDCSWhj9fVDPVZ1Ut7JzwHaDy?pid=Api&P=0&h=220",
      tags: ["javascript", "api", "css"],
      category: "frontend"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Content management system for creating and publishing blog articles.",
      image: "https://tse2.mm.bing.net/th/id/OIP.wxDCSWhj9fVDPVZ1Ut7JzwHaDy?pid=Api&P=0&h=220",
      tags: ["react", "node", "mysql"],
      category: "fullstack"
    },
    {
      id: 5,
      title: "Termary operators",
      description: "just a simple static page and is responsive.",
      image: "https://tse2.mm.bing.net/th/id/OIP.nsaNE6Ch2vqkrgJ60fUcogHaGL?pid=Api&P=0&h=220",
      tags: ["css", "html", "mysql"],
      category: "frontend",
      link: "https://jemila2.github.io/Logicaloperation/"
    },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website to showcase projects and skills.",
    //    image:"https://picsum.photos/400/250?random=1",
    //   tags: ["react", "tailwind", "responsive"],
    //   category: "frontend"
    // }
  ];

  const filters = [
    { key: 'all', name: 'All Projects' },
    { key: 'frontend', name: 'Frontend' },
    { key: 'fullstack', name: 'Fullstack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link || "#"} 
                  target={project.link ? "_blank" : "_self"}
                  rel={project.link ? "noopener noreferrer" : ""}
                  className={`inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline ${
                    !project.link ? 'pointer-events-none opacity-50' : ''
                  }`}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;