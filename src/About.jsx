import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        We’re a demo store showcasing a modern React + Tailwind storefront. Our goal is to provide a clean,
        responsive, and component-driven UI you can expand into a fully functional shop.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">Curated items selected for value and durability.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Great Experience</h3>
          <p className="text-gray-600">A fast, simple shopping experience you’ll enjoy.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-gray-600">We’re here to help you with any questions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;


