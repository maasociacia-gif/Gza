import React, { useState } from 'react';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Search, SlidersHorizontal, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

interface JobsScreenProps {
  onBack: () => void;
}

interface Job {
  id: string;
  title: string;
  titleGeo: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  typeGeo: string;
  posted: string;
  saved: boolean;
}

export function JobsScreen({ onBack }: JobsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Software Engineer',
      titleGeo: 'პროგრამული ინჟინერი',
      company: 'TechCorp GmbH',
      location: 'Berlin',
      salary: '€55k - €75k',
      type: 'Full-time',
      typeGeo: 'სრული განაკვეთი',
      posted: '2 days ago',
      saved: false
    },
    {
      id: '2',
      title: 'Warehouse Worker',
      titleGeo: 'საწყობის მუშაკი',
      company: 'Logistics Pro',
      location: 'Munich',
      salary: '€35k - €42k',
      type: 'Full-time',
      typeGeo: 'სრული განაკვეთი',
      posted: '5 days ago',
      saved: true
    },
    {
      id: '3',
      title: 'Restaurant Server',
      titleGeo: 'მიმტანი',
      company: 'Bella Italia',
      location: 'Frankfurt',
      salary: '€28k - €32k',
      type: 'Part-time',
      typeGeo: 'ნახევარი განაკვეთი',
      posted: '1 week ago',
      saved: false
    },
    {
      id: '4',
      title: 'Healthcare Assistant',
      titleGeo: 'მოვლის ასისტენტი',
      company: 'CareFirst Clinic',
      location: 'Hamburg',
      salary: '€38k - €45k',
      type: 'Full-time',
      typeGeo: 'სრული განაკვეთი',
      posted: '3 days ago',
      saved: false
    },
    {
      id: '5',
      title: 'Delivery Driver',
      titleGeo: 'მიმტანი მძღოლი',
      company: 'QuickDeliver',
      location: 'Stuttgart',
      salary: '€32k - €38k',
      type: 'Full-time',
      typeGeo: 'სრული განაკვეთი',
      posted: '4 days ago',
      saved: false
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/5"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft className="text-white" size={22} strokeWidth={1.5} />
          </button>
          
          <h1 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '600' }}>
            დასაქმება / Jobs
          </h1>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/5"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <SlidersHorizontal className="text-white" size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search 
            className="absolute left-4 top-1/2 text-white/40" 
            size={18} 
            strokeWidth={1.5}
            style={{ transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="ძებნა... / Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 outline-none text-white placeholder-white/40"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-4 py-4">
        <div 
          className="rounded-2xl p-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                142
              </div>
              <div className="text-white/50 mt-1" style={{ fontSize: '12px' }}>
                ხელმისაწვდომი ვაკანსია
              </div>
            </div>
            <div className="text-right">
              <div className="text-white" style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1' }}>
                8
              </div>
              <div className="text-white/50 mt-1" style={{ fontSize: '12px' }}>
                შენახული
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="px-4 space-y-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
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
                <p className="text-white/60 m-0 mt-1" style={{ fontSize: '13px' }}>
                  {job.title}
                </p>
              </div>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/5 border-0 cursor-pointer"
                style={{ background: 'none' }}
              >
                <Bookmark 
                  size={18} 
                  strokeWidth={1.5}
                  className={job.saved ? 'text-white fill-white' : 'text-white/40'}
                />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-3">
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
              <div className="flex items-center gap-3">
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
                  {job.posted}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
