import React from 'react'

const Card = ({ title, content }) => (
    <div className="bg-white shadow-lg  p-6 max-w-sm mx-auto text-center">
      <h3 className="text-xl font-dubai mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );

export default Card
