
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold font-montserrat tracking-wider">
          <Link to="/">BLVCK</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="text-white uppercase text-sm tracking-widest nav-link">Home</Link>
          <Link to="/shop" className="text-white uppercase text-sm tracking-widest nav-link">Shop</Link>
          <Link to="/collections" className="text-white uppercase text-sm tracking-widest nav-link">Collections</Link>
          <Link to="/about" className="text-white uppercase text-sm tracking-widest nav-link">About</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-white hidden md:block">
            <Search size={20} />
          </button>
          <button className="text-white hidden md:block">
            <User size={20} />
          </button>
          <button className="text-white">
            <ShoppingBag size={20} />
          </button>
          <button 
            className="text-white md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-black transition-transform duration-300 ease-in-out transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } z-40 md:hidden`}>
        <div className="flex flex-col h-full p-10 pt-24">
          <button 
            className="absolute top-6 right-6 text-white" 
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>
          
          <nav className="flex flex-col space-y-8 text-center">
            <Link to="/" className="text-white text-2xl font-medium" onClick={toggleMenu}>HOME</Link>
            <Link to="/shop" className="text-white text-2xl font-medium" onClick={toggleMenu}>SHOP</Link>
            <Link to="/collections" className="text-white text-2xl font-medium" onClick={toggleMenu}>COLLECTIONS</Link>
            <Link to="/about" className="text-white text-2xl font-medium" onClick={toggleMenu}>ABOUT</Link>
          </nav>
          
          <div className="mt-16 flex justify-center space-x-8">
            <button className="text-white">
              <Search size={24} />
            </button>
            <button className="text-white">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
