
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-blvck-lightgray mb-8">Page not found</p>
          <a 
            href="/" 
            className="blvck-button inline-block border border-white px-10 py-3 uppercase tracking-wide"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
