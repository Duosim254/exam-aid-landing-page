
import ContactFormSection from './contact/ContactFormSection';
import ContactInfoCard from './contact/ContactInfoCard';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to excel in your academics? Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactFormSection />
          </div>

          <div>
            <ContactInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
