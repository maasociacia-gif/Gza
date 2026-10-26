import React from 'react';
import { Briefcase, FileText, MessageCircle, Heart } from 'lucide-react';

interface MainGridProps {
  onSubscriptionClick?: () => void;
  onChatClick?: () => void;
  onUserProfileClick?: () => void;
}

interface ServiceCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  gradient: string;
  onClick?: () => void;
}

export function MainGrid({ onSubscriptionClick, onChatClick, onUserProfileClick }: MainGridProps) {
  const services: ServiceCard[] = [
    {
      id: 'careers',
      title: 'Careers & Jobs',
      icon: <Briefcase size={32} />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      onClick: onUserProfileClick
    },
    {
      id: 'bureaucracy',
      title: 'Bureaucracy Assistant',
      icon: <FileText size={32} />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'community',
      title: 'Community Hub',
      icon: <MessageCircle size={32} />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      onClick: onChatClick
    },
    {
      id: 'family',
      title: 'Family Care Georgia',
      icon: <Heart size={32} />,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={service.onClick}
            className="p-6 rounded-3xl transition-all hover:scale-[1.02] active:scale-[0.98] border-0 cursor-pointer"
            style={{
              background: '#152238',
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: service.gradient }}
            >
              <div className="text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-white m-0 text-left" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>
              {service.title}
            </h3>
          </button>
        ))}
      </div>
      
      {/* Subscription CTA Banner */}
      {onSubscriptionClick && (
        <button
          onClick={onSubscriptionClick}
          className="w-full p-5 rounded-3xl border-0 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{
            background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
            boxShadow: '0 8px 24px rgba(220, 20, 60, 0.4)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-white" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2' }}>
                პრემიუმზე გადასვლა
              </div>
              <div className="text-white/90 mt-1" style={{ fontSize: '13px' }}>
                Upgrade to Premium
              </div>
            </div>
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}