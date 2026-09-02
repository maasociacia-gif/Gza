import React from 'react';
import { Check, ArrowRight, Mail, User, MapPin, Briefcase, Scan, Users, Search, TrendingUp, Shield, Sparkles, Settings, Home, Zap, Building2, Clock, DollarSign, SlidersHorizontal, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

export function UserFlowCanvas() {
  return (
    <div className="min-h-screen overflow-x-auto overflow-y-auto" style={{ backgroundColor: '#0A1628' }}>
      {/* Flow Header */}
      <div 
        className="sticky top-0 z-30 px-6 py-4"
        style={{ 
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-[1800px] mx-auto">
          <h1 className="text-white m-0 mb-2" style={{ fontSize: '28px', fontWeight: '700' }}>
            Gza Complete User Flow
          </h1>
          <p className="text-white/60 m-0" style={{ fontSize: '14px' }}>
            გზა - სრული მომხმარებლის მოგზაურობა / End-to-End Mobile App Experience
          </p>
        </div>
      </div>

      {/* Screens Grid - Side by Side */}
      <div className="px-6 py-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-6">
            
            {/* Screen 1: Splash & Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="flex-shrink-0 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#0D1B2A',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: '340px',
                height: '740px'
              }}
            >
              <div className="h-full flex flex-col p-8 relative overflow-hidden">
                {/* Background decoration */}
                <div 
                  className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
                  style={{ background: 'linear-gradient(135deg, #DC143C 0%, #667eea 100%)' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
                  style={{ background: 'linear-gradient(135deg, #43E97B 0%, #38f9d7 100%)' }}
                />
                
                <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                  {/* Logo */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-32 h-32 rounded-[40px] flex items-center justify-center mb-8 relative overflow-hidden"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.3) 0%, rgba(220, 20, 60, 0.1) 100%)',
                      border: '2px solid rgba(220, 20, 60, 0.5)',
                      boxShadow: '0 20px 60px rgba(220, 20, 60, 0.4)'
                    }}
                  >
                    <span className="text-white" style={{ fontSize: '64px', fontWeight: '700' }}>
                      G
                    </span>
                    {/* Georgian flag element */}
                    <div 
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-2xl"
                      style={{ 
                        background: 'linear-gradient(135deg, #DC143C 0%, #DC143C 50%, white 50%, white 100%)'
                      }}
                    />
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-center m-0" 
                    style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '-2px' }}
                  >
                    Gza
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/40 text-center m-0 mt-2" 
                    style={{ fontSize: '12px', letterSpacing: '3px', fontWeight: '600' }}
                  >
                    IMMIGRANT SUPER-APP
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                  >
                    <h2 className="text-white m-0" style={{ fontSize: '28px', fontWeight: '600', lineHeight: '1.3' }}>
                      თქვენი გზა გერმანიაში
                    </h2>
                    <p className="text-white/60 m-0 mt-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      Your complete journey<br />in Germany starts here
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full py-4 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
                    boxShadow: '0 12px 32px rgba(220, 20, 60, 0.5)'
                  }}
                >
                  <span className="text-white" style={{ fontSize: '18px', fontWeight: '600' }}>
                    დაწყება / Get Started
                  </span>
                  <ArrowRight size={22} className="text-white" strokeWidth={2.5} />
                </motion.button>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-white/40 text-center m-0 mt-4" 
                  style={{ fontSize: '13px' }}
                >
                  უკვე გაქვს ანგარიში? <span style={{ color: '#DC143C', fontWeight: '600', cursor: 'pointer' }}>შესვლა</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Screen 2: Modern Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#0D1B2A',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: '340px',
                height: '740px'
              }}
            >
              <div className="h-full flex flex-col p-6">
                {/* Header */}
                <div className="mb-8 mt-4">
                  <h2 className="text-white m-0" style={{ fontSize: '32px', fontWeight: '700' }}>
                    რეგისტრაცია
                  </h2>
                  <p className="text-white/60 m-0 mt-2" style={{ fontSize: '15px' }}>
                    Create your account
                  </p>
                </div>

                {/* Form */}
                <div className="flex-1 space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="text-white/70 block mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>
                      სრული სახელი / Full Name
                    </label>
                    <div className="relative">
                      <User 
                        size={20} 
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 text-white/40"
                        style={{ transform: 'translateY(-50%)' }}
                      />
                      <input
                        type="text"
                        placeholder="Giorgi Beridze"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 outline-none text-white placeholder-white/30"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="text-white/70 block mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>
                      ელ. ფოსტა / Email Address
                    </label>
                    <div className="relative">
                      <Mail 
                        size={20} 
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 text-white/40"
                        style={{ transform: 'translateY(-50%)' }}
                      />
                      <input
                        type="email"
                        placeholder="giorgi@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 outline-none text-white placeholder-white/30"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '15px'
                        }}
                      />
                    </div>
                  </div>

                  {/* Location Field */}
                  <div>
                    <label className="text-white/70 block mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>
                      ლოკაცია / Location in Germany
                    </label>
                    <div className="relative">
                      <MapPin 
                        size={20} 
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 text-white/40"
                        style={{ transform: 'translateY(-50%)' }}
                      />
                      <select
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 outline-none text-white appearance-none cursor-pointer"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '15px'
                        }}
                      >
                        <option>Berlin</option>
                        <option>Munich</option>
                        <option>Hamburg</option>
                        <option>Frankfurt</option>
                        <option>Stuttgart</option>
                      </select>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <span className="text-white/40" style={{ fontSize: '13px' }}>
                      ან / or
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                  </div>

                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <button
                      className="w-full py-3.5 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <span className="text-white" style={{ fontSize: '15px', fontWeight: '500' }}>
                        Continue with Apple
                      </span>
                    </button>

                    <button
                      className="w-full py-3.5 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-white" style={{ fontSize: '15px', fontWeight: '500' }}>
                        Continue with Google
                      </span>
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  className="w-full py-4 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
                    boxShadow: '0 8px 24px rgba(220, 20, 60, 0.4)'
                  }}
                >
                  <span className="text-white" style={{ fontSize: '17px', fontWeight: '600' }}>
                    გაგრძელება / Continue
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Screen 3: Subscription Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#0D1B2A',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: '340px',
                height: '740px'
              }}
            >
              <div className="h-full flex flex-col p-6 overflow-y-auto">
                {/* Header */}
                <div className="mb-6 mt-2">
                  <h2 className="text-white m-0" style={{ fontSize: '28px', fontWeight: '700' }}>
                    აირჩიე გეგმა
                  </h2>
                  <p className="text-white/60 m-0 mt-2" style={{ fontSize: '14px' }}>
                    Choose your plan
                  </p>
                </div>

                {/* Standard Plan */}
                <div 
                  className="rounded-2xl p-5 mb-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '600' }}>
                        Standard
                      </h3>
                      <p className="text-white/60 m-0 mt-1" style={{ fontSize: '13px' }}>
                        სტანდარტული
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-white" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1' }}>
                        Free
                      </div>
                      <p className="text-white/50 m-0 mt-1" style={{ fontSize: '12px' }}>
                        უფასო
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    {['Job Search', 'Community Access', 'Basic Support'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check size={18} strokeWidth={2} className="text-white/60" />
                        <span className="text-white/70" style={{ fontSize: '14px' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Plan - Highlighted with Glow */}
                <div 
                  className="rounded-2xl p-5 mb-3 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(220, 20, 60, 0.08) 100%)',
                    border: '2px solid rgba(220, 20, 60, 0.5)',
                    boxShadow: '0 12px 40px rgba(220, 20, 60, 0.3), 0 0 60px rgba(220, 20, 60, 0.15)'
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(220, 20, 60, 0.4) 0%, transparent 70%)'
                    }}
                  />
                  
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#DC143C' }}
                  >
                    <span className="text-white" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>
                      POPULAR
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-2">
                        <Zap size={20} strokeWidth={2} style={{ color: '#DC143C' }} />
                        <h3 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '700' }}>
                          Premium
                        </h3>
                      </div>
                      <p className="text-white/70 m-0 mt-1" style={{ fontSize: '13px' }}>
                        პრემიუმი
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-white" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1' }}>
                        €4.99
                      </div>
                      <p className="text-white/60 m-0 mt-1" style={{ fontSize: '12px', fontWeight: '500' }}>
                        თვეში / monthly
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5 relative z-10">
                    {[
                      'All Standard features',
                      'AI Document Scanner',
                      'Legal Help & Translation',
                      'Priority Support',
                      'Secure Document Vault',
                      'Emergency Assistance'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check size={18} strokeWidth={2.5} style={{ color: '#DC143C' }} />
                        <span className="text-white" style={{ fontSize: '14px', fontWeight: '500' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full mt-4 py-3 rounded-xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative z-10"
                    style={{
                      backgroundColor: '#DC143C',
                      boxShadow: '0 6px 20px rgba(220, 20, 60, 0.4)'
                    }}
                  >
                    <span className="text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
                      არჩევა / Select Plan
                    </span>
                  </button>
                </div>

                {/* Business Plan */}
                <div 
                  className="rounded-2xl p-5 mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 size={20} strokeWidth={1.5} className="text-white/70" />
                        <h3 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '600' }}>
                          Business
                        </h3>
                      </div>
                      <p className="text-white/60 m-0 mt-1" style={{ fontSize: '13px' }}>
                        ბიზნესი
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-white" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1' }}>
                        Custom
                      </div>
                      <p className="text-white/50 m-0 mt-1" style={{ fontSize: '12px' }}>
                        Contact us
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    {['All Premium features', 'Post Job Listings', 'Analytics Dashboard', 'API Access'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check size={18} strokeWidth={2} className="text-white/60" />
                        <span className="text-white/70" style={{ fontSize: '14px' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skip for now */}
                <button
                  className="w-full py-3 rounded-xl border-0 cursor-pointer transition-all hover:opacity-80"
                  style={{
                    background: 'none',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  ახლა გამოტოვება / Skip for now
                </button>
              </div>
            </motion.div>

            {/* Screen 4: Fixed Home Screen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#0D1B2A',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: '340px',
                height: '740px'
              }}
            >
              <div className="h-full flex flex-col relative">
                {/* Header - Fixed */}
                <div 
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ 
                    backgroundColor: 'rgba(13, 27, 42, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(220, 20, 60, 0.05) 100%)',
                        border: '1px solid rgba(220, 20, 60, 0.3)'
                      }}
                    >
                      <span className="text-white" style={{ fontSize: '18px', fontWeight: '700' }}>
                        G
                      </span>
                      <div 
                        className="absolute bottom-0 right-0 w-3 h-3 rounded-tl-sm"
                        style={{ 
                          background: 'linear-gradient(135deg, #DC143C 0%, #DC143C 50%, white 50%, white 100%)'
                        }}
                      />
                    </div>
                    <div>
                      <h1 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.5px' }}>
                        Gza
                      </h1>
                      <p className="text-white/40 m-0" style={{ fontSize: '9px', lineHeight: '1.2', fontWeight: '500', letterSpacing: '0.5px' }}>
                        IMMIGRANT HUB
                      </p>
                    </div>
                  </div>

                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center relative cursor-pointer"
                    style={{ 
                      backgroundColor: '#DC143C',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)'
                    }}
                  >
                    <span className="text-white" style={{ fontSize: '15px', fontWeight: '700' }}>
                      გ
                    </span>
                    <div 
                      className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: '#0D1B2A',
                        border: '2px solid #0D1B2A'
                      }}
                    >
                      <span style={{ fontSize: '10px' }}>🇩🇪</span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-5">
                  {/* Search Bar */}
                  <div className="py-4">
                    <div className="relative">
                      <Search 
                        size={18} 
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 text-white/40"
                        style={{ transform: 'translateY(-50%)' }}
                      />
                      <input
                        type="text"
                        placeholder="მოძებნე... / Search services, jobs, or docs..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-0 outline-none text-white placeholder-white/40"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          fontSize: '14px',
                          fontWeight: '400',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Welcome */}
                  <div className="mb-6">
                    <h2 className="text-white m-0" style={{ fontSize: '26px', fontWeight: '600', lineHeight: '1.2' }}>
                      გამარჯობა, გიორგი 👋
                    </h2>
                    <p className="text-white/50 m-0 mt-1" style={{ fontSize: '14px', lineHeight: '1.4', fontWeight: '400' }}>
                      Welcome back to Gza
                    </p>
                  </div>

                  {/* Central 4-Tile Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: <Briefcase size={26} strokeWidth={1.5} />, geo: 'დასაქმება', eng: 'Jobs', main: true },
                      { icon: <Scan size={26} strokeWidth={1.5} />, geo: 'AI სკანი', eng: 'AI Scan', main: false },
                      { icon: <MapPin size={26} strokeWidth={1.5} />, geo: 'რუკა', eng: 'Map', main: false },
                      { icon: <Users size={26} strokeWidth={1.5} />, geo: 'თემი', eng: 'Community', main: false }
                    ].map((tile, i) => (
                      <div
                        key={i}
                        className="rounded-3xl p-5 relative cursor-pointer transition-all hover:scale-[1.02]"
                        style={{
                          background: tile.main 
                            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                            : 'rgba(255, 255, 255, 0.03)',
                          border: tile.main 
                            ? '1px solid rgba(255, 255, 255, 0.15)'
                            : '1px solid rgba(255, 255, 255, 0.05)',
                          aspectRatio: '1',
                          backdropFilter: 'blur(10px)',
                          boxShadow: tile.main 
                            ? '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            : '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {tile.main && (
                          <div 
                            className="absolute inset-0 opacity-50"
                            style={{
                              background: 'radial-gradient(circle at 50% 0%, rgba(220, 20, 60, 0.15) 0%, transparent 70%)'
                            }}
                          />
                        )}
                        <div className="h-full flex flex-col items-center justify-center gap-4 relative z-10">
                          <div 
                            className="rounded-2xl flex items-center justify-center"
                            style={{ 
                              width: tile.main ? '64px' : '56px',
                              height: tile.main ? '64px' : '56px',
                              backgroundColor: tile.main ? 'rgba(220, 20, 60, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                              border: tile.main ? '1px solid rgba(220, 20, 60, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)'
                            }}
                          >
                            <div className={tile.main ? 'text-white' : 'text-white/80'}>
                              {tile.icon}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-white" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.2' }}>
                              {tile.geo}
                            </div>
                            <div className="text-white/50 mt-1" style={{ fontSize: '12px', fontWeight: '400' }}>
                              {tile.eng}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Card */}
                  <div 
                    className="rounded-3xl p-5 mb-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { num: '142', label: 'ვაკანსია' },
                        { num: '23', label: 'დოკუმენტი' },
                        { num: '5', label: 'შეტყობინება' }
                      ].map((stat, i) => (
                        <div key={i} className="text-center" style={{ borderRight: i < 2 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none' }}>
                          <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                            {stat.num}
                          </div>
                          <div className="text-white/50 mt-1.5" style={{ fontSize: '11px', fontWeight: '400' }}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Jobs Preview */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={18} strokeWidth={1.5} className="text-white/60" />
                        <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                          რჩეული ვაკანსიები
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="rounded-2xl p-4"
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          <h4 className="text-white m-0" style={{ fontSize: '15px', fontWeight: '600' }}>
                            პროგრამული ინჟინერი
                          </h4>
                          <p className="text-white/50 m-0 mt-1" style={{ fontSize: '13px' }}>
                            TechCorp GmbH • Berlin • €55k-€75k
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Nav - Fixed */}
                <div 
                  className="px-4 py-3 flex justify-around items-center"
                  style={{
                    backgroundColor: 'rgba(21, 34, 56, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {[
                    { icon: <Home size={22} strokeWidth={1.5} />, label: 'Home', active: true },
                    { icon: <Shield size={22} strokeWidth={1.5} />, label: 'Vault', active: false },
                    { icon: <Sparkles size={22} strokeWidth={1.5} />, label: 'AI', active: false },
                    { icon: <Settings size={22} strokeWidth={1.5} />, label: 'Settings', active: false }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 py-1 relative"
                    >
                      {item.active && (
                        <div 
                          className="absolute -top-2 w-8 h-1 rounded-full"
                          style={{ backgroundColor: '#DC143C' }}
                        />
                      )}
                      <div style={{ color: item.active ? '#DC143C' : 'rgba(255, 255, 255, 0.6)' }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: item.active ? '600' : '500', color: item.active ? '#DC143C' : 'rgba(255, 255, 255, 0.6)' }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Screen 5: Jobs Listing with Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex-shrink-0 rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#0D1B2A',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: '340px',
                height: '740px'
              }}
            >
              <div className="h-full flex flex-col">
                {/* Header - Fixed */}
                <div 
                  className="px-5 py-4"
                  style={{ 
                    backgroundColor: 'rgba(13, 27, 42, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '600' }}>
                      დასაქმება / Jobs
                    </h1>
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-white/5 border-0 cursor-pointer"
                      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <SlidersHorizontal size={20} strokeWidth={1.5} className="text-white" />
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="relative mb-3">
                    <Search 
                      className="absolute left-4 top-1/2 text-white/40" 
                      size={18} 
                      strokeWidth={1.5}
                      style={{ transform: 'translateY(-50%)' }}
                    />
                    <input
                      type="text"
                      placeholder="ძებნა... / Search jobs..."
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 outline-none text-white placeholder-white/40"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        fontSize: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {[
                      { label: 'ყველა / All', active: true },
                      { label: 'Full-time', active: false },
                      { label: 'Minijob', active: false },
                      { label: 'Remote', active: false }
                    ].map((filter, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 rounded-xl border-0 cursor-pointer whitespace-nowrap transition-all hover:scale-[1.02]"
                        style={{
                          background: filter.active 
                            ? 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          border: filter.active ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: filter.active ? '600' : '500'
                        }}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats Bar */}
                <div 
                  className="px-5 py-3"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/70" style={{ fontSize: '13px' }}>
                      142 ვაკანსია ნაპოვნია
                    </span>
                    <span className="text-white/50" style={{ fontSize: '13px' }}>
                      Berlin
                    </span>
                  </div>
                </div>

                {/* Scrollable Job List */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <div className="space-y-3">
                    {[
                      {
                        titleGeo: 'პროგრამული ინჟინერი',
                        titleEng: 'Software Engineer',
                        company: 'TechCorp GmbH',
                        location: 'Berlin',
                        salary: '€55k - €75k',
                        type: 'Full-time',
                        typeGeo: 'სრული განაკვეთი',
                        time: '2d ago',
                        saved: false
                      },
                      {
                        titleGeo: 'საწყობის მუშაკი',
                        titleEng: 'Warehouse Worker',
                        company: 'Logistics Pro',
                        location: 'Munich',
                        salary: '€35k - €42k',
                        type: 'Full-time',
                        typeGeo: 'სრული განაკვეთი',
                        time: '5d ago',
                        saved: true
                      },
                      {
                        titleGeo: 'მიმტანი',
                        titleEng: 'Restaurant Server',
                        company: 'Bella Italia',
                        location: 'Frankfurt',
                        salary: '€450/mo',
                        type: 'Minijob',
                        typeGeo: 'მინიჯობი',
                        time: '1w ago',
                        saved: false
                      },
                      {
                        titleGeo: 'მოვლის ასისტენტი',
                        titleEng: 'Healthcare Assistant',
                        company: 'CareFirst Clinic',
                        location: 'Hamburg',
                        salary: '€38k - €45k',
                        type: 'Full-time',
                        typeGeo: 'სრული განაკვეთი',
                        time: '3d ago',
                        saved: false
                      },
                      {
                        titleGeo: 'მიმტანი მძღოლი',
                        titleEng: 'Delivery Driver',
                        company: 'QuickDeliver',
                        location: 'Stuttgart',
                        salary: '€32k - €38k',
                        type: 'Full-time',
                        typeGeo: 'სრული განაკვეთი',
                        time: '4d ago',
                        saved: false
                      }
                    ].map((job, index) => (
                      <div
                        key={index}
                        className="rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01]"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>
                              {job.titleGeo}
                            </h3>
                            <p className="text-white/60 m-0 mt-0.5" style={{ fontSize: '13px' }}>
                              {job.titleEng}
                            </p>
                          </div>
                          <button
                            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/5 border-0 cursor-pointer"
                            style={{ background: 'none' }}
                          >
                            <Bookmark 
                              size={18} 
                              strokeWidth={1.5}
                              className={job.saved ? 'text-white fill-white' : 'text-white/40'}
                            />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Briefcase size={14} strokeWidth={1.5} className="text-white/40" />
                            <span className="text-white/70" style={{ fontSize: '12px' }}>
                              {job.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} strokeWidth={1.5} className="text-white/40" />
                            <span className="text-white/70" style={{ fontSize: '12px' }}>
                              {job.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="px-3 py-1 rounded-full"
                              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            >
                              <span className="text-white/80" style={{ fontSize: '11px', fontWeight: '500' }}>
                                {job.typeGeo}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <DollarSign size={14} strokeWidth={1.5} className="text-white/40" />
                              <span className="text-white/70" style={{ fontSize: '12px', fontWeight: '500' }}>
                                {job.salary}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} strokeWidth={1.5} className="text-white/30" />
                            <span className="text-white/40" style={{ fontSize: '11px' }}>
                              {job.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
