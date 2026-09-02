import React, { useState } from 'react';
import { Search, User, Building2, Package, Handshake, ChevronRight, Settings, Globe, LogOut, Bell, Lock, CreditCard, HelpCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileSettingsScreenProps {
  onBack: () => void;
  onBusinessRegister?: () => void;
}

export function ProfileSettingsScreen({ onBack, onBusinessRegister }: ProfileSettingsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Top Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-6">
          {/* Profile Picture */}
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#DC143C' }}
          >
            <span className="text-white" style={{ fontSize: '24px', fontWeight: '600' }}>
              გ
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search settings..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border-0 outline-none"
              style={{ 
                backgroundColor: '#152238',
                color: 'white',
                fontSize: '15px'
              }}
            />
          </div>
        </div>

        {/* User Name & Email */}
        <div className="mb-6">
          <h2 className="text-white mb-1" style={{ fontSize: '22px', fontWeight: '600' }}>
            Ana Machabeli
          </h2>
          <p className="text-white/50" style={{ fontSize: '14px' }}>
            ana.machabeli@email.com
          </p>
        </div>
      </div>

      {/* Business Mode Section */}
      <div className="px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden cursor-pointer"
          style={{ 
            background: 'linear-gradient(135deg, #1A2942 0%, #0F1922 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
          onClick={onBusinessRegister}
        >
          <div className="p-5">
            {/* Icons Row */}
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <Handshake className="w-6 h-6" style={{ color: '#2ECC71' }} />
              </div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <Building2 className="w-6 h-6" style={{ color: '#2ECC71' }} />
              </div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <Package className="w-6 h-6" style={{ color: '#2ECC71' }} />
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
              Business Mode / ბიზნეს რეჟიმი
            </h3>
            <p className="text-white/60 mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Sell to Emigrants, Manage Orders, and Grow Your Business
              <br />
              <span className="text-white/50">გაყიდე ემიგრანტებს, მართე შეკვეთები და გაზარდე ბიზნესი</span>
            </p>

            {/* Button */}
            <button
              className="w-full py-3.5 rounded-xl border transition-all hover:border-white/30"
              style={{
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Start Business Registration / დაიწყე რეგისტრაცია
            </button>
          </div>
        </motion.div>
      </div>

      {/* Settings List */}
      <div className="px-4 space-y-2">
        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <SettingItem 
            icon={<Settings className="w-5 h-5" />}
            title="Account Settings"
            titleGeo="ანგარიშის პარამეტრები"
          />
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <SettingItem 
            icon={<Bell className="w-5 h-5" />}
            title="Notifications"
            titleGeo="შეტყობინებები"
          />
        </motion.div>

        {/* Language */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SettingItem 
            icon={<Globe className="w-5 h-5" />}
            title="Language"
            titleGeo="ენა"
            rightText="English"
          />
        </motion.div>

        {/* Privacy & Security */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <SettingItem 
            icon={<Lock className="w-5 h-5" />}
            title="Privacy & Security"
            titleGeo="კონფიდენციალურობა"
          />
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SettingItem 
            icon={<CreditCard className="w-5 h-5" />}
            title="Payment Methods"
            titleGeo="გადახდის მეთოდები"
          />
        </motion.div>

        {/* Help & Support */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <SettingItem 
            icon={<HelpCircle className="w-5 h-5" />}
            title="Help & Support"
            titleGeo="დახმარება"
          />
        </motion.div>

        {/* Feedback */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <SettingItem 
            icon={<MessageSquare className="w-5 h-5" />}
            title="Send Feedback"
            titleGeo="გამოხმაურება"
          />
        </motion.div>

        {/* Logout - Different style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="pt-4"
        >
          <button
            className="w-full flex items-center gap-4 p-4 rounded-xl border-0 cursor-pointer transition-all hover:bg-white/5"
            style={{
              backgroundColor: 'rgba(220, 20, 60, 0.1)',
              border: '1px solid rgba(220, 20, 60, 0.3)'
            }}
            onClick={onBack}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(220, 20, 60, 0.2)' }}
            >
              <LogOut className="w-5 h-5" style={{ color: '#DC143C' }} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
                Logout
              </p>
              <p className="text-white/50" style={{ fontSize: '13px' }}>
                გასვლა
              </p>
            </div>
          </button>
        </motion.div>

        {/* App Version */}
        <div className="pt-6 pb-4 text-center">
          <p className="text-white/30" style={{ fontSize: '12px' }}>
            Gza App Version 2.4.1
          </p>
        </div>
      </div>
    </div>
  );
}

// Setting Item Component
interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  titleGeo: string;
  rightText?: string;
}

function SettingItem({ icon, title, titleGeo, rightText }: SettingItemProps) {
  return (
    <button
      className="w-full flex items-center gap-4 p-4 rounded-xl border-0 cursor-pointer transition-all hover:bg-white/5"
      style={{
        backgroundColor: '#152238',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      >
        <div style={{ color: '#9CA3AF' }}>
          {icon}
        </div>
      </div>
      <div className="flex-1 text-left">
        <p className="text-white mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
          {title}
        </p>
        <p className="text-white/50" style={{ fontSize: '13px' }}>
          {titleGeo}
        </p>
      </div>
      {rightText && (
        <p className="text-white/60" style={{ fontSize: '14px' }}>
          {rightText}
        </p>
      )}
      <ChevronRight className="w-5 h-5 text-white/30 flex-shrink-0" />
    </button>
  );
}
