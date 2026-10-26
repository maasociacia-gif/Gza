import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for jobs, lawyers, or services..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 outline-none"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            fontSize: '16px'
          }}
        />
      </div>
    </div>
  );
}
