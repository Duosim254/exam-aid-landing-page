
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ExamAid</h3>
            <p className="mb-4 text-gray-300">
              Providing professional academic assistance to help students achieve their educational goals.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="tel:+254715489446" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone size={18} className="mr-2" />
                +254 715 489 446
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:duoabdul@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail size={18} className="mr-2" />
                duoabdul@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Online Exams</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Essay Writing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Thesis Writing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Dissertation Help</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} ExamAid. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> • 
            <a href="#" className="hover:text-white transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
