
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({
  title = 'Fortune Technology - Language Courses & Abroad Job Placements',
  description = 'Fortune Technology offers expert IELTS training, language courses, and abroad job placement services. Get certified and achieve your dreams with our professional guidance.',
  keywords = 'IELTS, language courses, abroad jobs, job placement, English courses, Fortune Technology, Kolhapur, language training, study abroad, IELTS preparation',
  canonicalUrl,
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
}: SEOHeadProps) => {
  const siteUrl = 'https://fortunetechnology.com';
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fortune Technology",
            "url": "https://fortunetechnology.com",
            "logo": "https://fortunetechnology.com/logo.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8th Ln, opposite Matoshri apartment, near GP Parsik Bank",
              "addressLocality": "Kolhapur",
              "addressRegion": "Maharashtra",
              "postalCode": "416008",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/fortunetechnology",
              "https://twitter.com/fortune_tech",
              "https://www.instagram.com/fortunetechnology"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;
