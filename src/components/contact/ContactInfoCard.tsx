
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const ContactInfoCard = () => {
  return (
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
  );
};

export default ContactInfoCard;
