import React from 'react';
import { Users, UserCheck, AlertTriangle, TrendingUp } from 'lucide-react';

interface StatCard {
  id: string;
  titleGeo: string;
  titleEng: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

const stats: StatCard[] = [
  {
    id: 'users',
    titleGeo: 'მთლიანი მომხმარებლები',
    titleEng: 'Total Users',
    value: '12,458',
    change: '+12.5%',
    trend: 'up',
    icon: <Users size={24} />,
    color: '#4A90E2'
  },
  {
    id: 'verifications',
    titleGeo: 'მოლოდინში ვერიფიკაცია',
    titleEng: 'Pending Verifications',
    value: '234',
    change: '+8.2%',
    trend: 'up',
    icon: <UserCheck size={24} />,
    color: '#F5A623'
  },
  {
    id: 'reports',
    titleGeo: 'აქტიური რეპორტები',
    titleEng: 'Active Reports',
    value: '47',
    change: '-15.3%',
    trend: 'down',
    icon: <AlertTriangle size={24} />,
    color: '#DC143C'
  }
];

export function StatisticsCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-2xl p-6 border transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: '#0D1117',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <div style={{ color: stat.color }}>
                {stat.icon}
              </div>
            </div>
            <div 
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ 
                backgroundColor: stat.trend === 'up' 
                  ? 'rgba(67, 233, 123, 0.1)' 
                  : 'rgba(220, 20, 60, 0.1)',
                color: stat.trend === 'up' ? '#43E97B' : '#DC143C',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              <TrendingUp 
                size={12} 
                style={{ 
                  transform: stat.trend === 'down' ? 'rotate(180deg)' : 'none'
                }}
              />
              {stat.change}
            </div>
          </div>
          
          <div>
            <h3 className="text-white m-0" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1' }}>
              {stat.value}
            </h3>
            <p className="text-white m-0 mt-3" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
              {stat.titleGeo}
            </p>
            <p className="text-white/50 m-0 mt-1" style={{ fontSize: '11px' }}>
              {stat.titleEng}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
