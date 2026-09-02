import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MapView } from './MapView';
import { MapFilters } from './MapFilters';
import { EmergencyActionCard } from './EmergencyActionCard';

interface EmergencyMapPageProps {
  onNavigate: (tab: string) => void;
}

export function EmergencyMapPage({ onNavigate }: EmergencyMapPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen pb-32" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Top Navigation */}
      <div
        className="flex items-center sticky top-0 z-20"
        style={{
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '16px',
        }}
      >
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Go back"
        >
          <ArrowLeft className="text-white" size={22} />
        </button>
        <h1 className="text-white m-0" style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' }}>
          Gza
        </h1>
      </div>

      {/* Map Title */}
      <div className="px-4 pt-2 pb-4">
        <h2 
          className="text-white m-0 text-center"
          style={{ 
            fontSize: '26px', 
            fontWeight: '700',
            lineHeight: '1.3',
            textShadow: '0 2px 8px rgba(220, 20, 60, 0.3)'
          }}
        >
          შენი უსაფრთხოების რუკა
        </h2>
        <p className="text-white/70 text-center m-0 mt-1" style={{ fontSize: '14px' }}>
          Your Safety Map
        </p>
      </div>

      {/* Map Filters */}
      <MapFilters selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

      {/* Map Section */}
      <div className="px-4 pb-4">
        <div 
          className="rounded-3xl overflow-hidden"
          style={{ 
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            border: '2px solid rgba(220, 20, 60, 0.2)'
          }}
        >
          <MapView selectedFilter={selectedFilter} />
        </div>
      </div>

      {/* Emergency Action Card */}
      <EmergencyActionCard />
    </div>
  );
}
