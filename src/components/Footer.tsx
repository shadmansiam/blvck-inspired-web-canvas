
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-6">BLVCK</h3>
            <p className="text-blvck-lightgray">
              Premium minimalist products for the modern aesthetic.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/collections" className="text-blvck-lightgray hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/new-arrivals" className="text-blvck-lightgray hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="text-blvck-lightgray hover:text-white transition-colors">Bestsellers</Link></li>
              <li><Link to="/accessories" className="text-blvck-lightgray hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-blvck-lightgray hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="text-blvck-lightgray hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="text-blvck-lightgray hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-blvck-lightgray hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-blvck-lightgray hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-blvck-lightgray hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-blvck-lightgray hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-blvck-lightgray hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-blvck-gray text-center text-blvck-lightgray text-sm">
          <p>&copy; {new Date().getFullYear()} BLVCK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
