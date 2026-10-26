import React from 'react';
import { Bell, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function EmergencyActionCard() {
  return (
    <motion.div 
      className="fixed bottom-20 left-0 right-0 px-4 mx-auto max-w-[480px] lg:max-w-[1200px] z-10"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div 
        className="rounded-3xl p-5 shadow-2xl"
        style={{
          backgroundColor: '#DC143C',
          boxShadow: '0 8px 32px rgba(220, 20, 60, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Bell className="text-white" size={28} />
          </motion.div>
          
          <div>
            <h3 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.2' }}>
              სასწრაფო დახმარება!
            </h3>
            <p className="text-white/90 m-0 mt-1" style={{ fontSize: '13px', fontWeight: '400' }}>
              Emergency Help!
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/95 mb-4 m-0" style={{ fontSize: '14px', lineHeight: '1.4' }}>
          გჭირდებათ დახმარება? დააჭირეთ ქვემოთ.
          <br />
          <span style={{ fontSize: '12px', opacity: 0.9 }}>Need help? Press below.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer transition-all hover:bg-white/10 active:scale-95"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'white',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            <MapPin size={18} />
            <span>ჩემი მდებარეობა</span>
          </button>

          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-0 cursor-pointer transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: 'white',
              color: '#DC143C',
              fontSize: '14px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Phone size={18} />
            <span>სასწრაფო ზარი</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
