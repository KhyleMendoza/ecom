import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: 'https://source.unsplash.com/400x300/?electronics,gadgets' },
    { id: 2, name: 'Fashion', image: 'https://source.unsplash.com/400x300/?fashion,clothes' },
    { id: 3, name: 'Home & Living', image: 'https://source.unsplash.com/400x300/?home,decor' },
    { id: 4, name: 'Sports', image: 'https://source.unsplash.com/400x300/?sports,fitness' },
    { id: 5, name: 'Beauty', image: 'https://source.unsplash.com/400x300/?beauty,cosmetics' },
    { id: 6, name: 'Toys', image: 'https://source.unsplash.com/400x300/?toys,kids' }
  ];

  const handleExplore = (categoryName) => {
    alert(`Explore ${categoryName}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Browse Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = `https://source.unsplash.com/400x300/?abstract,pattern,${cat.id}`;
              }}
            />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-500">Shop the latest in {cat.name.toLowerCase()}.</p>
              </div>
              <button
                onClick={() => handleExplore(cat.name)}
                className="ml-4 whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;


