import React from 'react';

const TextSection = ({ title, content, align }) => {
  return (
    <div className={`text-${align} my-12`}>
      <h1 className="text-4xl font-dubai pt-16">{title}</h1>
      <div className="flex justify-center  mt-4">
        <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
        <div className="flex ml-2 space-x-1">
          <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <p className="mt-16 text-base sm:text-lg md:text-xl lg:text-1xl font-thin leading-relaxed mx-auto max-w-5xl text-left">
        {content}
      </p>
    </div>
  );
};

export default TextSection;
