import React from 'react';
import { Clock, User, ArrowRight, Star } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  rating?: number;
}

interface NewsSectionProps {
  title: string;
  articles: Article[];
  showRatings?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, articles, showRatings = false }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <button className="text-blue-900 hover:text-orange-600 font-semibold flex items-center space-x-2 transition-colors">
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  {showRatings && article.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < article.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-900 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;