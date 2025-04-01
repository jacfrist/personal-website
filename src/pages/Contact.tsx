
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-timberwolf">
      {/* Header */}
      <section className="container-section text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-feldgrau">Get in Touch</h1>
        <p className="text-lg md:text-xl text-ash-gray max-w-3xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out to me using the contact information below or the form.
        </p>
      </section>

      {/* Contact Content */}
      <section className="container-section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/50 rounded-lg p-8 shadow-md border border-silver/30">
            <h2 className="text-2xl font-bold mb-6 text-feldgrau">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-feldgrau/10 p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-feldgrau" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-feldgrau mb-1">Email</h3>
                  <a href="mailto:your.name@vanderbilt.edu" className="text-battleship-gray hover:text-feldgrau transition-colors">
                    your.name@vanderbilt.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-feldgrau/10 p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-feldgrau" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-feldgrau mb-1">Location</h3>
                  <p className="text-battleship-gray">
                    Department of Computer Science<br />
                    Vanderbilt University<br />
                    Nashville, TN 37235
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-feldgrau/10 p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-feldgrau" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-feldgrau mb-1">Phone</h3>
                  <p className="text-battleship-gray">(123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-feldgrau mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-feldgrau/10 hover:bg-feldgrau/20 p-3 rounded-full text-feldgrau transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-feldgrau/10 hover:bg-feldgrau/20 p-3 rounded-full text-feldgrau transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/50 rounded-lg p-8 shadow-md border border-silver/30">
            <h2 className="text-2xl font-bold mb-6 text-feldgrau">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-feldgrau mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-timberwolf/50 border-silver/40 focus:border-battleship-gray focus:ring-battleship-gray"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-feldgrau mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-timberwolf/50 border-silver/40 focus:border-battleship-gray focus:ring-battleship-gray"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-feldgrau mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-timberwolf/50 border-silver/40 focus:border-battleship-gray focus:ring-battleship-gray"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-feldgrau mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-timberwolf/50 border-silver/40 focus:border-battleship-gray focus:ring-battleship-gray"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-feldgrau hover:bg-feldgrau/90 text-timberwolf"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-timberwolf" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="container-section bg-silver/20 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6 text-feldgrau">Office Hours</h2>
        <p className="text-ash-gray max-w-3xl mx-auto">
          I'm available for meetings and discussions during my office hours:
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <div className="bg-white/70 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-feldgrau">Tuesday</h3>
            <p className="text-battleship-gray">10:00 AM - 12:00 PM</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-feldgrau">Thursday</h3>
            <p className="text-battleship-gray">2:00 PM - 4:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
