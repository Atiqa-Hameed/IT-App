import React from "react";
import image from "/img1.png";
import image1 from "/Rectangle 6.png";
import image2 from "/Rectangle 7.png";
import image3 from "/img2.png";

const AditionalContent = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="body-font py-24 md:py-32 lg:py-36 mt-16">
        <div className="container mx-auto flex flex-col items-center px-4">
          <img
            className="w-full max-w-full sm:w-2/3 md:w-3/5 lg:w-4/6 mb-10 object-cover object-center"
            alt="hero"
            src={image}
          />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium px-4 sm:px-8 lg:px-20 max-w-5xl text-center">
            Give your company a faster, more agile way to work with freelancers
            and contractors. Find, contract, and pay your external workforce in
            one click, with 100% compliance.
          </p>
        </div>
      </section>

      <div className="bg-gray-300 py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:py-14 lg:px-10 mx-auto max-w-full sm:max-w-5xl md:max-w-6xl lg:max-w-8xl">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-6 text-center">
          THAT LOT
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-center">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
      </div>

      <div className="text-center my-12 pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-dubai mb-4">
          Everything You Need To Get Ahead
        </h1>
        <div className="flex justify-center items-center mt-4">
          <div className="h-1 w-1/3 sm:w-2/5 bg-blue-500 rounded-full"></div>
          <div className="flex ml-2 space-x-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-36 px-4 sm:px-8 md:px-16">
        <img
          src={image1}
          className="w-full max-w-full md:w-1/2 lg:w-3/5 h-auto object-cover mt-8 md:mt-0"
          alt="Description"
        />

        <div className="md:ml-16 max-w-lg text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
            The Fastest Hiring And Payments
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-6">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing comprehensive solutions that drive
            efficiency, enhance security, and foster innovation.
          </p>
          <ul className="list-disc pl-5 mb-12 space-y-2 font-sans">
            <li>Managed IT Services:</li>
            <li>Cloud Solutions</li>
            <li>Cybersecurity</li>
            <li>IT Consulting</li>
          </ul>
          <a href="#" className="font-bold underline">
            Pay your external workforce in one click.
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-20 px-4 sm:px-8 md:px-16">
        <div className="md:mr-16 max-w-lg text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
            The Fastest Hiring And Payments
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-6">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing comprehensive solutions that drive
            efficiency, enhance security, and foster innovation.
          </p>
          <ul className="list-disc pl-5 mb-12 space-y-2 font-sans">
            <li className="font-bold">Managed IT Services:</li>
            <li className="font-bold">Cloud Solutions</li>
            <li className="font-bold">Cybersecurity</li>
            <li className="font-bold">IT Consulting</li>
          </ul>
          <a href="#" className="font-bold underline">
            Pay your external workforce in one click.
          </a>
        </div>

        <img
          src={image2}
          className="w-full max-w-full md:w-1/2 lg:w-3/5 h-auto object-cover mt-8 md:mt-0"
          alt="Description of image"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-20 px-4 sm:px-8 md:px-16">
        <img
          src={image3}
          className="w-full max-w-full md:w-1/2 lg:w-3/5 h-auto object-cover mt-8 md:mt-0"
          alt="Description of image"
        />

        <div className="md:ml-16 max-w-lg text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
            The Fastest Hiring And Payments
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-6">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing comprehensive solutions that drive
            efficiency, enhance security, and foster innovation.
          </p>
          <ul className="list-disc pl-5 mb-12 space-y-2 font-sans">
            <li>Managed IT Services:</li>
            <li>Cloud Solutions</li>
            <li>Cybersecurity</li>
            <li>IT Consulting</li>
          </ul>
          <a href="#" className="font-bold underline">
            Pay your external workforce in one click.
          </a>
        </div>
      </div>

      <div className="bg-gray-300 mt-32 py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:py-14 lg:px-10 mx-auto max-w-full sm:max-w-5xl md:max-w-6xl lg:max-w-8xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-6">
          THAT LOT
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-dubai mb-6">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
        <a
          href="#demo"
          className="bg-black text-white text-xs sm:text-sm md:text-base lg:text-base py-3 px-9 border border-transparent"
        >
          See Demo
        </a>
      </div>
    </div>
  );
};

export default AditionalContent;
