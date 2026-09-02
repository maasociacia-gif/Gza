import React, { useState } from 'react';
import { ArrowLeft, Lock, Shield, Fingerprint, FileText, Heart, Home as HomeIcon, Briefcase, Plus, ChevronRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface MyVaultScreenProps {
  onBack: () => void;
}

interface VaultCategory {
  id: string;
  titleGeo: string;
  titleEng: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  count: number;
  hasExpiring?: boolean;
}

export function MyVaultScreen({ onBack }: MyVaultScreenProps) {
  const [showUploadMenu, setShowUploadMenu] = useState(false);

  const categories: VaultCategory[] = [
    {
      id: 'personal',
      titleGeo: 'პირადი დოკუმენტები',
      titleEng: 'Personal Docs',
      icon: <FileText size={24} />,
      iconColor: '#4A90E2',
      iconBg: 'rgba(74, 144, 226, 0.15)',
      count: 5
    },
    {
      id: 'health',
      titleGeo: 'ჯანმრთელობა',
      titleEng: 'Health',
      icon: <Heart size={24} />,
      iconColor: '#F5576C',
      iconBg: 'rgba(245, 87, 108, 0.15)',
      count: 8
    },
    {
      id: 'residence',
      titleGeo: 'საცხოვრებელი და იურიდიული',
      titleEng: 'Residence & Legal',
      icon: <HomeIcon size={24} />,
      iconColor: '#43E97B',
      iconBg: 'rgba(67, 233, 123, 0.15)',
      count: 3,
      hasExpiring: true
    },
    {
      id: 'employment',
      titleGeo: 'დასაქმება',
      titleEng: 'Employment',
      icon: <Briefcase size={24} />,
      iconColor: '#F5A623',
      iconBg: 'rgba(245, 166, 35, 0.15)',
      count: 7
    }
  ];

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Header */}
      <div 
        className="px-4 py-4 sticky top-0 z-20"
        style={{ 
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft className="text-white" size={24} />
          </button>
          
          <div className="flex-1 flex justify-center">
            <h1 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '700' }}>
              ჩემი სეიფი
            </h1>
          </div>

          <div className="w-10" />
        </div>

        {/* Secure Connection Badge */}
        <div className="flex justify-center">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(67, 233, 123, 0.15)' }}
          >
            <Lock size={12} style={{ color: '#43E97B' }} />
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#43E97B' }}>
              Secure Connection
            </span>
          </div>
        </div>
      </div>

      {/* Security Banner */}
      <div className="px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 flex items-center gap-3"
          style={{
            background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(74, 144, 226, 0.05) 100%)',
            border: '1px solid rgba(74, 144, 226, 0.2)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(74, 144, 226, 0.2)' }}
          >
            <Fingerprint size={24} style={{ color: '#4A90E2' }} />
          </div>
          <div className="flex-1">
            <div className="text-white" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.2' }}>
              ბიომეტრიული დაცვა აქტიურია
            </div>
            <div className="text-white/60 mt-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
              Biometric Lock Active
            </div>
          </div>
          <Shield size={20} style={{ color: '#4A90E2' }} />
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '700' }}>
            კატეგორიები / Categories
          </h2>
          <span className="text-white/50" style={{ fontSize: '13px' }}>
            {categories.reduce((sum, cat) => sum + cat.count, 0)} დოკუმენტი
          </span>
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full rounded-2xl p-5 border-0 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
              style={{
                backgroundColor: '#152238',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {/* Icon */}
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: category.iconBg }}
                >
                  <div style={{ color: category.iconColor }}>
                    {category.icon}
                  </div>
                </div>
                
                {/* Expiring Notification Dot */}
                {category.hasExpiring && (
                  <div 
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#DC143C',
                      boxShadow: '0 0 8px rgba(220, 20, 60, 0.6)',
                      border: '2px solid #152238'
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <div className="text-white" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.2' }}>
                  {category.titleGeo}
                </div>
                <div className="text-white/60 mt-1" style={{ fontSize: '13px', lineHeight: '1.3' }}>
                  {category.titleEng}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div 
                    className="px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-white/80" style={{ fontSize: '11px', fontWeight: '600' }}>
                      {category.count} დოკ.
                    </span>
                  </div>
                  {category.hasExpiring && (
                    <div className="flex items-center gap-1">
                      <AlertCircle size={12} style={{ color: '#DC143C' }} />
                      <span style={{ fontSize: '11px', color: '#DC143C', fontWeight: '600' }}>
                        ვადა იწურება
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Chevron */}
              <ChevronRight size={20} className="text-white/40" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pt-6">
        <h3 className="text-white m-0 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
          სწრაფი მოქმედებები / Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(220, 20, 60, 0.15)' }}
            >
              <FileText size={18} style={{ color: '#DC143C' }} />
            </div>
            <span className="text-white text-center" style={{ fontSize: '12px', fontWeight: '600' }}>
              მოთხოვნა
            </span>
          </button>

          <button
            className="p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(74, 144, 226, 0.15)' }}
            >
              <Shield size={18} style={{ color: '#4A90E2' }} />
            </div>
            <span className="text-white text-center" style={{ fontSize: '12px', fontWeight: '600' }}>
              გაზიარება
            </span>
          </button>
        </div>
      </div>

      {/* Storage Info */}
      <div className="px-4 pt-6">
        <div 
          className="rounded-2xl p-4"
          style={{
            backgroundColor: '#152238',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/70" style={{ fontSize: '13px' }}>
              შენახვის სივრცე / Storage
            </span>
            <span className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
              2.4 GB / 5 GB
            </span>
          </div>
          <div 
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div 
              className="h-full rounded-full"
              style={{ 
                width: '48%',
                background: 'linear-gradient(90deg, #4A90E2 0%, #667eea 100%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        onClick={() => setShowUploadMenu(!showUploadMenu)}
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full flex items-center justify-center border-0 cursor-pointer shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
          boxShadow: '0 8px 24px rgba(220, 20, 60, 0.5)',
          transform: showUploadMenu ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
      >
        <Plus size={28} className="text-white" />
      </motion.button>

      {/* Upload Menu Overlay */}
      {showUploadMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-30"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setShowUploadMenu(false)}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl p-6"
            style={{
              backgroundColor: '#152238',
              maxWidth: '480px',
              margin: '0 auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            
            <h3 className="text-white text-center mb-6" style={{ fontSize: '18px', fontWeight: '700' }}>
              დოკუმენტის ატვირთვა
            </h3>

            <div className="space-y-3">
              <button
                className="w-full flex items-center gap-4 p-4 rounded-xl border-0 cursor-pointer transition-all hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(74, 144, 226, 0.2)' }}
                >
                  <FileText size={20} style={{ color: '#4A90E2' }} />
                </div>
                <div className="text-left">
                  <div className="text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
                    სკანირება / Scan
                  </div>
                  <div className="text-white/60" style={{ fontSize: '12px' }}>
                    გადაიღე დოკუმენტი
                  </div>
                </div>
              </button>

              <button
                className="w-full flex items-center gap-4 p-4 rounded-xl border-0 cursor-pointer transition-all hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(67, 233, 123, 0.2)' }}
                >
                  <FileText size={20} style={{ color: '#43E97B' }} />
                </div>
                <div className="text-left">
                  <div className="text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
                    ფაილი / Upload File
                  </div>
                  <div className="text-white/60" style={{ fontSize: '12px' }}>
                    აირჩიე ფაილი
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
