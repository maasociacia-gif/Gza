import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  MapPin, 
  CreditCard, 
  LayoutDashboard, 
  MessageCircle, 
  UserCircle, 
  Shield, 
  Briefcase, 
  Layers,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Scan,
  Settings,
  Lock,
  CheckCircle2,
  Zap,
  Search,
  Heart,
  List,
  Store
} from 'lucide-react';

interface AllScreensOverviewProps {
  onNavigate: (screen: string) => void;
}

export function AllScreensOverview({ onNavigate }: AllScreensOverviewProps) {
  const screens = [
    {
      id: 'home',
      titleGeo: 'მთავარი გვერდი',
      titleEng: 'Home Screen',
      description: 'Main dashboard with search, quick actions, featured jobs, and navigation',
      icon: <Home size={32} strokeWidth={1.5} />,
      color: '#DC143C',
      features: ['Search Bar', '4 Service Tiles', 'Featured Jobs', 'Stats', 'Bottom Nav']
    },
    {
      id: 'userprofile',
      titleGeo: 'პროფილის ნახვა',
      titleEng: 'User Profile View',
      description: 'Detailed user profile with Georgian typography and trust scores',
      icon: <UserCircle size={32} strokeWidth={1.5} />,
      color: '#667eea',
      features: ['User Info', 'Trust Score', 'Georgian Text', 'Action Buttons']
    },
    {
      id: 'jobs',
      titleGeo: 'დასაქმება',
      titleEng: 'Jobs Screen',
      description: 'Job listings with filters (Minijob, Full-time) and search',
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      color: '#43E97B',
      features: ['Job Filters', 'Search', 'Bookmark', 'Salary Info']
    },
    {
      id: 'vault',
      titleGeo: 'ჩემი სეიფი',
      titleEng: 'My Vault',
      description: 'Secure document storage with biometric protection',
      icon: <Shield size={32} strokeWidth={1.5} />,
      color: '#FFA726',
      features: ['Document Storage', 'Biometric Lock', 'Categories', 'Upload']
    },
    {
      id: 'chat',
      titleGeo: 'ჩეთი',
      titleEng: 'Chat Screen',
      description: 'Personal chat with real-time translation functionality',
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      color: '#66D9EF',
      features: ['Real-time Chat', 'Translation', 'Message History', 'Media']
    },
    {
      id: 'services',
      titleGeo: 'გადაუდებელი რუკა',
      titleEng: 'Emergency Map',
      description: 'Interactive map showing emergency services and locations',
      icon: <MapPin size={32} strokeWidth={1.5} />,
      color: '#EF5350',
      features: ['Interactive Map', 'Emergency Services', 'Location Search', 'Directions']
    },
    {
      id: 'ai',
      titleGeo: 'AI სკანერი',
      titleEng: 'AI Document Scanner',
      description: 'AI-powered document scanner with recognition and analysis',
      icon: <Scan size={32} strokeWidth={1.5} />,
      color: '#00D9FF',
      features: ['Document Scanning', 'AI Recognition', 'Translation', 'Save to Vault']
    },
    {
      id: 'subscription',
      titleGeo: 'გამოწერა',
      titleEng: 'Subscription Page',
      description: 'Premium subscription selection with three tiers',
      icon: <CreditCard size={32} strokeWidth={1.5} />,
      color: '#9C27B0',
      features: ['Standard Plan', 'Premium Plan', 'Business Plan', 'Features List']
    },
    {
      id: 'profile',
      titleGeo: 'პროფილის პარამეტრები',
      titleEng: 'Profile Settings',
      description: 'User profile settings and preferences',
      icon: <User size={32} strokeWidth={1.5} />,
      color: '#00BCD4',
      features: ['Edit Profile', 'Preferences', 'Security', 'Privacy']
    },
    {
      id: 'admin',
      titleGeo: 'ადმინ პანელი',
      titleEng: 'Admin Dashboard',
      description: 'Comprehensive desktop admin dashboard for management',
      icon: <LayoutDashboard size={32} strokeWidth={1.5} />,
      color: '#FF6B6B',
      features: ['Analytics', 'User Management', 'Charts', 'Reports']
    },
    {
      id: 'flow',
      titleGeo: 'მომხმარებლის მოგზაურობა',
      titleEng: 'User Flow Canvas',
      description: 'Complete user journey from registration to main app',
      icon: <Layers size={32} strokeWidth={1.5} />,
      color: '#4ECDC4',
      features: ['Welcome', 'Registration', 'Subscription', 'Dashboard', 'Jobs']
    },
    {
      id: 'careforhome',
      titleGeo: 'ზრუნვა სამშობლოში',
      titleEng: 'Care for Home',
      description: 'Family calendar with events and gift reminders for loved ones',
      icon: <Heart size={32} strokeWidth={1.5} />,
      color: '#E8B4B8',
      features: ['Family Calendar', 'Event Management', 'Gift Reminders', 'Georgian Holidays']
    },
    {
      id: 'serviceslist',
      titleGeo: 'სერვისების სია',
      titleEng: 'Services List',
      description: 'Vertical list of essential services with full-width action cards',
      icon: <List size={32} strokeWidth={1.5} />,
      color: '#00D9FF',
      features: ['Money Transfer', 'Send Parcel', 'Ship Car', 'Cargo Shipping', 'Translator', 'Courier', 'Airport Pickup', 'Home Security']
    },
    {
      id: 'business',
      titleGeo: 'ბიზნეს რეჟიმი',
      titleEng: 'Business Mode',
      description: '3-screen business dashboard for vendors: product management, orders, and delivery tracking',
      icon: <Store size={32} strokeWidth={1.5} />,
      color: '#2ECC71',
      features: ['Business Dashboard', 'Product Upload Form', 'Order Details', 'Delivery Tracking', 'Emerald Green Theme']
    }
  ];

  return (
    <div className="min-h-screen overflow-y-auto" style={{ backgroundColor: '#0A1628' }}>
      {/* Header */}
      <div 
        className="sticky top-0 z-30 px-6 py-6"
        style={{ 
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.3) 0%, rgba(220, 20, 60, 0.1) 100%)',
                border: '2px solid rgba(220, 20, 60, 0.5)',
                boxShadow: '0 12px 32px rgba(220, 20, 60, 0.3)'
              }}
            >
              <span className="text-white" style={{ fontSize: '32px', fontWeight: '700' }}>
                G
              </span>
              <div 
                className="absolute bottom-0 right-0 w-5 h-5 rounded-tl-lg"
                style={{ 
                  background: 'linear-gradient(135deg, #DC143C 0%, #DC143C 50%, white 50%, white 100%)'
                }}
              />
            </div>
            <div>
              <h1 className="text-white m-0" style={{ fontSize: '36px', fontWeight: '700', letterSpacing: '-1px' }}>
                Gza - ყველა გვერდი
              </h1>
              <p className="text-white/60 m-0 mt-1" style={{ fontSize: '16px' }}>
                All Screens Overview / სრული მიმოხილვა
              </p>
            </div>
          </div>

          <div 
            className="rounded-2xl p-4"
            style={{
              background: 'rgba(220, 20, 60, 0.1)',
              border: '1px solid rgba(220, 20, 60, 0.2)'
            }}
          >
            <div className="flex items-center gap-3">
              <Sparkles size={24} strokeWidth={1.5} style={{ color: '#DC143C' }} />
              <div>
                <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '500' }}>
                  <strong>14 სრული ეკრანი</strong> შექმნილია Gza აპლიკაციისთვის
                </p>
                <p className="text-white/60 m-0 mt-0.5" style={{ fontSize: '13px' }}>
                  14 complete screens created for the Gza immigrant super-app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screens Grid */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate(screen.id)}
                className="rounded-3xl p-6 cursor-pointer transition-all hover:scale-[1.02] relative overflow-hidden group"
                style={{
                  backgroundColor: '#0D1B2A',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${screen.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${screen.color}30 0%, ${screen.color}10 100%)`,
                    border: `1px solid ${screen.color}40`,
                    boxShadow: `0 8px 24px ${screen.color}20`
                  }}
                >
                  <div style={{ color: screen.color }}>
                    {screen.icon}
                  </div>
                </div>

                {/* Title */}
                <div className="mb-3 relative z-10">
                  <h3 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.3' }}>
                    {screen.titleGeo}
                  </h3>
                  <p className="text-white/60 m-0 mt-1" style={{ fontSize: '14px' }}>
                    {screen.titleEng}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/50 m-0 mb-4 relative z-10" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {screen.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4 relative z-10">
                  {screen.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={14} strokeWidth={2} style={{ color: screen.color }} />
                      <span className="text-white/70" style={{ fontSize: '12px' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {screen.features.length > 3 && (
                    <span className="text-white/40" style={{ fontSize: '11px' }}>
                      +{screen.features.length - 3} more features
                    </span>
                  )}
                </div>

                {/* View Button */}
                <div 
                  className="flex items-center justify-between pt-4 relative z-10"
                  style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                  <span className="text-white/70" style={{ fontSize: '13px', fontWeight: '500' }}>
                    ნახვა / View
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${screen.color}30` }}
                  >
                    <ArrowRight size={16} strokeWidth={2} style={{ color: screen.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12">
            <div 
              className="rounded-3xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h2 className="text-white m-0 mb-6" style={{ fontSize: '24px', fontWeight: '600' }}>
                პროექტის სტატისტიკა / Project Statistics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Screens', labelGeo: 'სულ ეკრანი', value: '14', icon: <Layers size={24} />, color: '#DC143C' },
                  { label: 'User Flows', labelGeo: 'მომხმარებლის ნაკადი', value: '5', icon: <TrendingUp size={24} />, color: '#43E97B' },
                  { label: 'Features', labelGeo: 'ფუნქციები', value: '50+', icon: <Zap size={24} />, color: '#FFA726' },
                  { label: 'Components', labelGeo: 'კომპონენტები', value: '15', icon: <Settings size={24} />, color: '#66D9EF' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: `${stat.color}20`,
                        border: `1px solid ${stat.color}30`
                      }}
                    >
                      <div style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-white" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1' }}>
                      {stat.value}
                    </div>
                    <div className="text-white/70 mt-2" style={{ fontSize: '14px', fontWeight: '500' }}>
                      {stat.labelGeo}
                    </div>
                    <div className="text-white/50 mt-0.5" style={{ fontSize: '12px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Summary */}
          <div className="mt-8">
            <div 
              className="rounded-3xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(220, 20, 60, 0.02) 100%)',
                border: '1px solid rgba(220, 20, 60, 0.2)'
              }}
            >
              <h2 className="text-white m-0 mb-6" style={{ fontSize: '24px', fontWeight: '600' }}>
                ძირითადი ფუნქციები / Key Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: <Search size={20} />, text: 'Job Search & Filters', textGeo: 'სამუშაოს ძებნა' },
                  { icon: <Shield size={20} />, text: 'Secure Document Vault', textGeo: 'დოკუმენტების სეიფი' },
                  { icon: <MessageCircle size={20} />, text: 'Real-time Translation', textGeo: 'მყისიერი თარგმანი' },
                  { icon: <MapPin size={20} />, text: 'Emergency Map', textGeo: 'გადაუდებელი რუკა' },
                  { icon: <Users size={20} />, text: 'Community Hub', textGeo: 'საზოგადოება' },
                  { icon: <Scan size={20} />, text: 'AI Document Scanner', textGeo: 'AI სკანერი' },
                  { icon: <Lock size={20} />, text: 'Biometric Security', textGeo: 'ბიომეტრიკა' },
                  { icon: <CreditCard size={20} />, text: 'Premium Subscription', textGeo: 'პრემიუმ გამოწერა' },
                  { icon: <LayoutDashboard size={20} />, text: 'Admin Dashboard', textGeo: 'ადმინ პანელი' }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(220, 20, 60, 0.15)',
                        border: '1px solid rgba(220, 20, 60, 0.3)'
                      }}
                    >
                      <div style={{ color: '#DC143C' }}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {feature.textGeo}
                      </div>
                      <div className="text-white/50" style={{ fontSize: '11px' }}>
                        {feature.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div className="mt-8 mb-8">
            <div 
              className="rounded-3xl p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-white m-0 mb-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                სწრაფი ნავიგაცია / Quick Navigation
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { key: 'Home', label: 'მთავარი', id: 'home' },
                  { key: 'Jobs', label: 'დასაქმება', id: 'jobs' },
                  { key: 'Vault', label: 'სეიფი', id: 'vault' },
                  { key: 'Chat', label: 'ჩეთი', id: 'chat' },
                  { key: 'Map', label: 'რუკა', id: 'services' }
                ].map((nav, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate(nav.id)}
                    className="py-3 px-4 rounded-xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
                      boxShadow: '0 4px 16px rgba(220, 20, 60, 0.3)'
                    }}
                  >
                    <div className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {nav.label}
                    </div>
                    <div className="text-white/70" style={{ fontSize: '11px' }}>
                      {nav.key}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}