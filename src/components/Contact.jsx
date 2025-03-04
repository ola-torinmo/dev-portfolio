import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-gray-600">Have a project in mind? We'd love to hear about it.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg" 
               style={{ boxShadow: '0 4px 14px 0 #DBEAFE' }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-xl hover:opacity-90 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-3xl p-6 shadow-lg" 
                 style={{ boxShadow: '0 4px 14px 0 #DBEAFE' }}>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>hello@company.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-6 shadow-lg" 
                 style={{ boxShadow: '0 4px 14px 0 #DBEAFE' }}>
              <h3 className="text-xl font-bold mb-4">Available for</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Webflow', 'React', 'Next.js', 'UI/UX', 'Development', 'Consulting'].map((skill) => (
                  <div key={skill} className="bg-white rounded-xl px-4 py-2 text-sm text-center shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;