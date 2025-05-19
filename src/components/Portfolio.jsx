import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Education
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Bachelor of Sciences in Computer Science</h4>
                <p className="text-purple-600 font-medium">University of Technology</p>
                <p className="text-gray-500 text-sm">2015-2019</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Full Stack Web Development Certification</h4>
                <p className="text-purple-600 font-medium">Tech Academy</p>
                <p className="text-gray-500 text-sm">2019-2020</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Senior Frontend Developer</h4>
                <p className="text-purple-600 font-medium">TechCorp Inc.</p>
                <p className="text-gray-500 text-sm mb-2">2021-Present</p>
                <p className="text-gray-600">
                  Led the development of multiple web applications using React and TypeScript.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Full-Stack Developer</h4>
                <p className="text-purple-600 font-medium">Web Solutions Ltd.</p>
                <p className="text-gray-500 text-sm mb-2">2019-2021</p>
                <p className="text-gray-600">
                  Developed and maintained several client websites using JavaScript, Node.js, and React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;