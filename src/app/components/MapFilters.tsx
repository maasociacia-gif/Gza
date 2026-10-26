import React, { useRef, useEffect } from 'react';
import { Layers, Scale, Cross, Wrench, Camera } from 'lucide-react';

interface MapFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

interface Filter {
  id: string;
  icon: React.ReactNode;
  labelGeo: string;
  labelEng: string;
}

const filters: Filter[] = [
  {
    id: 'all',
    icon: <Layers size={20} />,
    labelGeo: 'ყველა სერვისი',
    labelEng: 'All Services'
  },
  {
    id: 'legal',
    icon: <Scale size={20} />,
    labelGeo: 'იურიდიული',
    labelEng: 'Legal Help'
  },
  {
    id: 'medical',
    icon: <Cross size={20} />,
    labelGeo: 'სამედიცინო',
    labelEng: 'Medical'
  },
  {
    id: 'technical',
    icon: <Wrench size={20} />,
    labelGeo: 'ტექნიკური',
    labelEng: 'Technical'
  },
  {
    id: 'lost',
    icon: <Camera size={20} />,
    labelGeo: 'დაკარგული',
    labelEng: 'Lost Items'
  }
];

export function MapFilters({ selectedFilter, onFilterChange }: MapFiltersProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-4 pb-4">
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto pb-2"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {filters.map((filter) => {
          const isSelected = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border-0 cursor-pointer transition-all"
              style={{
                backgroundColor: isSelected ? '#DC143C' : '#152238',
                color: 'white',
                minWidth: '90px',
                boxShadow: isSelected ? '0 4px 12px rgba(220, 20, 60, 0.4)' : 'none',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div style={{ opacity: isSelected ? 1 : 0.7 }}>
                {filter.icon}
              </div>
              <div className="text-center">
                <div style={{ fontSize: '12px', fontWeight: '600', lineHeight: '1.2' }}>
                  {filter.labelGeo}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
