
import React from 'react';
import { Link } from 'react-router-dom';
import SafeImage, { getRandomImage } from '../../components/SafeImage';

interface JobCardProps {
  title: string;
  description: string;
  linkTo: string;
  imageAlt: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description, linkTo, imageAlt }) => {
  return (
    <Link to={linkTo} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-2">
        <div className="h-48 overflow-hidden">
          <SafeImage
            src={getRandomImage()}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          <div className="text-fortune-pink font-medium flex items-center">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
