
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-brand-blue">ExamAid</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            <a href="#services" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">FAQ</a>
          </div>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue-light">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-brand-orange font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-brand-orange font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-brand-orange font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-brand-orange font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              asChild 
              className="bg-brand-blue hover:bg-brand-blue-light w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
