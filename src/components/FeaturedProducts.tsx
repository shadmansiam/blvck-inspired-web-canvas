
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  hoverImageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'BLVCK Hoodie',
    price: '$120',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImageUrl: '/lovable-uploads/f4e4b392-d870-4ab4-ac77-565a33957f02.png'
  },
  {
    id: 2,
    name: 'Minimal Watch',
    price: '$180',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Black Cap',
    price: '$45',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Leather Bag',
    price: '$250',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const FeaturedProducts = () => {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-blvck-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FEATURED PRODUCTS</h2>
          <a 
            href="/shop" 
            className="flex items-center blvck-button text-sm uppercase tracking-wider"
          >
            View All <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 group">
                <img 
                  src={hoveredProductId === product.id ? product.hoverImageUrl : product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-500 group-hover:bg-opacity-10"></div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{product.name}</h3>
                <span className="text-blvck-lightgray">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
