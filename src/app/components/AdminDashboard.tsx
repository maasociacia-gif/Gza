import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { DashboardOverview } from './DashboardOverview';
import { LegalContentEditor } from './LegalContentEditor';
import { UsersManagement } from './UsersManagement';
import { ReportsView } from './ReportsView';
import { SettingsView } from './SettingsView';

interface AdminDashboardProps {
  onBack: () => void;
}

export function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState('legal-content');

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Sidebar */}
      <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} onBack={onBack} />
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {activeSection === 'dashboard' && <DashboardOverview />}
        {activeSection === 'users' && <UsersManagement />}
        {activeSection === 'legal-content' && <LegalContentEditor />}
        {activeSection === 'reports' && <ReportsView />}
        {activeSection === 'settings' && <SettingsView />}
      </div>
    </div>
  );
}
