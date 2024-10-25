import React from "react";
import image4 from "/Rectangle 12.png";
import image5 from "/Rectangle 13.png";
import image6 from "/Rectangle 14.png";
import image7 from "/Rectangle 15.png";
import {  FaCogs, FaDollarSign, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const images = [
  { src: image4, alt: "First Image Description" },
  { src: image5, alt: "Second Image Description" },
  { src: image6, alt: "Third Image Description" },
  { src: image7, alt: "Fourth Image Description" },
];
const stats = [
  { icon: <FaCogs />, label: '12 Services' },
  { icon: <FaDollarSign />, label: '$200k Revenue' },
  { icon: <FaProjectDiagram />, label: '200+ Projects' },
  { icon: <FaUsers />, label: '300+ Happy Clients' }
];

const Statistics = () => {
  return (
    <div className="bg-black w-full pt-32 md:pt-64 mt-28 flex flex-col items-center justify-center md:justify-between h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] my-4 px-4 md:px-0">
      <div className="flex flex-wrap justify-center md:justify-between w-full space-y-6 md:space-y-0 md:space-x-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="object-cover h-[150px] sm:h-[200px] md:h-[250px] lg:h-[400px]  w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.3333%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
          />
        ))}
      </div>
      <div className="bg-black ml-2 md:px-8 py-8 mx-auto">
        <p className="text-white  md:text-2xl lg:text-3xl mt-28 font-bold max-w-2xl text-left">
          We specialize in delivering cutting-edge IT services tailored to meet
          the unique needs of businesses across industries. Our expert team is
          dedicated to providing comprehensive solutions that drive efficiency,
          enhance security, and foster innovation.
        </p>
        <a href="" className="text-white font-bold underline mt-4 block">
          Pay your external workforce in one click.
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-gray-300 font-bold pt-16 pb-12 md:pt-32 md:pb-20 items-center">
    {stats.map((stat, index) => (
      <div key={index} className="flex flex-col items-center gap-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {stat.icon}
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
    
    
    </div>
  );
};

export default Statistics;
