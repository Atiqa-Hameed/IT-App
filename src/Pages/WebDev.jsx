import React from "react";
import Header from "../components/Header";
import hero from "../assets/Rectangle 37.png"; // Ensure the path is correct
import GitHubSection from "../components/GitHubSection";
import WebdevContent from "./WebdevContent";
import FaqSection from "./FaqSection";
import WebTestimonials from "./WebTestimonials";
import Review from './Review';
import Footer from "../components/Footer";

const WebDev = () => {
  return (
    <div>
      <Header />
      <div className="relative h-screen bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center px-4 sm:px-6 md:px-12 lg:px-24 text-white h-full font-Dubai mb-20">
          {/* Title and Description */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <span className="block">WEB</span>
              <span className="block mt-2 md:mt-0 md:ml-16">DEVELOPMENT</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin leading-relaxed mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur. Leo id bibendum aliquam
              eget.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-6 sm:space-y-0 sm:space-x-4">
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
        <GitHubSection />
        <WebdevContent />
        <WebTestimonials />
        <div className="text-center my-28">
          <h1 className="text-4xl font-dubai">Clients Reviews</h1>
          <div className="flex justify-center items-center mt-2">
            <div className="h-1 w-36 bg-blue-500 rounded-full"></div>
            <div className="flex ml-2 space-x-1">
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>
        <Review />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default WebDev;
