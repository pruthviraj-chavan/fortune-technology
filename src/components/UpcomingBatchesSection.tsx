
import React from 'react';
import { Calendar, Clock, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Batch {
  id: number;
  course: string;
  date: string;
  time: string;
  mode: string;
  location: string;
  icon: string;
  color: string;
}

const batches: Batch[] = [
  {
    id: 1,
    course: "Spoken English",
    date: "12 May 2025",
    time: "10:00 AM - 12:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇬🇧",
    color: "from-fortune-pink to-fortune-orange"
  },
  {
    id: 2,
    course: "German A1",
    date: "12 May 2025",
    time: "2:00 PM - 4:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇩🇪",
    color: "from-fortune-orange to-fortune-green"
  },
  {
    id: 3,
    course: "German B1",
    date: "10 May 2025",
    time: "6:00 PM - 8:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇩🇪",
    color: "from-fortune-green to-fortune-blue"
  },
  {
    id: 4,
    course: "German A2",
    date: "20 May 2025",
    time: "11:00 AM - 1:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇩🇪",
    color: "from-fortune-blue to-fortune-indigo"
  },
  {
    id: 5,
    course: "French A1",
    date: "20 May 2025",
    time: "3:00 PM - 5:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇫🇷",
    color: "from-fortune-indigo to-fortune-purple"
  },
  {
    id: 6,
    course: "Korean",
    date: "12 May 2025",
    time: "5:00 PM - 7:00 PM",
    mode: "Offline + Online",
    location: "Kolhapur Center",
    icon: "🇰🇷",
    color: "from-fortune-purple to-fortune-pink"
  },
  {
    id: 7,
    course: "Spanish A1",
    date: "12 May 2025",
    time: "9:00 AM - 11:00 AM",
    mode: "Online + Offline",
    location: "Kolhapur Center",
    icon: "🇪🇸",
    color: "from-fortune-red to-fortune-orange"
  }
];

const UpcomingBatchesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-fade-in">Upcoming Batches 📚</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in text-lg">
          Join our language courses starting soon and begin your international journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {batches.map((batch) => (
            <Card 
              key={batch.id} 
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className={`bg-gradient-to-r ${batch.color} text-white p-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{batch.course}</h3>
                  <span className="text-3xl">{batch.icon}</span>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-fortune-green" />
                    <span className="text-gray-700">{batch.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-fortune-green" />
                    <span className="text-gray-700">{batch.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-fortune-green" />
                    <span className="text-gray-700">{batch.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-fortune-green" />
                    <span className="text-gray-700">{batch.location}</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-5 bg-fortune-green hover:bg-fortune-green/90"
                  onClick={() => window.open("https://wa.me/919503714292", "_blank")}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatchesSection;
