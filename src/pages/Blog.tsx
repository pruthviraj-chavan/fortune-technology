
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { blogData } from './blog/blogData';
import SafeImage, { getRandomImage } from '../components/SafeImage';

const Blog = () => {
  // Organize posts by category for the quick links section
  const categories = [
    { name: 'IELTS Preparation', slug: 'ielts-preparation', icon: '📝' },
    { name: 'Study Abroad', slug: 'study-abroad', icon: '🎓' },
    { name: 'Language Learning', slug: 'language-learning', icon: '🗣️' },
    { name: 'Job Opportunities', slug: 'job-opportunities', icon: '💼' },
    { name: 'Kolhapur Updates', slug: 'kolhapur-updates', icon: '📰' },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Language Learning Blog | Fortune Technology Kolhapur"
        description="Explore insightful articles about language learning, career growth through language skills, and cultural understanding from Fortune Technology in Kolhapur."
        keywords="language learning blog, foreign language tips, IELTS preparation Kolhapur, language courses Maharashtra, language learning benefits"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] max-h-[500px] min-h-[300px] bg-fortune-blue flex items-center">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{backgroundImage: `url('${getRandomImage()}')`}}>
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Fortune Technology Blog</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">
            Insights, tips, and resources for language learners and international career seekers from Kolhapur
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                to={`/blog/${category.slug}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition duration-300"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogData.length > 0 && (
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">Featured Post</h2>
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-full bg-gradient-to-r from-fortune-pink to-fortune-blue flex items-center p-4 sm:p-8">
                  <div>
                    <p className="text-white/80 mb-2">Featured</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{blogData[0].title}</h3>
                    <p className="text-white/90 mb-4 sm:mb-6 line-clamp-3">{blogData[0].excerpt}</p>
                    <Link 
                      to={`/blog/${blogData[0].slug}`}
                      className="inline-block bg-white text-fortune-pink font-medium rounded-full px-4 py-2 sm:px-6 sm:py-2 hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
                <div className="h-56 sm:h-64 md:h-auto">
                  <SafeImage 
                    src={blogData[0].featuredImage || getRandomImage()} 
                    alt={blogData[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogData.slice(1).map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
                    <SafeImage 
                      src={post.featuredImage || getRandomImage()} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                    <div className="flex items-center text-sm text-gray-500 mb-3 sm:mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="text-fortune-pink font-medium flex items-center">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.slug} 
                to={`/blog/${category.slug}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center group transition-colors duration-300"
              >
                <div className="bg-fortune-pink/10 text-fortune-pink rounded-full p-3 sm:p-4 text-xl sm:text-2xl mr-3 sm:mr-4 group-hover:bg-fortune-pink/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">{category.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">View articles</p>
                </div>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-gray-400 group-hover:text-fortune-pink transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kolhapur Local SEO Section */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Language Training in Kolhapur</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-10">
            Fortune Technology is Kolhapur's premier language institute, offering specialized courses for students and professionals in Maharashtra. 
            Located in the heart of Rajarampuri, we provide expert training in multiple European languages to prepare you for global opportunities.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-fortune-pink text-2xl mb-3 sm:mb-4">🏫</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Based in Kolhapur, we understand the specific needs and challenges faced by local students seeking international opportunities.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-fortune-pink text-2xl mb-3 sm:mb-4">👨‍🎓</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Maharashtra Focus</h3>
              <p className="text-gray-600">
                Our courses are tailored to help Maharashtra students excel in international exams and job interviews.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-fortune-pink text-2xl mb-3 sm:mb-4">🌎</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Our connections with European employers provide Kolhapur students with exclusive job opportunities abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-fortune-blue to-fortune-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Start Your Language Journey Today</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
            Ready to experience the benefits of language learning? Contact Fortune Technology for personalized language courses designed for Kolhapur students and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-fortune-pink hover:bg-gray-100 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium transition duration-300">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/20 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
