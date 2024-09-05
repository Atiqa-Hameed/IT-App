import React from "react";
import Footer from "../components/Footer";
import Card from "./Card";
import Review from "./Review";

const AboutTestimonials = () => {
  const cards = [
    {
      title: "Customer-Centric Approach",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Innovation",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Reliability",
      content:
        "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div>
      <div className="bg-black w-full pt-12 md:pt-22 flex flex-col items-center justify-start h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] my-4 px-4 md:px-0">
        <div className="text-center my-4">
          <h1 className="text-4xl font-dubai text-white">Why You Choose Us</h1>
          <div className="flex justify-center items-center mt-2">
            <div className="h-1 w-3/4 bg-blue-500 rounded-full"></div>
            <div className="flex ml-2 space-x-1">
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12 lg:px-24 py-28">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
      <div className="text-center my-28">
        <h1 className="text-4xl font-dubai">Testimonial's</h1>
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
      <Footer />
    </div>
  );
};

export default AboutTestimonials;
