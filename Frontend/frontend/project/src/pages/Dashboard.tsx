import React from 'react';
import { BarChart3, Box, MessageSquare, Users, Briefcase, RefreshCw, Bot, ThumbsUp, AlertTriangle, FileText } from 'lucide-react';

export function Dashboard() {
  const quickLinks = [
    { title: 'Raise a new case', link: '#' },
    { title: 'Check case status', link: '#' },
    { title: 'Contact Support', link: '#' },
    { title: 'FAQs & Support Docs', link: '#' }
  ];

  const notifications = [
    { id: 5897, status: 'resolved' },
    { id: 4762, status: 'awaiting', dueDate: '18/01/2025' },
    { id: 9814, status: 'resolved' }
  ];

  const quickContacts = [
    { name: 'Young', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop' },
    { name: 'Terry', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
    { name: 'Arnold', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { name: 'Alisha', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    { name: 'Jasmine', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Rose', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-6">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">Hi Ernst</h2>
                <p className="text-gray-600">Welcome Back</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-md">
              <p className="text-sm text-green-800">
                Keep up the great work, Ernst! Your resolution rate is 95% this month!
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <RefreshCw className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-semibold">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="text-gray-600 hover:text-gray-900">
                    • {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-3 bg-yellow-50 rounded-md">
                  <p className="text-sm text-gray-800">
                    Your case #{notification.id} has been {notification.status}.
                    {notification.dueDate && ` Please update it by ${notification.dueDate}.`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          {/* Performance Metrics */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Performance</h3>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">ARI Team Performance</p>
                      <p className="text-xs text-gray-500">5:51 pm • India</p>
                    </div>
                  </div>
                  <span className="font-semibold">89.80 %</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Receiving Calls</p>
                      <p className="text-xs text-gray-500">5:51 pm • India</p>
                    </div>
                  </div>
                  <span className="font-semibold">70.62 %</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Box className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Resolution Rate</p>
                      <p className="text-xs text-gray-500">5:51 pm • India</p>
                    </div>
                  </div>
                  <span className="font-semibold">86.72 %</span>
                </div>
              </div>

              {/* Results Circle */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-3xl font-bold">70%</span>
                      <span className="text-sm text-gray-500">Overall Performance</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-8 border-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Statistics</h3>
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>Month</option>
                <option>Week</option>
                <option>Year</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg">
              {/* Placeholder for the statistics chart */}
            </div>
          </div>

          {/* Monthly Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Monthly Insights</h3>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">95% Customer Satisfaction:</p>
                <p className="text-gray-600">High positive feedback from surveys.</p>
              </div>
              <div>
                <p className="font-semibold">1,200 Calls Resolved:</p>
                <p className="text-gray-600">Efficient issue resolution this month.</p>
              </div>
              <div>
                <p className="font-semibold">3.5 mins Avg Call Time:</p>
                <p className="text-gray-600">Improved handling efficiency.</p>
              </div>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Quick Contacts</h3>
            <div className="flex justify-between">
              {quickContacts.map((contact) => (
                <div key={contact.name} className="text-center">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600">{contact.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Powered Solution */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-semibold">AI Powered Solution</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Transcript */}
              <div className="col-span-2 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">Transcript</h4>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Case 1073</option>
                  </select>
                </div>
                <div className="h-64 overflow-y-auto bg-white p-4 rounded-lg text-sm space-y-2">
                  <p><span className="font-semibold">Agent:</span> Thank you for calling SmartBridge Support. My name is Alex. How can I assist you today?</p>
                  <p><span className="font-semibold">Customer:</span> Hi Alex, I noticed an incorrect charge on my bill and I'd like to get it sorted out.</p>
                  <p><span className="font-semibold">Agent:</span> I understand. Let me check your account details. Could you please verify your account number?</p>
                </div>
              </div>

              {/* Analysis */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">Sentiment Analysis</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <ThumbsUp className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Positive Interaction</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">Case Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm">Spam Probability: 2%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Category: Billing Issue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}