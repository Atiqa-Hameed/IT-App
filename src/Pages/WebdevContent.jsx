import React from "react";
import web from "/Rectangle 84.png";
import TextSection from "../components/Text";

const WebdevContent = () => {
  return (
    <div>
      {/* Services Section */}
      <div className="text-left my-12 pt-16 px-4 md:px-8 lg:px-16 ml-4 md:ml-8 lg:ml-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-dubai mb-4">
          Service Description
        </h1>
        <div className="flex items-center mb-4">
          <div className="h-1 w-32 sm:w-48 md:w-64 bg-blue-500 rounded-full mr-2"></div>
          <div className="flex space-x-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl max-w-full md:max-w-6xl">
          Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc.
          In suscipit eget tristique pretium. Congue quam diam enim mi
          pellentesque augue arcu. Praesent aliquam dapibus habitant mattis
          porta lorem porttitor lacus commodo. Elementum elementum orci etiam
          fames venenatis sed. N suscipit eget tristique pretium. Congue quam
          diam enim mi pellentesque augue arcu. Praesent aliquam dapibus
          habitant mattis porta lorem porttitor lacus commodo. Elementum
          elementum orci etiam fames venenatis sed more..
        </p>
      </div>

      {/* List and Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-20 px-4 md:px-8 lg:px-16">
        {/* Text on the left */}
        <div className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0 text-center ">
          <ul className="pl-8 space-y-4 text-2xl">
            <li>Front-End Development</li>
            <div className="h-1 w-1/11 mx-auto bg-gray-400 rounded-full"></div>
            <li>Back-End Development</li>
            <div className="h-1 w-1/11 mx-auto bg-gray-400 rounded-full"></div>
            <li>Content Management System (CMS) Integration</li>
            <div className="h-1 w-1/11 mx-auto bg-gray-400 rounded-full"></div>
            <li>WordPress Development</li>
            <div className="h-1 w-1/11 mx-auto bg-gray-400 rounded-full"></div>
            <li>Shopify Development</li>
            <div className="h-1 w-1/11 mx-auto bg-gray-400 rounded-full"></div>
          </ul>
        </div>
        {/* Add spacing between text and image */}
        <div className="md:mx-12">
          {/* Image on the right */}
          <img
            src={web}
            className="w-full md:w-[500px] h-auto object-cover"
            alt="Description of image"
          />
        </div>
      </div>

      <div className="my-12 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-dubai mb-6 text-left">
          Advantages
        </h1>
        <div className="flex items-center mb-6">
          <div className="h-1 w-24 sm:w-64 md:w-56 bg-blue-500 rounded-full mr-2"></div>
          <div className="flex space-x-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Advantages List */}
        <ul className="list-disc pl-4 sm:pl-8 md:pl-14 space-y-2 text-base sm:text-lg md:text-xl mx-0 max-w-full text-left">
          <li className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum
            felis enim eleifend tellus leo hac.
          </li>
          <li className="leading-relaxed">
            Tristique morbi suspendisse sit vestibulum euismod sit in aliquam.
            Ipsum pellentesque aliquam elementum sed.
          </li>
          <li className="leading-relaxed">
            Dictum velit eros amet morbi augue egestas.
          </li>
          <li className="leading-relaxed">
            Congue facilisis senectus amet commodo aliquam vitae mi amet duis.
          </li>
          <li className="leading-relaxed">
            Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae
            vel id diam.
          </li>
          <li className="leading-relaxed">
            Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet
            in diam sit vel non.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebdevContent;
