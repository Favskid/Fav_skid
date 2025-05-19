import React from 'react';

const Aboutme = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo (Optional) */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white/10">
              <img 
                src="/profile-about.jpg" 
                alt="FAVSKID" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate Full-Stack Developer
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm OLODA OLADIPUPO FAVOUR, a dedicated web developer with 4+ years of experience 
              creating digital solutions that blend beautiful design with robust functionality. 
              My journey in tech began with a curiosity about how things work, which evolved 
              into a passion for building things that make a difference.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-3">What I Do:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Create responsive, user-friendly web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Develop full-stack solutions with React & Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Optimize performance and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Collaborate with teams to deliver exceptional products</span>
                </li>
              </ul>
            </div>

            <a 
              href="/cv-favskid.pdf" 
              download 
              className="inline-block px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;