import React from 'react';
import { ScanLine, AlertCircle, DollarSign } from 'lucide-react';

interface QuickActionsProps {
  onEmergencyClick?: () => void;
  onSendMoneyClick?: () => void;
}

export function QuickActions({ onEmergencyClick, onSendMoneyClick }: QuickActionsProps) {
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
        type="button"
        onClick={onSendMoneyClick}
        className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#43E97B' }}
        >
          <DollarSign className="text-white" size={28} />
        </div>
        <span className="text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
          ფულის გადარიცხვა
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