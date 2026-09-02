import React from 'react';
import { ScanLine, AlertCircle } from 'lucide-react';

interface QuickActionsProps {
  onEmergencyClick?: () => void;
}

export function QuickActions({ onEmergencyClick }: QuickActionsProps) {
  return (
    <div className="mb-8 flex justify-center gap-6">
      <button 
        className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#DC143C' }}
        >
          <ScanLine className="text-white" size={28} />
        </div>
        <span className="text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
          Scan Document
        </span>
      </button>
      
      <button 
        onClick={onEmergencyClick}
        className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#DC143C' }}
        >
          <AlertCircle className="text-white" size={28} />
        </div>
        <span className="text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
          Emergency Help
        </span>
      </button>
    </div>
  );
}