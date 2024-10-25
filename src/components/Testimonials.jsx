import React from "react";
import testi from "/testi.jpg";
import { IoStar } from "react-icons/io5";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Testimonials = () => {
  const headerColors = ["bg-red-500", "bg-green-500", "bg-red-500"];

  return (
    <section className="py-24">
      {/* Heading Section with Left and Right Arrows */}
      <div className="text-center my-12 pt-16">
        <h1 className="text-4xl font-dubai">
          Don't just take our word for it..
        </h1>
        <div className="flex justify-center items-center mt-4">
          <div className="h-1 w-1/3 bg-blue-500 rounded-full"></div>
          <div className="flex ml-2 space-x-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pt-10">
        {/* Left Arrow */}
        <MdOutlineArrowBackIosNew
          className="text-black cursor-pointer"
          size={44}
        />

        {/* Right Arrow */}
        <MdArrowForwardIos className="text-black cursor-pointer" size={44} />
      </div>

      <div className="container mx-auto mt-10 flex flex-wrap justify-center gap-6 px-6">
        {["JOHN SMITH", "JOHN SMITH", "JOHN SMITH"].map((name, index) => (
          <div
            key={index}
            className="relative p-8 bg-white shadow-md border h-80 max-w-xs"
          >
            <div
              className={`absolute top-0 left-0 w-full h-14 flex items-center px-4 border-b ${headerColors[index]}`}
            >
              <div className="flex items-center w-full h-full">
                <div className="flex items-center mx-4 flex-shrink-0">
                  <IoStar className="text-white" size={25} />
                </div>
                <div className="border-l border-gray-300 mx-4 flex-grow h-full" />{" "}
                {/* Vertical line */}
                <span className="text-xl font-dubai text-gray-800 flex-grow text-center">
                  REVIEW
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-14">
          
              <div className="flex items-start mb-6">
                <img
                  src={testi}
                  alt={`testimonial-${index}`}
                  className="rounded-full w-14 h-14 mr-4"
                />
                <div>
                  <h2 className="text-black text-left">{name}</h2>
                  <h3 className="text-gray-600 text-left">Customer, Agent</h3>
                </div>
              </div>
              <p className="text-gray-600 text-left">
                Give your company a faster, more agile way to work with
                freelancers and contractors. Find, contract, and pay your
                external workforce in one click, with 100% compliance.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 mt-32 py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:py-8 lg:px-10 mx-auto max-w-full sm:max-w-5xl md:max-w-6xl lg:max-w-8xl">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-6">
          THAT LOT
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-dubai mb-6">
          Give your company a faster, more agile way to work with freelancers
          and contractors. Find, contract, and pay your external workforce in
          one click, with 100% compliance.
        </p>
        <div className="flex justify-end">
          <a
            href="#demo"
            className="bg-black text-white text-xs sm:text-sm md:text-base lg:text-base py-3 px-9 border border-transparent"
          >
            BOOK A DEMO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
