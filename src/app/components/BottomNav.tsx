import React from 'react';
import { Home, Shield, MessageCircle, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  labelGeo: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', labelGeo: 'მთავარი', icon: <Home size={24} /> },
  { id: 'vault', label: 'Vault', labelGeo: 'სეიფი', icon: <Shield size={24} /> },
  { id: 'chat', label: 'Chat', labelGeo: 'ჩათი', icon: <MessageCircle size={24} /> },
  { id: 'settings', label: 'Settings', labelGeo: 'პარამეტრები', icon: <Settings size={24} /> }
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav 
      data-gza-chrome
      className="fixed bottom-0 left-0 right-0 px-4 py-3 flex justify-around items-center mx-auto max-w-[480px] lg:max-w-[1200px]"
      style={{
        backgroundColor: '#1A212E',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className="flex flex-col items-center gap-1 py-2 px-3 transition-all border-0 cursor-pointer relative"
            style={{
              background: 'none',
              color: isActive ? '#DC143C' : 'rgba(255, 255, 255, 0.6)'
            }}
          >
            {isActive && (
              <div 
                className="absolute -top-1 left-1/2 w-8 h-1 rounded-full"
                style={{ 
                  backgroundColor: '#DC143C',
                  transform: 'translateX(-50%)'
                }}
              />
            )}
            {item.icon}
            <span style={{ fontSize: '11px', fontWeight: isActive ? '600' : '500' }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}