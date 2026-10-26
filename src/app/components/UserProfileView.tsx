import React from 'react';
import { ArrowLeft, Shield, Lock, MessageSquare, Settings, CheckCircle, LogOut, Star, HandHeart, Calendar, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface UserProfileViewProps {
  onBack: () => void;
  onVaultClick?: () => void;
}

export function UserProfileView({ onBack, onVaultClick }: UserProfileViewProps) {
  const user = {
    name: 'გიორგი კ.',
    nameEng: 'Giorgi K.',
    location: 'მიუნხენი, გერმანია',
    locationEng: 'Munich, Germany',
    country: 'Germany',
    flag: '🇩🇪',
    verified: true,
    trustScore: 5,
    stats: {
      helps: 12,
      years: 2,
      reports: 45
    }
  };

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Top Bar */}
      <div className="px-4 py-4 flex items-center justify-between sticky top-0 z-10" style={{ backgroundColor: '#0D1B2A' }}>
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h1 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '600' }}>
          პროფილი / Profile
        </h1>
        <div className="w-10" />
      </div>

      {/* Profile Card */}
      <div className="px-4 pt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-8"
          style={{
            background: 'linear-gradient(135deg, #1A2942 0%, #152238 100%)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Profile Picture with Badges */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: '#DC143C',
                  border: '4px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="text-white" style={{ fontSize: '36px', fontWeight: '700' }}>
                  {user.name.charAt(0)}
                </span>
              </div>
              
              {/* Flag Badge */}
              <div 
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: '#0D1B2A',
                  border: '3px solid #0D1B2A'
                }}
              >
                <span style={{ fontSize: '16px' }}>{user.flag}</span>
              </div>

              {/* Verified Badge */}
              {user.verified && (
                <div 
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#4A90E2',
                    border: '3px solid #0D1B2A'
                  }}
                >
                  <CheckCircle size={14} className="text-white" fill="white" />
                </div>
              )}
            </div>

            {/* Name */}
            <h2 className="text-white m-0" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1.2' }}>
              {user.name}
            </h2>
            
            {/* Location */}
            <p className="text-white/70 m-0 mt-2" style={{ fontSize: '14px' }}>
              {user.location}
            </p>

            {/* Trust Score */}
            <div 
              className="mt-4 px-4 py-2 rounded-full flex items-center gap-2"
              style={{ backgroundColor: 'rgba(255, 215, 0, 0.15)' }}
            >
              <Shield size={16} style={{ color: '#FFD700' }} />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFD700' }}>
                სანდო წევრი
              </span>
              <div className="flex gap-0.5 ml-1">
                {[...Array(user.trustScore)].map((_, i) => (
                  <Star key={i} size={12} fill="#FFD700" stroke="#FFD700" />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ backgroundColor: 'rgba(67, 233, 123, 0.15)' }}
              >
                <HandHeart size={20} style={{ color: '#43E97B' }} />
              </div>
              <div className="text-white" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                {user.stats.helps}
              </div>
              <div className="text-white/60 mt-1 text-center" style={{ fontSize: '11px', lineHeight: '1.3' }}>
                დახმარება
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ backgroundColor: 'rgba(74, 144, 226, 0.15)' }}
              >
                <Calendar size={20} style={{ color: '#4A90E2' }} />
              </div>
              <div className="text-white" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                {user.stats.years}
              </div>
              <div className="text-white/60 mt-1 text-center" style={{ fontSize: '11px', lineHeight: '1.3' }}>
                წელი
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ backgroundColor: 'rgba(245, 166, 35, 0.15)' }}
              >
                <FileText size={20} style={{ color: '#F5A623' }} />
              </div>
              <div className="text-white" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                {user.stats.reports}
              </div>
              <div className="text-white/60 mt-1 text-center" style={{ fontSize: '11px', lineHeight: '1.3' }}>
                რეპორტი
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Menu */}
      <div className="px-4 space-y-3">
        {/* My Vault - with notification */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01]"
          style={{
            backgroundColor: '#152238',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}
          onClick={onVaultClick}
        >
          <div className="relative">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(220, 20, 60, 0.15)' }}
            >
              <Lock size={20} style={{ color: '#DC143C' }} />
            </div>
            {/* Notification Dot */}
            <div 
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: '#DC143C',
                boxShadow: '0 0 8px rgba(220, 20, 60, 0.6)'
              }}
            />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.2' }}>
              ჩემი სეიფი
            </div>
            <div className="text-white/60 mt-1" style={{ fontSize: '12px' }}>
              My Vault
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        {/* My Posts */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01]"
          style={{
            backgroundColor: '#152238',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(74, 144, 226, 0.15)' }}
          >
            <MessageSquare size={20} style={{ color: '#4A90E2' }} />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.2' }}>
              ჩემი პოსტები
            </div>
            <div className="text-white/60 mt-1" style={{ fontSize: '12px' }}>
              My Posts
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        {/* Settings */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01]"
          style={{
            backgroundColor: '#152238',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(156, 163, 175, 0.15)' }}
          >
            <Settings size={20} style={{ color: '#9CA3AF' }} />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.2' }}>
              ჩემი პარამეტრები
            </div>
            <div className="text-white/60 mt-1" style={{ fontSize: '12px' }}>
              My Settings
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        {/* Get Verified - Prominent */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full flex items-center gap-4 p-5 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01]"
          style={{
            background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
            boxShadow: '0 8px 24px rgba(220, 20, 60, 0.4)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <CheckCircle size={22} className="text-white" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.2' }}>
              ვერიფიკაცია
            </div>
            <div className="text-white/90 mt-1" style={{ fontSize: '12px' }}>
              Get Verified
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

      {/* Logout Button */}
      <div className="px-4 mt-8">
        <button
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all hover:bg-white/5"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <LogOut size={18} />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>
            გასვლა / Logout
          </span>
        </button>
      </div>
    </div>
  );
}