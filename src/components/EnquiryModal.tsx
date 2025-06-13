// src/components/EnquiryModal.tsx
import { useState, useEffect } from 'react';

export default function EnquiryModal() {
  const [show, setShow] = useState(true); // Auto-show on page load

  useEffect(() => {
    // You can add auto-close logic here if needed
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade">
      <div className="relative bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-purple-700">
          Quick Enquiry
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button type="submit" className="btn-shiny w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
