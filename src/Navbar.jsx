import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const navigationLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Products', href: '#', active: false },
    { name: 'Categories', href: '#', active: false },
    { name: 'Deals', href: '#', active: false },
    { name: 'About', href: '#', active: false },
    { name: 'Contact', href: '#', active: false }
  ];

  const handleLinkClick = (linkName) => {
    alert(`Clicked: ${linkName}`);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    alert(`Cart has ${cartCount} items`);
  };

  const handleSearchSubmit = () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
      searchInput.value = '';
    }
  };

  const handleProfileClick = () => {
    alert('Profile clicked - Login/Signup functionality');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                🛍️ ShopNow
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    link.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                id="search-input"
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit();
                  }
                }}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                onClick={handleSearchSubmit}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-blue-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Profile/Login */}
            <button
              onClick={handleProfileClick}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Profile"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => alert('Wishlist clicked')}
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              aria-label="Wishlist"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Shopping Cart */}
            <button
              onClick={handleCartClick}
              className="relative text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart */}
            <button
              onClick={handleCartClick}
              className="relative text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit();
                      e.target.value = '';
                    }
                  }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.name)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  link.active
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Action Buttons */}
            <div className="px-3 py-2 space-y-2">
              <button
                onClick={handleProfileClick}
                className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile / Login
              </button>

              <button
                onClick={() => alert('Wishlist clicked')}
                className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-red-500 hover:bg-white rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;