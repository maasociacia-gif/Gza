import React from 'react';
import { Cross, Scale, Wrench, Camera, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface MapViewProps {
  selectedFilter: string;
}

interface EmergencyPin {
  id: string;
  type: string;
  icon: React.ReactNode;
  position: { top: string; left: string };
  label: string;
}

const emergencyPins: EmergencyPin[] = [
  {
    id: '1',
    type: 'medical',
    icon: <Cross size={16} />,
    position: { top: '25%', left: '35%' },
    label: 'Medical Center'
  },
  {
    id: '2',
    type: 'legal',
    icon: <Scale size={16} />,
    position: { top: '45%', left: '60%' },
    label: 'Legal Aid'
  },
  {
    id: '3',
    type: 'technical',
    icon: <Wrench size={16} />,
    position: { top: '60%', left: '30%' },
    label: 'Tech Support'
  },
  {
    id: '4',
    type: 'lost',
    icon: <Camera size={16} />,
    position: { top: '35%', left: '70%' },
    label: 'Lost & Found'
  },
  {
    id: '5',
    type: 'medical',
    icon: <Cross size={16} />,
    position: { top: '70%', left: '55%' },
    label: 'Emergency Clinic'
  },
  {
    id: '6',
    type: 'legal',
    icon: <Scale size={16} />,
    position: { top: '50%', left: '25%' },
    label: 'Immigration Office'
  },
  {
    id: '7',
    type: 'technical',
    icon: <Wrench size={16} />,
    position: { top: '30%', left: '50%' },
    label: 'Service Center'
  },
  {
    id: '8',
    type: 'all',
    icon: <AlertCircle size={16} />,
    position: { top: '55%', left: '45%' },
    label: 'Help Center'
  }
];

export function MapView({ selectedFilter }: MapViewProps) {
  const filteredPins = selectedFilter === 'all' 
    ? emergencyPins 
    : emergencyPins.filter(pin => pin.type === selectedFilter || pin.type === 'all');

  return (
    <div 
      className="relative w-full"
      style={{ 
        height: '400px',
        backgroundColor: '#1a2332',
        backgroundImage: `
          linear-gradient(rgba(220, 20, 60, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(220, 20, 60, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Stylized Map Streets */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        {/* Horizontal streets */}
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        
        {/* Vertical streets */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <line x1="45%" y1="0" x2="45%" y2="100%" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
        <line x1="65%" y1="0" x2="65%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      </svg>

      {/* City blocks */}
      <div className="absolute" style={{ top: '10%', left: '10%', width: '80px', height: '60px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
      <div className="absolute" style={{ top: '15%', left: '55%', width: '100px', height: '80px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
      <div className="absolute" style={{ top: '40%', left: '15%', width: '90px', height: '70px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
      <div className="absolute" style={{ top: '55%', left: '60%', width: '110px', height: '90px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
      <div className="absolute" style={{ top: '75%', left: '25%', width: '95px', height: '65px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />

      {/* Emergency Pins */}
      {filteredPins.map((pin) => (
        <motion.div
          key={pin.id}
          className="absolute"
          style={{
            top: pin.position.top,
            left: pin.position.left,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#DC143C',
              filter: 'blur(12px)',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pin */}
          <motion.button
            className="relative w-12 h-12 rounded-full flex items-center justify-center border-0 cursor-pointer shadow-lg"
            style={{
              backgroundColor: '#DC143C',
              boxShadow: '0 4px 12px rgba(220, 20, 60, 0.6), 0 0 20px rgba(220, 20, 60, 0.4)'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-white">
              {pin.icon}
            </div>
          </motion.button>

          {/* Tooltip on hover */}
          <div 
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              fontSize: '11px',
              fontWeight: '500'
            }}
          >
            {pin.label}
          </div>
        </motion.div>
      ))}

      {/* Location indicator (user position) */}
      <motion.div
        className="absolute"
        style={{
          top: '50%',
          left: '45%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#4A90E2', border: '3px solid white', boxShadow: '0 2px 8px rgba(74, 144, 226, 0.6)' }} />
      </motion.div>
    </div>
  );
}
