import React from 'react';
import { StatisticsCards } from './StatisticsCards';

export function DashboardOverview() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white m-0" style={{ fontSize: '32px', fontWeight: '700' }}>
          მთავარი გვერდი
        </h1>
        <p className="text-white/60 m-0 mt-2" style={{ fontSize: '14px' }}>
          Dashboard Overview
        </p>
      </div>

      <StatisticsCards />

      <div className="mt-8 text-white/50 text-center p-12">
        Dashboard content coming soon...
      </div>
    </div>
  );
}
