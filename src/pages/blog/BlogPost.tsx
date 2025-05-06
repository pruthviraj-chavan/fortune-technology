
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { blogData } from './blogData';

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

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-fortune-pink to-fortune-blue flex items-end p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
          </div>
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min read</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>

            <div className="prose prose-blue max-w-none">
              {post.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {post.conclusion && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-fortune-pink">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Conclusion</h3>
                  <p className="text-gray-600">
                    {post.conclusion}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-4">Ready to start your language journey?</h3>
              <p className="mb-6 text-gray-600">
                Contact Fortune Technology in Kolhapur for personalized language training and career guidance.
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
  );
};

export default BlogPost;
