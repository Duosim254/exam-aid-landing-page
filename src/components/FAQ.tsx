
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does your exam assistance service work?",
      answer: "Our exam assistance service involves connecting you with an expert in your subject area who can help you navigate through your online exam. Once you provide the exam details and schedule, our expert will guide you through the process to ensure you achieve the best possible outcome."
    },
    {
      question: "Is your service confidential?",
      answer: "Absolutely. We understand the importance of privacy and confidentiality. All interactions, personal information, and assignment details are kept strictly confidential. We use secure communication channels and never share your information with third parties."
    },
    {
      question: "What academic levels do you support?",
      answer: "We support a wide range of academic levels, from high school to doctoral level studies. Our team includes experts with advanced degrees across various disciplines, ensuring we can provide quality assistance regardless of your academic level."
    },
    {
      question: "How do you determine pricing?",
      answer: "Pricing is determined based on several factors: the type of assignment or exam, academic level, deadline, complexity, and special requirements. For standard assignments with longer deadlines, prices start lower, while services like proctored exams or rush assignments have premium pricing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including major credit cards, PayPal, and bank transfers. All payments are processed through secure platforms to ensure your financial information remains protected."
    },
    {
      question: "Do you provide plagiarism reports?",
      answer: "Yes, upon request, we can provide plagiarism reports for written assignments. We use industry-standard plagiarism checking tools to ensure the originality of all written work. This service may incur an additional fee depending on your package."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-brand-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
