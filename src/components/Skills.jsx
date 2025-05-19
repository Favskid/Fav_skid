import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaFigma, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiExpress, SiGraphql,
  SiMongodb, SiPostgresql, SiFirebase, SiWebpack,
  SiJest
} from 'react-icons/si';
import { BsCodeSlash, BsLightbulb, BsPeople, BsCodeSquare } from 'react-icons/bs';
import { DiVisualstudio } from 'react-icons/di';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <BsCodeSlash className="text-purple-500 text-xl" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Responsive Design", icon: <span className="text-purple-500">📱</span> }
      ]
    },
    {
      title: "Backend",
      icon: <BsCodeSlash className="text-purple-500 text-xl" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-800" /> },
        { name: "RESTful APIs", icon: <span className="text-blue-500">🔗</span> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
      ]
    },
    {
      title: "Tools & Others",
      icon: <BsCodeSlash className="text-purple-500 text-xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
        { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Jest", icon: <SiJest className="text-red-600" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
        { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
        { name: "Agile/Scrum", icon: <span className="text-green-600">🔄</span> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <BsPeople className="text-purple-500 text-xl" />,
      skills: [
        { name: "Communication", icon: <span className="text-blue-500">💬</span> },
        { name: "Problem-solving", icon: <BsLightbulb className="text-yellow-500" /> },
        { name: "Teamwork", icon: <span className="text-green-500">👥</span> },
        { name: "Adaptability", icon: <BsCodeSquare className="text-purple-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and proficiencies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-2">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center bg-white p-3 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                  >
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;