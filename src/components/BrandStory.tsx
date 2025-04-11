
import React from 'react';

const BrandStory = () => {
  return (
    <section className="py-20 bg-blvck-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="BLVCK Brand Story" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">OUR STORY</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                BLVCK is more than a brand; it's a lifestyle. Born from the desire to create premium minimalist products that embody elegance and simplicity, we've cultivated a global community that shares our passion for aesthetic perfection.
              </p>
              <p>
                Each product is thoughtfully designed with meticulous attention to detail, using only the finest materials to ensure exceptional quality and longevity.
              </p>
              <p>
                We believe in the power of simplicity. Our designs strip away the unnecessary, focusing on what truly matters—clean lines, functional design, and timeless style.
              </p>
            </div>
            
            <div className="mt-10">
              <a 
                href="/about" 
                className="blvck-button text-white border border-white px-10 py-3 font-medium uppercase tracking-wide inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
