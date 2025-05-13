
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Standard Assignments",
      price: "From $10 per page",
      features: [
        "Essays & Reports",
        "Basic Research Papers",
        "Case Studies",
        "PowerPoint Presentations",
        "7+ Day Deadline"
      ],
      description: "Perfect for undergraduate assignments with flexible deadlines",
      buttonText: "Order Now",
      highlighted: false
    },
    {
      title: "Non-Proctored Exams",
      price: "From $100",
      features: [
        "D2L & Blackboard Exams",
        "Canvas & Moodle Tests",
        "Multiple Choice Exams",
        "Short Answer Questions",
        "Non-proctored Exams"
      ],
      description: "Professional assistance with standard online exams",
      buttonText: "Get Help Now",
      highlighted: true
    },
    {
      title: "Proctored Exams",
      price: "From $150",
      features: [
        "Proctored Exams",
        "TEAS & NCLEX Assistance",
        "Dissertation Writing",
        "Master's Level Projects",
        "Rush Delivery (24-48 hrs)"
      ],
      description: "Comprehensive support for advanced academic challenges",
      buttonText: "Contact Us",
      highlighted: false
    },
    {
      title: "Online Tutoring",
      price: "From $30 per hour",
      features: [
        "One-on-One Sessions",
        "Subject Matter Experts",
        "Flexible Scheduling",
        "Personalized Learning",
        "All Academic Levels"
      ],
      description: "Expert tutoring to master difficult concepts and improve grades",
      buttonText: "Book a Tutor",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive rates based on assignment complexity, academic level, and deadline flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlighted ? 'border-brand-orange shadow-lg' : 'border-gray-200'} h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className={`text-xl ${plan.highlighted ? 'text-brand-orange' : 'text-brand-blue'}`}>
                  {plan.title}
                </CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={18} className="text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild
                  className={`w-full ${plan.highlighted ? 'bg-brand-orange hover:bg-brand-orange-dark' : 'bg-brand-blue hover:bg-brand-blue-light'}`}
                >
                  <a href="#contact">{plan.buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>* Prices may vary based on specific requirements and complexity. Contact for a custom quote.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
