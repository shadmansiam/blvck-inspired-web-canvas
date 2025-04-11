
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log('Email submitted:', email);
    
    // Show success message
    setSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">JOIN OUR COMMUNITY</h2>
        <p className="text-blvck-lightgray mb-10">
          Sign up for exclusive offers, early access to new releases, and updates from BLVCK.
        </p>
        
        {submitted ? (
          <div className="border border-white p-6 animate-fade-in">
            <p>Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow bg-transparent border-b border-white py-3 px-4 outline-none mb-4 md:mb-0 md:mr-4 focus:border-white"
            />
            <button 
              type="submit"
              className="blvck-button border border-white py-3 px-8 flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black group"
            >
              SUBSCRIBE 
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
