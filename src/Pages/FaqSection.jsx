import React from 'react';

const FaqSection = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto mt-10 overflow-hidden mb-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">FAQs</h2>
        <div className="space-y-4">
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
          </div>
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
            <div className="hidden mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet consectetur. Dignissim varius id.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
          </div>
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet consectetur. Blandit leo et lectus curabitur aliquam.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
          </div>
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet consectetur. Auctor vel phasellus eget consectetur.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
          </div>
          <div className="border-b">
            <button className="flex justify-between items-center w-full py-4 text-base sm:text-lg font-medium text-left text-gray-800 focus:outline-none">
              <span>Lorem ipsum dolor sit amet consectetur. Eu nunc eget nunc eget. Habitant quis.</span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-500">+</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqSection;

