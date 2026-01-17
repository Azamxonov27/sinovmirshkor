
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Mirishkor.uz
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition">Haqida</a>
            <a href="#administration" className="hover:text-blue-600 transition">Ma'muriyat</a>
            <a href="#economy" className="hover:text-blue-600 transition">Iqtisodiyot</a>
            <a href="#landmarks" className="hover:text-blue-600 transition">Yodgorliklar</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Bog'lanish
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
