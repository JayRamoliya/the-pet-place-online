
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary-dark font-display mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or products? We'd love to hear from you! 
            Use the form below or reach out through any of our contact channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="bg-pet-purple p-3 rounded-md">
                  <MapPin className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Our Shop</h3>
                  <address className="not-italic text-gray-600">
                    123 Pet Avenue<br />
                    Pawsville, CA 90210<br />
                    United States
                  </address>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-pet-green">
              <div className="flex items-start gap-4">
                <div className="bg-pet-green p-3 rounded-md">
                  <Phone className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">Main: (555) 123-4567</p>
                  <p className="text-gray-600">Grooming: (555) 123-4568</p>
                  <p className="text-sm text-gray-500 mt-2">We're happy to help with any questions!</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-pet-peach">
              <div className="flex items-start gap-4">
                <div className="bg-pet-peach p-3 rounded-md">
                  <Mail className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">General: info@thepetplace.com</p>
                  <p className="text-gray-600">Support: help@thepetplace.com</p>
                  <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours!</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-pet-yellow">
              <div className="flex items-start gap-4">
                <div className="bg-pet-yellow p-3 rounded-md">
                  <Clock className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <table className="text-gray-600">
                    <tbody>
                      <tr>
                        <td className="pr-6 py-1">Monday - Friday:</td>
                        <td>9:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-1">Saturday:</td>
                        <td>10:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-1">Sunday:</td>
                        <td>11:00 AM - 4:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-display font-semibold text-primary-dark mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..." 
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-display font-semibold text-primary-dark mb-6 text-center">Find Us</h3>
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            {/* Replace with actual API key and location */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209869858512!3d34.10028200662218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd217ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1620160897467!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="The Pet Place location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
