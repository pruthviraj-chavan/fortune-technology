
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Youtube, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  publishDate: string;
}

const videoData: VideoItem[] = [
  {
    id: "1",
    title: "IELTS Vocabulary Tips for Band 8+",
    description: "Learn essential vocabulary to boost your IELTS score to Band 8 or higher with proven strategies.",
    category: "IELTS",
    thumbnailUrl: "https://i.ytimg.com/vi/7-xZmcbAyWQ/hqdefault.jpg",
    videoUrl: "https://youtu.be/7-xZmcbAyWQ?feature=shared",
    publishDate: "2023-04-15"
  },
  {
    id: "2",
    title: "German A1 Level Complete Course",
    description: "Master German A1 level with this comprehensive course covering all the basics you need to know.",
    category: "German",
    thumbnailUrl: "https://i.ytimg.com/vi/cXIqRenLIZI/hqdefault.jpg",
    videoUrl: "https://youtu.be/cXIqRenLIZI?feature=shared",
    publishDate: "2023-05-22"
  },
  {
    id: "3",
    title: "French Language Learning Tips",
    description: "Quick and effective tips for mastering French pronunciation and vocabulary for beginners.",
    category: "French",
    thumbnailUrl: "https://i.ytimg.com/vi/u1a4r_1MngE/hqdefault.jpg",
    videoUrl: "https://youtu.be/u1a4r_1MngE?feature=shared",
    publishDate: "2023-06-10"
  },
  {
    id: "4",
    title: "IELTS Speaking Part 2: How to Describe a Person",
    description: "Learn how to effectively describe a person in IELTS Speaking Part 2 with sample answers and vocabulary.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-07-05"
  },
  {
    id: "5",
    title: "German B1 Grammar Explained",
    description: "Detailed explanation of key grammar concepts for German B1 level with examples and practice exercises.",
    category: "German",
    thumbnailUrl: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-08-12"
  },
  {
    id: "6",
    title: "Study in Canada: Step-by-Step Guide",
    description: "Complete guide to applying for universities in Canada, including visa requirements and scholarship opportunities.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1605902711834-62a59f33acdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-09-20"
  },
  {
    id: "7",
    title: "IELTS Writing Task 2: Advanced Structures",
    description: "Learn advanced sentence structures to improve your IELTS Writing Task 2 score with examples.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-10-05"
  },
  // Adding more videos to reach minimum 30 as requested
  {
    id: "8",
    title: "Master French Verb Conjugations",
    description: "Quick tips and tricks to memorize and use French verb conjugations like a native speaker.",
    category: "French",
    thumbnailUrl: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-10-15"
  },
  {
    id: "9",
    title: "Study in Australia: Scholarship Guide",
    description: "Complete guide to scholarships available for international students in Australian universities.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1589395937772-f67057e233dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-11-01"
  },
  {
    id: "10",
    title: "IELTS Reading: Time Management Strategies",
    description: "Learn how to effectively manage your time during the IELTS reading section for maximum score.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-11-15"
  },
  {
    id: "11",
    title: "German Conversation Practice for Beginners",
    description: "Basic conversation patterns and vocabulary for beginners to practice German speaking skills.",
    category: "German",
    thumbnailUrl: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-12-01"
  },
  {
    id: "12",
    title: "UK Student Visa Application Guide",
    description: "Step-by-step guide to applying for a UK student visa with document requirements and tips for success.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-12-15"
  },
  {
    id: "13",
    title: "IELTS Listening Tips and Tricks",
    description: "Improve your IELTS listening score with these practical tips and effective strategies.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-01-05"
  },
  {
    id: "14",
    title: "French Idioms and Expressions",
    description: "Learn common French idioms and expressions used in everyday conversations to sound more natural.",
    category: "French",
    thumbnailUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-01-20"
  },
  {
    id: "15",
    title: "Study in Germany: University Application Process",
    description: "Complete guide to applying for German universities including document requirements and deadlines.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-02-01"
  },
  {
    id: "16",
    title: "IELTS Writing Task 1: Data Analysis",
    description: "Learn how to analyze and describe charts and graphs for IELTS Writing Task 1 with sample answers.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-02-15"
  },
  {
    id: "17",
    title: "German Pronunciation Guide",
    description: "Master German pronunciation with this comprehensive guide covering all challenging sounds and patterns.",
    category: "German",
    thumbnailUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-03-01"
  },
  {
    id: "18",
    title: "Study in USA: F1 Visa Interview Tips",
    description: "Expert advice on how to prepare for and succeed in your F1 student visa interview for US universities.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1506777445866-4c61a1c0f324?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-03-15"
  },
  {
    id: "19",
    title: "IELTS Speaking: Common Topics and Sample Answers",
    description: "Prepare for your IELTS speaking test with these common topics and model answers for each part.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-04-01"
  },
  {
    id: "20",
    title: "French A1 Level Common Phrases",
    description: "Essential French phrases and expressions for beginners to use in everyday situations.",
    category: "French",
    thumbnailUrl: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-04-15"
  },
  {
    id: "21",
    title: "Successful Job Application for Work Visa",
    description: "Tips and strategies for applying to jobs abroad and securing work visa sponsorship.",
    category: "Jobs Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2024-05-01"
  },
  {
    id: "22",
    title: "IELTS Academic vs. General Training",
    description: "Understand the differences between IELTS Academic and General Training modules and which one you need.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-05-15"
  },
  {
    id: "23",
    title: "German B2 Exam Preparation",
    description: "Complete preparation guide for the German B2 language exam with practice exercises and strategies.",
    category: "German",
    thumbnailUrl: "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-06-01"
  },
  {
    id: "24",
    title: "Canadian PR Process through Express Entry",
    description: "Detailed guide to obtaining Canadian Permanent Residence through the Express Entry system.",
    category: "Immigration",
    thumbnailUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-06-15"
  },
  {
    id: "25",
    title: "IELTS Essay Writing: Common Mistakes to Avoid",
    description: "Identify and fix common mistakes in IELTS writing essays to improve your band score.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-07-01"
  },
  {
    id: "26",
    title: "French Business Communication Skills",
    description: "Essential vocabulary and phrases for professional communication in French business environments.",
    category: "French",
    thumbnailUrl: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-07-15"
  },
  {
    id: "27",
    title: "Finding Student Accommodation Abroad",
    description: "Tips and resources for finding affordable and safe accommodation when studying in a foreign country.",
    category: "Study Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-08-01"
  },
  {
    id: "28",
    title: "IELTS Speaking: Describe a Place",
    description: "Vocabulary and structures to help you effectively describe places in the IELTS speaking test.",
    category: "IELTS",
    thumbnailUrl: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-08-15"
  },
  {
    id: "29",
    title: "German Culture and Etiquette Guide",
    description: "Learn about German cultural norms, etiquette, and social expectations to help you integrate smoothly.",
    category: "German",
    thumbnailUrl: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-09-01"
  },
  {
    id: "30",
    title: "Global Career Opportunities in 2024",
    description: "Overview of in-demand careers and skills for international job markets in the current year.",
    category: "Jobs Abroad",
    thumbnailUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    videoUrl: "https://www.youtube.com/@languageberg1612/videos",
    publishDate: "2023-09-15"
  },
];

const categories = ["All", "IELTS", "German", "French", "Study Abroad", "Immigration", "Jobs Abroad"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredVideos = videoData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fortune-blue/5 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-fortune-orange/20 to-fortune-pink/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-fortune-pink/20 to-fortune-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-fortune-blue/20 to-fortune-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-fortune-pink"
            >
              Educational Videos & Resources <span className="text-3xl md:text-4xl">📚</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 mb-10"
            >
              Explore our collection of language learning and study abroad resources to help you on your international journey
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search videos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-fortune-pink/20 focus:border-fortune-pink focus-visible:ring-fortune-pink/30"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px] border-2 border-fortune-blue/20 focus:border-fortune-blue">
                  <div className="flex items-center">
                    <Filter size={16} className="mr-2 text-gray-500" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fortune-blue">
            {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'} Available
          </h2>
          
          {filteredVideos.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredVideos.map((video) => (
                <motion.div 
                  key={video.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  variants={itemVariants}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-fortune-orange text-white text-xs font-medium py-1 px-2 rounded z-20">
                      {video.category}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={video.videoUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="bg-fortune-pink text-white rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300"
                      >
                        <Youtube size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-fortune-pink transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(video.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <a 
                        href={video.videoUrl} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-fortune-pink text-sm font-medium flex items-center group/link"
                      >
                        <span>Watch Now</span>
                        <ArrowRight size={14} className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-fortune-pink text-5xl mb-4"
              >
                🔍
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}  
                className="text-2xl font-bold text-gray-700 mb-2"
              >
                No videos found
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-500"
              >
                Try adjusting your search or filter criteria
              </motion.p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-fortune-pink to-fortune-orange text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Want to Learn More? 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Join our language courses and get personalized guidance from certified experts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="secondary" className="bg-white text-fortune-pink hover:bg-white/90">
              <a href="https://wa.me/917057617979" target="_blank" rel="noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
            <Button asChild className="bg-fortune-green hover:bg-fortune-green/90 text-white">
              <a href="/courses">
                Explore Our Courses
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
