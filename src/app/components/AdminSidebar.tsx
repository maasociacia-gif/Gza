import React from 'react';
import { LayoutDashboard, Users, FileText, AlertTriangle, Settings, ArrowLeft } from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onBack: () => void;
}

interface NavItem {
  id: string;
  icon: React.ReactNode;
  labelGeo: string;
  labelEng: string;
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    icon: <LayoutDashboard size={20} />,
    labelGeo: 'მთავარი',
    labelEng: 'Dashboard'
  },
  {
    id: 'users',
    icon: <Users size={20} />,
    labelGeo: 'მომხმარებლები',
    labelEng: 'Users'
  },
  {
    id: 'legal-content',
    icon: <FileText size={20} />,
    labelGeo: 'იურიდიული კონტენტი',
    labelEng: 'Legal Content'
  },
  {
    id: 'reports',
    icon: <AlertTriangle size={20} />,
    labelGeo: 'რეპორტები',
    labelEng: 'Reports'
  },
  {
    id: 'settings',
    icon: <Settings size={20} />,
    labelGeo: 'პარამეტრები',
    labelEng: 'Settings'
  }
];

export function AdminSidebar({ activeSection, onSectionChange, onBack }: AdminSidebarProps) {
  return (
    <div 
      className="w-72 flex flex-col border-r"
      style={{ 
        backgroundColor: '#0D1117',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Logo & Back */}
      <div className="p-6 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft className="text-white/60" size={20} />
          </button>
          <h1 className="text-white m-0" style={{ fontSize: '24px', fontWeight: '700' }}>
            Gza
          </h1>
        </div>
        <div>
          <p className="text-white/90 m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
            ადმინისტრატორის პანელი
          </p>
          <p className="text-white/50 m-0 mt-1" style={{ fontSize: '12px' }}>
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border-0 cursor-pointer"
                style={{
                  backgroundColor: isActive ? 'rgba(220, 20, 60, 0.15)' : 'transparent',
                  color: isActive ? '#DC143C' : 'rgba(255, 255, 255, 0.7)',
                  borderLeft: isActive ? '3px solid #DC143C' : '3px solid transparent'
                }}
              >
                {item.icon}
                <div className="flex-1 text-left">
                  <div style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.2' }}>
                    {item.labelGeo}
                  </div>
                  <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '2px' }}>
                    {item.labelEng}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#DC143C' }}
          >
            <span className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
              A
            </span>
          </div>
          <div className="flex-1">
            <p className="text-white m-0" style={{ fontSize: '13px', fontWeight: '600' }}>
              Admin User
            </p>
            <p className="text-white/50 m-0" style={{ fontSize: '11px' }}>
              admin@gza.app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
