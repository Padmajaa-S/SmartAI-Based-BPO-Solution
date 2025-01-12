import React from 'react';
import { ArrowRight, Brain, Clock, Database, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const features = [
    {
      title: 'Sentiment-Based Prioritization',
      description: 'The system understands customer emotions and task priorities to ensure urgent cases are handled first.',
      icon: Brain
    },
    {
      title: 'Automated Data Entry',
      description: 'Reduces manual data entry by automatically logging data, saving time and reducing errors.',
      icon: Database
    },
    {
      title: 'Optimized Scheduling',
      description: 'AI integrates urgency metrics with agent calendars to optimize follow-up and engagement.',
      icon: Clock
    },
    {
      title: 'Intelligent Knowledge Base',
      description: 'AI-powered tools process historic human interactions to optimize improved first call resolution rate.',
      icon: MessageSquare
    },
    {
      title: 'Automated Case Routing',
      description: 'Cases intelligently route cases to the most suitable agent based on skills and workload.',
      icon: ArrowRight
    },
    {
      title: 'Continuous Improvement',
      description: 'Uses feedback to improve and adapt workflows over time.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Smart Bridge</h1>
              <p className="text-xl text-gray-300 mb-8">Smarter Workflows, Better Service, Seamless Success</p>
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
                >
                  Agent Login
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100"
                >
                  Client Login
                </Link>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="w-1/2 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Modern Teams</h2>
          <p className="text-xl text-gray-600">Everything you need to manage and optimize your business processes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}