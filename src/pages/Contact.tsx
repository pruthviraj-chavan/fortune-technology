import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulating form submission
    setTimeout(() => {
      console.log("Form submitted:", values);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-vibrant text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us ✉️</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Reach out to us for inquiries about courses, job placements, or institute visits
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="section-title">Get In Touch 👋</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer any questions you have about our language courses, 
                job placement services, or study abroad programs. Connect with us today!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-1">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center">
                      <MapPin className="text-fortune-pink" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Location 📍</h3>
                    <p className="text-gray-600">
                      Rajarampuri 8th Lane, <br />
                      Kolhapur, Maharashtra, <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-2">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center">
                      <Phone className="text-fortune-orange" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone Number 📱</h3>
                    <p className="text-gray-600">+91 7057617979</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available for calls and WhatsApp messages
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-3">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center">
                      <Mail className="text-fortune-green" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Address ✉️</h3>
                    <p className="text-gray-600">info@fortunetech.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-4">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-red/10 flex items-center justify-center">
                      <Clock className="text-fortune-red" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours ⏰</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-fortune-blue">Send Us a Message 📨</h2>
                <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly</p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <User size={16} className="text-fortune-green" /> Your Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="focus:ring-fortune-green" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Mail size={16} className="text-fortune-pink" /> Email Address
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Phone size={16} className="text-fortune-orange" /> Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <FileText size={16} className="text-fortune-blue" /> Subject
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Course Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <MessageCircle size={16} className="text-fortune-purple" /> Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea placeholder="I would like to know more about..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button 
                    type="submit" 
                    className={`w-full py-3 px-6 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-gradient-to-r from-fortune-green to-fortune-blue hover:shadow-lg"
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} className="animate-pulse" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Updated with iframe) */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Visit Our Institute 🏢</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11823.229427791266!2d74.22664425541988!3d16.694393099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101c089c67793%3A0x19e4d135ed483514!2sFortune%20Technology!5e1!3m2!1sen!2sin!4v1746213392297!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fortune Technology Location Map"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards global opportunities with Fortune Technology's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-fortune-blue flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link to="/courses" className="btn-primary bg-fortune-green">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
