
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      content: "I've used Research Wolves for several challenging assignments. Their attention to detail and quality of work is exceptional. Truly worth every penny.",
      author: "Michael T.",
      title: "MBA Student"
    },
    {
      content: "The team helped me with my dissertation when I was running out of time. They delivered outstanding work that exceeded my expectations.",
      author: "Jennifer L.",
      title: "PhD Candidate"
    },
    {
      content: "Research Wolves assisted me with my proctored exams when I was really stressed. Their expert helped me through the entire process, and I passed with flying colors!",
      author: "David R.",
      title: "Computer Science Major"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80')",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students have to say about our services.
          </p>
        </div>

        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow backdrop-blur-sm bg-white/90">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg className="h-6 w-6 text-brand-orange fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
