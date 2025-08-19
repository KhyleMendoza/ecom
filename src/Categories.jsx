import React from 'react';

const Categories = () => {
  const categories = [
    { 
      id: 1, 
      name: 'Electronics', 
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      icon: '📱',
      description: 'Latest gadgets & tech',
      itemCount: '250+ items'
    },
    { 
      id: 2, 
      name: 'Fashion', 
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      icon: '👗',
      description: 'Trendy clothes & accessories',
      itemCount: '180+ items'
    },
    { 
      id: 3, 
      name: 'Home & Living', 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      icon: '🏠',
      description: 'Furniture & home decor',
      itemCount: '120+ items'
    },
    { 
      id: 4, 
      name: 'Sports', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      icon: '⚽',
      description: 'Fitness & sports gear',
      itemCount: '95+ items'
    },
    { 
      id: 5, 
      name: 'Beauty', 
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      icon: '💄',
      description: 'Cosmetics & skincare',
      itemCount: '150+ items'
    },
    { 
      id: 6, 
      name: 'Toys', 
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop',
      icon: '🧸',
      description: 'Fun toys for all ages',
      itemCount: '80+ items'
    }
  ];

  const handleExplore = (categoryName) => {
    alert(`Explore ${categoryName}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shop by <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all categories with curated collections just for you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = `https://source.unsplash.com/400x300/?abstract,pattern,${cat.id}`;
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {cat.icon}
                </div>

                {/* Item Count Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {cat.itemCount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {cat.description}
                </p>
                
                <button
                  onClick={() => handleExplore(cat.name)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Explore Now
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button 
            onClick={() => alert('Browse all products')}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300"
          >
            Browse All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;


