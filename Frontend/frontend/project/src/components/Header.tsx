import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Blocks className="h-8 w-8 text-red-600" />
          <span className="text-xl font-bold">SmartBridge</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
          <Link to="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
          <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Sign in</Link>
          <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}