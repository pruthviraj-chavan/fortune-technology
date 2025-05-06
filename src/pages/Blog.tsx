
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { blogData } from './blog/blogData';

const Blog = () => {
  return (
    <div className="min-h-screen py-16">
      <SEOHead 
        title="Language Learning Blog | Fortune Technology Kolhapur"
        description="Explore insightful articles about language learning, career growth through language skills, and cultural understanding from Fortune Technology in Kolhapur."
        keywords="language learning blog, foreign language tips, IELTS preparation Kolhapur, language courses Maharashtra, language learning benefits"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fortune-pink to-fortune-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fortune Technology Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Insights, tips, and resources for language learners and international career seekers
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-r from-fortune-pink to-fortune-blue flex items-end p-6">
                    <h2 className="text-xl font-bold text-white">{post.title}</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Language Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to experience the benefits of language learning? Contact Fortune Technology for personalized language courses designed for Kolhapur students and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-primary">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
