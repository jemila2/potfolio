import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/3 mt-10 md:mt-0">
            <div className="w-48 h-48 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://tse4.mm.bing.net/th/id/OIP.TmSm9jNB9P2gYnU1ruZ_QQAAAA?pid=Api&P=0&h=220" 
                alt="Jemila Abubakar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate fullstack developer with experience, responsive web applications. My journey in web development started during my IT days, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in React.js, Node.js and enjoy working with modern CSS frameworks like Tailwind CSS. I believe in writing clean, maintainable code and greate user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding, you can find me Reading Qur'an, reading tech blogs, or experimenting with new web technologies. I'm always open to new opportunities and interesting projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg shadow hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;