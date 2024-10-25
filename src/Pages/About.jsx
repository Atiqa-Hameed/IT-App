import React from 'react';
import HeroImage from "../assets/Rectangle1.png"; 
import Header from "../components/Header";
import GitHubSection from '../components/GitHubSection';
import TextSection from '../components/Text';
import OurTeam from './OurTeam';
import AboutTestimonials from './AboutTestimonials';

const About = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center px-4 sm:px-6 md:px-12 lg:px-24 text-white h-full font-Dubai mb-20">
          {/* Title and Description */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              OUR STORY
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin leading-relaxed mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam eget.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-4">

              <a
                href="#demo"
                className="bg-primary text-base py-3 px-6 border border-transparent flex items-center justify-center w-48 hover:bg-primary-dark transition-colors duration-200"
              >
                BOOK A DEMO
              </a>
              <a
                href="#quote"
                className="bg-transparent text-base py-3 px-6 border border-white flex items-center justify-center w-48 hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </div>
        
        {/* GitHub Section */}
        <GitHubSection />  

        <TextSection
          title="Welcome"
          align="center"
          content="Background or why we started a company ...Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae. Lorem ipsum dolor sit amet consectetur. Pulvinar scelerisque purus suscipit cursus vestibulum nibh proin neque. Sed neque cursus congue ultrices enim donec in. Diam pretium odio tortor amet amet molestie enim aliquam massa vitae."
        />
        
        <TextSection 
          title="Our Team"
          align='center'
        />
        <OurTeam />
        <AboutTestimonials />
      </div>
    </div>
  );
}

export default About;
