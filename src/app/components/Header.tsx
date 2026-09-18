import React from 'react';

interface HeaderProps {
  onProfileClick?: () => void;
  showWelcome?: boolean;
}

export function Header({ onProfileClick, showWelcome = false }: HeaderProps) {
  return (
    <header data-gza-chrome className="px-4 py-4 flex items-center justify-between sticky top-0 z-20" style={{ backgroundColor: 'rgba(10, 22, 40, 0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      {/* Gza Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="Gza Logo" 
          className="h-10 w-auto"
          style={{ 
            filter: 'drop-shadow(0 4px 12px rgba(0, 217, 255, 0.3))',
            objectFit: 'contain'
          }}
        />
        <div>
          <h1 className="text-white m-0" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.5px' }}>
            Gza
          </h1>
          <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '10px', lineHeight: '1.2', fontWeight: '500', letterSpacing: '0.3px' }}>
            Your Path Home
          </p>
        </div>
      </div>

      {/* Profile Avatar with Flag Badge */}
      <button
        onClick={onProfileClick}
        className="relative border-0 cursor-pointer transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'none', padding: 0 }}
      >
        <div 
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: '#DC143C',
            boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <span className="text-white" style={{ fontSize: '16px', fontWeight: '700' }}>
            გ
          </span>
        </div>
        
        {/* German Flag Badge */}
        <div 
          className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: '#0D1B2A',
            border: '2px solid #0D1B2A',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          <span style={{ fontSize: '11px' }}>🇩🇪</span>
        </div>
      </button>
    </header>
  );
}