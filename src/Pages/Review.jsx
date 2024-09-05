import React from 'react';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Review = () => {
  return (
    <div className='overflow-hidden'>
      <div className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg border py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-10 w-full sm:w-3/4 lg:w-3/5 mx-auto z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-blue-600">
            Company Name
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Felis lacus at habitasse ut
            quis semper. Sit lectus nibh arcu risus scelerisque neque. At at
            eget id laoreet sed diam orci. Orci turpis magna mauris elit aliquam
            id arcu viverra. Orci vulputate tellus tincidunt nullam etiam. Ut
            morbi id elementum quam.
          </p>
        </div>

        {/* Left Arrow */}
        <div className="absolute top-1/2 transform -translate-y-1/2 z-20 left-0 ml-4 sm:ml-6 md:ml-8 lg:left-10 xl:left-16 2xl:left-24">
          <MdOutlineArrowBackIosNew
            className="text-black cursor-pointer"
            size={48}
          />
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 transform -translate-y-1/2 z-20 right-0 mr-4 sm:mr-6 md:mr-8 lg:right-10 xl:right-16 2xl:right-24">
          <MdArrowForwardIos className="text-black cursor-pointer" size={48} />
        </div>
      </div>
      <div className="flex space-x-4 justify-center pt-10 pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-40">
        <span className="h-4 w-4 bg-gray-600 rounded-full blur-sm"></span>
        <span className="h-4 w-4 bg-gray-600 rounded-full blur-sm"></span>
        <span className="h-4 w-4 bg-black rounded-full"></span>
        <span className="h-4 w-4 bg-gray-600 rounded-full blur-sm"></span>
        <span className="h-4 w-4 bg-gray-600 rounded-full blur-sm"></span>
      </div>
    </div>
  );
};

export default Review;


