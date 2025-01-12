import React, { useState } from 'react';
import { Bot, FileText, MessageSquare, Star } from 'lucide-react';

export function ClientDashboard() {
  const [showClaimStatus, setShowClaimStatus] = useState(false);
  const [message, setMessage] = useState('');

  const claimSteps = [
    { title: 'Claim Filing', status: 'completed' },
    { title: 'Verification', status: 'completed' },
    { title: 'Assessment', status: 'completed' },
    { title: 'Approval & Processing', status: 'current' },
    { title: 'Payout Processing', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Side */}
          <div className="col-span-8">
            {/* Claim Status Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button
                onClick={() => setShowClaimStatus(!showClaimStatus)}
                className="w-full flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <span className="font-semibold">Claim Status</span>
                <span className="transform transition-transform duration-200">
                  {showClaimStatus ? '▼' : '▶'}
                </span>
              </button>

              {showClaimStatus && (
                <div className="mt-4">
                  {/* Progress Timeline */}
                  <div className="relative">
                    <div className="flex justify-between mb-8">
                      {claimSteps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center relative">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step.status === 'completed'
                                ? 'bg-green-600 text-white'
                                : step.status === 'current'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-300'
                            }`}
                          >
                            {step.status === 'completed' ? '✓' : index + 1}
                          </div>
                          <div className="text-sm mt-2 text-center max-w-[100px]">{step.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Message */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">
                      Your claim is currently under review by our expert team
                    </p>
                  </div>

                  {/* Feedback Section */}
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold mb-4">We Value Your Feedback!</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Help us improve by rating your experience with our service.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm mb-2">How satisfied are you with the speed of your claim process?</p>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-5 w-5 text-yellow-400 cursor-pointer"
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Chat */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-4 h-[600px] flex flex-col">
              <div className="flex items-center space-x-2 p-3 border-b">
                <Bot className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">SmartBridge AI</h3>
                  <p className="text-xs text-gray-500">Always active</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex items-start space-x-2">
                  <Bot className="h-6 w-6 text-blue-600" />
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hello, I'm SmartBridgeAI! How can I assist you today?</p>
                  </div>
                </div>
              </div>

              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}