import React from "react";

const GitHubSection = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex p-0 m-0 font-sans font-bold flex-wrap justify-center -mt-6">
        {Array(5)
          .fill("GitHub")
          .map((item, index) => (
            <li
              key={index}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-1 xs:mx-2 sm:mx-4 md:mx-6 lg:mx-8"
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GitHubSection;

