import React from 'react';
import { Briefcase, Scan, MapPin, Users, Search, TrendingUp, Clock, ChevronRight, Scale, DollarSign, Package, Zap, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeContentProps {
  onJobsClick?: () => void;
  onScanClick?: () => void;
  onMapClick?: () => void;
  onCommunityClick?: () => void;
  onCareClick?: () => void;
  onLegalClick?: () => void;
}

// Custom Georgia Map with House Icon Component
function GeorgiaMapIcon({ size = 40, color = '#FFA726' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Key Icon - Simple minimal design */}
      <g transform="translate(15, 20)">
        {/* Key head (circle) */}
        <circle
          cx="8"
          cy="10"
          r="6"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Inner circle detail */}
        <circle
          cx="8"
          cy="10"
          r="2.5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Key shaft */}
        <line
          x1="14"
          y1="10"
          x2="28"
          y2="10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Key teeth */}
        <line
          x1="22"
          y1="10"
          x2="22"
          y2="14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="10"
          x2="26"
          y2="13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function HomeContent({ onJobsClick, onScanClick, onMapClick, onCommunityClick, onCareClick, onLegalClick }: HomeContentProps) {
  // Check if there's an upcoming birthday (mock data)
  const hasUpcomingBirthday = true;

  const features = [
    {
      id: 'jobs',
      titleGeo: 'დასაქმება',
      titleEng: 'Jobs',
      icon: <Briefcase size={26} strokeWidth={1.5} />,
      onClick: onJobsClick,
      isMain: true,
      color: '#DC143C'
    },
    {
      id: 'legal',
      titleGeo: 'საკონსულო და იურიდიული დახმარება',
      titleEng: 'Consular & Legal Support',
      subtextGeo: 'პასპორტები, იურიდიული დახმარება, სახელმწიფო მხარდაჭერა',
      subtextEng: 'Passports, Legal Aid, and Official State Support',
      icon: <ShieldCheck size={26} strokeWidth={1.5} />,
      onClick: onLegalClick,
      isMain: false,
      isPremium: true,
      color: '#B8860B', // Dark goldenrod for official look
      glowColor: 'rgba(184, 134, 11, 0.4)'
    },
    {
      id: 'scan',
      titleGeo: 'AI სკანი',
      titleEng: 'AI Scan',
      icon: <Scan size={26} strokeWidth={1.5} />,
      onClick: onScanClick,
      isMain: false,
      color: '#667eea'
    },
    {
      id: 'care',
      titleGeo: 'ზრუნვა სამშობლოში',
      titleEng: 'Care for Home',
      icon: <GeorgiaMapIcon size={40} color="#FFA726" />,
      onClick: onCareClick,
      isMain: false,
      color: '#FFA726',
      hasNotification: hasUpcomingBirthday
    },
    {
      id: 'map',
      titleGeo: 'რუკა',
      titleEng: 'Map',
      icon: <MapPin size={26} strokeWidth={1.5} />,
      onClick: onMapClick,
      isMain: false,
      color: '#43E97B'
    },
    {
      id: 'community',
      titleGeo: 'თემი',
      titleEng: 'Community',
      icon: <Users size={26} strokeWidth={1.5} />,
      onClick: onCommunityClick,
      isMain: false,
      color: '#66D9EF'
    }
  ];

  const featuredJobs = [
    {
      id: '1',
      title: 'Software Engineer',
      titleGeo: 'პროგრამული ინჟინერი',
      company: 'TechCorp GmbH',
      location: 'Berlin',
      salary: '€55k - €75k',
      time: '2d ago'
    },
    {
      id: '2',
      title: 'Healthcare Assistant',
      titleGeo: 'მოვლის ასისტენტი',
      company: 'CareFirst Clinic',
      location: 'Hamburg',
      salary: '€38k - €45k',
      time: '3d ago'
    },
    {
      id: '3',
      title: 'Warehouse Worker',
      titleGeo: 'საწყობის მუშაკი',
      company: 'Logistics Pro',
      location: 'Munich',
      salary: '€35k - €42k',
      time: '5d ago'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'document',
      title: 'Residence Permit Renewed',
      titleGeo: 'საცხოვრებელი ნებართვა განახლდა',
      time: '1 hour ago'
    },
    {
      id: '2',
      type: 'job',
      title: 'New Job Matches',
      titleGeo: '3 ახალი ვაკანსია',
      time: '3 hours ago'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="px-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-4"
        >
          <div className="relative">
            <Search 
              className="absolute left-4 top-1/2 text-white/40" 
              size={18} 
              strokeWidth={1.5}
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
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)'
              }}
            />
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="text-white m-0" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1.2' }}>
            გამარჯობა, გიორგი 👋
          </h2>
          <p className="text-white/50 m-0 mt-1" style={{ fontSize: '13px', lineHeight: '1.4', fontWeight: '400' }}>
            Welcome back to Gza
          </p>
        </motion.div>

        {/* 6-Tile Grid Layout */}
        <div className="mb-8">
          {/* Top Row - Jobs & Consular/Legal Support (Premium) */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {features.slice(0, 2).map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={feature.onClick}
                className="rounded-3xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{
                  background: feature.isMain 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                    : feature.isPremium
                    ? 'linear-gradient(135deg, rgba(184, 134, 11, 0.08) 0%, rgba(184, 134, 11, 0.02) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: feature.isMain 
                    ? '1px solid rgba(255, 255, 255, 0.15)'
                    : feature.isPremium
                    ? '2px solid rgba(184, 134, 11, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '24px 16px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: feature.isMain 
                    ? '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : feature.isPremium
                    ? `0 4px 24px ${feature.glowColor}, inset 0 1px 0 rgba(184, 134, 11, 0.2)`
                    : '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Glow effect for main and premium buttons */}
                {feature.isMain && (
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(220, 20, 60, 0.15) 0%, transparent 70%)'
                    }}
                  />
                )}
                {feature.isPremium && (
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(184, 134, 11, 0.2) 0%, transparent 70%)'
                    }}
                  />
                )}

                <div 
                  className="rounded-2xl flex items-center justify-center relative z-10"
                  style={{ 
                    width: feature.isMain || feature.isPremium ? '64px' : '56px',
                    height: feature.isMain || feature.isPremium ? '64px' : '56px',
                    backgroundColor: feature.isMain 
                      ? 'rgba(220, 20, 60, 0.15)' 
                      : feature.isPremium
                      ? 'rgba(184, 134, 11, 0.2)'
                      : `${feature.color}15`,
                    border: feature.isMain 
                      ? '1px solid rgba(220, 20, 60, 0.3)'
                      : feature.isPremium
                      ? '1px solid rgba(184, 134, 11, 0.5)'
                      : `1px solid ${feature.color}30`
                  }}
                >
                  <div style={{ color: feature.isMain ? 'white' : feature.color }}>
                    {feature.icon}
                  </div>
                </div>
                <div className="text-center relative z-10">
                  <div className="text-white" style={{ fontSize: feature.isPremium ? '13px' : '15px', fontWeight: '600', lineHeight: '1.2' }}>
                    {feature.titleGeo}
                  </div>
                  <div className="text-white/50 mt-1" style={{ fontSize: feature.isPremium ? '11px' : '12px', fontWeight: '400' }}>
                    {feature.titleEng}
                  </div>
                  {feature.isPremium && feature.subtextEng && (
                    <div className="text-white/30 mt-1.5" style={{ fontSize: '9px', fontWeight: '400', lineHeight: '1.2' }}>
                      {feature.subtextEng}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Second Row - AI Scan & Care for Home */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* AI Scan Tile */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onScanClick}
              className="rounded-3xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ 
                  width: '56px',
                  height: '56px',
                  backgroundColor: `${features[2].color}15`,
                  border: `1px solid ${features[2].color}30`
                }}
              >
                <div style={{ color: features[2].color }}>
                  {features[2].icon}
                </div>
              </div>
              <div className="text-center">
                <div className="text-white" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.2' }}>
                  {features[2].titleGeo}
                </div>
                <div className="text-white/50 mt-1" style={{ fontSize: '12px', fontWeight: '400' }}>
                  {features[2].titleEng}
                </div>
              </div>
            </motion.button>

            {/* Care for Home - Clean Simple Tile */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={onCareClick}
              className="rounded-3xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden p-6"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Notification Badge */}
              {hasUpcomingBirthday && (
                <div 
                  className="absolute top-3 right-3 w-3 h-3 rounded-full z-20"
                  style={{
                    backgroundColor: '#DC143C',
                    boxShadow: '0 0 12px rgba(220, 20, 60, 0.6), 0 0 0 3px rgba(220, 20, 60, 0.2)'
                  }}
                />
              )}

              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ 
                  width: '56px',
                  height: '56px',
                  backgroundColor: `${features[3].color}15`,
                  border: `1px solid ${features[3].color}30`
                }}
              >
                {features[3].icon}
              </div>
              <div className="text-center">
                <div className="text-white" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.2' }}>
                  {features[3].titleGeo}
                </div>
                <div className="text-white/50 mt-1" style={{ fontSize: '12px', fontWeight: '400' }}>
                  {features[3].titleEng}
                </div>
              </div>
            </motion.button>
          </div>

          {/* Bottom Row - Map & Community */}
          <div className="grid grid-cols-2 gap-3">
            {features.slice(4, 6).map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index + 4) * 0.1 }}
                onClick={feature.onClick}
                className="rounded-3xl border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className="rounded-2xl flex items-center justify-center"
                  style={{ 
                    width: '56px',
                    height: '56px',
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  <div style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.2' }}>
                    {feature.titleGeo}
                  </div>
                  <div className="text-white/50 mt-1" style={{ fontSize: '12px', fontWeight: '400' }}>
                    {feature.titleEng}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-3xl p-5 mb-6"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                142
              </div>
              <div className="text-white/50 mt-1.5" style={{ fontSize: '11px', fontWeight: '400' }}>
                ვაკანსია
              </div>
            </div>
            <div className="text-center" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                23
              </div>
              <div className="text-white/50 mt-1.5" style={{ fontSize: '11px', fontWeight: '400' }}>
                დოკუმენტი
              </div>
            </div>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                5
              </div>
              <div className="text-white/50 mt-1.5" style={{ fontSize: '11px', fontWeight: '400' }}>
                შეტყობინება
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Jobs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} strokeWidth={1.5} className="text-white/60" />
              <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                რჩეული ვაკანსიები / Featured Jobs
              </h3>
            </div>
            <button 
              onClick={onJobsClick}
              className="flex items-center gap-1 border-0 cursor-pointer transition-colors hover:opacity-80"
              style={{ background: 'none' }}
            >
              <span className="text-white/60" style={{ fontSize: '13px', fontWeight: '500' }}>
                ყველა
              </span>
              <ChevronRight size={16} strokeWidth={1.5} className="text-white/60" />
            </button>
          </div>

          <div className="space-y-3">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                onClick={onJobsClick}
                className="rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-white m-0" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.3' }}>
                      {job.titleGeo}
                    </h4>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '12px' }}>
                      {job.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} strokeWidth={1.5} className="text-white/30" />
                    <span className="text-white/40" style={{ fontSize: '11px' }}>
                      {job.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white/60" style={{ fontSize: '12px' }}>
                      {job.company}
                    </span>
                    <span className="text-white/30" style={{ fontSize: '12px' }}>•</span>
                    <span className="text-white/60" style={{ fontSize: '12px' }}>
                      {job.location}
                    </span>
                  </div>
                  <span className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
                    {job.salary}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-6"
        >
          <h3 className="text-white m-0 mb-4" style={{ fontSize: '16px', fontWeight: '600' }}>
            ბოლო აქტივობა / Recent Activity
          </h3>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>
                      {activity.titleGeo}
                    </h4>
                    <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '12px' }}>
                      {activity.title}
                    </p>
                  </div>
                  <span className="text-white/40" style={{ fontSize: '11px' }}>
                    {activity.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}