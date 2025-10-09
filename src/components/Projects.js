import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Laundry Website",
      description: "A full-featured online website that handles Admin, customers, and employees with complete management system.",
      image: "https://tse1.mm.bing.net/th/id/OIP.Lc_StxfDjMTTp_SMenWBlgHaEt?pid=Api&P=0&h=220",
      tags: ["react", "node", "mongodb", "tailwind"],
      category: "fullstack",
      link: "https://jemila2.github.io/client2/",
      github: "https://github.com/jemila2/client2" 
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features.",
      image: "http://www.designeatrepeat.com/wp-content/uploads/To-Do-List_Printable.jpg",
      tags: ["react", "tailwind", "javascript"],
      category: "frontend",
      link: "https://fastidious-tulumba-d80cec.netlify.app",
      github: "https://fastidious-tulumba-d80cec.netlify.app"
    },
    {
      id: 3,
      title: "E-commerce Website",
      description: "Modern e-commerce platform with product listings, cart functionality, and user authentication.",
      image: "https://tse1.mm.bing.net/th/id/OIP.1IkXh3cYfWDyj_ciDYKKDgHaFj?pid=Api&P=0&h=220",
      tags: ["javascript", "api", "css", "html"],
      category: "frontend",
      link: "glittering-donut-ef7a62.netlify.app", 
      github: "glittering-donut-ef7a62.netlify.app"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Content management system for creating and publishing blog articles with admin dashboard.",
      image: "https://tse2.mm.bing.net/th/id/OIP.wxDCSWhj9fVDPVZ1Ut7JzwHaDy?pid=Api&P=0&h=220",
      tags: ["react", "node", "mysql", "express"],
      category: "fullstack",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Ternary Operators Demo",
      description: "Interactive educational website demonstrating ternary operators with practical examples.",
      image: "https://tse2.mm.bing.net/th/id/OIP.nsaNE6Ch2vqkrgJ60fUcogHaGL?pid=Api&P=0&h=220",
      tags: ["javascript", "html", "css", "responsive"],
      category: "frontend",
      link: "https://jemila2.github.io/Logicaloperation/",
      github: "https://github.com/jemila2/Logicaloperation"
    }
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
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Project+Image';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      project.link === "#" 
                        ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {project.link === "glittering-donut-ef7a62.netlify.app" ? 'Live Demo' : 'Live Demo'}
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;