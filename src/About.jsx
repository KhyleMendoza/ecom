import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About CheapShop</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're your trusted partner in finding quality products at unbeatable prices. 
            CheapShop is dedicated to making shopping affordable and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Products</h3>
            <p className="text-gray-600">Carefully selected items that meet our quality standards.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing on thousands of products.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


