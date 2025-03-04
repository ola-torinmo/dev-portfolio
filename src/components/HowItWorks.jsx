import React from 'react';
import { Video, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* HOW IT WORKS Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
          HOW IT WORKS
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We do the job, you focus on<br />business and growth
        </h1>
        <p className="text-gray-600">
          Skip the ugly hiring process. Get senior level professionals at your service.
        </p>
      </div>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-gray-100 rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:translate-y-1 shadow-[0_10px_30px_rgba(8,_112,_184,_0.15),_0_5px_8px_rgba(8,_112,_184,_0.05)]
            hover:shadow-[0_15px_40px_rgba(8,_112,_184,_0.2),_0_8px_10px_rgba(8,_112,_184,_0.1)]" >
          <div className="aspect-video bg-gray-100 rounded-xl mb-6">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="text-pink-500 font-medium mb-2">Step 1</div>
          <h3 className="text-2xl font-bold mb-3">Discovery Session</h3>
          <p className="text-gray-600">
            Choose your plan & book a 20 min discovery call, [or simply message us] -&gt; receive a strategy plan.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-100 rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:translate-y-1 shadow-[0_10px_30px_rgba(8,_112,_184,_0.15),_0_5px_8px_rgba(8,_112,_184,_0.05)] hover:shadow-[0_15px_40px_rgba(8,_112,_184,_0.2),_0_8px_10px_rgba(8,_112,_184,_0.1)]" 
             >
          <div className="text-pink-500 font-medium mb-2">Step 2</div>
          <h3 className="text-2xl font-bold mb-3">Request & Receive</h3>
          <p className="text-gray-600 mb-6">
            We'll start working right away. You receive daily updates. We revise until it's perfectly aligns your vision.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 flex items-center gap-2 relative shadow-md">
              <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>Design Profile</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex items-center gap-2 transform origin-top-right -rotate-12 transition-all duration-300 shadow-md">
              <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
              <span>Redesign Website</span>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-100 rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:translate-y-1 shadow-[0_10px_30px_rgba(8,_112,_184,_0.15),_0_5px_8px_rgba(8,_112,_184,_0.05)]
            hover:shadow-[0_15px_40px_rgba(8,_112,_184,_0.2),_0_8px_10px_rgba(8,_112,_184,_0.1)]" >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold flex items-center">
                4.9 <span className="text-yellow-400 ml-1">★</span>
              </div>
              <div className="text-sm text-gray-500">App & Web Rating</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold">48M</div>
              <div className="text-sm text-gray-500">Monthly Revenue</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold">7x</div>
              <div className="text-sm text-gray-500">Retention Increase</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold">21%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
            </div>
          </div>
          <div className="text-pink-500 font-medium mb-2">Step 3</div>
          <h3 className="text-2xl font-bold">Automate & Grow</h3>
          <p className="text-gray-600 mb-6">
            Delegate everything to us & focus your precious time on business and things you simply LOVE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;