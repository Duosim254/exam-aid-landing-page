
import { Book, Clock, FileText, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Clock size={36} className="text-brand-orange" />,
      title: "Online Exam Assistance",
      description: "Expert help with D2L, Blackboard, proctored exams, TEAS, NCLEX, and more. Guaranteed results with strict confidentiality."
    },
    {
      icon: <FileText size={36} className="text-brand-orange" />,
      title: "Assignment Writing",
      description: "Professional writing services for essays, research papers, case studies, and reports tailored to your specific requirements."
    },
    {
      icon: <Book size={36} className="text-brand-orange" />,
      title: "Thesis & Dissertation",
      description: "Comprehensive assistance with thesis and dissertation projects, including research, writing, and editing services."
    },
    {
      icon: <Users size={36} className="text-brand-orange" />,
      title: "Group Projects",
      description: "Collaborative assistance for group assignments, ensuring consistent quality across all components of your project."
    },
    {
      icon: <GraduationCap size={36} className="text-brand-orange" />,
      title: "Online Tutoring",
      description: "Personalized one-on-one tutoring sessions with subject matter experts to help you master difficult concepts and improve your grades."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&q=80')",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive academic assistance designed to help you excel in your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/90">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-brand-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
