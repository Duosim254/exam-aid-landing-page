
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_4o5ytwc';
const TEMPLATE_ID = 'template_kvbyxx6'; 
const USER_ID = '4e7N1qnbo-tO6xXqk';

const ContactFormSection = () => {
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
    
    console.log('Sending email with parameters:', templateParams);
    
    // Check if window.emailjs exists, if not use the imported emailjs
    if (typeof window !== 'undefined' && window.emailjs) {
      console.log('Using window.emailjs');
      window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(handleEmailSuccess)
        .catch(error => handleEmailError(error, 'window.emailjs'))
        .finally(() => setIsSubmitting(false));
    } else {
      console.log('Using imported emailjs');
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(handleEmailSuccess)
        .catch(error => handleEmailError(error, 'imported emailjs'))
        .finally(() => setIsSubmitting(false));
    }
  };

  // Extract success and error handlers to clean up the code
  const handleEmailSuccess = (response: { status: number; text: string }) => {
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
  };

  const handleEmailError = (error: any, source: string) => {
    console.error(`FAILED with ${source}...`, error);
    
    // Check for the domain restriction error
    let errorMessage = "There was a problem sending your request. Please try again or contact us directly via WhatsApp.";
    
    if (error && error.text && error.text.includes("restricted to the domains")) {
      errorMessage = "Domain not authorized in EmailJS settings. If you're testing locally, please add your domain to the allowed list in EmailJS dashboard.";
      console.warn("EmailJS domain restriction error. Add your testing domain to the allowed list in EmailJS dashboard.");
    }
    
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive"
    });
  };

  return (
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
  );
};

export default ContactFormSection;
