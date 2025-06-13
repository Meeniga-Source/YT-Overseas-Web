import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-600 p-3 rounded-full">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Texas Review</h2>
        <p className="text-xl text-blue-100 mb-8">
          Get the latest news, reviews, and insights delivered straight to your inbox every week.
        </p>
        
        {isSubscribed ? (
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-semibold">Successfully subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;