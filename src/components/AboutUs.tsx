
import { Users, GraduationCap, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about our dedication to academic excellence and how we've been helping students achieve their goals since 2018.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">Your Academic Success Partner</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2018, Research Wolves has grown to become a trusted academic assistance service for students worldwide. We understand the challenges of modern education and provide professional solutions to help you excel.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <Users size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-brand-blue mb-2">Expert Team</h4>
                  <p className="text-gray-600">Our team consists of qualified professionals with advanced degrees in various academic disciplines, ensuring high-quality assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <GraduationCap size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-brand-blue mb-2">Educational Values</h4>
                  <p className="text-gray-600">We believe in providing support that enhances learning and helps students develop a deeper understanding of their subjects.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-lg mr-4">
                  <Globe size={24} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-brand-blue mb-2">Global Reach</h4>
                  <p className="text-gray-600">We've assisted thousands of students from over 50 countries, providing reliable academic support across different educational systems.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                  alt="Students working together" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-center text-lg">
                    To provide exceptional academic assistance that empowers students to overcome challenges and achieve their educational goals.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange rounded-lg hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-blue/30 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
