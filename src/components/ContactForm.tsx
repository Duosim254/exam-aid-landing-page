
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Mail, Phone, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_4o5ytwc';
const TEMPLATE_ID = 'template_kvbyxx6'; 
const USER_ID = '4e7N1qnbo-tO6xXqk';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    assignmentType: '',
    educationLevel: '',
    deadline: '',
    plagReport: false,
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      assignment_type: formData.assignmentType,
      education_level: formData.educationLevel,
      deadline: formData.deadline,
      plag_report: formData.plagReport ? 'Yes' : 'No',
      message: formData.details,
      to_email: 'duoabdul@gmail.com'
    };
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: "Request Received!",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          assignmentType: '',
          educationLevel: '',
          deadline: '',
          plagReport: false,
          details: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast({
          title: "Error",
          description: "There was a problem sending your request. Please try again or contact us directly.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Your phone number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assignmentType">Assignment Type</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('assignmentType', value)} 
                        value={formData.assignmentType}
                      >
                        <SelectTrigger id="assignmentType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exam">Online Exam</SelectItem>
                          <SelectItem value="proctored">Proctored Exam</SelectItem>
                          <SelectItem value="essay">Essay</SelectItem>
                          <SelectItem value="research">Research Paper</SelectItem>
                          <SelectItem value="thesis">Thesis/Dissertation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="educationLevel">Education Level</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('educationLevel', value)} 
                        value={formData.educationLevel}
                      >
                        <SelectTrigger id="educationLevel">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high_school">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="masters">Masters</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('deadline', value)} 
                        value={formData.deadline}
                      >
                        <SelectTrigger id="deadline">
                          <SelectValue placeholder="Select deadline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24h">24 Hours</SelectItem>
                          <SelectItem value="48h">48 Hours</SelectItem>
                          <SelectItem value="3d">3 Days</SelectItem>
                          <SelectItem value="1w">1 Week</SelectItem>
                          <SelectItem value="2w">2 Weeks</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="plagReport" 
                        name="plagReport" 
                        checked={formData.plagReport} 
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                      />
                      <Label htmlFor="plagReport">I need a plagiarism report</Label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea 
                      id="details" 
                      name="details" 
                      placeholder="Please provide additional details about your assignment or exam..." 
                      rows={5} 
                      value={formData.details} 
                      onChange={handleChange} 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue-light"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-xl font-semibold text-brand-blue">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-brand-orange mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+254 715 489 446</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="text-brand-orange mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">duoabdul@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle size={20} className="text-green-500 mr-3" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a 
                        href="https://wa.me/254715489446" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        +254 715 489 446
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar size={20} className="text-brand-orange mr-3" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Our Guarantees</h4>
                  <ul className="space-y-1 text-gray-600 list-disc pl-5">
                    <li>100% Confidentiality</li>
                    <li>Secure Payment Options</li>
                    <li>Money-back Guarantee</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>

                <Button 
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 mt-4 flex items-center justify-center gap-2"
                >
                  <a 
                    href="https://wa.me/254715489446" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929C3.68342 18.9024 4.31658 18.9024 4.70711 19.2929L3.29289 20.7071ZM8 17L7.29289 16.2929C7.68342 15.9024 8.31658 15.9024 8.70711 16.2929L8 17ZM11.2929 19.7071C10.9024 20.0976 10.2693 20.0976 9.87868 19.7071C9.48816 19.3166 9.48816 18.6834 9.87868 18.2929L11.2929 19.7071ZM17.5 12C17.5 12.5523 17.0523 13 16.5 13C15.9477 13 15.5 12.5523 15.5 12H17.5ZM15.5 8C15.5 7.44772 15.9477 7 16.5 7C17.0523 7 17.5 7.44772 17.5 8H15.5ZM7.5 14.5C6.94772 14.5 6.5 14.0523 6.5 13.5C6.5 12.9477 6.94772 12.5 7.5 12.5V14.5ZM11.5 12.5C12.0523 12.5 12.5 12.9477 12.5 13.5C12.5 14.0523 12.0523 14.5 11.5 14.5V12.5ZM7 8V8.5H6V8H7ZM12 3.5C12.5523 3.5 13 3.94772 13 4.5C13 5.05228 12.5523 5.5 12 5.5V3.5ZM6 5.5C5.44772 5.5 5 5.05228 5 4.5C5 3.94772 5.44772 3.5 6 3.5V5.5ZM4.70711 19.2929L7.29289 16.7071L8.70711 17.2929L6.12132 19.8787L4.70711 19.2929ZM8.70711 16.7071L11.2929 19.2929L9.87868 18.2929L7.29289 15.7071L8.70711 16.7071ZM11.5 14.5H13C14.933 14.5 16.5 12.933 16.5 11V9.5C16.5 7.567 14.933 6 13 6H9C7.067 6 5.5 7.567 5.5 9.5V11C5.5 12.1699 6.02225 13.2124 6.82838 13.9021C6.94402 14.0032 7.06837 14.0984 7.2 14.1868L7.5 14.5H11.5ZM15.5 12V13C15.5 14.3807 14.3807 15.5 13 15.5H10L11 18L14.5 15.5H15C16.933 15.5 18.5 13.933 18.5 12V8C18.5 6.067 16.933 4.5 15 4.5H9C7.067 4.5 5.5 6.067 5.5 8H7C8.38071 8 9.5 9.11929 9.5 10.5V11C9.5 12.3807 10.6193 13.5 12 13.5H15.5V12ZM15.5 8V9.5C15.5 10.8807 14.3807 12 13 12H12C10.6193 12 9.5 10.8807 9.5 9.5V8H15.5ZM7.5 12.5H8.5C9.88071 12.5 11 11.3807 11 10V8.5H7.5V12.5ZM11.5 12.5C10.1193 12.5 9 11.3807 9 10V8.5H15V10C15 11.3807 13.8807 12.5 12.5 12.5H11.5ZM7 8.5C7 7.11929 8.11929 6 9.5 6H15C13.6193 6 12.5 7.11929 12.5 8.5H7ZM12 5.5H9C7.61929 5.5 6.5 6.61929 6.5 8V8.5H6V5.5H12ZM6 3.5H12V5.5H6V3.5Z" fill="currentColor" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
