import React from 'react';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-[65vh] flex items-center justify-center py-6 md:py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white/10">
            <img 
              src={profileImage} 
              alt="FAVSKID" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-left">
          {/* Typewriter Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: [
                  "HELLO, I AM FAVSKID",
                  "Full Stack Developer — React & Node.js",
                  "LET'S BUILD SOMETHING GREAT!",
                  "I CREATE BEAUTIFUL & FUNCTIONAL WEBSITES",
                  "PASSIONATE ABOUT CODE & DESIGN",
                  "TURNING IDEAS INTO REALITY"
                ],
              }}
            />
          </h1>

          {/* Divider with Intro */}
          <div className="my-6">
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-3"></div>
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
              Intro
            </span>
          </div>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            <b>I'm OLODA OLADIPUPO FAVOUR</b>&nbsp;
            A passionate Full-Stack Web Developer 
            dedicated to crafting clean, responsive, and user-focused digital experiences.
            With a strong command of modern front-end technologies like HTML, CSS, JavaScript, and React, I specialize in building visually engaging interfaces that function flawlessly across devices.
            I also bring foundational back-end skills using Node.js and Express, enabling me to contribute meaningfully to full-stack projects.
            Driven by curiosity and a commitment to continuous learning, I stay on the cutting edge of web development trends — always striving to deliver seamless, intuitive, and high-impact user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg font-medium text-purple-600 border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;