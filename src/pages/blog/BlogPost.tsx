
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogData } from './blogData';
import SafeImage, { getRandomImage } from '../../components/SafeImage';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogData.find(p => p.slug === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <SEOHead 
        title={`${post.title} | Fortune Technology Blog`}
        description={post.excerpt}
        keywords={`language learning, Kolhapur language institute, ${post.keywords}, Fortune Technology, ${post.title.toLowerCase()}, language courses in Kolhapur`}
        canonicalUrl={`/blog/${post.slug}`}
      />

      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-fortune-pink mb-8 hover:opacity-80 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to All Posts</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="w-full h-[300px] sm:h-[400px] overflow-hidden rounded-xl mb-8">
            <SafeImage 
              src={post.featuredImage || getRandomImage()}
              alt={post.title}
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 sm:p-8">
              {/* Post Header */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-2">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
                <span>{post.readTime} min read</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
                <span>{post.author}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
                <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                  {post.categories && post.categories.map(category => (
                    <Link 
                      key={category}
                      to={`/blog/${category}`}
                      className="bg-gray-100 hover:bg-gray-200 text-xs rounded-full px-3 py-1 transition-colors duration-300"
                    >
                      {category.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Post Content */}
              <div className="prose prose-blue max-w-none">
                {post.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">{section.heading}</h2>
                    
                    {/* First paragraph */}
                    {section.paragraphs.length > 0 && (
                      <p className="text-gray-600 mb-4">{section.paragraphs[0]}</p>
                    )}
                    
                    {/* First section image */}
                    {index === 0 && (
                      <div className="my-6 rounded-lg overflow-hidden">
                        <SafeImage 
                          src={post.images?.section1 || getRandomImage()} 
                          alt={`${section.heading} - Fortune Technology Kolhapur`} 
                          className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-500 mt-2 italic">
                          Fortune Technology students during an international language training session in Kolhapur
                        </p>
                      </div>
                    )}
                    
                    {/* Remaining paragraphs for first section */}
                    {index === 0 && section.paragraphs.slice(1).map((paragraph, pIndex) => (
                      <p key={`p-${index}-${pIndex + 1}`} className="text-gray-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                    
                    {/* For sections other than first */}
                    {index !== 0 && (
                      <>
                        {section.paragraphs.slice(1).map((paragraph, pIndex) => (
                          <p key={`p-${index}-${pIndex + 1}`} className="text-gray-600 mb-4">
                            {paragraph}
                          </p>
                        ))}
                        
                        {/* Middle section image */}
                        {index === 2 && (
                          <div className="my-6 rounded-lg overflow-hidden">
                            <SafeImage 
                              src={post.images?.section2 || getRandomImage()} 
                              alt={`${section.heading} - Fortune Technology Kolhapur`} 
                              className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                            <p className="text-sm text-gray-500 mt-2 italic">
                              Fortune Technology's language laboratory facilities in Rajarampuri, Kolhapur
                            </p>
                          </div>
                        )}
                        
                        {/* Last paragraphs */}
                        {section.paragraphs.slice(Math.max(1, section.paragraphs.length - 1)).map((paragraph, pIndex) => (
                          <p key={`p-${index}-${pIndex + section.paragraphs.length - 1}`} className="text-gray-600 mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </>
                    )}
                  </div>
                ))}

                {/* Kolhapur-specific content for SEO */}
                <div className="mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-fortune-pink">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">Why Choose Fortune Technology in Kolhapur?</h3>
                  <p className="text-gray-600 mb-3">
                    Based in Rajarampuri 8th Lane, Kolhapur, Fortune Technology has established itself as the leading language training institute in the region. 
                    Our expert instructors, modern teaching methods, and proven track record make us the preferred choice for students and professionals in Maharashtra.
                  </p>
                  <p className="text-gray-600">
                    With a focus on practical skills and real-world application, our courses prepare you for international opportunities while providing personalized guidance tailored to the unique needs of Kolhapur students.
                  </p>
                </div>

                {post.conclusion && (
                  <div className="mt-8 p-4 sm:p-6 bg-fortune-blue/5 rounded-lg border-l-4 border-fortune-blue">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">Conclusion</h3>
                    <p className="text-gray-600">
                      {post.conclusion}
                    </p>
                  </div>
                )}
              </div>

              {/* Author bio with image */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-fortune-pink/20 text-fortune-pink rounded-full flex items-center justify-center text-xl font-bold">
                  {post.author?.charAt(0) || 'F'}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{post.author}</h4>
                  <p className="text-sm text-gray-600">
                    Language Expert at Fortune Technology, Kolhapur
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Ready to start your language journey in Kolhapur?</h3>
                <p className="mb-6 text-gray-600">
                  Contact Fortune Technology for personalized language training and career guidance that opens doors to international opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/courses" className="btn-primary">
                    View Our Courses
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
