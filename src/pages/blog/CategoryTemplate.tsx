
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { blogData } from './blogData';
import SafeImage, { getRandomImage } from '../../components/SafeImage';

interface CategoryTemplateProps {
  title: string;
  description: string;
  category: string;
  keywords: string;
  headerImage: string;
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ 
  title, 
  description, 
  category, 
  keywords,
  headerImage
}) => {
  // Filter blog posts by category
  const filteredPosts = blogData.filter(post => post.categories.includes(category));

  return (
    <div className="min-h-screen py-8 sm:py-16">
      <SEOHead 
        title={`${title} | Fortune Technology Kolhapur`}
        description={description}
        keywords={keywords}
        canonicalUrl={`/blog/${category}`}
      />

      {/* Hero Section */}
      <section className="relative bg-fortune-blue text-white py-12 sm:py-16">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{backgroundImage: `url("${headerImage || getRandomImage()}")`}}>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <SafeImage 
                        src={post.featuredImage || getRandomImage()} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">No posts found in this category yet</h2>
              <p className="text-gray-600 mb-8">Check back soon for updates or explore other categories.</p>
              <Link to="/blog" className="inline-block bg-fortune-blue hover:bg-fortune-blue/90 text-white px-6 py-3 rounded-md transition-colors">
                Back to All Posts
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Start Your Language Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to experience the benefits of language learning? Contact Fortune Technology in Kolhapur for personalized language courses designed for students and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="inline-block bg-fortune-blue hover:bg-fortune-blue/90 text-white px-8 py-3 rounded-md transition-colors">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="inline-block border border-fortune-blue text-fortune-blue hover:bg-fortune-blue/10 px-8 py-3 rounded-md transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryTemplate;
