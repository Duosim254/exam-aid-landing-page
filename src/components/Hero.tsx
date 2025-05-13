
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white relative overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80')",
          backgroundBlendMode: "overlay"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Academic Excellence Without The Stress
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Professional assistance with online exams, assignments, and academic papers. Helping students achieve their academic goals since 2018.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              <a href="#contact">Get Started</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
