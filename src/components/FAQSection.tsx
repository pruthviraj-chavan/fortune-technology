
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What language courses do you offer?",
    answer: "We offer a wide range of language courses including English (IELTS, TOEFL, PTE), German (A1-C1), French, Spanish, Italian, and Russian. Our courses are designed to help you achieve fluency and prepare for international education and career opportunities."
  },
  {
    id: "faq-2",
    question: "How do your job placement services work?",
    answer: "Our job placement services include resume building, interview preparation, connecting you with potential employers abroad, and guidance throughout the application process. We have partnerships with companies in the USA, Canada, Germany, Australia, and other countries."
  },
  {
    id: "faq-3",
    question: "What is the duration of the language courses?",
    answer: "The duration varies based on the course and level. Typically, our language courses range from 2-6 months. Intensive courses can be completed in less time. We offer flexible schedules including weekday and weekend batches."
  },
  {
    id: "faq-4",
    question: "Do you provide visa assistance?",
    answer: "Yes, we provide comprehensive visa application support including documentation preparation, application review, and interview preparation. Our experts guide you through the entire visa process to maximize your chances of approval."
  },
  {
    id: "faq-5",
    question: "Are the classes online or offline?",
    answer: "We offer both online and offline classes. Our offline classes are conducted at our center in Pune. Online classes are conducted via Zoom with interactive sessions and regular assessments to ensure effective learning."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-fade-in">Frequently Asked Questions 🤔</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in text-lg">
          Find answers to common questions about our language courses and services
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-fortune-pink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions? Contact us directly!</p>
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-fortune-green hover:bg-fortune-green/90 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
