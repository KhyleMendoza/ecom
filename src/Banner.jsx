import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerData = [
    {
      id: 1,
      title: "Summer Sale",
      subtitle: "Up to 50% Off",
      description: "Get the best deals on electronics, fashion, and more!",
      buttonText: "Shop Now",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Latest Collection 2024",
      description: "Discover our newest products with cutting-edge technology",
      buttonText: "Explore",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "On Orders Over $99",
      description: "Fast and reliable delivery to your doorstep",
      buttonText: "Learn More",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [bannerData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  const handleButtonClick = (banner) => {
    alert(`Clicked: ${banner.buttonText} for ${banner.title}`);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      {/* Background Images */}
      <div className="relative w-full h-full">
        {bannerData.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.backgroundImage}
              alt={banner.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a different random image if one fails
                e.target.src = `https://source.unsplash.com/1200x600/?abstract,business,${index}`;
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="max-w-4xl px-4">
          <div
            key={currentSlide}
            className="animate-fade-in"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {bannerData[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300 drop-shadow-lg">
              {bannerData[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
              {bannerData[currentSlide].description}
            </p>
            <button
              onClick={() => handleButtonClick(bannerData[currentSlide])}
              className={`${bannerData[currentSlide].buttonColor} text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              {bannerData[currentSlide].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Banner;