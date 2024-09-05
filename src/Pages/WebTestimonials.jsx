import React from 'react';
import Card from './Card';

const WebTestimonials = () => {
    const cards = [
        {
            title: "Discovery",
            content:
                "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Planning",
            content:
                "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Execution",
            content:
                "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Evaluation",
            content:
                "Lorem ipsum dolor sit amet consectetur. Tortor sapien commodo nisi volutpat. Lobortis sapien commodo nisi volutpat. Lobortis sed. Lorem ipsum dolor sit amet consectetur.",
        },
    ];

    return (
        <div>
            <div className="bg-black w-full pt-12 md:pt-22 flex flex-col items-center justify-start h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] my-4 px-4 md:px-0 pb-20">
                <div className="text-center my-4">
                    <h1 className="text-4xl font-dubai text-white">Our Process</h1>
                    <div className="flex justify-center items-center mt-2">
                        <div className="h-1 w-3/4 bg-blue-500 rounded-full"></div>
                        <div className="flex ml-2 space-x-1">
                            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
                <p className='text-white pt-6'>Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-12 lg:px-14 py-52 ">

                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} />
                    ))}
                </div>
                <div className="flex justify-end w-full px-4 py-3 pr-14">
                <button className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-500">
                    SEE OUR WORK
                </button>
                </div>
            </div>
            
        </div>
    );
};

export default WebTestimonials;

