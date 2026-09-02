import React, { useState, useEffect } from 'react';
import { ArrowLeft, Languages, Shield, Scale, Calendar, Check, Loader2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIScannerScreenProps {
  onBack: () => void;
}

export function AIScannerScreen({ onBack }: AIScannerScreenProps) {
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Simulate scanning animation
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const handleSaveToVault = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Nodes */}
              <circle cx="25" cy="25" r="2" fill="#00D9FF" opacity="0.6" />
              <circle cx="75" cy="25" r="2" fill="#00D9FF" opacity="0.6" />
              <circle cx="25" cy="75" r="2" fill="#00D9FF" opacity="0.6" />
              <circle cx="75" cy="75" r="2" fill="#00D9FF" opacity="0.6" />
              <circle cx="50" cy="50" r="2.5" fill="#00D9FF" opacity="0.8" />
              {/* Connections */}
              <line x1="25" y1="25" x2="50" y2="50" stroke="#00D9FF" strokeWidth="0.5" opacity="0.3" />
              <line x1="75" y1="25" x2="50" y2="50" stroke="#00D9FF" strokeWidth="0.5" opacity="0.3" />
              <line x1="25" y1="75" x2="50" y2="50" stroke="#00D9FF" strokeWidth="0.5" opacity="0.3" />
              <line x1="75" y1="75" x2="50" y2="50" stroke="#00D9FF" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-network)" />
        </svg>
      </div>

      {/* AI Wave Pattern at Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #00D9FF 100%)',
          clipPath: 'polygon(0 50%, 10% 45%, 20% 50%, 30% 45%, 40% 50%, 50% 45%, 60% 50%, 70% 45%, 80% 50%, 90% 45%, 100% 50%, 100% 100%, 0 100%)'
        }}
      />

      {/* Header */}
      <div 
        className="px-5 py-4 relative z-30"
        style={{ 
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl flex items-center justify-center border-0 cursor-pointer transition-all hover:bg-white/5"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <ArrowLeft size={20} strokeWidth={1.5} className="text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white m-0" style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.2' }}>
              AI სკანერი
            </h1>
            <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '13px' }}>
              AI Document Scanner
            </p>
          </div>
          {/* AI Badge */}
          <div
            className="px-3 py-1.5 rounded-full flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 217, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 217, 255, 0.4)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
            }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00D9FF' }} />
            <span className="text-white" style={{ fontSize: '11px', fontWeight: '600', color: '#00D9FF' }}>
              AI Active
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 relative z-10">
        
        {/* Camera Viewfinder */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              aspectRatio: '4/3',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '2px solid rgba(0, 217, 255, 0.3)',
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.2), inset 0 0 60px rgba(0, 217, 255, 0.05)'
            }}
          >
            {/* Corner Indicators */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
              <div
                key={corner}
                className="absolute w-8 h-8"
                style={{
                  ...(corner.includes('top') ? { top: '12px' } : { bottom: '12px' }),
                  ...(corner.includes('left') ? { left: '12px' } : { right: '12px' }),
                  borderTop: corner.includes('top') ? '3px solid #00D9FF' : 'none',
                  borderBottom: corner.includes('bottom') ? '3px solid #00D9FF' : 'none',
                  borderLeft: corner.includes('left') ? '3px solid #00D9FF' : 'none',
                  borderRight: corner.includes('right') ? '3px solid #00D9FF' : 'none',
                  ...(corner.includes('top') && corner.includes('left') && { borderTopLeftRadius: '12px' }),
                  ...(corner.includes('top') && corner.includes('right') && { borderTopRightRadius: '12px' }),
                  ...(corner.includes('bottom') && corner.includes('left') && { borderBottomLeftRadius: '12px' }),
                  ...(corner.includes('bottom') && corner.includes('right') && { borderBottomRightRadius: '12px' }),
                  boxShadow: '0 0 15px rgba(0, 217, 255, 0.6)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              />
            ))}

            {/* Document Preview */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Document Content Mockup */}
                <div className="w-full h-full p-6">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-800 rounded w-3/4" style={{ opacity: 0.8 }} />
                    <div className="h-3 bg-gray-800 rounded w-full" style={{ opacity: 0.6 }} />
                    <div className="h-3 bg-gray-800 rounded w-5/6" style={{ opacity: 0.6 }} />
                    <div className="h-2 mt-4" />
                    <div className="h-2.5 bg-gray-700 rounded w-2/3" style={{ opacity: 0.5 }} />
                    <div className="h-2.5 bg-gray-700 rounded w-full" style={{ opacity: 0.5 }} />
                    <div className="h-2.5 bg-gray-700 rounded w-4/5" style={{ opacity: 0.5 }} />
                    <div className="h-2.5 bg-gray-700 rounded w-full" style={{ opacity: 0.5 }} />
                    <div className="h-2.5 bg-gray-700 rounded w-3/4" style={{ opacity: 0.5 }} />
                  </div>
                </div>

                {/* Blue Laser Scanning Line */}
                {isScanning && (
                  <motion.div
                    className="absolute left-0 right-0 h-0.5"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, #00D9FF 50%, transparent 100%)',
                      boxShadow: '0 0 20px #00D9FF, 0 0 40px #00D9FF',
                      top: `${scanProgress}%`
                    }}
                    animate={{
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </div>
            </div>

            {/* Scanning Overlay */}
            {isScanning && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, transparent ${scanProgress - 5}%, rgba(0, 217, 255, 0.1) ${scanProgress}%, transparent ${scanProgress + 5}%)`
                }}
              />
            )}
          </div>
        </motion.div>

        {/* AI Results Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-6 mb-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Neon glow */}
          <div 
            className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #00D9FF 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            {/* Status */}
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.3) 0%, rgba(0, 217, 255, 0.15) 100%)',
                  border: '1px solid rgba(0, 217, 255, 0.5)',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
                }}
              >
                {isScanning ? (
                  <Loader2 size={24} strokeWidth={2} className="animate-spin" style={{ color: '#00D9FF' }} />
                ) : (
                  <FileText size={24} strokeWidth={1.5} style={{ color: '#00D9FF' }} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                  {isScanning ? 'დოკუმენტის სკანირება...' : 'დოკუმენტი ამოცნობილია'}
                </h3>
                <p className="text-white/60 m-0 mt-0.5" style={{ fontSize: '12px' }}>
                  {isScanning ? 'Scanning Document...' : 'Document Recognized'}
                </p>
              </div>
              {!isScanning && (
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(67, 233, 123, 0.2)' }}
                >
                  <Check size={18} strokeWidth={2.5} style={{ color: '#43E97B' }} />
                </div>
              )}
            </div>

            {/* Recognition Result */}
            {!isScanning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.3 }}
              >
                <div 
                  className="rounded-2xl p-4 mb-4"
                  style={{
                    background: 'rgba(0, 217, 255, 0.1)',
                    border: '1px solid rgba(0, 217, 255, 0.3)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#00D9FF' }} />
                    <span className="text-white/70" style={{ fontSize: '11px', fontWeight: '600', color: '#00D9FF' }}>
                      AI RECOGNITION
                    </span>
                  </div>
                  <p className="text-white m-0" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.4' }}>
                    გერმანული სამუშაო ხელშეკრულება
                  </p>
                  <p className="text-white/60 m-0 mt-1" style={{ fontSize: '13px' }}>
                    German Work Contract (Arbeitsvertrag)
                  </p>
                </div>

                {/* Summary Section */}
                <div className="mb-4">
                  <h4 className="text-white m-0 mb-3" style={{ fontSize: '14px', fontWeight: '600' }}>
                    ძირითადი პუნქტები / Key Points:
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      { geo: 'პოზიცია: პროგრამული ინჟინერი', eng: 'Position: Software Engineer' },
                      { geo: 'ხელფასი: €4,500/თვე', eng: 'Salary: €4,500/month' },
                      { geo: 'დაწყების თარიღი: 15 მარტი 2026', eng: 'Start Date: March 15, 2026' },
                      { geo: 'ხელშეკრულების ტიპი: განუსაზღვრელი ვადით', eng: 'Contract Type: Permanent' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-2 p-2.5 rounded-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: '#00D9FF', boxShadow: '0 0 8px rgba(0, 217, 255, 0.6)' }}
                        />
                        <div className="flex-1">
                          <p className="text-white m-0" style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>
                            {item.geo}
                          </p>
                          <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                            {item.eng}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons Grid */}
        <AnimatePresence>
          {!isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Translate Button */}
              <button
                className="rounded-2xl p-5 border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(102, 126, 234, 0.08) 100%)',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(102, 126, 234, 0.3) 0%, transparent 70%)'
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(102, 126, 234, 0.15) 100%)',
                      border: '1px solid rgba(102, 126, 234, 0.4)'
                    }}
                  >
                    <Languages size={24} strokeWidth={1.5} style={{ color: '#667eea' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                      თარგმნა
                    </p>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                      Translate
                    </p>
                  </div>
                </div>
              </button>

              {/* Save to Vault Button */}
              <button
                onClick={handleSaveToVault}
                className="rounded-2xl p-5 border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.15) 0%, rgba(67, 233, 123, 0.08) 100%)',
                  border: '1px solid rgba(67, 233, 123, 0.3)',
                  boxShadow: '0 8px 24px rgba(67, 233, 123, 0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(67, 233, 123, 0.3) 0%, transparent 70%)'
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.3) 0%, rgba(67, 233, 123, 0.15) 100%)',
                      border: '1px solid rgba(67, 233, 123, 0.4)'
                    }}
                  >
                    <Shield size={24} strokeWidth={1.5} style={{ color: '#43E97B' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                      სეიფში შენახვა
                    </p>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                      Save to Vault
                    </p>
                  </div>
                </div>
              </button>

              {/* Send to Lawyer Button */}
              <button
                className="rounded-2xl p-5 border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.15) 0%, rgba(156, 39, 176, 0.08) 100%)',
                  border: '1px solid rgba(156, 39, 176, 0.3)',
                  boxShadow: '0 8px 24px rgba(156, 39, 176, 0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(156, 39, 176, 0.3) 0%, transparent 70%)'
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.3) 0%, rgba(156, 39, 176, 0.15) 100%)',
                      border: '1px solid rgba(156, 39, 176, 0.4)'
                    }}
                  >
                    <Scale size={24} strokeWidth={1.5} style={{ color: '#9C27B0' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                      იურისტთან გაგზავნა
                    </p>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                      Send to Lawyer
                    </p>
                  </div>
                </div>
              </button>

              {/* Add to Calendar Button */}
              <button
                className="rounded-2xl p-5 border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(255, 167, 38, 0.08) 100%)',
                  border: '1px solid rgba(255, 167, 38, 0.3)',
                  boxShadow: '0 8px 24px rgba(255, 167, 38, 0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 167, 38, 0.3) 0%, transparent 70%)'
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 167, 38, 0.3) 0%, rgba(255, 167, 38, 0.15) 100%)',
                      border: '1px solid rgba(255, 167, 38, 0.4)'
                    }}
                  >
                    <Calendar size={24} strokeWidth={1.5} style={{ color: '#FFA726' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                      კალენდარში დამატება
                    </p>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                      Add to Calendar
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-5 right-5 z-50"
          >
            <div
              className="rounded-2xl p-4 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.95) 0%, rgba(56, 249, 215, 0.95) 100%)',
                boxShadow: '0 12px 40px rgba(67, 233, 123, 0.5)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <Shield size={20} strokeWidth={2} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                  დოკუმენტი დაშიფრულია
                </p>
                <p className="text-white/90 m-0 mt-0.5" style={{ fontSize: '12px' }}>
                  Document encrypted and saved to your Vault
                </p>
              </div>
              <Check size={20} strokeWidth={2.5} className="text-white flex-shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
