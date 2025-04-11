
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandStory from '../components/BrandStory';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  // Fade-in animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-blvck-black">
      <Navbar />
      <Hero />
      
      <div className="fade-in-section">
        <FeaturedProducts />
      </div>
      
      <div className="fade-in-section">
        <BrandStory />
      </div>
      
      <div className="fade-in-section">
        <Newsletter />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
