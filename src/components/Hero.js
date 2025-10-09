import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Jemila Abubakar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Frontend & backend Developer 
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I create beautiful, functional websites with a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg shadow hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
         <div className="md:w-1/3 mt-10 md:mt-0">
            <div className="w-48 h-48 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://tse4.mm.bing.net/th/id/OIP.TmSm9jNB9P2gYnU1ruZ_QQAAAA?pid=Api&P=0&h=220" 
                alt="Jemila Abubakar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;