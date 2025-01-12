import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const categories = {
    'Use cases': ['UI design', 'UX design', 'Wireframing', 'Diagramming', 'Brainstorming', 'Online whiteboard', 'Team collaboration'],
    'Explore': ['Design', 'Prototyping', 'Development features', 'Design systems', 'Collaboration features', 'Design process', 'FigJam'],
    'Resources': ['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resource library']
  };

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{category}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-600 hover:text-gray-900">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex items-center space-x-6">
          <Twitter className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Instagram className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Linkedin className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Github className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}