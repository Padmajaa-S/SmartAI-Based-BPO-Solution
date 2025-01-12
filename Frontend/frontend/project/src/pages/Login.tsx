import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Blocks } from 'lucide-react';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect based on user type
    navigate(isAgent ? '/dashboard' : '/client-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Login form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome to Smart Bridge:</h2>
          <h3 className="text-xl text-gray-600 mb-8">AI Based Smart BPO Solutions</h3>

          {/* Login Type Toggle */}
          <div className="flex rounded-md shadow-sm mb-6">
            <button
              onClick={() => setIsAgent(false)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md ${
                !isAgent
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:text-gray-900'
              }`}
            >
              Client Login
            </button>
            <button
              onClick={() => setIsAgent(true)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md ${
                isAgent
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:text-gray-900'
              }`}
            >
              Agent Login
            </button>
          </div>

          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <img className="h-5 w-5 mr-2" src="https://www.google.com/favicon.ico" alt="Google logo" />
            Login with Google
          </button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">OR</span>
              </div>
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Logo */}
      <div className="hidden lg:block relative flex-1 bg-gray-900">
        <div className="flex items-center justify-center h-full">
          <Blocks className="h-32 w-32 text-red-600" />
          <span className="text-4xl font-bold text-white ml-4">SmartBridge</span>
        </div>
      </div>
    </div>
  );
}